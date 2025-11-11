"use client"
import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="bg-[rgb(251,251,251)] min-h-screen pt-[32px]">
      <header>
        <Header
          variant="home"
          isLoginOpen={isLoginOpen}
          setIsLoginOpen={setIsLoginOpen}
        />
      </header>
      <main>
        <Hero setIsLoginOpen={setIsLoginOpen} />
      </main>
      <footer></footer>
    </div>
  );
}
