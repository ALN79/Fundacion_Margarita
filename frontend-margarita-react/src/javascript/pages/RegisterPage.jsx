import { useState } from 'react';
import { Divider } from 'primereact/divider';
import { Link } from 'react-router-dom';
import { NoSessionHeader } from "../components/NoSessionHeader";
import { register } from "../services/services.users/register.js";

export function RegisterPage() {
    const [password, setPassword] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false); 

    const validateLowercase = /[a-z]/.test(password);
    const validateUppercase = /[A-Z]/.test(password);
    const validateNumber = /\d/.test(password);
    const validateLength = password.length >= 8;

    const toggleSuggestionsVisibility = () => {
        setShowSuggestions(!showSuggestions);
    };

    const footer = (
        <>
            <Divider />
            {showSuggestions && ( 
                <>
                    <p className="mt-2">Sugerencias</p>
                    <ul className="pl-2 ml-2 mt-0 line-height-3">
                        <li className={validateLowercase ? 'text-green-500' : 'text-red-500'}>
                            Al menos una letra minúscula
                        </li>
                        <li className={validateUppercase ? 'text-green-500' : 'text-red-500'}>
                            Al menos una letra mayúscula
                        </li>
                        <li className={validateNumber ? 'text-green-500' : 'text-red-500'}>
                            Al menos un número
                        </li>
                        <li className={validateLength ? 'text-green-500' : 'text-red-500'}>
                            Mínimo 8 caracteres
                        </li>
                    </ul>
                </>
            )}
        </>
    );

    return (
        <div className="bg-custom-bg-1 bg-cover bg-bottom h-screen">
            <NoSessionHeader />
            <main className="flex justify-center items-center">
                <form id="formRegister" className="flex flex-col" onSubmit={register}>
                    <p className="text-4xl text-center font-bold mb-5 mt-6">Regístrate</p>
                    <Link to="/login">
                        <p className="text-center mb-5 font-medium">
                            ¿Ya estás registrado? 
                            <span className="text-yellow-400 hover:text-yellow-500"> Inicia Sesión</span>
                        </p>
                    </Link>

                    <label htmlFor="name" className="text-sm">NOMBRE:</label>
                    <input className="border border-black p-3 mb-4 min-w-80" placeholder="Lucas" type="text" id="name" />

                    <label htmlFor="surname" className="text-sm">APELLIDO:</label>
                    <input className="border border-black p-3 mb-4 min-w-80" placeholder="Esteche" type="text" id="surname" />

                    <label htmlFor="email" className="text-sm">EMAIL:</label>
                    <input className="border border-black p-3 mb-4 min-w-80" placeholder="example@gmail.com" type="text" id="email" />

                    <label htmlFor="password" className="text-sm">CONTRASEÑA:</label>
                    <div className="relative mb-4 min-w-80">
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="border border-black p-3 w-full" 
                            placeholder="******" 
                            id="password"
                            onFocus={toggleSuggestionsVisibility} 
                            onBlur={() => setShowSuggestions(false)} 
                        />
                    </div>

                    {footer}

                    <button type="submit" className="bg-yellow-400 text-white px-6 py-3 max-w-44 mt-4 self-center hover:bg-yellow-600 hover:text-slate-50 transition-colors">
                        Registrarse
                    </button>
                </form>
            </main>
        </div>
    );
}
