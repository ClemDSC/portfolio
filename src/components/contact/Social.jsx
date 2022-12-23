import Github from "../../assets/github-mark.png";
import LinkedIn from "../../assets/linkedin-logo.png";
import Codepen from "../../assets/codepen-logo.png";

export default function Social(){
    return (
      <div className="shadow-[10px_10px_0_-2.5px_#c3fa4f] bg-white border-black border-2 w-full flex flex-col items-center py-3">
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
    )
}