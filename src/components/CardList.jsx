import { Link } from "react-router-dom"

function CardList({ animes, section }) {
    return (
        <>
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">{section}</h2>
            <div className="my-10 grid grid-cols-1 gap-x-10 sm:gap-y-25 lg:gap:y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {animes.map((anime) => (
                    <div key={anime.mal_id} className="group relative">
                        <img
                            alt={anime.title}
                            src={anime.images.jpg.large_image_url}
                            className="aspect-auto w-full h-full rounded-md bg-gray-200 group-hover:opacity-75"
                        />
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700 dark:text-gray-300">
                                    <Link to={`/animes/${anime.mal_id}`}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {anime.title}
                                    </Link>
                                </h3>
                                <p className="mt-1 text-sm text-red-600 dark:text-red-700">{anime.type}</p>
                            </div>
                            <p className="text-sm font-medium text-red-800">{anime.score}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardList