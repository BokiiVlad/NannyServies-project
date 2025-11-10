import { NextResponse } from "next/server";
import { adminAuth } from "@/app/utils/firebaseAdmin.js";

export async function POST(req) {
    try {
        const { idToken } = await req.json();
        if (!idToken) return NextResponse.json({ success: false, error: "missing idToken" }, { status: 400 });

        await adminAuth.verifyIdToken(idToken);

        const res = NextResponse.json({ success: true });
        const isProd = process.env.NODE_ENV === "production";
        res.cookies.set("token", idToken, {
            httpOnly: true,
            secure: isProd,
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24,
        });
        return res;
    } catch (err) {
        console.error("Session creation error:", err);
        return NextResponse.json({ success: false, error: "Invalid token" }, { status: 401 });
    }
}