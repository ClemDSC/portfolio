import { useState } from "react";

import Github from "../../assets/github-mark.png";

export default function ModalDetails(projectList) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="mt-2">
      <button
        className="font-medium bg-white py-1 px-3 border-2 hover:border-[#c3fa4f] outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        +
      </button>

      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <button
                  className=" ml-auto mt-4 mr-4 bg-transparent border-0 font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent hover:bg-[#C3FA4F] px-3 py-1 text-black text-3xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
                <div className="flex justify-center p-4">
                  <h3 className="text-2xl text-center font-semibold">
                    Project :{" "}
                    <span className="bg-[#C3FA4F] py-1 px-3">
                      {projectList.title}
                    </span>
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex flex-col items-center p-4 border-t border-solid border-slate-200 rounded-b">
                  <div className="flex flex-col md:flex-row md:w-full md:justify-evenly items-center justify-center">
                    <div className="flex gap-2">
                      <p className="font-semibold">languages :</p>
                      <div className="flex gap-2">
                        {projectList.language.map((lang) => {
                          return <p>{lang}</p>;
                        })}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <p className="font-semibold">frameworks / npm :</p>
                      <div className="flex gap-2">
                        {projectList.fullstack.map((stack) => {
                          return <p>{stack}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-2">
                    <span className="font-semibold">description : </span>
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
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
}
