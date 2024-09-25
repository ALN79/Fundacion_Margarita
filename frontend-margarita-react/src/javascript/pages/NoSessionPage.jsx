import React from 'react'
import { NoSessionHeader } from '../components/NoSessionHeader.jsx'

export function NoSessionPage() {
    return (
        <div>
            <NoSessionHeader />
            <div className='flex justify-center items-center h-full'>
                <div className="relative w-full h-screen flex justify-center">
                    <div className="absolute top-1/3 transform -translate-y-1/3 w-full h-1/2 bg-yellow-400 z-0 text-white p-6 text-xl">
                        <div className="mt-10">
                            Somos una plataforma digital que conecta personas, empresas y <br />
                            organizaciones que desean hacer un cambio positivo en el mundo <br />
                            con causas y proyectos que necesitan apoyo. Creemos en el poder <br />
                            de la comunidad para generar impacto y transformar vidas.<br />
                            A través de nuestra plataforma, facilitamos la interacción entre <br />
                            donantes y organizaciones sin fines de lucro, asegurando que cada donación <br />
                            llegue de manera transparente y efectiva a quienes más lo <br />
                            necesitan.
                        </div>
                    </div>
                    <div className="relative z-10 flex justify-end w-full hidden sm:flex">
                        <img src="img/FlorNoSession.svg" alt="Not found" className="w-full sm:w-7/12 md:w-10/11 lg:w-6/6" />
                    </div>
                </div>
            </div>
        </div>
    )
}
