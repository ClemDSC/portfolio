import Github from "../assets/github-mark.png";
import LinkedIn from "../assets/linkedin-logo.png";
import Codepen from "../assets/codepen-logo.png";

export default function Contact() {
  return (
    <>
      <div className="my-5 flex items-center justify-between h-20 bg-gray-100">
        <div className="h-full w-20 border-black border-t-2 border-b-2 border-l-2"></div>
        <div className="flex-col text-center md:flex md:flex-row md:space-x-4">
          <p>Contact me by mail :</p>
          <a className="font-semibold underline" href="mailto:clemence.p14@gmail.com">clemence.p14@gmail.com</a>
        </div>
        <div className="h-full w-20 border-black border-t-2 border-b-2 border-r-2"></div>
      </div>
      <div className="mb-5 flex justify-between h-20 bg-gray-100">
        <div className="h-full w-20 border-black border-t-2 border-b-2 border-l-2"></div>
        <div className="flex-col my-auto md:flex md:flex-row md:space-x-4 items-center">
          <p>Find me on the web :</p>
          <div className="flex m-1 space-x-4 md:h-12">
            <a
              href="https://www.linkedin.com/in/clemence-pham/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-8 md:h-12" src={LinkedIn} alt="linkedin-logo" />
            </a>
            <a href="https://codepen.io/ClemDSC" target="_blank" rel="noopener noreferrer">
              <img className="h-8 md:h-12" src={Codepen} alt="codepen-logo" />
            </a>
            <a href="https://github.com/ClemDSC" target="_blank" rel="noopener noreferrer">
              <img className="h-8 md:h-12" src={Github} alt="github-logo" />
            </a>
          </div>
        </div>
        <div className="h-full w-20 border-black border-t-2 border-b-2 border-r-2"></div>
      </div>
    </>
  );
}
