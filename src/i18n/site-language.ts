const topLevelPages = new Set(["about", "archive", "essays", "favorites", "friends", "learning"]);

export function isEnglishPath(pathname: string) {
	return pathname === "/en" || pathname.startsWith("/en/");
}

export function englishPath(pathname: string) {
	return `/en${pathname}`;
}

export function alternateLanguagePath(pathname: string) {
	const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
	if (isEnglishPath(path)) return path.slice(3);
	const [, section, page, detail] = path.split("/");
	const hasEnglishPage = path === "/" ||
		(topLevelPages.has(section) && !page) ||
		(section === "posts" && Boolean(page)) ||
		(section === "favorites" && (page === "works" || page === "music") && Boolean(detail));
	return hasEnglishPage ? englishPath(path) : "/en/archive/";
}
