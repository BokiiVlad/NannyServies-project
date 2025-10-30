import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";


export default function Home() {
  return (
    <div >
      <header>
        <Header variant="home" />
        <Hero />
      </header>
      <main >
        <h1>Home page</h1>
      </main>
      <footer >
      </footer>
    </div>
  );
}
