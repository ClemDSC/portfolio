import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

import Tools from "../components/about/Tools";
import Technologies from "../components/about/Technologies";
import Footer from "../components/Footer";

function About() {
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

  const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className={`height-full width-full fixed bottom-0 md:right-0 overflow-scroll mx-4 md:ml-0 my-2 p-4  md:px-[12%] rounded-lg text-lg  ${
        theme === "winter"
          ? "bg-light-white"
          : "bg-neutral-content text-dark-text"
      }  shadow`}
    >
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl font-barlow font-bold py-8 md:pt-[5%]"
      >
        Clémence Pham
        <br />
        <span className="text-3xl font-montserrat">Développeuse web</span>
      </motion.h2>
      <motion.section
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col gap-4 pb-8 md:pb-16"
      >
        <h3>
          Je suis <span className="font-bold">Clémence</span>, développeuse web
          depuis plusieurs années.
          <br />
          J'habite Tours, au coeur des Châteaux de la Loire, en France.
        </h3>
        <h4 className="font-black text-xl py-4">
          Du CMS au développement full-stack : une expertise élargie
        </h4>
        <p>
          En 2016, j'ai fait mes premiers pas dans le développement web en
          créant mon site web avec WordPress. Cette expérience m'a permis
          d'acquérir une solide connaissance des CMS et de leurs
          fonctionnalités.
        </p>
        <p>
          Désireuse d'aller plus loin et de maitriser la création de sites web
          complets, je me suis ensuite formée à des langages et technologies,
          toujours axés web.
        </p>
        <p>
          Je suis aujourd'hui une
          <span className="font-black"> développeuse web full-stack</span> capable
          de répondre à une large gamme de besoins en matière de création web,
          du design à la mise en ligne.
        </p>
      </motion.section>
      <motion.section
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col gap-4 pb-8 md:pb-16"
      >
        <Tools />
      </motion.section>
      <motion.section
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col gap-4 pb-8 md:pb-16"
      >
        <Technologies />
      </motion.section>
      <Footer />
    </motion.div>
  );
}

export default About;
