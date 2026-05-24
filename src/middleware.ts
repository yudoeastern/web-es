import { NextRequest, NextResponse } from "next/server";
import { verifyToken, getAuthToken } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow login page
  if (pathname === "/esadm/login") {
    return NextResponse.next();
  }

  // Check auth for all /esadm routes
  if (pathname.startsWith("/esadm")) {
    const token = getAuthToken(request);
    if (!token) {
      return NextResponse.redirect(new URL("/esadm/login", request.url));
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.redirect(new URL("/esadm/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/esadm/:path*"],
};
