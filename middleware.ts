import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

// Landen waarvoor we standaard Nederlands tonen. Bezoekers daarbuiten krijgen
// bij hun eerste bezoek automatisch de Engelse variant.
const DUTCH_COUNTRIES = ["NL", "BE"];
const COOKIE = "NEXT_LOCALE";
const ONE_YEAR = 60 * 60 * 24 * 365;

function toEnglish(request: NextRequest) {
  const url = request.nextUrl.clone();
  const path = request.nextUrl.pathname;
  url.pathname = `/en${path === "/" ? "" : path}`;
  return url;
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isEnglishPath = pathname === "/en" || pathname.startsWith("/en/");
  const cookie = request.cookies.get(COOKIE)?.value;

  // Terugkerende bezoeker die eerder Engels koos: houd hem op /en.
  if (cookie === "en" && !isEnglishPath) {
    return NextResponse.redirect(toEnglish(request));
  }

  // Eerste bezoek (geen keuze gemaakt) op een Nederlands pad: bepaal de taal op
  // basis van het land uit het IP-adres (Vercel-header). Niet-NL/BE -> Engels.
  if (!cookie && !isEnglishPath) {
    const country = request.headers.get("x-vercel-ip-country");
    if (country && !DUTCH_COUNTRIES.includes(country)) {
      const response = NextResponse.redirect(toEnglish(request));
      response.cookies.set(COOKIE, "en", { path: "/", maxAge: ONE_YEAR });
      return response;
    }
  }

  return intlMiddleware(request);
}

export const config = {
  // Sla API-routes, Next-interne paden en bestanden met een extensie over.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
