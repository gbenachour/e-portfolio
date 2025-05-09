import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AddProject from './pages/AddProject'
import Animes from './pages/Animes'
import Portfolio from './pages/Portfolio'
import Projects from './pages/Projects'
import SingleProject from './pages/SingleProject'
import SingleAnime from './pages/SingleAnime'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/:id" element={<SingleProject />}/>
        <Route path="/add-project" element={<AddProject />}/>
        <Route path="/animes" element={<Animes />}/>
        <Route path="/animes/:id" element={<SingleAnime />}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
