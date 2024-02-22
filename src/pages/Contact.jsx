import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

import Footer from "../components/Footer";

function Contact() {
  const { theme } = useTheme();

  const routeVariants = {
    initial: {
      x: "100vw",
    },
    final: {
      x: "0vw",
      transition: {
        type: "spring",
        mass: 0.2,
      },
    },
  };

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  return (
    <motion.section
      variants={routeVariants}
      initial="initial"
      animate="final"
      className={`height-full width-full fixed bottom-0 md:right-0 overflow-scroll mx-4 md:ml-0 my-2 p-4  md:px-[12%] rounded-lg text-lg  ${
        theme === "winter"
          ? "bg-light-white"
          : "bg-neutral-content text-dark-text"
      }  shadow`}
    >
      <h2 className="text-3xl font-barlow font-bold py-8 md:pt-[5%]">
        Envie de donner vie à votre projet web ?
      </h2>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8 pb-8 md:flex-row"
      >
        <div className="md:w-1/2 md:min-h-[164px] md:relative">
          <p className="text-xl pb-2">Développez votre visibilité web</p>
          <p className="pb-4">
            Découvrez mes solutions sur-mesure et boostez votre business.
          </p>
          <button
            className={`md:absolute md:bottom-0 rounded-lg w-full md:w-fit py-2 md:px-8 ${
              theme === "winter"
                ? "bg-light-text text-base-100"
                : "bg-dark-text text-neutral-content"
            } `}
          >
            <span className="tooltip" data-tip="À venir...">
            Consulter les offres
            </span>
            {/* <a href="http://clemencepham-web.fr/" target="blank">
            Consulter les offres
            </a> */}
          </button>
        </div>
        <div className="md:w-1/2 md:min-h-[164px] md:relative">
          <p className="text-xl pb-2">Agences, professionnels, ESN</p>
          <p className="pb-4">Prêts à collaborer ?</p>
          <button
            className={`md:absolute md:bottom-0 rounded-lg w-full md:w-fit py-2 md:px-8 border-2 ${
              theme === "winter"
                ? "text-light-text bg-base-100"
                : "text-dark-text bg-neutral-content"
            } `}
          >
            <a href="https://www.malt.fr/profile/clemencepham" target="blank">
              Consulter le TJM
            </a>
          </button>
        </div>
      </motion.div>
      <div
        className={`h-[2px] mb-10 ${
          theme === "winter" ? "bg-light-text" : "bg-dark-text"
        } `}
      ></div>
      <motion.div variants={itemVariants} initial="hidden" animate="visible">
        <div
          className={`border-2 rounded-lg flex flex-col gap-4 p-4 mb-8 ${
            theme === "winter"
              ? "border-light-text   text-light-text"
              : "border-dark-text text-dark-text"
          } `}
        >
          <div>
            <span className="text-sm">Email</span>
            <p>
              <a className="text-sm md:text-base" href="mailto:clemencepham.web@gmail.com">
                clemencepham.web@gmail.com
              </a>
            </p>
          </div>
          <div>
            <span className="text-sm">Whatsapp</span>
            <p>+33 782 17 006 10</p>
          </div>
        </div>
      </motion.div>
      <div className="md:fixed md:inset-x-0 md:bottom-2">
      <Footer />
      </div>
    </motion.section>
  );
}

export default Contact;
