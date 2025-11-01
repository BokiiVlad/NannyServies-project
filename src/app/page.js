"use client"
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div>
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
