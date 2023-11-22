import { NextRequest, NextResponse } from "next/server";

// run only on homepage
export const config = {
  matcher: "/",
};

export async function middleware(req: NextRequest) {
  console.log("🚀 ~ file: middleware.ts:9 ~ req:", req);
  const { nextUrl: url, geo } = req;
  const country = geo?.country || "US";
  const city = geo?.city || "San Francisco";
  const region = geo?.region || "CA";

  url.searchParams.set("country", country);
  url.searchParams.set("city", city);
  url.searchParams.set("region", region);

  return NextResponse.rewrite(url);
}
