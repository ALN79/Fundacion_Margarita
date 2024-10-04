import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { motion } from 'framer-motion'

export function OneGoalPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <motion.div className="bg-yellow-400 flex justify-center shadow-lg">
                <h1 className="text-3xl md:text-5xl text-white p-4">SUBE TU CAUSA</h1>
            </motion.div>

                <div className='flex flex-col md:flex-row w-full md:items-center md:space-x-8 md:px-8 lg:px-16 py-8'>
                    <section className="flex items-center justify-center md:w-1/2">
                        <label>
                            <img className='w-96 h-96 object-cover' src="https://via.placeholder.com/400x200" alt="" />
                        </label>
                    </section>
                    <section className='flex justify-center md:w-1/2'>
                        <div className='flex flex-col w-full max-w-md px-4 md:px-0 space-y-6'>
                            <h1 className='text-4xl font-bold'>Titulo</h1>
                            <p className='text-xl'>Descripcion:</p>
                        </div>
                    </section>
                </div>

                <motion.div className="bg-yellow-400 shadow-lg p-4 md:p-8 flex justify-center">
                    <section className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-start md:items-end">
                        <div className="flex flex-col w-full md:w-auto">
                            AAAAAAAAAAAAAAAA
                        </div>

                        <div className="flex flex-col w-full md:w-auto">
                            AAAAAAAAAAAAAAAA
                        </div>

                        <div className="flex flex-col w-full md:w-auto">
                            AAAAAAAAAAAAAAAA
                        </div>

                        <div className="flex flex-col w-full md:w-auto">
                            AAAAAAAAAAAAAAAA
                        </div>

                    </section>
                </motion.div>
            <Footer />
        </div>
    )
}
