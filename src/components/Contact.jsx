import Cv from "./contact/Cv";
import Mail from "./contact/Mail";
import Social from "./contact/Social";

export default function Contact() {
  return (
    <div id="contact" className="mt-5 flex flex-col items-center gap-5">
      <Mail />
      <Cv />
      <Social />
    </div>
  );
}
