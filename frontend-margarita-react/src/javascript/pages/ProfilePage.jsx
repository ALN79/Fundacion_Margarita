import React, { useState, useEffect } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { authUser } from "../services/services.users/authUser"; 
import { LoadingPage } from "./loadingPage";


function ProfilePage() {

  const { user, loading } = authUser(); 

  if (loading) {
    return <LoadingPage />; 
  }

  if (!user) {
    return <div>Usuario no encontrado</div>; 
  }

  const initial = user ? user.username.charAt(0).toUpperCase() : "";

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
          <h1 className="text-2xl font-bold text-center mb-4">Perfil de Usuario</h1>
          <div className="flex flex-col items-center">
            {/* Espacio para el avatar con la inicial */}
            <div className="relative w-24 h-24 overflow-hidden bg-yellow-400 rounded-full mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">{initial}</span>
            </div>
            {/* Información del usuario */}
            <h2 className="text-xl font-semibold mb-2">{user.username}</h2>
            <p className="text-gray-600 mb-4">Email: {user.email}</p>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export { ProfilePage };
