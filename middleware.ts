import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const PUBLIC_PATHS = ["/login", "/api", "/_next", "/favicon.ico", "/assets", "/public"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Cho phép truy cập các public path mà không cần đăng nhập
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Kiểm tra token đăng nhập (JWT cookie của next-auth)
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/(.*)"]
};
