import { useEffect, useState } from "react"
import { getAnimeBySearch, getTopAnimes } from "../services/apiService"
import CardList from "../components/CardList"
import LoadingSpinner from "../components/LoadingSpinner"
import Carousel from "../components/Carousel"
import { FaSearch } from "react-icons/fa";

function Animes() {
    const [searchText, setSearchText] = useState(undefined)
    const [topAnimesData, setTopAnimesData] = useState(undefined)
    const [searchedAnimesData, setSearchedAnimesData] = useState(undefined)
    const [topLoading, setTopLoading] = useState(false)
    const [searchLoading, setSearchLoading] = useState(false)

    function setSearchAnimes(formData) {
        setSearchText(formData.get("anime-search"))
    }

    async function fetchTopAnimes() {
        setTopLoading(true)
        const topAnimes = await getTopAnimes()
        setTopLoading(false)
        setTopAnimesData(topAnimes)
    }

    async function searchAnimes() {
        setSearchLoading(true)
        const searchResults = await getAnimeBySearch(searchText)
        console.log(searchResults)
        setSearchLoading(false)
        setSearchedAnimesData(searchResults)
    }

    useEffect(() => {
        searchText && searchAnimes()
        !topAnimesData && fetchTopAnimes()
    }, [searchText])

    const searchedAnimeElement = searchLoading ? <LoadingSpinner /> : (
        searchedAnimesData && searchedAnimesData.status === 200 ? (
            <>
                <CardList animes={searchedAnimesData.data} section={`Search results for ${searchText}`} />
                <hr className="h-px mt-30 mb-10 bg-gray-200 border-0 dark:bg-gray-700 " />
            </>
        ) : (
            undefined
        )
    )

    const topAnimeElement = 
        topAnimesData && topAnimesData.status === 200 &&
        <CardList animes={topAnimesData.data} section={"Top Animes"} />
    

    return (
        topLoading ? <LoadingSpinner /> : (
            topAnimesData && topAnimesData.status === 200 && (
            <main className="w-full dark:bg-gray-950 dark:text-gray-200">
                <Carousel animes={topAnimesData} images={[topAnimesData.data[0].trailer.images.maximum_image_url, topAnimesData.data[1].trailer.images.maximum_image_url]} />
                <form action={setSearchAnimes} className="max-w-xl lg:max-w-5xl mx-auto pt-20">
                    <label htmlFor="anime-search" className="mb-2 text-sm font-medium text-gray-50 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="anime-search"
                            name="anime-search"
                            className="block w-full p-4 ps-10 text-sm dark:text-gray-100 border border-gray-200 dark:border-gray-500 rounded-lg dark:bg-gray-900 bg-gray-100"
                            placeholder="Rechercher un anime"
                            required
                        />
                        <button
                            className="text-white absolute end-1/1900 bottom-1/100 top-1/100 dark:border-gray-500 border-l border-gray-200  top-0 bg-red-600 dark:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            <FaSearch />
                        </button>
                    </div>
                </form>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    {searchedAnimeElement || topAnimeElement}
                </div>
            </main>
        ))
    )
}

export default Animes