import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function UploadGoalsPage() {

    const [titleGoal, setTitleGoal] = useState("");
    const [descriptionGoal, setDescriptionGoal] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div>
            <Header />
            <motion.div className="bg-yellow-400 flex justify-center shadow-lg">
                <h1 className="text-5xl text-white p-4">SUBE TU CAUSA</h1>
            </motion.div>

            <form action="" className='overflow-hidden'>
                <div className='flex flex-row w-screen'>
                    <section className="flex items-center justify-start pl-64 py-36 w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-96 h-96 border-2 border-black hover:border-white border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-yellow-300 text-black hover:text-white hover:rounded-2xl transition-all">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm"><span className="font-semibold">Sube una imagen</span></p>
                                <p className="text-xs">Sube la imagen que represente tu causa</p>
                            </div>
                            <input id="dropzone-file-goal" type="file" className="hidden" />
                        </label>
                    </section>
                    <section className='flex justify-end w-full'>
                        <div className='flex flex-col'>
                            <div className="mx-64 mb-10 mt-12">
                                <label htmlFor="title-goal" className="block text-sm font-medium text-center text-black">Titulo De La Causa</label>
                                <input id="title-goal"
                                    value={titleGoal}
                                    onChange={(e) => setTitleGoal(e.target.value)}
                                    className={`resize-none block px-1 w-96 text-black border border-black rounded-sm bg-gray-50 transition-all hover:bg-yellow-300 ${titleGoal ? "bg-yellow-300" : ""
                                        }`}
                                />
                            </div>
                            <div className="mx-64">
                                <label htmlFor="description-goal" className="block text-sm font-medium text-center text-black">Descripción de la Causa</label>
                                <textarea
                                    id="description-goal"
                                    value={descriptionGoal}
                                    onChange={(e) => setDescriptionGoal(e.target.value)}
                                    className={`resize-none block px-1 w-96 h-96 text-black border border-black rounded-sm bg-gray-50 transition-all hover:bg-yellow-300 ${descriptionGoal ? "bg-yellow-300" : ""
                                        }`}
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <motion.div className="bg-yellow-400 shadow-lg flex justify-between items-start p-10">
                    <section className="flex flex-row space-x-10">
                        <div className="flex flex-col">
                            <label htmlFor="number-input" className="block mb-2 text-md font-medium text-white">Monto a recaudar</label>
                            <input
                                type="number"
                                id="number-input"
                                aria-describedby="helper-text-explanation"
                                className="border border-black rounded-md bg-white w-32 p-2"
                                placeholder="$1000"
                                required
                                min={0}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="dropdown" className="block text-md font-medium text-white">
                                Selecciona una opción
                            </label>
                            <select
                                id="dropdown"
                                className="mt-1 block w-40 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="opcion1">Dinero</option>
                                <option value="opcion2">Ropa</option>
                                <option value="opcion3">Comida</option>
                                <option value="opcion4">Muebles</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email-goal" className="block mb-2 text-md font-medium text-white">Correo</label>
                            <input
                                type="email"
                                id="email-goal"
                                className="block w-48 p-2 border border-black rounded-md"
                                placeholder="example@mail.com"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label for="phone-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefóno:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                    </svg>
                                </div>
                                <input type="number" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border text-black text-sm rounded-lg block w-full ps-10 p-2.5  " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                            </div>
                        </div>
                    </section>
                    <section className="flex items-start">
                        <button className="bg-yellow-300 text-white py-3 px-5 rounded-md">
                            SUBIR
                        </button>
                    </section>
                </motion.div>

            </form>
            <Footer />
        </div>
    )
}


