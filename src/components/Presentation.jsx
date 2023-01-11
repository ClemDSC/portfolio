import Portrait from "../assets/sapiens.png";
import SkillList from "./presentation/SkillList";

export default function Presentation() {
  return (
    <div className="shadow-[10px_10px_0_-2.5px_#c3fa4f] bg-white dark:bg-zinc-200 border-black border-2 flex flex-col  md:flex-row my-4 md:mt-6 md:justify-evenly">
      <div className="reveal pt-6 md:pt-20 ">
        <h2 className="reveal__content text-3xl ">
          Hi,
        </h2>
        <h2 className="reveal__content text-3xl">
          i'm{" "}
          <span className="text-6xl tracking-wide ">
            Clémence PHAM
          </span>
          ,
        </h2>
        <div className="flex">
          <h2 className="reveal__content text-3xl md:mt-6">
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
          <h2 className="reveal__content text-3xl md:mt-6 max-[768px]:hidden">
            {" "}
            developper.
          </h2>
        </div>
        <h2 className="reveal__content text-3xl md:hidden">
          {" "}
          developper.
        </h2>
      </div>
      <img
        className="bg-white mt-4 mb-2 md:my-8 w-[90%] md:w-[25%] border-t-2 border-l-2 border-r-4 border-b-4 border-black self-center"
        src={Portrait}
        alt="clemence-pham"
      />
    </div>
  );
}
