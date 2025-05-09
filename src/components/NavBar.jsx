import { Link, useLocation } from 'react-router-dom'

const pages = [
    {
        id: 'home',
        name: 'Home',
        route: '/'
    },
    {
        id: 'projects',
        name: 'Projects',
        route: '/projects'
    },
    {
        id: 'animes',
        name: 'Animes',
        route: '/animes'
    }
]

export default function NavBar() {
    const location = useLocation()
    
    return (
        <header className="relative inset-x-0 top-0 z-50 bg-slate-950">
            <nav aria-label="Top" className="flex items-center justify-between p-6 lg:px-8">
                {/* Logo */}
                <div className="flex justify-center">
                    <Link to="/" className="flex flex-row items-center  -m-1.5 p-1.5">
                    <span className="sr-only">Anime E-Portfolio</span>
                    <img
                        alt=""
                        src="/anime-icon.svg"
                        className="h-18 w-auto"
                    />
                    {/* <h1 className='text-2xl font-medium text-slate-100 ml-2'>Anime E-Portfolio</h1> */}
                    </Link>
                </div>
                {/* <ul className="hidden lg:flex lg:gap-x-12"> */}
                <ul className="flex gap-x-12">
                    {pages.map((page) => (
                        <li key={page.name} >
                            <Link 
                                to={page.route}
                                className={
                                    location.pathname === page.route ? 
                                    "flex items-center border-b-2 border-red-600 pt-px text-lg font-medium text-red-600"
                                    :
                                    "flex items-center border-b-2 border-transparent pt-px text-lg font-medium text-slate-200 transition-colors duration-200 ease-out hover:text-red-600"
                                }
                            >
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
