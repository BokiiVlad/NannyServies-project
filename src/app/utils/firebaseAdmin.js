
import admin from "firebase-admin";

if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    throw new Error("Missing FIREBASE_SERVICE_ACCOUNT_KEY env variable");
}

let serviceAccount;
try {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
} catch (err) {
    console.error("FIREBASE_SERVICE_ACCOUNT_KEY JSON parse error:", err);
    throw new Error("FIREBASE_SERVICE_ACCOUNT_KEY is not valid JSON");
}


if (serviceAccount && typeof serviceAccount.private_key === "string") {
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
}

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

export const adminAuth = admin.auth();
export const adminDb = admin.firestore();