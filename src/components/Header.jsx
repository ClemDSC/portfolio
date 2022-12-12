import Cross from "../assets/cross.png";
import Square from "../assets/black-square.png";

export default function Header() {
  return (
    <>
      <div className="h-20 border-2 border-black my-5 md:my-10 flex">
        <div className=" flex h-full w-20 border-black border-r-2">
          <img src={Cross} alt="cross" />
        </div>
        <div className="w-full flex-col my-auto">
          <h1 className="text-center text-3xl font-bold">Clémence PHAM</h1>
          <h2 className="text-end mr-5">portfolio</h2>
        </div>
      </div>
      <div className="flex justify-evenly md:hidden">
        <a href="#skills" rel="noopener noreferrer">
          <img src={Square} alt="square" />
        </a>
        <a href="#project" rel="noopener noreferrer">
          <img src={Square} alt="square" />
        </a>
        <a href="#contact" rel="noopener noreferrer">
          <img src={Square} alt="square" />
        </a>
      </div>
      <div className="md:flex justify-evenly sm:hidden md:pb-4">
        <a href="#skills" rel="noopener noreferrer">
          <h3>skills</h3>
        </a>
        <a href="#project" rel="noopener noreferrer">
        <h3>projects</h3>
        </a>
        <a href="#contact" rel="noopener noreferrer">
        <h3>contact</h3>
        </a>
      </div>
    </>
  );
}
