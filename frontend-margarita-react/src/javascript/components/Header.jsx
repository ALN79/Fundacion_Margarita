import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout } from "../services/services.users/logout.js"
import { authJWT } from "../services/services.users/authJWT.js";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ username: "" });

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const user = await authJWT();
        const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
        setUser({ ...user, username: capitalizeFirstLetter(user.username) });
      } catch (error) {
        console.error("Error al obtener el nombre del usuario", error);
      }
    };
    fetchUsername();
  }, []);

  const getInitials = (name) => {
    return name
      ? name
        .split(" ")
        .map((word) => word[0].toUpperCase())
        .join("")
      : "";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="font-sans flex flex-row items-center bg-white border-y border-black h-28 relative">
        <div className="flex items-center bg-slate-400 w-full sm:w-auto p-4">
          <Link to="/home">
            <img src="/img/logoPagina.svg" alt="Logo" className="h-auto w-40" />
          </Link>
        </div>

        <button onClick={toggleMenu} className="sm:hidden absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden sm:flex flex-row flex-grow items-center ml-4">
          <Link to="/home">
            <button className="font-medium hover:font-semibold transition-all mx-2">INICIO</button>
          </Link>
          <Link to="/goals">
            <button className="font-medium hover:font-semibold transition-all mx-2">CAUSAS</button>
          </Link>
          <Link to="/AboutUs">
            <button className="font-medium hover:font-semibold transition-all mx-2">NOSOTROS</button>
          </Link>
          <Link to="/contact">
            <button className="font-medium hover:font-semibold transition-all mx-2">CONTACTANOS</button>
          </Link>
        </div>

        <div className="hidden sm:flex items-center ml-auto mr-10">
          <button id="map" className="whitespace-nowrap bg-yellow-400 w-40 text-center py-3 hover:bg-yellow-500 hover:text-red-700 hover:scale-95 transition-all">
            MAPA
          </button>
          <button onClick={logout} id="logout" className="whitespace-nowrap bg-yellow-400 w-40 text-center py-3 hover:bg-yellow-500 hover:text-red-700 hover:scale-95 transition-all ml-2">
            CERRAR SESIÓN
          </button>

          {/* Avatar with initials */}
          <Link to="/profile">
            <div className="relative w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full text-white font-bold text-lg ml-4">
              {getInitials(user.username)}
            </div>
          </Link>
        </div>


        <div className={`fixed inset-0 bg-white bg-opacity-90 z-50 p-4 ${isOpen ? 'flex' : 'hidden'} flex-col items-center`}>
          <button onClick={toggleMenu} className="self-end text-black text-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <Link to="/home">
            <button className="font-medium hover:font-semibold transition-all mb-4" onClick={toggleMenu}>INICIO</button>
          </Link>
          <Link to="/goals">
            <button className="font-medium hover:font-semibold transition-all mb-4" onClick={toggleMenu}>CAUSAS</button>
          </Link>
          <Link to="/AboutUs">
            <button className="font-medium hover:font-semibold transition-all mb-4" onClick={toggleMenu}>NOSOTROS</button>
          </Link>
          <Link to="/contact">
            <button className="font-medium hover:font-semibold transition-all mb-4" onClick={toggleMenu}>CONTACTANOS</button>
          </Link>
          <button id="map" className="whitespace-nowrap bg-yellow-400 w-40 text-center py-3 hover:bg-yellow-500 hover:text-red-700 hover:scale-95 transition-all my-4">
            MAPA
          </button>
          <button id="logout" className="whitespace-nowrap bg-yellow-400 w-40 text-center py-3 hover:bg-yellow-500 hover:text-red-700 hover:scale-95 transition-all">
            CERRAR SESIÓN
          </button>
        </div>
      </header>
    </>
  );
}

export { Header };
