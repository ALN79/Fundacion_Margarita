import React from 'react'

export function CardGoals() {
  return (
    <div>
       <div className="rounded overflow-hidden shadow-lg relative">
            <img 
                className="w-96 h-96 object-cover" 
                src="https://via.placeholder.com/400x200" 
                alt="Ejemplo de imagen"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-xl font-bold">Título de la Card</h2>
                <p className="text-sm">Este es un ejemplo de descripción sobre la imagen.</p>
            </div>
        </div>
    </div>
  )
}
