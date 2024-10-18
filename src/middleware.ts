import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split("/");
  const defaultLocale = request.headers.get("x-your-custom-locale") || "ko";

  // const currentUserToken = request.cookies.get("currentUserToken")?.value;
  // const currentPath = "/" + segments.join("/");
  //
  // if (locale != null && currentPath.startsWith("/mypage") && !currentUserToken) {
  //   request.nextUrl.pathname = `/${locale}/login`;
  //
  //   // 주소 변경되며 진행 필요시 사용.
  //   // return NextResponse.redirect(request.nextUrl.toString());
  // }
  //
  // if (locale != null && currentPath.startsWith("/login") && currentUserToken) {
  //   request.nextUrl.pathname = `/${locale}`;
  //   return NextResponse.redirect(request.nextUrl.toString());
  // }

  const handleI18nRouting = createMiddleware({
    locales: ["en", "ko"],
    defaultLocale,
  });
  const response = handleI18nRouting(request);
  response.headers.set("x-your-custom-locale", defaultLocale);
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
