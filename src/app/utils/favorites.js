import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db, auth } from "../firebase";

export const addToFavorites = async (nannyId) => {
    if (!auth.currentUser) return;

    const userRef = doc(db, "users", auth.currentUser.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {

        await setDoc(userRef, { favorites: [nannyId] });
    } else {

        await updateDoc(userRef, {
            favorites: arrayUnion(nannyId),
        });
    }
};

export const removeFromFavorites = async (nannyId) => {
    if (!auth.currentUser) return;

    const userRef = doc(db, "users", auth.currentUser.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        await updateDoc(userRef, {
            favorites: arrayRemove(nannyId),
        });
    }
};
