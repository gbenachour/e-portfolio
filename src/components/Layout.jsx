import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function Layout({darkMode, toggleDarkMode}) {
    return (
        <div className={`${darkMode ? "dark" : undefined } static`}>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout