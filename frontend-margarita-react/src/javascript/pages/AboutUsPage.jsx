import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { NoSessionHeader } from "../components/NoSessionHeader";
import { authUser } from "../services/services.users/authUser";
import { LoadingPage } from "./loadingPage";

import { FaTshirt, FaBreadSlice, FaDonate, FaBitcoin, FaShareAlt } from "react-icons/fa";

export function AboutUsPage() {
  const { user, loading } = authUser();

  // Manejo de estado para mostrar u ocultar las descripciones
  const [mostrarDescripcionRopa, setMostrarDescripcionRopa] = useState(false);
  const [mostrarDescripcionComida, setMostrarDescripcionComida] = useState(false);
  const [mostrarDescripcionDinero, setMostrarDescripcionDinero] = useState(false);
  const [mostrarDescripcionCripto, setMostrarDescripcionCripto] = useState(false);
  const [mostrarDescripcionRedes, setMostrarDescripcionRedes] = useState(false);

  if (loading) {
    return <LoadingPage />;
  }

  const shareOnSocialMedia = () => {
    // Comprueba si la API de Compartir está disponible
    if (navigator.share) {
      navigator
        .share({
          title: 'Ayuda a nuestra causa',
          text: 'Únete a nosotros y ayuda a hacer un cambio positivo en el mundo.',
          url: window.location.href, // URL de la página actual
        })
        .then(() => {
          console.log('Compartido con éxito');
        })
        .catch((error) => {
          console.error('Error al compartir:', error);
        });
    } else {
      alert('Lo siento, tu navegador no soporta la función de compartir.');
    }
  };

  return (
    <div className="bg-custom-bg-2 bg-cover h-screen flex flex-col">
      {user ? <Header /> : <NoSessionHeader />}

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
            <h2 id="mision" className="text-2xl font-semibold mb-4 relative inline-block">
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
<div id="equipo">
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

      {/* Nuestros Valores */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Nuestros Valores
            
          </h2 >
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

      {/* Formas en las que puedes ayudar */}
      <div className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="justify-center text-2xl sm:text-3xl font-bold mb-16 relative inline-block group">
            Formas en las que puedes ayudar
            <motion.span
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-yellow-400"
              initial={{ width: "0%" }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center text-center max-w-xs group">
              <div
                className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 transform hover:bg-yellow-400 hover:scale-110 cursor-pointer"
                onClick={() => setMostrarDescripcionRopa(!mostrarDescripcionRopa)}
              >
                <FaTshirt className="text-2xl" />
              </div>
              <p className="text-lg font-bold mt-2 relative inline-block group">
                Donando ropa
                <span className="block h-1 bg-yellow-400 absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
              </p>
              <p
                className={`text-sm text-black mt-1 transition-opacity duration-300 ${mostrarDescripcionRopa ? 'bg-gray-200 bg-opacity-70 opacity-100' : 'opacity-0'
                  } sm:block`}
              >
                Ayuda a quienes más lo necesitan donando ropa en buen estado para abrigar y proteger a familias en situación vulnerable.
              </p>
            </div>

            <div className="flex flex-col items-center text-center max-w-xs group">
              <div
                className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 transform hover:bg-yellow-400 hover:scale-110 cursor-pointer"
                onClick={() => setMostrarDescripcionComida(!mostrarDescripcionComida)}
              >
                <FaBreadSlice className="text-2xl" />
              </div>
              <p className="text-lg font-bold mt-2 relative inline-block group">
                Donando comida
                <span className="block h-1 bg-yellow-400 absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
              </p>
              <p
                className={`text-sm text-black mt-1 transition-opacity duration-300 ${mostrarDescripcionComida ? 'bg-gray-200 bg-opacity-70 opacity-100' : 'opacity-0'
                  } sm:block`}
              >
                Contribuye con alimentos no perecederos y ayuda a combatir el hambre en tu comunidad.
              </p>
            </div>

            <div className="flex flex-col items-center text-center max-w-xs group">
              <div
                className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 transform hover:bg-yellow-400 hover:scale-110 cursor-pointer"
                onClick={() => setMostrarDescripcionDinero(!mostrarDescripcionDinero)}
              >
                <FaDonate className="text-2xl" />
              </div>
              <p className="text-lg font-bold mt-2 relative inline-block group">
                Donando dinero
                <span className="block h-1 bg-yellow-400 absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
              </p>
              <p
                className={`text-sm text-black mt-1 transition-opacity duration-300 ${mostrarDescripcionDinero ? 'bg-gray-200 bg-opacity-70 opacity-100' : 'opacity-0'
                  } sm:block`}
              >
                Ayuda económica para financiar proyectos que cambian vidas.
              </p>
            </div>

            <div className="flex flex-col items-center text-center max-w-xs group">
              <div
                className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 transform hover:bg-yellow-400 hover:scale-110 cursor-pointer"
                onClick={() => setMostrarDescripcionCripto(!mostrarDescripcionCripto)}
              >
                <FaBitcoin className="text-2xl" />
              </div>
              <p className="text-lg font-bold mt-2 relative inline-block group">
                Donando criptomonedas
                <span className="block h-1 bg-yellow-400 absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
              </p>
              <p
                className={`text-sm text-black mt-1 transition-opacity duration-300 ${mostrarDescripcionCripto ? 'bg-gray-200 bg-opacity-70 opacity-100' : 'opacity-0'
                  } sm:block`}
              >
                Contribuye con criptomonedas y forma parte de un movimiento innovador para ayudar a quienes lo necesitan.
              </p>
            </div>

            <div className="flex flex-col items-center text-center max-w-xs group">
              <div
                className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 transform hover:bg-yellow-400 hover:scale-110 cursor-pointer"
                onClick={shareOnSocialMedia} // Cambia esta línea
              >
                <FaShareAlt className="text-2xl" />
              </div>
              <p className="text-lg font-bold mt-2 relative inline-block group">
                Compartir en redes
                <span className="block h-1 bg-yellow-400 absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
              </p>
              <p
                className={`text-sm text-black mt-1 transition-opacity duration-300 ${mostrarDescripcionRedes ? 'bg-gray-200 bg-opacity-70 opacity-100' : 'opacity-0'
                  } sm:block`}
              >
                Ayuda a difundir la causa compartiendo en tus redes sociales.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
