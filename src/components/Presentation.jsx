import Portrait from "../assets/sapiens.png"

export default function Presentation() {

  const skills = ["french", "fullstack", "frontend", "backend", "creative", "reckless"]

  return (
    <>
    <div className="mt-5 p-2 border-2 border-black md:flex md:justify-evenly">
      <h2 className="text-3xl font-semibold">Hi, i'm a french <span className="animate-[wiggle_1s_ease-in-out_infinite]">developper</span></h2>
      <img className="mt-4 mb-2 md:w-[40%] border-t-2 border-l-2 border-r-4 border-b-4 border-black" src={Portrait} alt="clemence-pham" />
    </div>
    </>
  );
}
