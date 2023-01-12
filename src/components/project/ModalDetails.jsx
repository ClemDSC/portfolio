import { useState } from "react";

import Github from "../../assets/github-mark.png";

import Slider from "react-slick";

export default function ModalDetails(projectList) {
  const [showModal, setShowModal] = useState(false);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", padding: "6px", height: "30px", width: "30px"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", padding: "6px", height: "30px", width: "30px"}}
        onClick={onClick}
      />
    );
  }

  const settingsCarousel = {
    centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

  return (
    <div className="mt-2">
      <button
        className="font-medium bg-white py-1 px-3 border-2 border-[#c3fa4f] hover:bg-[#c3fa4f] outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        +
      </button>

      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[80%]">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white dark:bg-zinc-200 outline-none focus:outline-none">
                {/*header*/}
                <button
                  className=" ml-auto md:mt-4 mr-4 bg-transparent border-0 font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent hover:bg-[#C3FA4F] px-3 py-1 text-black text-3xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
                <div className="flex justify-center md:p-4">
                  <h3 className="text-2xl text-center">
                    Project :{" "}
                    <span className="bg-[#C3FA4F] py-1 px-3 font-semibold">
                      {projectList.title}
                    </span>
                  </h3>
                </div>
                {/*body*/}
                <img className="my-4 md:hidden" src={projectList.thumbnail} alt={projectList.title} />
                <div className="max-[768px]:hidden md:relative md:p-4 md:w-[70%] md:h-auto md:mx-auto md:mb-2">
                  <Slider {...settingsCarousel}>
                    {projectList.pictures.map(pic => {
                        return <img className="mb-1" src={pic} alt={projectList.title} />
                    })}
                  </Slider>
                </div>
                {/*footer*/}
                <div className="flex flex-col items-center p-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex gap-2 flex-col items-center md:flex-row">
                      <p className="underline">languages :</p>
                      <div className="flex gap-2 font-semibold">
                        {projectList.language.map((lang) => {
                          return <p>{lang}</p>;
                        })}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2 flex-col items-center md:flex-row">
                      <p className="underline">frameworks / npm :</p>
                      <div className="flex flex-col md:flex-row items-center gap-2 font-semibold">
                        {projectList.fullstack.map((stack) => {
                          return <p className="text-center">{stack}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-2 font-semibold">
                    <span className="font-medium underline">description :</span>{" "}
                    {projectList.description}
                  </p>
                  <a
                    href={projectList.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2"
                  >
                    <img
                      className="h-8 md:h-12"
                      src={Github}
                      alt="github-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
}
