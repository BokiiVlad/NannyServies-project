import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import LoginModal from "./components/LoginModal/LoginModal.jsx";

export default function Home() {
  return (
    <div >
      <header>
        <Header />
        <Hero />
      </header>
      <main >
        <LoginModal />
        <h1>Home page</h1>
      </main>
      <footer >
      </footer>
    </div>
  );
}
