import ProjectList from "../components/ProjectList";


function ProjectsSection({ projects, deleteProject }) {
    return (
        <section className="py-10 px-8 bg-gray-150 max-w-6xl mx-auto">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-20">Projets</h1>
            </div>
            <ProjectList projects={projects} deleteProject={deleteProject} />
        </section>
    )
}

export default ProjectsSection