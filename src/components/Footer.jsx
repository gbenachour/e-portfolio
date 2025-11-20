import { Link } from "react-router-dom"


function Footer() {
    return (
        <footer className="relative inset-x-0 z-50 py-8 bg-gray-50 border-gray-200 text-gray-900 dark:bg-gray-950 border-t-1 dark:border-gray-800">
                <span className="block text-sm text-center dark:text-gray-300">© 2025 <Link to="/" className="hover:underline">Anime E-Portfolio</Link>. All Rights Reserved.</span>
        </footer>    
)
}

export default Footer