import { AnimationOnScroll } from "react-animation-on-scroll";

import Header from "./components/Header.jsx";
import ScrollDown from "./utils/ScrollDown.jsx";
import Presentation from "./components/Presentation.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
  return (
    <div className="relative p-5 bg-[#F3F4F6] dark:bg-zinc-800 md:px-10 font-[Orbitron]">
      <Header />
      <Presentation />
      <ScrollDown />
      <AnimationOnScroll
        animateIn="animate__slideInUp"
      >
        <Skills />
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__slideInUp"
      >
        <Projects />
      </AnimationOnScroll>
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
