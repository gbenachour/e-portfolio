function PresentationSection({profile}) {
    return (
            <section className="flex justify-center items-center py-20 ">
                <div className="bg-gray-250 dark:bg-gray-950 md:flex shadow-sm p-12 shadow-lg rounded-lg max-w-4xl sm:w-full shadow-md sm:mx-15 border border-gray-200 dark:border-gray-700">
                    <img src={profile.picture} alt="profile" className=" text-center w-80 h-fit rounded-full mx-auto border-6 border-white dark:border-gray-800 shadow-md" />
                    <div className="md:flex flex-col space-y-10 my-auto sm:mt-10 md:pl-10 sm:text-center md:text-left">
                        <h1 className="pt-1 text-5xl font-bold text-gray-900 dark:text-gray-100">
                            {profile.name}
                        </h1>
                        <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-100">
                            {profile.desc}
                        </p>
                        <div className="inline-flex text-xl text-gray-600 space-x-5">
                            <a href="#">
                                <ion-icon name="logo-linkedin" className="hover:text-blue-700"></ion-icon>
                            </a>
                            <a href="#">
                                <ion-icon name="logo-github" className="hover:text-blue-500"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default PresentationSection