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

async function handleUrlState() {
	// 뒤로 가는 것은 4가지 케이스가 있을 수 있음
	// 1. 뒤로 갔을 때 메인 페이지(/), 뒤로 갔을 때 블로그 리스트 페이지(/?menu=blog.md) (실제로는 동일)
	// 2. 뒤로 갔을 때 menu 페이지(/?menu=about.md)
	// 3. 뒤로 갔을 때 post 페이지(/?post=20210601_[제목]_[카테고리]_[썸네일]_[저자].md)
	// 4. 뒤로 갔을 때 특정 블로그 카테고리 페이지(/?category=카테고리명)

	// 렌더링이 이미 된 것은 category, init, blogList, blogMenu
	const url = new URL(window.location.href);

	if (
		// 메인 페이지 또는 블로그 리스트 페이지 로딩
		!url.searchParams.get("menu") &&
		!url.searchParams.get("post") &&
		!url.searchParams.get("category")
	) {
		// 블로그 리스트 로딩
		await initDataBlogMenu(); // 메뉴 데이터 초기화
		renderMenu(); // 메뉴 렌더링
		await initDataBlogList(); // 블로그 리스트 데이터 초기화
		renderBlogList(); // 블로그 리스트 렌더링
		renderBlogCategory(); // 블로그 카테고리 렌더링
	} else if (url.searchParams.get("menu")) {
		// 메뉴 상세 정보 로딩
		document.getElementById("blog-posts").style.display = "none";
		document.getElementById("contents").style.display = "block";
		try {
			const response = await fetch(
				origin + "menu/" + url.searchParams.get("menu")
			);
			const text = await response.text();
			styleMarkdown("menu", text); // 메뉴 콘텐츠를 마크다운 형식으로 스타일링하여 렌더링
		} catch (error) {
			styleMarkdown("menu", "# Error입니다. 파일명을 확인해주세요.");
		}
	} else if (url.searchParams.get("post")) {
		// 특정 블로그 포스트 페이지 로딩
		document.getElementById("contents").style.display = "block";
		document.getElementById("blog-posts").style.display = "none";
		const postName = decodeURI(url.searchParams.get("post")).replaceAll(
			"+",
			" "
		);
		const postInfo = extractFileInfo(postName);
		try {
			const response = await fetch(origin + "blog/" + postName);
			const text = await response.text();
			postInfo.fileType === "md"
				? styleMarkdown("post", text, postInfo) // 마크다운 형식으로 스타일링하여 블로그 포스트 렌더링
				: styleJupyter("post", text, postInfo); // 주피터 노트북 형식으로 스타일링하여 블로그 포스트 렌더링
		} catch (error) {
			styleMarkdown("post", "# Error입니다. 파일명을 확인해주세요.");
		}
	} else if (url.searchParams.get("category")) {
		// 특정 카테고리 페이지 로딩
		await initDataBlogMenu(); // 메뉴 데이터 초기화
		renderMenu(); // 메뉴 렌더링
		await initDataBlogList(); // 블로그 리스트 데이터 초기화
		search(url.searchParams.get("category"), "category"); // 특정 카테고리로 검색 및 렌더링
		renderBlogCategory(); // 블로그 카테고리 렌더링
	} else {
		alert("잘못된 URL입니다.");
	}
}

// 브라우저의 뒤로가기/앞으로가기 버튼 처리
window.addEventListener("popstate", async (event) => {
	await handleUrlState();
});

// 페이지 로드 시 URL 상태 처리
window.addEventListener("DOMContentLoaded", async () => {
	await handleUrlState();
});
