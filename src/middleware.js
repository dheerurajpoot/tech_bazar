import { NextResponse } from "next/server";

export function middleware(request) {
	const path = request.nextUrl.pathname;
	const isPublicPath =
		path === "/login" || path === "/register" || path === "/verifyemail";

	const token = request.cookies.get("token")?.value || "";

	if (isPublicPath && token) {
		return NextResponse.redirect(new URL("/", request.url));
	}
	if (!isPublicPath && !token) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
	return NextResponse.next();
}
export const config = {
	matcher: [
		"/",
		"/login",
		"/register",
		"/profile",
		"/shop",
		"/admin",
		"/verifyemail",
		"/checkout",
		"/product",
		"/thank-you",
	],
};
