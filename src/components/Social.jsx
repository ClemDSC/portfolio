import { useState } from "react";
import { Link } from "react-router-dom";

function Social() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="div6 bg-ash-grey hover:cursor-pointer hover:border-2 hover:border-[white]" onClick={handleOpen}>
      <div className="h-full flex flex-col justify-evenly items-center px-4 py-8">
        {open && (
          <div className="flex justify-around w-full">
            <Link
              to={"https://www.linkedin.com/in/clemence-pham/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-8 w-8 bg-[white] rounded-full border-2 border-[white]"
                src="../assets/logo/linkedin-olive.png"
                alt="logo linkedin"
              />
            </Link>
            <Link
              to={"https://www.instagram.com/denimsunandcoffee"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-8 w-8 bg-[white] rounded-full border-2 border-[white]"
                src="../assets/logo/instagram.png"
                alt="logo instagram"
              />
            </Link>
          </div>
        )}
        <img
          className="max-h-16"
          src="../assets/logo/reseau.png"
          alt="Knowledges"
        />

        {open && (
          <div className="flex justify-around w-full">
            <Link
              to={"https://github.com/ClemDSC"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-8 w-8 bg-[white] rounded-full border-2 border-[white]"
                src="../assets/logo/github-olive.png"
                alt="logo github"
              />
            </Link>
            <Link
              to={"https://codepen.io/ClemDSC"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-8 w-8 bg-[white] rounded-full border-2 border-[white]"
                src="../assets/logo/codepen.png"
                alt="logo codepen"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Social;
