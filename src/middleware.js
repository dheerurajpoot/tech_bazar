import { NextResponse } from "next/server";

export function middleware(request) {
	const path = request.nextUrl.pathname;

	// Get token and userRole from cookies
	const token = request.cookies.get("token")?.value || "";
	const userRole = request.cookies.get("userRole")?.value || "";

	// Public paths (accessible without login)
	const isPublicPath =
		path === "/" ||
		path === "/login" ||
		path === "/register" ||
		path === "/verifyemail" ||
		path === "/shop" ||
		path.startsWith("/product");

	// Protected paths (require login)
	const isProtectedPath =
		path.startsWith("/checkout") ||
		path.startsWith("/order") ||
		path.startsWith("/profile") ||
		path === "/add-product" ||
		path === "/thank-you";

	// Admin-only paths (require login and admin role)
	const isAdminPath = path.startsWith("/admin");

	// Redirect logged-in users away from login/register pages
	if (isPublicPath && token && (path === "/login" || path === "/register")) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	// Redirect unauthenticated users trying to access protected paths
	if ((isProtectedPath || isAdminPath) && !token) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	// Redirect non-admin users trying to access admin-only paths
	if (isAdminPath && userRole !== "admin") {
		return NextResponse.redirect(new URL("/", request.url));
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
		"/admin/:path*",
		"/add-product",
		"/verifyemail",
		"/checkout/:path*",
		"/profile/:path*",
		"/order/:path*",
		"/product/:path*",
		"/thank-you",
	],
};
