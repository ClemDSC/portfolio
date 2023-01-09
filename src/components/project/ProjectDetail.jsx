export default function ProjectDetail(projectList) {
  return (
    <div className="border-black border-2 bg-white dark:bg-zinc-200 flex flex-col items-center pt-4 pb-2  md:w-[30%]">
      <img className="w-[80%]" src={projectList.thumbnail} alt={projectList.title} />
      <p className="font-semibold tracking-wide uppercase bg-[#C3FA4F] py-1 px-2">&lt; {projectList.title} /&gt;</p>
      <div className="flex gap-2">
       <p className="text-center"> Technos :</p>
       <div className="flex gap-2">
        {projectList.technos.map((techno) => {
          return <p>{techno}</p>;
        })}
        </div>
      </div>
    </div>
  );
}
