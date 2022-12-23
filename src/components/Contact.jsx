import { AnimationOnScroll } from "react-animation-on-scroll";

import Cv from "./contact/Cv";
import Mail from "./contact/Mail";
import Social from "./contact/Social";

export default function Contact() {
  return (
    <div id="contact" className="mt-5 flex flex-col items-center gap-5">
      <AnimationOnScroll
        animateIn="animate__slideInUp"
        animateOut="animate__slideOutDown"
        className="w-full"
      >
        <Mail />
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__slideInUp"
        animateOut="animate__slideOutDown"
        className="w-full"
      >
        <Cv />
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__slideInUp"
        animateOut="animate__slideOutDown"
        className="w-full"
      >
        <Social />
      </AnimationOnScroll>
    </div>
  );
}
