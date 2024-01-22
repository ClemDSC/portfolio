import { Link } from "react-router-dom";

import About from "../components/About";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Social from "../components/Social";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="main-container bg-feldgrau p-4">
      <About />
      <Header />
      <main className="div3 bg-eggshell p-4">
        <Link
          to={"/pro"}
          className="h-full border-4 border-feldgrau rounded-xl flex justify-center items-center px-4 py-8"
        >
          <img
            className="max-h-16"
            src="../assets/logo/programmation-web.png"
            alt="More"
          />
        </Link>
      </main>
      <Skills />
      <div className="div5 bg-eggshell p-4">
        <Link
          to={"/training"}
          className="h-full flex justify-center items-center px-4 py-4 hover:border-4 hover:border-feldgrau hover:rounded-xl"
        >
          <img
            className="max-h-16"
            src="../assets/logo/study.png"
            alt="Knowledges"
          />
        </Link>
      </div>
      <Social />
      <section className="div7 bg-coral-pink p-4">
        <Link to={"/more"} className="h-full bg-eggshell border-4 border-[white] rounded-xl flex justify-center items-center p-4">
          <img className="max-h-16" src="../assets/logo/plus.png" alt="More" />
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
