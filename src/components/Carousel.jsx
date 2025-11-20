import { useState, useEffect } from 'react';

const Carousel = ({ images, autoSlide = true, autoSlideInterval = 5000, animes }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (autoSlide) {
            const slideInterval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % animes.data.length);
            }, autoSlideInterval);
            return () => clearInterval(slideInterval);
        }
    }, [autoSlide, autoSlideInterval, images.length]);

    return (
        <div className="relative w-full mx-auto bg-slate-950">
            <div className="overflow-hidden relative h-120">
                {animes.data.map((anime, index) => (
                    <>
                        <a
                            key={index}
                            href={anime.trailer.embed_url}
                            target="_blank"
                            rel="noreferrer"
                            className={`absolute opacity-40 inset-0 transition-transform delay-150 duration-800 ease-in-out transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        >
                            <img src={anime.trailer.images.maximum_image_url} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                        </a>
                        <h3 className={`absolute top-80 right-0 mr-10 bg-slate-950 text-3xl text-white z-0 p-2 transition-transform delay-150 duration-800 ease-in-out transform ${index === currentIndex ? 'z-10' : 'z-2 hidden'}`}>{anime.title}</h3>

                    </>
                ))}
            </div>
        </div>
    );
};

export default Carousel;