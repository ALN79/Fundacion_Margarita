import React from 'react'
import { NoSessionHeader } from '../components/NoSessionHeader'
import { useParams } from 'react-router-dom'
import {updatePassword} from "../services/updatePassword.js"

export function UpdatePasswordPage() {

  const { token } = useParams();

  const handleSubmit = async (e) => {
    await updatePassword(token, e);
  }

  return (
    <div className="bg-custom-bg-1 bg-cover bg-bottom h-screen">
      <NoSessionHeader/>
      <main className="flex justify-center items-center">
                <form id="resetPasswordForm" action="" className="flex flex-col" onSubmit={handleSubmit}>
                    <p className="text-4xl text-center font-bold mb-5 mt-16">Crear su nueva contraseña</p>
                    <p className="text-center mb-5 font-medium">Por favor ingrese su nueva contraseña</p>

                    <label htmlFor="passwordUpdate" className="text-sm">NUEVA CONTRASEÑA:</label>
                    <input className="border border-black p-3 mb-4 min-w-80" placeholder="******" type="password" id="passwordUpdate" />

                    <label htmlFor="passwordUpdateepeat" className="text-sm">REPETIR CONTRASEÑA:</label>
                    <input className="border border-black p-3 min-w-80" placeholder="******" type="password" id="passwordUpdateRepeat" />
                    
                    
                    <button type="submit" className="bg-yellow-400 text-white px-6 py-3 max-w-44 mt-8 self-center hover:bg-yellow-600 hover:text-slate-50 transition-colors">Reestablecer Contraseña</button>
                </form>
            </main>
    </div>
  )
}
