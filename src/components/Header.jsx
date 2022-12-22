import Cross from "../assets/cross.png";
import Square from "../assets/black-square.png";

export default function Header() {
  return (
    <div>
        <div className="relative bg-[#C3FA4F]  h-[80px]  mb-5 md:mt-10 md:h-28 flex">
          <div className="absolute flex md:h-[110px] bottom-2 right-2 w-[100%] border-black border-2 bg-white">
            <div className="bg-white max-[768px]:hidden flex h-full w-30 border-black border-r-2">
              <img className="bg-white w-30 h-26" src={Cross} alt="cross" />
            </div>
            <div className="bg-white w-full flex-col my-auto">
              <h1 className="bg-white text-left ml-5  md:ml-20 text-4xl font-[Play] font-semibold tracking-wider">
                Clémence PHAM
              </h1>
              <h2 className="bg-white text-end mr-5 md:mr-20 font-[Play] text-2xl tracking-wider">
                portfolio
              </h2>
            </div>
          </div>
        </div>
      <div className="flex justify-evenly md:mt-7">
        <a href="#skills" rel="noopener noreferrer">
          <img className="md:hidden" src={Square} alt="square" />
          <h3 className="green-button bg-white max-[768px]:hidden font-[Play] tracking-wider">
            skills
          </h3>
        </a>
        <a className="scroll-smooth" href="#project" rel="noopener noreferrer">
          <img className="md:hidden" src={Square} alt="square" />
          <h3 className="green-button bg-white max-[768px]:hidden font-[Play] tracking-wider">
            projects
          </h3>
        </a>
        <a className="scroll-smooth" href="#contact" rel="noopener noreferrer">
          <img className="md:hidden" src={Square} alt="square" />
          <h3 className="green-button bg-white max-[768px]:hidden font-[Play] tracking-wider">
            contact
          </h3>
        </a>
      </div>
    </div>
  );
}
