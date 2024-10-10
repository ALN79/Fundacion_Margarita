import React, { useRef } from 'react';
import { NoSessionHeader } from '../components/NoSessionHeader.jsx';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Carousel } from 'flowbite-react';

export function NoSessionPage() {
    const secondSectionRef = useRef(null);

    const scrollToSecondSection = () => {
        secondSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='bg-custom-bg-2'>
            <NoSessionHeader />
            <section className="relative w-full h-screen">
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white p-4 text-left text-base sm:text-lg lg:text-xl">
                    <motion.h1
                        className="text-4xl font-bold py-10 ml-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            ¡Bienvenido a Fundación Margarita!
                        </motion.span>
                    </motion.h1>
                    <motion.div
                        className="absolute ml-96 transform -translate-x-1/2 cursor-pointer"
                        style={{ top: 'calc(50% + 100px)' }}
                        initial={{ y: 0 }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        onClick={scrollToSecondSection}
                    >
                        <FaChevronDown className="text-4xl text-yellow-400" />
                    </motion.div>
                </div>
                <div className="absolute bottom-0 right-0 flex justify-end items-end h-full pointer-events-none z-20 md:flex">
                    <motion.img
                        src="img/FlorNoSession.svg"
                        alt="Flor decorativa"
                        className="hidden md:block w-full h-auto object-cover"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 40 }}
                    />
                    <span className="absolute w-screen py-2 text-xl text-center font-semibold text-white h-12 bg-yellow-400">La plataforma donde conectas con la ayuda humanitaria</span>
                </div>
            </section>  
            <section ref={secondSectionRef} className="w-full">
                <div className=" container mx-auto px-4 py-8">
                    <div className=" text-white grid grid-cols-1 md:grid-cols-3 gap-6">

                        <motion.div
                            className="bg-yellow-400 rounded-lg shadow-md p-6"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-xl font-semibold mb-4">Enterate donde donar</h3>
                            <p className='text-lg'>
                                Recaudamos información sobre los lugares donde se puede donar, para que puedas ayudar a quienes más lo necesitan.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-yellow-400 rounded-lg shadow-md p-6"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-xl font-semibold mb-4">Noticias y Eventos</h3>
                            <p className='text-lg'>
                                Enterate de las noticias referidas a la ayuda humanitaria y los eventos que se realizan en la provincia.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-yellow-400 rounded-lg shadow-md p-6"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-xl font-semibold mb-4">Sube tu causa</h3>
                            <p className='text-lg'>
                                Si tienes alguna causa que quieres promover, puedes subirla a nuestra plataforma y así podrás llegar a más personas.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
