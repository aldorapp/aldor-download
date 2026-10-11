import { NextResponse } from "next/server";

const ANDROID_STORE =
  "https://play.google.com/store/apps/details?id=com.aldor.rider";

const IOS_STORE =
  "https://apps.apple.com/ng/app/aldor-rider/id6778490705";

export function GET(request) {
  const userAgent = request.headers.get("user-agent") || "";

  if (/android/i.test(userAgent)) {
    return NextResponse.redirect(ANDROID_STORE);
  }

  if (/iphone|ipad|ipod/i.test(userAgent)) {
    return NextResponse.redirect(IOS_STORE);
  }

  // For desktops and other devices
  return NextResponse.redirect(IOS_STORE);
}
