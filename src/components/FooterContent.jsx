import React from "react";

function FooterContent() {
  return (
    <div className="pt-4">
      <h3 className="font-['Montserrat'] text-xl text-center pb-8">Contact</h3>
      <div className="flex flex-col justify-center items-center gap-2 pb-6">
        <img
          className="h-10 w-10"
          src="../assets/logo/pin-carte.png"
          alt="locaton"
        />
        <p className="text-center">Tours / Orléans / Blois <br />ou en remote</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 pb-6">
        <img
          className="h-10 w-10"
          src="../assets/logo/telephone-intelligent.png"
          alt="phone-number"
        />
        <p>07 82 17 06 10</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 pb-8">
        <img
          className="h-10 w-10"
          src="../assets/logo/email.png"
          alt="mail address"
        />
        <a href="mailto:clemence.p14@gmail.com">clemence.p14@gmail.com</a>
      </div>
    </div>
  );
}

export default FooterContent;
