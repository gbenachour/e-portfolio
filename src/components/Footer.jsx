import { Link } from "react-router-dom"


function Footer() {
    return (
        <footer className="bg-slate-950 w-full mx-auto p-4 py-8 border-gray-200 dark:border-gray-700">
                <span className="block text-sm text-center text-slate-200">© 2025 <Link to="/" className="hover:underline">Anime E-Portfolio</Link>. All Rights Reserved.</span>
        </footer>    
)
}

export default Footer