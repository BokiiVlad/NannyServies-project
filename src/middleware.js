import { NextResponse } from "next/server";

export async function middleware(req) {
    const protectedRoutes = ["/favorites"];
    const pathname = req.nextUrl.pathname;

    if (!protectedRoutes.some((p) => pathname.startsWith(p))) return NextResponse.next();

    const token = req.cookies.get("token")?.value;
    if (!token) {
        const resp = NextResponse.redirect(new URL("/", req.url));
        resp.cookies.set("showLoginModal", "true", { path: "/" });
        return resp;
    }

    try {
        const url = new URL("/api/verifyToken", req.url);
        const r = await fetch(url.toString(), {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ token }),
        });

        if (r.ok) return NextResponse.next();
    } catch (err) {
        console.error("Middleware verify fetch error:", err);
    }

    const resp = NextResponse.redirect(new URL("/", req.url));
    resp.cookies.set("showLoginModal", "true", { path: "/" });
    return resp;
}