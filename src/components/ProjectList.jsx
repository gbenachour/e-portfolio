import { FaGithub } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

function ProjectList({projects, deleteProject}) {
    function getBadgeStyle(badgeValue){
        const defaultStyle = "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"

        switch(badgeValue) {
            case "Web" :
                return defaultStyle + "bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-100 ring-gray-500/10 "
            case "Programmation":
                return defaultStyle + "bg-yellow-50 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-100 ring-yellow-600/20 "
            case "IoT":
                return defaultStyle + "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-50 ring-blue-700/10"
            case "AI":
                return defaultStyle + "bg-pink-50 dark:bg-pink-950 text-pink-700 dark:text-pink-50 ring-purple-700/10"
            default:
                return defaultStyle + "bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-50 ring-indigo-700/10"

        }
    }

    return (
        <div className="mt-16 flex-col space-y-15">
            {projects.map(project => (
                <div key={project.id} className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-950 dark:border-gray-700">
                    <button className="absolute right-5 text-red-600 dark:text-red-800 text-2xl hover:cursor-pointer" onClick={() => deleteProject(project.id)}><MdOutlineDeleteOutline/></button>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-950 dark:text-gray-100">{project.title}</h5>
                    <p className="my-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                    <div className="flex justify-between">
        
                        <a href={project.link} className="text-3xl items-center mt-3 h-full text-center text-gray-900  dark:text-red-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:hover:text-red-700 dark:focus:ring-gray-40">
                            <FaGithub />
        
                        </a>
                        <ul className="space-x-3 mt-3">
                            {project.badges.map((badge,index) =>  <li key={badge+index} className={getBadgeStyle(badge)}>{badge}</li>)}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectList