import { useParams } from "react-router-dom"
import { getAnimeById } from "../services/apiService"
import { useState, useEffect } from "react"


export default function SingleAnime() {
    const params = useParams()
    const [animeData, setAnimeData] = useState(undefined)


    async function fetchSingleAnime() {
        const anime = await getAnimeById(params.id)
        setAnimeData(anime)
    }

    useEffect(() => {
        fetchSingleAnime()
    }, [])

    return (
        animeData &&
        <div className="w-full px-4">
            <div className="px-4 sm:px-0">
                <h3 className="text-base/7 font-semibold text-gray-900">Applicant Information</h3>
                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and application.</p>

            </div>
            <img
                alt={animeData.title}
                src={animeData.images.jpg.large_image_url}
                className="aspect-auto w-70 h-full rounded-md bg-gray-200 group-hover:opacity-75"
            />
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Title</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{animeData.title}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Status</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{animeData.status}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Episodes</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{animeData.episodes}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Rating</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{animeData.score}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Synopsis</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {animeData.synopsis}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    
    )
}
