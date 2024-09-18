import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <style jsx global>{`
        @media (max-width: 640px) {
          html, body {
            margin: 0;
            padding: 0;
          }
        }
      `}</style>

      <header className="font-sans flex flex-row items-center bg-white-400 border-y border-black h-28 relative">
        {/* Logo */}
        <div className="flex items-center bg-slate-400 w-full sm:w-auto p-4">
          <img src="img/logoPagina.svg" alt="Logo" className="h-auto w-40" />
        </div>

        {/* Botón de hamburguesa en la esquina derecha, centrado verticalmente */}
        <button onClick={toggleMenu} className="sm:hidden absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden sm:flex flex-row flex-grow items-center ml-4">
          <button className="font-medium hover:font-semibold transition-all mx-2">INICIO</button>
          <button className="font-medium hover:font-semibold  transition-all mx-2">METAS</button>
          <button className="font-medium hover:font-semibold transition-all mx-2">NOSOTROS</button>
          <button className="font-medium hover:font-semibold transition-all mx-2">CONTACTANOS</button>
        </div>

        <div className="hidden sm:flex items-center ml-auto mr-10">
          <button id="map" className="whitespace-nowrap bg-yellow-400 w-40 text-center py-3 hover:bg-yellow-500 hover:text-red-700 hover:scale-95 transition-all">
            MAPA
          </button>
          <button id="logout" className="whitespace-nowrap bg-yellow-400 w-40 text-center py-3 hover:bg-yellow-500 hover:text-red-700 hover:scale-95 transition-all ml-2">
            CERRAR SESIÓN
          </button>
        </div>

        {/* Menú desplegable en modo móvil */}
        <div className={`fixed inset-0 bg-white bg-opacity-90 z-50 p-4 ${isOpen ? 'flex' : 'hidden'} flex-col items-center`}>
          <button onClick={toggleMenu} className="self-end text-black text-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button className="font-medium hover:font-semibold transition-all mb-4" onClick={toggleMenu}>INICIO</button>
          <button className="font-medium hover:font-semibold transition-all mb-4" onClick={toggleMenu}>METAS</button>
          <button className="font-medium hover:font-semibold transition-all mb-4" onClick={toggleMenu}>NOSOTROS</button>
          <button className="font-medium hover:font-semibold transition-all mb-4" onClick={toggleMenu}>CONTACTANOS</button>
          <button id="map" className="whitespace-nowrap bg-yellow-400 w-40 text-center py-3 hover:bg-yellow-500 hover:text-red-700 hover:scale-95 transition-all mt-4">
            MAPA
          </button>
          <button id="logout" className="whitespace-nowrap bg-yellow-400 w-40 text-center py-3 hover:bg-yellow-500 hover:text-red-700 hover:scale-95 transition-all mt-4">
            CERRAR SESIÓN
          </button>
        </div>
      </header>
    </>
  );
}

export { Header };
