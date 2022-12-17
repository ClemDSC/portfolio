import Portrait from "../assets/sapiens.png";

export default function Presentation() {
  const skills = [
    "french",
    "fullstack",
    "frontend",
    "backend",
    "creative",
    "reckless",
  ];

  return (
    <>
      <div className="bg-white mt-5 p-2 frame md:flex md:justify-evenly ">
        <div className="bg-white reveal pt-6 md:pt-20">
          <h2 className="bg-white font-[Montserrat Alternates] reveal__content text-3xl ">
            Hi,
          </h2>
          <h2 className="bg-white font-[Montserrat Alternates] reveal__content text-3xl">
            i'm{" "}
            <span className="bg-white font-[Play] font-semibold text-6xl ">
              Clémence PHAM
            </span>
            ,
          </h2>
          <h2 className="bg-white font-[Montserrat Alternates] reveal__content text-3xl mt-6">
            a french developper.
          </h2>
        </div>

        <img
          className="bg-white mt-4 mb-2 md:w-[30%] border-t-2 border-l-2 border-r-4 border-b-4 border-black"
          src={Portrait}
          alt="clemence-pham"
        />
      </div>
    </>
  );
}
