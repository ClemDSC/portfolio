import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

import projectsData from "../data/details-projects.json";
import HomeProjectCard from "../components/home/HomeProjectCard";
import Footer from "../components/Footer";

function Projects() {
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
      <h2 className="text-3xl font-barlow font-bold py-8 md:pt-[5%]">Projets</h2>
      <p className="pb-8">Chaque projet est une aventure unique, explorez-les et contactez-moi pour en savoir plus.</p>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 pb-8"
      >
        {projectsData.projects.map((project) => (
          <HomeProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
      <Footer />
    </motion.section>
  );
}

export default Projects;
