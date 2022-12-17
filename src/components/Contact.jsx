import Github from "../assets/github-mark.png";
import LinkedIn from "../assets/linkedin-logo.png";
import Codepen from "../assets/codepen-logo.png";

export default function Contact() {
  return (
    <div id="contact" className="mt-5 flex flex-col items-center gap-5">
      <div className="relative flex h-20 items-center justify-center  bg-[#C3FA4F]  w-[100%]">
        <div className="absolute h-20 bottom-2 right-2 flex flex-col md:flex-row md:gap-3 items-center justify-center  w-[100%] border-black border-2 bg-white ">
            <p className="bg-white text-xl">Contact me by mail :</p>
            <a
              className="bg-white font-[Play] text-xl font-semibold underline"
              href="mailto:clemence.p14@gmail.com"
            >
              clemence.p14@gmail.com
            </a>
        </div>
      </div>
      <div className="relative flex h-20 items-center justify-between bg-[#C3FA4F]  w-[100%]">
        <div className="absolute h-20 bottom-2 right-2 flex items-center justify-center w-[100%] border-black border-2 bg-white">
          <div className="bg-white flex-col my-auto md:flex md:flex-row md:space-x-4 items-center">
            <p className="bg-white font-[Montserrat Alternates] text-xl tracking-wider">
              Find me on the web :
            </p>
            <div className="bg-white flex justify-between m-1 space-x-8 md:h-12">
              <a
                href="https://www.linkedin.com/in/clemence-pham/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-8 md:h-12 bg-white"
                  src={LinkedIn}
                  alt="linkedin-logo"
                />
              </a>
              <a
                href="https://codepen.io/ClemDSC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="bg-white h-8 md:h-12" src={Codepen} alt="codepen-logo" />
              </a>
              <a
                href="https://github.com/ClemDSC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="bg-white h-8 md:h-12" src={Github} alt="github-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
