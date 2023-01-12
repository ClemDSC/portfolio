import { useEffect, useState } from "react";
import axios from "axios";

import ProjectDetail from "./project/ProjectDetail";

export default function Projects() {
    const [projectList, setProjectList] = useState([])

    const fetchData = () => {
        axios.get("/data/details-projects.json")
        .then((res) => {
            setProjectList(res.data.projects);
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div id="projects" className="relative mt-12 shadow-[10px_10px_0_-2.5px_#c3fa4f] bg-dot py-4">
            <button className="cursor-default tracking-wide absolute left-20 -top-7 shadow-[10px_10px_0_-2.5px_#c3fa4f] bg-white dark:bg-zinc-100 border-black border-2 font-semibold text-2xl px-10 py-3 ">Projects</button>
            <div className="flex flex-col mt-12 max-[768px]:px-2 md:grid md:grid-cols-3 md:gap-4 md:px-4">
            {projectList.map((projectList) => {
                return <ProjectDetail key={projectList.id} {...projectList} />
            })}
            </div>
        </div>
    )
}