import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <footer
      className={`div8 hover:cursor-pointer hover:border-2 hover:border-[white] bg-eggshell flex flex-col justify-center items-center p-8 ${
        open ? "footer-display" : ""
      }`}
      onClick={handleOpen}
    >
      <img
        className="max-h-16"
        src="../assets/logo/contact-us.png"
        alt="Contactez-nous"
      />

      {open && (
        <div className="pt-4">
          <div className="flex gap-2">
            <img
              className="h-6 w-6"
              src="../assets/logo/pin-carte.png"
              alt="locaton"
            />
            <p>Tours / Orléans / Blois ou en remote</p>
          </div>
          <div className="flex gap-2 my-2">
            <img
              className="h-6 w-6"
              src="../assets/logo/telephone-intelligent.png"
              alt="phone-number"
            />
            <p>07 82 17 06 10</p>
          </div>
          <div className="flex gap-2 mt-4">
            <img
              className="h-6 w-6"
              src="../assets/logo/email.png"
              alt="mail address"
            />
            <a href="mailto:clemence.p14@gmail.com">clemence.p14@gmail.com</a>
          </div>

          
        </div>
      )}
    </footer>
  );
}
