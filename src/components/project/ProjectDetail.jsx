import ModalDetails from "./ModalDetails";

export default function ProjectDetail(projectList) {
  return (
    <div className="border-black border-2 bg-white dark:bg-zinc-200 flex flex-col items-center max-[768px]:my-2 pt-4 pb-2">
      <img className="px-4" src={projectList.thumbnail} alt={projectList.title} />
      <p className="font-semibold tracking-wide uppercase bg-[#C3FA4F] mt-2 py-1 px-3">&lt; {projectList.title} /&gt;</p>
      <div className="flex gap-2 mt-1">
       <p className="text-center font-medium"> stack :</p>
       <div className="flex gap-2">
        {projectList.stacks.map((stack) => {
          return <p>{stack}</p>;
        })}
        </div>
      </div>
      <ModalDetails key={projectList.id} {...projectList} />
    </div>
  );
}
