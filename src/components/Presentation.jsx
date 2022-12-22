import Portrait from "../assets/sapiens.png";
import SkillList from "./SkillList";

export default function Presentation() {
  return (
    <div className="relative bg-[#C3FA4F] h-[650px] md:h-96 mt-7">
      <div className="absolute bottom-2 right-2 flex flex-col h-[650px] md:h-96 w-[100%] bg-white mt-7 p-2 border-2 border-black md:flex-row md:justify-evenly ">
        <div className="bg-white reveal pt-6 md:pt-20 h-full">
          <h2 className="bg-white font-[Montserrat Alternates] reveal__content text-3xl ">
            Hi,
          </h2>
          <h2 className="bg-white font-[Montserrat Alternates] reveal__content text-3xl">
            i'm{" "}
            <span className="bg-white font-[Play] font-semibold text-6xl tracking-wide ">
              Clémence PHAM
            </span>
            ,
          </h2>
          <div className="flex bg-white">
            <h2 className="bg-white font-[Montserrat Alternates] reveal__content text-3xl mt-6">
              a{" "}
            </h2>
            <SkillList
              words={[
                "french",
                "fullstack",
                "creative",
                "frontend",
                "reckless",
                "backend",
              ]}
            />
            <h2 className="bg-white font-[Montserrat Alternates] reveal__content text-3xl mt-6">
              {" "}
              developper.
            </h2>
          </div>
        </div>

        <img
          className="bg-white mt-4 mb-2 md:w-[30%] border-t-2 border-l-2 border-r-4 border-b-4 border-black"
          src={Portrait}
          alt="clemence-pham"
        />
      </div>
    </div>
  );
}
