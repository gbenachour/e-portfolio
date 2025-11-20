import { Link, useLocation } from 'react-router-dom'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const pages = [
    {
        id: 'home',
        name: 'Accueil',
        route: '/'
    },
    {
        id: 'add-project',
        name: 'Formulaire',
        route: '/add-project'
    },
    {
        id: 'animes',
        name: 'Animes',
        route: '/animes'
    }
]

export default function NavBar({darkMode, toggleDarkMode}) {
    const location = useLocation()
    return (
        <header className="relative inset-x-0 top-0 z-50 bg-gray-50 border-b-1 border-gray-200 text-gray-900 dark:bg-gray-950 dark:border-gray-800 max-h-25 dark:text-gray-300">
            <nav aria-label="Top" className="flex md:flex-row py-8 sm:flex-col items-center md:justify-between p-6 lg:px-8">
                {/* Logo */}
                <div className="flex justify-center">
                    <Link to="/" className="md:visible invisible h-0 flex flex-row items-center  -m-1.5 p-1.5">
                    <span className="sr-only">Anime E-Portfolio</span>
                    <img
                        alt=""
                        src="/anime-icon.svg"
                        className="h-18 w-auto"
                    />
                    </Link>
                </div>

                <ul className="flex gap-x-12">
                    {pages.map((page) => (
                        <li key={page.name} >
                            <Link 
                                to={page.route}
                                className={
                                    location.pathname === page.route ? 
                                    "flex items-center border-b-2 border-red-600 pt-px text-lg font-medium text-red-600"
                                    :
                                    "flex items-center border-b-2 border-transparent pt-px text-lg font-medium text-gray-800 dark:text-gray-200 transition-colors duration-200 ease-out hover:text-red-600"
                                }
                            >
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className='flex justify-center text-3xl text-red-600 dark:text-gray-100 hover:cursor-pointer' onClick={toggleDarkMode}>
                    {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                </button>
            </nav>
        </header>
    )
}
