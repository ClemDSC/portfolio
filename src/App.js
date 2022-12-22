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
    <div className="relative my-5 px-5 md:px-20 bg-gray-100">
      <Header />
      <Presentation />
      <ScrollDown />
      <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideOutDown">
        <Skills />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideOutDown">
        <Projects />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideOutDown">
        <Contact />
      </AnimationOnScroll>
      <ScrollToTop />
    </div>
  );
}

export default App;
