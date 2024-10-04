import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { motion } from 'framer-motion'
import { uploadGoals } from '../services/services.goals/uploadGoals.js'

export function UploadGoalsPage() {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [titleGoal, setTitleGoal] = useState("");
    const [descriptionGoal, setDescriptionGoal] = useState("");
    const [selectedType, setSelectedType] = useState('Dinero');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.substr(0, 5) === "image") {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewUrl(null);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.type.substr(0, 5) === "image") {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSelectChange = (e) => {
        setSelectedType(e.target.value);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <motion.div className="bg-yellow-400 flex justify-center shadow-lg">
                <h1 className="text-3xl md:text-5xl text-white p-4">SUBE TU CAUSA</h1>
            </motion.div>

            <form action="" className='flex-grow' onSubmit={uploadGoals}>
                <div className='flex flex-col md:flex-row w-full md:items-center md:space-x-8 md:px-8 lg:px-16 py-8'>
                    <section className="flex items-center justify-center md:w-1/2">
                        <label
                            htmlFor="dropzone-file-goal"
                            className="flex flex-col items-center justify-center w-64 h-64 md:w-80 md:h-80 border-2 border-black hover:border-white border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-yellow-300 text-black hover:text-white hover:rounded-2xl transition-all overflow-hidden"
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            {previewUrl ? (
                                <img src={previewUrl} alt="Vista previa" className="w-full h-full object-cover border border-yellow-300" />
                            ) : (
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm"><span className="font-semibold">Sube una imagen</span></p>
                                    <p className="text-xs">Sube la imagen que represente tu causa</p>
                                </div>
                            )}
                            <input
                                id="dropzone-file-goal"
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                        </label>
                    </section>
                    <section className='flex justify-center md:w-1/2'>
                        <div className='flex flex-col w-full max-w-md px-4 md:px-0 space-y-6'>
                            <div>
                                <label htmlFor="title-goal" className="block text-sm font-medium text-black mb-2">Titulo De La Causa</label>
                                <input id="title-goal"
                                    value={titleGoal}
                                    onChange={(e) => setTitleGoal(e.target.value)}
                                    className={`resize-none block w-full px-3 py-2 text-black border border-black rounded-sm bg-gray-50 transition-all hover:bg-yellow-300 ${titleGoal ? "bg-yellow-300" : ""}`}
                                />
                            </div>
                            <div>
                                <label htmlFor="description-goal" className="block text-sm font-medium text-black mb-2">Descripción de la Causa</label>
                                <textarea
                                    id="description-goal"
                                    value={descriptionGoal}
                                    onChange={(e) => setDescriptionGoal(e.target.value)}
                                    className={`resize-none block w-full h-64 px-3 py-2 text-black border border-black rounded-sm bg-gray-50 transition-all hover:bg-yellow-300 ${descriptionGoal ? "bg-yellow-300" : ""}`}
                                />
                            </div>
                        </div>
                    </section>
                </div>

                <motion.div className="bg-yellow-400 shadow-lg p-4 md:p-8 flex justify-center">
                    <section className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-start md:items-end">
                        {/* Monto a recaudar (solo visible si "Dinero" está seleccionado) */}
                        {selectedType === "Dinero" && (
                            <div className="flex flex-col w-full md:w-auto">
                                <label htmlFor="number-goal" className="block mb-2 text-sm font-medium text-white">Monto a recaudar</label>
                                <input
                                    type="number"
                                    id="amount-goal"
                                    className="border border-black rounded-md bg-white w-full md:w-32 p-2"
                                    placeholder="$1000"
                                    required
                                    min={0}
                                />
                            </div>
                        )}

                        <div className="flex flex-col w-full md:w-auto">
                            <label htmlFor="type-goal" className="block mb-2 text-sm font-medium text-white">¿Qué necesitas?</label>
                            <select
                                id="type-goal"
                                value={selectedType}
                                onChange={handleSelectChange}
                                className="block w-full md:w-40 px-3 py-2 border border-black bg-white rounded-md shadow-sm"
                            >
                                <option value="Dinero">Dinero</option>
                                <option value="Ropa">Ropa</option>
                                <option value="Mercaderia">Mercadería</option>
                                <option value="Muebles">Muebles</option>
                                <option value="Juguetes">Juguetes</option>
                            </select>
                        </div>

                        <div className="flex flex-col w-full md:w-auto">
                            <label htmlFor="email-goal" className="block mb-2 text-sm font-medium text-white">Correo</label>
                            <input
                                type="email"
                                id="email-goal"
                                className="block w-full md:w-48 p-2 border border-black rounded-md"
                                placeholder="example@mail.com"
                            />
                        </div>

                        <div className="flex flex-col w-full md:w-auto">
                            <label htmlFor="number-goal" className="block mb-2 text-sm font-medium text-white">Teléfono:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                    </svg>
                                </div>
                                <input
                                    type="tel"
                                    id="number-goal"
                                    className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full ps-10 p-2.5"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    placeholder="123-456-7890"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="bg-yellow-300 text-black hover:bg-yellow-500 hover:transform hover:text-white hover:scale-105 transition-all py-3 px-6 rounded-md w-full md:w-auto mt-4 md:mt-0">
                            SUBIR
                        </button>
                    </section>
                </motion.div>
            </form>
            <Footer />
        </div>
    )
}