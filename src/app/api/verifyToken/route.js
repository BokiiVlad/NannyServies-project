import { NextResponse } from "next/server";
import { adminAuth } from "@/app/utils/firebaseAdmin.js";

export async function POST(req) {
    try {
        const { token } = await req.json();
        if (!token) return NextResponse.json({ ok: false }, { status: 400 });

        await adminAuth.verifyIdToken(token);
        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ ok: false }, { status: 401 });
    }
}