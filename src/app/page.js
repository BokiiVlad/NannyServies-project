import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import LoginModal from "./components/LoginModal/LoginModal.jsx";
import RegisterModal from "./components/RegisterModal/RegisterModal.jsx";

export default function Home() {
  return (
    <div >
      <header>
        <Header />
        <Hero />
      </header>
      <main >
        <LoginModal />
        <RegisterModal />
        <h1>Home page</h1>
      </main>
      <footer >
      </footer>
    </div>
  );
}
