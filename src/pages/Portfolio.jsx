import profilePicture from "../assets/profile-picture.jpeg"
import PresentationSection from "../components/PresentationSection";
import ProjectsSection from "../components/ProjectsSection";

const profile = {
    name: "Ghazi Ben Achour",
    picture: profilePicture,
    desc: "IT Teacher - Cégep Marie-Victorin"
}

function Portfolio({ projects, deleteProject }) {

    return (
        <main className="min-w-full bg-gray-150 dark:bg-gray-950">
            <PresentationSection profile={profile} />
            
            <hr className="w-100 h-1 mx-auto my-4 bg-red-600 border-0 rounded-sm md:my-10 dark:bg-red-950" />
            
            <ProjectsSection projects={projects} deleteProject={deleteProject} />
        </main>
    )
}

export default Portfolio