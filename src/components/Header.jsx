import NavBar from './NavBar'

function Header({darkMode, toggleDarkMode}) {
    return (
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    )
}

export default Header