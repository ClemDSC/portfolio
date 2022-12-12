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
          <h1 className="text-center md:text-left md:ml-20 text-3xl font-bold">Clémence PHAM</h1>
          <h2 className="text-end mr-5 md:mr-20">portfolio</h2>
        </div>
      </div>
      <div className="flex justify-evenly">
        <a  href="#skills" rel="noopener noreferrer">
          <img className="md:hidden" src={Square} alt="square" />
          <h3 className="max-[768px]:hidden">skills</h3>
        </a>
        <a className="scroll-smooth" href="#project" rel="noopener noreferrer">
          <img className="md:hidden" src={Square} alt="square" />
          <h3 className="max-[768px]:hidden">projects</h3>
        </a>
        <a className="scroll-smooth" href="#contact" rel="noopener noreferrer">
          <img className="md:hidden" src={Square} alt="square" />
          <h3 className="max-[768px]:hidden">contact</h3>
        </a>
      </div>
    </>
  );
}
