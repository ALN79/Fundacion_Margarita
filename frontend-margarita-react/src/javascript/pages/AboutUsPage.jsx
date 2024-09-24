import React from "react";
import { Header } from "../components/Header";
import { motion } from "framer-motion";
import { Footer } from "../components/footer"; 

export function AboutUsPage() {
  return (
    <div className="bg-custom-bg-2 bg-cover h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="relative text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 inline-block relative">
            Acerca de Nosotros
            <motion.span
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-yellow-400"
              initial={{ width: "0%" }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl font-semibold mb-4 relative inline-block">
              Nuestra misión
              <motion.span
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-yellow-400"
                initial={{ width: "0%" }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </h2>
            <p className="text-gray-700 mb-6">
              Somos una plataforma dedicada a conectar personas, empresas y
              organizaciones que buscan tener un impacto positivo en el mundo.
              Creemos en el poder de la comunidad para generar cambios y
              transformar vidas. A través de nuestra plataforma, facilitamos la
              interacción entre donantes y proyectos sociales, asegurando que
              cada contribución llegue a quienes más lo necesitan.
            </p>

            <h2 className="text-2xl font-semibold mb-4 relative inline-block">
              Nuestro equipo
              <motion.span
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-yellow-400"
                initial={{ width: "0%" }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </h2>
            <p className="text-gray-700">
              Nuestro equipo está compuesto por profesionales apasionados por el
              cambio social. Trabajamos incansablemente para asegurarnos de que
              cada proyecto en nuestra plataforma tenga el apoyo necesario para
              tener éxito. ¡Únete a nosotros en nuestra misión de hacer el mundo
              un lugar mejor!
            </p>
          </div>

          <div className="lg:w-1/2 p-6">
            <img
              src="/img/AboutUs.svg"
              alt="Sobre nosotros"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Nuestros Valores
          </h2>
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center lg:w-1/3 p-4"
            >
              <img
                src="/img/integridadImg.svg"
                alt="Integridad"
                className="w-96 h-96 mx-auto object-contain"
              />
              <h3 className="text-xl font-semibold mt-1">Integridad</h3>
              <p className="text-gray-600 mt-1">
                Actuamos con honestidad y transparencia en todo lo que hacemos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:w-1/3 p-4"
            >
              <img
                src="/img/compasionImg.svg"
                alt="Compasión"
                className="w-96 h-96 mx-auto object-contain"
              />
              <h3 className="text-xl font-semibold mt-1">Compasión</h3>
              <p className="text-gray-600 mt-1">
                Nos importa el bienestar de las personas y actuamos con empatía.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:w-1/3 p-4"
            >
              <img
                src="/img/innovacionImg.svg"
                alt="Innovación"
                className="w-96 h-96 mx-auto object-contain"
              />
              <h3 className="text-xl font-semibold mt-1">Innovación</h3>
              <p className="text-gray-600 mt-1">
                Buscamos nuevas y mejores formas de hacer las cosas para causar
                un impacto positivo.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer /> 
    </div>
  );
}
