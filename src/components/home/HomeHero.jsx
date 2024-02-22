import { Link } from "react-router-dom";
import SVGLocation from "../svg/SVGLocation";

function HomeHero({ theme }) {
  return (
    <>
      <button
        className={`w-fit px-2 rounded-badge ${
          theme === "winter"
            ? "bg-[#09e37d29] text-[#088046]"
            : "bg-[#088046] text-[#09e37d]"
        } `}
      >
        ● Disponible
      </button>
      <h1 className="text-4xl font-barlow font-bold">
        Je suis Clémence, <br />
        <span className="text-3xl">
          ta créatrice de site web tourangelle préférée 👋
        </span>
      </h1>
      <button className="badge badge-outline py-4 text-dark-text flex w-fit items-center gap-2 text-sm md:text-base md:-mt-8">
        <SVGLocation />{" "}
        Tours, France.
      </button>
      <h2 className="text-xl">
        Développeuse web passionnée avec 7 années d'expérience, je me concentre
        sur la création d'expériences utilisateur et l'ajout de fonctionnalités.
        <br />
        De la landing page aux applications complexes, je conçois des solutions
        web sur mesure pour répondre aux besoins de mes clients.
      </h2>
      <div className="flex flex-col gap-4 md:flex-row">
        <button className={` w-full md:w-fit py-2 md:px-8 rounded-lg shadow hover:shadow-lg ${
              theme === "winter"
                ? "bg-light-text text-base-100"
                : "bg-dark-text text-neutral-content"
            } `}><Link to="/about">À propos</Link></button>
        <button className={`w-full md:w-fit py-2 md:px-8 border-2 ${
              theme === "winter"
                ? "text-light-text bg-base-100"
                : "text-dark-text bg-neutral-content"
            } rounded-lg shadow hover:shadow-lg`}><a href="mailto:clemencepham.web@gmail.com">Email</a></button>
      </div>
    </>
  );
}

export default HomeHero;
