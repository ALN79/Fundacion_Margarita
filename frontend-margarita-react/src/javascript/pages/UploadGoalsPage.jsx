import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function UploadGoalsPage() {

    const [titleGoal, setTitleGoal] = useState("");
    const [descriptionGoal, setDescriptionGoal] = useState("");

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
                <motion.div className="bg-yellow-400 shadow-lg flex justify-evenly">
                    <section className='flex flex-row '>
                        <div>
                            <label htmlFor="number-input" className="block mb-2 text-2xl font-medium text-white ">Monto a recaudar</label>
                            <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="border border-black rounded-md bg-white w-32" placeholder="$1000" required min={0} />
                        </div>
                        <div className='mx-10'>
                            <label for="email-goal" className="block mb-2 text-sm font-medium text-white">Correo Electronico</label>
                            <input type="text" id="email-goal" className="block w-full p-2"></input>
                        </div>

                        <div>
                            <label for="phone-goal" className="block mb-2 text-sm font-medium  text-white">Telefono</label>
                            <input type="text" id="phone-goal" className="block w-full p-2 "></input>
                        </div>
                    </section>
                    <section>
                        <button className='bg-yellow-300 text-white py-3 px-5 rounded-md'>SUBIR</button>
                    </section>
                </motion.div>
            </form>
            <Footer />
        </div>
    )
}


