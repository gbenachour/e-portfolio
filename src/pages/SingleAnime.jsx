import { Link, useParams } from "react-router-dom"
import { getAnimeById } from "../services/apiService"
import { useState, useEffect } from "react"
import LoadingSpinner from "../components/LoadingSpinner"
import AnimeNotFound from "../components/AnimeNotFound"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


export default function SingleAnime() {
    const params = useParams()
    const [animeData, setAnimeData] = useState(undefined)
    const [loading, setLoading] = useState(true)

    async function fetchSingleAnime() {
        setLoading(true)
        const anime = await getAnimeById(params.id)
        setAnimeData(anime)
        setLoading(false)
    }

    useEffect(() => {
        fetchSingleAnime()
    }, [params.id])

    const animeElement = loading ? <LoadingSpinner /> : (

        <main className="py-20 flex flex-col items-center w-full min-h-[calc(100vh-181px)] dark:bg-gray-950 bg-gray-50">

            <div className="mx-auto aspect-auto flex flex-row items-center gap-10 text-center my-10">

                <Link to={`/animes/${parseInt(params.id) - 1}`} className="rounded-md text-zinc-900 dark:text-red-900 text-4xl shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 cursor-pointer">
                    <FaAngleLeft />
                </Link>
                {animeData && animeData.status === 200 ? (

                    <img
                        alt={animeData.data.title}
                        src={animeData.data.images.jpg.large_image_url}
                        className="h-full rounded-md bg-gray-200 group-hover:opacity-75"
                    />
                ): <AnimeNotFound id={params.id} />
                }
                <Link to={`/animes/${parseInt(params.id) + 1}`} className="rounded-md text-zinc-900 dark:text-red-900 text-4xl shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 cursor-pointer">
                    <FaAngleRight />
                </Link>
            </div>
            {animeData && animeData.status === 200 && (
                <div className="border-t border-gray-100 dark:border-red-900 w-1/2">
                    <dl className="divide-y divide-gray-100 dark:divide-red-900 mb-10">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-medium text-gray-900 dark:text-gray-100">Titre</dt>
                            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">{animeData.data.title}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-medium text-gray-900 dark:text-gray-100 dark:text-gray-300">Status</dt>
                            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">{animeData.data.status}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-medium text-gray-900 dark:text-gray-100">Épisodes</dt>
                            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">{animeData.data.episodes}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-medium text-gray-900 dark:text-gray-100">Note</dt>
                            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">{animeData.data.score}</dd>
                        </div>
                    </dl>
                        <span className="w-full text-md mt-100 text-md  dark:text-gray-300 mx-auto italic">
                            {animeData.data.synopsis}
                        </span>
                </div>)}

        </main>
    ) 

    return animeElement





}
