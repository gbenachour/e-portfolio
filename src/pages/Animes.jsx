import { useEffect, useState } from "react"
import { getAnimeBySearch, getTopAnimes } from "../services/apiService"
import CardList from "../components/CardList"

function Animes() {
    const [searchText, setSearchText] = useState(undefined)
    const [topAnimesData, setTopAnimesData] = useState(undefined)
    const [searchedAnimesData, setSearchedAnimesData] = useState(undefined)

    function setSearchAnimes(formData) {
        setSearchText(formData.get("anime-search"))
    }

    async function fetchTopAnimes() {
        const topAnimes = await getTopAnimes()
        setTopAnimesData(topAnimes)
    }

    async function searchAnimes() {
        const searchResults = await getAnimeBySearch(searchText)
        setSearchedAnimesData(searchResults)
    }

    useEffect(() => {
        searchText && searchAnimes()
        !topAnimesData && fetchTopAnimes()
    }, [searchText])

    return (
        <div className="w-full px-4">
            <form action={setSearchAnimes} className="max-w-xl lg:max-w-5xl mx-auto mt-20">
                <label htmlFor="anime-search" className="mb-2 text-sm font-medium text-slate-50 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-slate-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="anime-search"
                        name="anime-search"
                        className="block w-full p-4 ps-10 text-sm text-slate-950 border border-gray-300 rounded-lg bg-slate-50"
                        placeholder="Search for Animes"
                        required
                    />
                    <button
                        className="text-white absolute end-2.5 bottom-2.5 bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Search
                    </button>
                </div>
            </form>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {searchedAnimesData &&
                    <>
                        <CardList animes={searchedAnimesData} section={`Search results for ${searchText}`} />
                        <hr className="h-px mt-30 mb-10 bg-gray-200 border-0 dark:bg-gray-700 " />
                    </>
                }
                <CardList animes={topAnimesData} section={"Top Animes"} />
            </div>
        </div>
    )
}

export default Animes