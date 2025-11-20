import { ChevronDownIcon } from '@heroicons/react/16/solid'

function AddProject({ addProject }) {
    return (
        <form action={addProject} className='pt-10 xl:px-100 px-20 min-w-full min-h-[calc(100vh-181px)] dark:bg-gray-950 dark:text-gray-200 bg-gray-50'>
            <div className="space-y-35">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className=" my-20 text-4xl font-bold text-center dark:text-gray-200">Nouveau Projet</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-xl font-medium dark:text-gray-300">
                                Titre
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md pl-3 outline-1 outline-gray-300 dark:bg-gray-900 bg-gray-100 focus-within:-outline-offset-2 focus-within:outline-gray-400 dark:focus-within:outline-red-300">
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        placeholder="Application Full Stack"
                                        className="outline-none min-w-full py-1.5 pr-3 pl-1 text-base text-gray-900 dark:text-gray-100  placeholder:text-gray-400 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="year" className="block text-xl font-medium dark:text-gray-300">
                                Année
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="year"
                                    name="year"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-100 dark:bg-gray-900 dark:text-gray-400 py-1.5 pr-8 pl-3 text-base text-slate-600 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400 dark:focus:outline-red-300 sm:text-sm/6"
                                >
                                    <option value="" disabled default>Choisis une année</option>
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>

                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-xl font-medium dark:text-gray-300">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className="block w-full rounded-md bg-gray-200 dark:bg-gray-900 px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-200 dark:focus:outline-red-200 sm:text-sm/6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                        <div className="col-span-full space-y-10">
                            <fieldset>
                                <legend className="text-xl font-medium">Badges</legend>
                                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="flex gap-3 sm:col-span-2">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input
                                                    id="Cloud"
                                                    name="badges"
                                                    type="checkbox"
                                                    value="Cloud"
                                                    className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white checked:border-red-600 checked:bg-red-600 indeterminate:border-red-600 indeterminate:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label htmlFor="Cloud" className="font-medium">
                                                Cloud
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 sm:col-span-2">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input
                                                    id="Web"
                                                    name="badges"
                                                    type="checkbox"
                                                    value="Web"
                                                    className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label htmlFor="web-development" className="font-medium ">
                                                Web
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 sm:col-span-2">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input
                                                    id="Securité"
                                                    name="badges"
                                                    type="checkbox"
                                                    value="Securité"
                                                    className="col-start-1 row-start-1 rounded-sm border border-skate-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label htmlFor="Securité" className="font-medium ">
                                                Sécurité
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 sm:col-span-2">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input
                                                    id="Programmation"
                                                    name="badges"
                                                    type="checkbox"
                                                    value="Programmation"
                                                    className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label htmlFor="Programmation" className="font-medium">
                                                Programmation
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 sm:col-span-2">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input
                                                    id="IoT"
                                                    name="badges"
                                                    type="checkbox"
                                                    value="IoT"
                                                    className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label htmlFor="Programmation" className="font-medium">
                                                IoT
                                            </label>
                                        </div>
                                    </div>
                                
                                <div className="flex gap-3 sm:col-span-2">
                                    <div className="flex h-6 shrink-0 items-center">
                                        <div className="group grid size-4 grid-cols-1">
                                            <input
                                                id="AI"
                                                name="badges"
                                                type="checkbox"
                                                value="AI"
                                                className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-sm/6">
                                        <label htmlFor="Programmation" className="font-medium">
                                            AI
                                        </label>
                                    </div>
                                </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>

            </div>

            <div className="py-6 flex items-center justify-end gap-x-6">
                <button
                    type="submit"
                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                    Ajouter
                </button>
            </div>
        </form>
    )
}


export default AddProject