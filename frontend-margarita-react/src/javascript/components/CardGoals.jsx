import React, { useEffect, useState } from 'react'

import {renderGoals} from "../services/services.goals/renderGoals.js"

export function CardGoals({ goal }) { // Asegúrate de recibir 'goal' como prop

  const [loading, setLoading] = useState(false); // Asumimos que los datos ya se pasan como prop
  const [error, setError] = useState(null);


  if (loading) {
    return (
      <div className="rounded overflow-hidden shadow-lg relative animate-pulse">
        <div className="w-96 h-96 bg-gray-300"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-gray-300 h-16"></div>
      </div>
    );
  }

  if (error) {
    return <div className='text-yellow-400'>Error al obtener las causas, inténtelo más tarde</div>;
  }

  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg relative">
        <img
          className="w-96 h-96 object-cover"
          src="https://via.placeholder.com/400x200"
          alt="Ejemplo de imagen"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h2 className="text-xl font-bold">{goal.title}</h2> {/* Cambiar a 'goal' */}
          <p className="text-sm">{goal.description}</p> {/* Cambiar a 'goal' */}
        </div>
      </div>
    </div>
  );
}
