import projectsData from "../../data/details-projects.json";
import HomeProjectCard from "./HomeProjectCard";

function HomeProjects() {
  const firstFourProjects = projectsData.projects.slice(0, 4);

  return (
    <>
      <h2 className="text-3xl font-barlow font-bold pb-6">Sélection</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        {firstFourProjects.map((project) => (
          <HomeProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default HomeProjects;
