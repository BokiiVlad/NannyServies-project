"use client";
import React, { useEffect, useState, useCallback } from "react";
import { auth, db } from "../../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { addToFavorites, removeFromFavorites } from "../../utils/favorites.js";

const FavoriteButton = ({ nannyId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [userId, setUserId] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      const uid = u ? u.uid : null;
      setUserId(uid);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId) {
      setIsFavorite(false);
      return;
    }

    let mounted = true;
    const fetchFavorites = async () => {
      try {
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);
        const favorites = userDoc.data()?.favorites || [];
        if (mounted) setIsFavorite(favorites.includes(nannyId));
      } catch (err) {
        console.error("fetchFavorites error:", err);
      }
    };

    fetchFavorites();
    return () => {
      mounted = false;
    };
  }, [userId, nannyId]);

  const handleClick = useCallback(
    async (e) => {
      e.stopPropagation();
      if (!userId || pending) return;

      const next = !isFavorite;
      setIsFavorite(next);
      setPending(true);

      try {
        if (next) {
          await addToFavorites(nannyId);
        } else {
          await removeFromFavorites(nannyId);
        }
      } catch (err) {
        console.error("Favorite action failed:", err);
        setIsFavorite(!next);
      } finally {
        setPending(false);
      }
    },
    [isFavorite, nannyId, userId, pending]
  );

  return (
    <svg
      onClick={handleClick}
      className="absolute top-0 right-0 cursor-pointer stroke-black"
      width="26"
      height="26"
      fill={isFavorite ? "#11101C" : "#FFFFFF"}
    >
      <use href="/icons/sprite.svg#icon-heart"></use>
    </svg>
  );
};

export default React.memo(FavoriteButton);
