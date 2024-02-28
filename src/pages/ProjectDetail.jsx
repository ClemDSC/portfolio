import { Link, useParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

import projectsData from "../data/details-projects.json";
import ButtonToBack from "../utils/ButtonToBack";
import Footer from "../components/Footer";
// import ButtonToTop from "../utils/ButtonToTop";

function ProjectDetail() {
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

  const { keyurl } = useParams();

  const project = projectsData.projects.find((p) => p.keyurl === keyurl);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

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
      <ButtonToBack />
      <div className="divider divider-neutral"></div>
      <section className="flex flex-col">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="md:flex md:gap-8"
        >
          <div className="md:w-1/2 md:flex md:flex-col">
            <div className="md:pb-4">
              <h2 className="text-3xl md:text-4xl my-2">{project.title}</h2>
              <span className="badge badge-neutral mb-4">{project.type}</span>
            </div>

            <p className="mt-2 mb-4 md:mb-8">{project.description}</p>
            <Link to={`${project.link}`} target="_blank">
              <button
                className={`hidden border-2 rounded-lg py-2 px-4 md:px-8 mb-10 lg:block w-fit ${
                  theme === "winter"
                    ? "text-light-text bg-base-100"
                    : "text-dark-text bg-neutral-content"
                }}`}
              >
                Voir le site
              </button>
            </Link>
          </div>
          <Link to={`${project.link}`} target="_blank" className="md:w-1/2">
            <div className="mb-4 md:mb-8">
              <img
                className="rounded-lg"
                src={project.thumbnail}
                alt={project.title}
              />
            </div>
            <button
              className={`border-2 rounded-lg py-2 px-4 md:px-8 mb-10 lg:hidden ${
                theme === "winter"
                  ? "text-light-text bg-base-100"
                  : "text-dark-text bg-neutral-content"
              }}`}
            >
              Voir le site
            </button>
          </Link>
        </motion.div>

        <article className="flex flex-col">
          <motion.span
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl mb-2"
          >
            | Projet
          </motion.span>
          <p className="badge badge-neutral badge-outline mt-2 mb-4 ">
            {project.devDate}
          </p>
          <div className="text-sm flex flex-wrap gap-2 mb-4">
            {project.role.map((c, index) => (
              <span className="badge badge-neutral" key={index}>
                {c}
              </span>
            ))}
          </div>
          <p className="mt-2 mb-6 md:mb-8">{project.descriptiondetail}</p>

          {project.contrainte && (
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="text-2xl">
                | Besoins
                <br className="md:hidden" />
                <span className="text-transparent">|</span>& contraintes
              </span>
              <div className="mt-2 mb-6 md:mb-8">
                {project.contrainte.map((c, index) => (
                  <p key={index}>{c}</p>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="md:flex md:gap-32"
          >
            <div>
              <span className="text-2xl">| Stack</span>
              <div className="mt-2 mb-2 flex gap-2">
                {project.stacks.map((stack, index) => (
                  <p className="badge badge-neutral" key={index}>
                    {stack}
                  </p>
                ))}
              </div>
              <div className="mt-2 mb-6 md:mb-8 flex gap-2">
                {project.language.map((stack, index) => (
                  <p className="badge badge-neutral badge-outline" key={index}>
                    {stack}
                  </p>
                ))}
              </div>
            </div>
            {project.github !== "" && (
              <div className="flex flex-col">
                <span className="text-2xl">| Github</span>
                <div className="mt-2 mb-6 md:mb-2">
                  {project.github.map((link, index) => (
                    <Link
                      to={`${link}`}
                      target="_blank"
                      key={index}
                      className="badge badge-neutral mr-2"
                    >
                      {project.githubname[index]}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </article>

        <div className="flex flex-col gap-4 mb-6 md:mb-8 md:flex-row">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="carousel carousel-center w-full p-4 space-x-4 border border-neutral rounded-box "
          >
            {project.pictures.map((picture, index) => (
              <div key={index} className="carousel-item max-w-[90%]">
                <div className="mockup-window border">
                  <div className="flex h-full aspect-video justify-center bg-base-200 max-h-40 md:max-h-[initial]">
                    <img
                      src={picture}
                      className="object-cover aspect-video object-top"
                      alt={project.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="h-96 md:h-[28rem] carousel carousel-vertical border border-neutral rounded-box md:w-1/2"
          >
            {project.picturesmobile &&
              project.picturesmobile.map((picture, index) => (
                <div key={index} className="carousel-item p-4">
                  <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                      <img
                        src={picture}
                        className="object-cover object-center"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
        {project.testimonial !== "" && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className={`rounded-lg py-6 px-4 md:px-8 mb-2 ${
              theme === "winter"
                ? "text-light-text bg-base-100 border border-light-text"
                : "bg-dark-text text-neutral-content border border-primary"
            }}`}
          >
            <p className="mb-4">"{project.testimonial}"</p>
            <p className="text-sm text-end">{project.testimonialAuthor}</p>
            <p className="text-sm text-end">{project.testimonialrole}</p>
          </motion.div>
        )}
      </section>
      <div className="divider divider-neutral"></div>

      <Footer />
    </motion.div>
  );
}

export default ProjectDetail;
