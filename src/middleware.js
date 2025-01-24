import { NextResponse } from "next/server";

export function middleware(request) {
	const path = request.nextUrl.pathname;

	// Define public paths (accessible without login)
	const isPublicPath =
		path === "/" ||
		path === "/login" ||
		path === "/register" ||
		path === "/verifyemail" ||
		path === "/shop" ||
		path.startsWith("/product");

	// Define protected paths (require login)
	const isProtectedPath =
		path.startsWith("/checkout") ||
		path.startsWith("/admin") ||
		path.startsWith("/order") ||
		path === "/profile" ||
		path === "/admin" ||
		path === "/thank-you";

	// Get token from cookies
	const token = request.cookies.get("token")?.value || "";

	// Redirect logged-in users away from login/register pages
	if (isPublicPath && token && (path === "/login" || path === "/register")) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	// Redirect unauthenticated users trying to access protected paths
	if (isProtectedPath && !token) {
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
		"/checkout/:path*",
		"/product/:path*",
		"/thank-you",
	],
};
