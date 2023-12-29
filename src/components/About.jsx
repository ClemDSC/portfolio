import { useState, useEffect } from "react";

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside className="div1 bg-coral-pink flex flex-col p-4 gap-2">
      <div>
        <img
          src="../assets/clemencepham.jpg"
          alt="Clémence Pham"
          className="border-4 border-[white] rounded-xl aspect-square w-full h-full object-cover"
        />
      </div>
      {isMobile ? (
        <>
          <button className="font-['Poppins'] font-bold" onClick={handleOpen}>
            <img
              className="max-h-16 mx-auto"
              src="../assets/logo/tapez-deux-fois.png"
              alt="Tap"
            />
          </button>
          {open && <Introduction />}
        </>
      ) : (
        <Introduction />
      )}
    </aside>
  );
}

function Introduction() {
  return (
    <article className="my-auto mx-2">
      <p>Fière tourangelle !</p>
      <p>
        Sensible à l'UI et l'UX, j'aime me tenir informée des tendances et
        mettre en application les bonnes pratiques.
      </p>
      <p>
        C'est donc sans surprise que mes préférences techniques se portent sur
        l'intégration et le développement front-end.
      </p>
    </article>
  );
}

export default About;
