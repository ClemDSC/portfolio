import Cross from "../assets/cross.png";
import Square from "../assets/black-square.png";

export default function Header() {
  return (
    <div>
      <div className="shadow-[10px_10px_0_-2.5px_#c3fa4f] bg-white dark:bg-zinc-200 border-black border-2 flex mb-5 md:mt-5">
        <div className="max-[768px]:hidden flex h-full w-30 border-black border-r-2">
          <img className="w-30 h-26" src={Cross} alt="cross" />
        </div>
        <div className="w-full flex-col my-auto">
          <h1 className="text-left ml-5  md:ml-20 text-4xl font-[Play] font-semibold tracking-wider">
            Clémence PHAM
          </h1>
          <h2 className="text-end mr-5 md:mr-20 font-[Play] text-2xl tracking-wider">
            portfolio
          </h2>
        </div>
      </div>
      <div className="flex justify-evenly md:mt-9">
        <a className="scroll-smooth" href="#skills" rel="noopener noreferrer">
          <img className="md:hidden dark:border-2 dark:border-[#C3FA4F] dark:my-2" src={Square} alt="square" />
          <h3 className="green-button bg-white dark:bg-zinc-200 max-[768px]:hidden font-[Play] tracking-wider">
            skills
          </h3>
        </a>
        <a className="scroll-smooth" href="#projects" rel="noopener noreferrer">
          <img className="md:hidden dark:border-2 dark:border-[#C3FA4F] dark:my-2" src={Square} alt="square" />
          <h3 className="green-button bg-white dark:bg-zinc-200 max-[768px]:hidden font-[Play] tracking-wider">
            projects
          </h3>
        </a>
        <a className="scroll-smooth" href="#contact" rel="noopener noreferrer">
          <img className="md:hidden dark:border-2 dark:border-[#C3FA4F] dark:my-2" src={Square} alt="square" />
          <h3 className="green-button bg-white dark:bg-zinc-200 max-[768px]:hidden font-[Play] tracking-wider">
            contact
          </h3>
        </a>
      </div>
    </div>
  );
}
