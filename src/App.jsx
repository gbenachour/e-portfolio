import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProject from './pages/AddProject'
import Animes from './pages/Animes'
import Portfolio from './pages/Portfolio'
import SingleAnime from './pages/SingleAnime'
import projectsData from './assets/projects'
import Layout from './components/Layout'
import useLocalStorage from './services/useLocalStorage'

function App() {
  const [projects, setProjects] = useLocalStorage("projects", projectsData)
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false)

  function addProject(formData) {
    const projectData = Object.fromEntries(formData)
    const badges = formData.getAll("badges")
    const allProjectData = {
      ...projectData,
      id: projectData.title,
      badges
    }
    console.log(allProjectData)
    setProjects(prevProjects => [...prevProjects, allProjectData])
  }

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  function deleteProject(id) {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== id))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}>
          <Route path="/" element={<Portfolio projects={projects} deleteProject={deleteProject}/>} />
          <Route path="/add-project" element={<AddProject addProject={addProject} />} />
          <Route path="/animes" element={<Animes />} />
          <Route path="/animes/:id" element={<SingleAnime />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
