import ProjectDetail from "./project/ProjectDetail";

export default function Projects() {
    return (
        <div id="projects" className="relative mt-12 shadow-[10px_10px_0_-2.5px_#c3fa4f] bg-white border-black border-2 h-32">
            <button className="cursor-default absolute left-20 -top-7 shadow-[10px_10px_0_-2.5px_#c3fa4f] bg-white border-black border-2 text-xl px-10 py-3 ">Projects</button>
            <ProjectDetail />
        </div>
    )
}