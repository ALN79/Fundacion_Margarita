import React from 'react';
import { NoSessionHeader } from '../components/NoSessionHeader.jsx';

export function NoSessionPage() {
    return (
        <div>
            <NoSessionHeader />
            <div className="relative w-full h-screen">
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white p-4 text-left text-base sm:text-lg lg:text-xl">
                    <h1 className="text-3xl font-bold mb-2">¡Hola bienvenido a Fundacion Margarita!</h1>
                    <div className="max-w-screen-xl mx-auto">
                        <div className="w-full max-w-screen-sm">
                            Somos una plataforma digital que conecta personas, empresas y
                            organizaciones que desean hacer un cambio positivo en el mundo
                            con causas y proyectos que necesitan apoyo. Creemos en el poder
                            de la comunidad para generar impacto y transformar vidas.
                            A través de nuestra plataforma, facilitamos la interacción entre
                            donantes y organizaciones sin fines de lucro, asegurando que cada donación
                            llegue de manera transparente y efectiva a quienes más lo necesitan.
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 flex justify-end items-center h-full pointer-events-none z-20 hidden md:flex">
                    <img
                        src="img/FlorNoSession.svg"
                        alt="Flor decorativa"
                        className="w-10/12 h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

