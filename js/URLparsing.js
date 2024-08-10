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

function normalizeFileName(fileName) {
	// 확장자 제거
	const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

	// 대괄호와 그 내용 제거
	const cleanName = nameWithoutExtension.replace(/\[.*?\]/g, "");

	// 특수문자 제거, 공백을 하이픈으로 변경, 소문자로 변환
	return cleanName
		.replace(/[^\w\s-가-힣]/g, "") // 영문자, 숫자, 공백, 하이픈, 한글 외 모두 제거
		.replace(/\s+/g, "-") // 공백을 하이픈으로 변경
		.replace(/-+/g, "-") // 연속된 하이픈을 하나로
		.toLowerCase() // 소문자로 변환
		.trim(); // 앞뒤 공백 제거
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

async function initializeData() {
	await initDataBlogMenu();
	renderMenu();
	await initDataBlogList();
	renderBlogCategory();
}

async function handleUrlState() {
	const url = new URL(window.location.href);

	if (isInitialLoad) {
		await initializeData();
	}

	const category = url.searchParams.get("category");
	const menu = url.searchParams.get("menu");
	const post = url.searchParams.get("post");

	if (category) {
		const normalizedCategory = normalizeFileName(decodeURIComponent(category));
		url.searchParams.set("category", normalizedCategory);
		history.replaceState(null, "", url);
		handleCategory(normalizedCategory);
	} else if (menu) {
		const normalizedMenu = normalizeFileName(decodeURIComponent(menu));
		url.searchParams.set("menu", normalizedMenu);
		history.replaceState(null, "", url);
		await handleMenu(normalizedMenu);
	} else if (post) {
		const normalizedPost = normalizeFileName(decodeURIComponent(post));
		url.searchParams.set("post", normalizedPost);
		history.replaceState(null, "", url);
		await handlePost(post); // 원본 post 이름 사용
	} else if (!menu && !post) {
		renderBlogList();
	} else {
		alert("잘못된 URL입니다.");
	}

	isInitialLoad = false;
}

function handleCategory(normalizedCategory) {
	if (normalizedCategory === "all") {
		renderBlogList(blogList);
	} else {
		search(normalizedCategory, "category");
	}
}

async function handleMenu(normalizedMenu) {
	document.getElementById("blog-posts").style.display = "none";
	document.getElementById("contents").style.display = "block";
	try {
		const originalMenu = findOriginalMenuName(normalizedMenu);
		const response = await fetch(origin + "menu/" + normalizedMenu);
		const text = await response.text();
		styleMarkdown("menu", text);
	} catch (error) {
		handleError("menu", error);
	}
}

async function handlePost(normalizedPost) {
	document.getElementById("contents").style.display = "block";
	document.getElementById("blog-posts").style.display = "none";
	const originalPost = findOriginalPostName(normalizedPost);
	const postInfo = extractFileInfo(normalizedPost);
	try {
		const response = await fetch(origin + "blog/" + normalizedPost);
		const text = await response.text();
		postInfo.fileType === "md"
			? styleMarkdown("post", text, postInfo)
			: styleJupyter("post", text, postInfo);
		setMetaTags(postInfo.title, postInfo.description, postInfo.thumbnail);
	} catch (error) {
		handleError("post", error);
	}
}

function findOriginalPostName(normalizedPost) {
	return (
		blogList.find((post) => normalizeFileName(post.name) === normalizedPost)
			?.name || normalizedPost
	);
}

function findOriginalMenuName(normalizedMenu) {
	return (
		blogMenu.find((menu) => normalizeFileName(menu.name) === normalizedMenu)
			?.name || normalizedMenu
	);
}

function handleError(type, error) {
	console.error(`Error in ${type}:`, error);
	styleMarkdown(
		type,
		`# Error입니다. 파일명을 확인해주세요.\n\n${error.message}`
	);
}

// 페이지 로드 시 URL 상태 처리
window.addEventListener("DOMContentLoaded", async () => {
	await handleUrlState();
});

// 브라우저의 뒤로가기/앞으로가기 버튼 처리
window.addEventListener("popstate", async (event) => {
	await handleUrlState();
});
