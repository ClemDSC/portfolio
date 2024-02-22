import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

import HomeHero from "../components/home/HomeHero";
import HomeProjects from "../components/home/HomeProjects";
import Footer from "../components/Footer";

function Home() {
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
       <motion.section
      initial="hidden"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="flex flex-col gap-8 md:gap-16 py-8 md:pt-[5%]"
    >
      <HomeHero theme={theme} />

      <motion.section
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        className="flex flex-col"
      >
        <HomeProjects />
      </motion.section>
    </motion.section>
    <Footer />
    </motion.div>
  );
}

export default Home;
