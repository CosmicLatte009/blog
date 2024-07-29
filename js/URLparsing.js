const defaultTitle = "WENIVLOG";
// 현재 url 가져와서 parsing (url 스키마는 readme.md 참고)
const url = new URL(window.location.href);
const origin = url.origin + url.pathname;
const pathParts = url.pathname.split("/").filter((part) => part.length > 0);
// console.log(url)
// console.log(pathParts)

// 로켈 테스트 환경(127.0.0.1)인지 github 배포 상태인지 확인
const isLocal = url.hostname === "127.0.0.1" || url.hostname === "localhost";

// 현재 URL에서 "index.html"을 제거하고자 할 때
if (window.location.pathname.endsWith("/index.html")) {
	// 새 경로를 생성합니다. "index.html"을 제거합니다.
	// 이 때 pathParts에서 마지막 요소를 제거하지 않으면 다른 블로그를 클릭할 때 index.html이 붙어 이동합니다.
	pathParts.pop();
	let newPath = window.location.pathname.replace(/index\.html$/, "");

	// history.replaceState()를 사용하여 URL을 변경합니다. 페이지는 리로드되지 않습니다.
	history.replaceState(null, "", newPath);
}

if (isLocal) {
	// 로컬 테스트 환경

	// 블로그 제목 설정
	const $blogTitle = document.getElementById("blog-title");
	$blogTitle.innerText = siteConfig.blogTitle || defaultTitle;

	// 홈페이지 title을 제목으로 설정
	document.title = siteConfig.blogTitle || defaultTitle;

	// 클릭했을 때 메인페이지로 이동
	$blogTitle.onclick = () => {
		const mainUrl = new URL(
			`http://127.0.0.1${url.port ? ":" + url.port : ""}`
		);
		window.history.pushState({}, "", mainUrl);
		renderBlogList();
	};
} else {
	// github 배포 상태

	// config에서 값이 없을 경우 URL에서 추출
	if (!siteConfig.username || !siteConfig.repositoryName) {
		const urlConfig = extractFromUrl();
		siteConfig.username = siteConfig.username || urlConfig.username;
		siteConfig.repositoryName =
			siteConfig.repositoryName || urlConfig.repositoryName;
	}

	// 블로그 제목 설정
	const $blogTitle = document.getElementById("blog-title");
	$blogTitle.innerText = siteConfig.blogTitle || defaultTitle;

	// 홈페이지 title을 제목으로 설정
	document.title = siteConfig.blogTitle || defaultTitle;

	// 클릭했을 때 메인페이지로 이동
	$blogTitle.onclick = () => {
		const url = new URL(
			`https://${siteConfig.username}.github.io/${siteConfig.repositoryName}/`
		);
		window.history.pushState({}, "", url);
		renderBlogList();
	};
}

let isInitialLoad = true; // 페이지 최초 로드 여부를 확인하는 변수

async function handleUrlState() {
	const url = new URL(window.location.href);

	if (
		!url.searchParams.get("menu") &&
		!url.searchParams.get("post") &&
		!url.searchParams.get("category")
	) {
		console.log("Rendering blog list"); // 디버깅 메시지
		// 블로그 리스트 로딩
		if (isInitialLoad) {
			await initDataBlogMenu();
			renderMenu();
			await initDataBlogList();
			renderBlogCategory();
		}
		renderBlogList();
	} else if (url.searchParams.get("menu")) {
		console.log("Rendering menu:", url.searchParams.get("menu")); // 디버깅 메시지
		// 메뉴 상세 정보 로딩
		document.getElementById("blog-posts").style.display = "none";
		document.getElementById("contents").style.display = "block";
		try {
			const response = await fetch(
				origin + "menu/" + url.searchParams.get("menu")
			);
			const text = await response.text();
			styleMarkdown("menu", text);
		} catch (error) {
			styleMarkdown("menu", "# Error입니다. 파일명을 확인해주세요.");
		}
	} else if (url.searchParams.get("post")) {
		console.log("Rendering post:", postParam); // 디버깅 메시지
		// 블로그 상세 정보 로딩
		document.getElementById("contents").style.display = "block";
		document.getElementById("blog-posts").style.display = "none";
		const postName = decodeURIComponent(
			url.searchParams.get("post")
		).replaceAll("+", " ");
		const postInfo = extractFileInfo(postName);
		try {
			const response = await fetch(
				origin + "blog/" + encodeURIComponent(postName)
			);
			const text = await response.text();
			postInfo.fileType === "md"
				? styleMarkdown("post", text, postInfo)
				: styleJupyter("post", text, postInfo);
		} catch (error) {
			styleMarkdown("post", "# Error입니다. 파일명을 확인해주세요.");
		}
	} else if (url.searchParams.get("category")) {
		console.log("Rendering category:", url.searchParams.get("category")); // 디버깅 메시지
		// 카테고리별 포스트 로딩
		if (isInitialLoad) {
			await initDataBlogMenu();
			renderMenu();
			await initDataBlogList();
			renderBlogCategory();
		}
		search(url.searchParams.get("category"), "category");
	} else {
		alert("잘못된 URL입니다.");
	}

	isInitialLoad = false; // 최초 로드 이후로 설정
}

// 페이지 로드 시 URL 상태 처리
window.addEventListener("DOMContentLoaded", async () => {
	await handleUrlState();
});

// 브라우저의 뒤로가기/앞으로가기 버튼 처리
window.addEventListener("popstate", async (event) => {
	await handleUrlState();
});
