import { useState } from 'react';
import { Divider } from 'primereact/divider';
import { Link } from 'react-router-dom';
import { NoSessionHeader } from "../components/NoSessionHeader";
import { register } from "../services/services.users/register.js";

export function RegisterPage() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const validateLowercase = /[a-z]/.test(password);
    const validateUppercase = /[A-Z]/.test(password);
    const validateNumber = /\d/.test(password);
    const validateLength = password.length >= 8;

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const toggleSuggestionsVisibility = () => {
        setShowSuggestions(true);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (!name || !surname || !email || !password) {
            setMessage('Todos los campos son obligatorios.');
            setIsError(true);
            return;
        }

        if (!validateEmail(email)) {
            setMessage('El email no es válido.');
            setIsError(true);
            return;
        }

        if (!validateLowercase || !validateUppercase || !validateNumber || !validateLength) {
            setMessage('La contraseña no cumple con los requisitos.');
            setIsError(true);
            return;
        }

        register({ name, surname, email, password })
            .then(() => {
                setMessage('Registro exitoso.');
                setIsError(false);
            })
            .catch(() => {
                setMessage('Error al registrarse. Intenta nuevamente.');
                setIsError(true);
            });
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
                <form id="formRegister" className="flex flex-col" onSubmit={handleRegister}>
                    <p className="text-4xl text-center font-bold mb-5 mt-6">Regístrate</p>
                    <Link to="/login">
                        <p className="text-center mb-5 font-medium">
                            ¿Ya estás registrado? 
                            <span className="text-yellow-400 hover:text-yellow-500"> Inicia Sesión</span>
                        </p>
                    </Link>

                    <label htmlFor="name" className="text-sm">NOMBRE:</label>
                    <input 
                        className="border border-black p-3 mb-2 min-w-80" 
                        placeholder="Lucas" 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    
                    {message && !name && (
                        <div className="text-red-500 text-sm mb-2">El nombre es obligatorio.</div>
                    )}

                    <label htmlFor="surname" className="text-sm">APELLIDO:</label>
                    <input 
                        className="border border-black p-3 mb-2 min-w-80" 
                        placeholder="Esteche" 
                        type="text" 
                        id="surname" 
                        value={surname} 
                        onChange={(e) => setSurname(e.target.value)} 
                    />
                    
                    {message && !surname && (
                        <div className="text-red-500 text-sm mb-2">El apellido es obligatorio.</div>
                    )}

                    <label htmlFor="email" className="text-sm">EMAIL:</label>
                    <input 
                        className="border border-black p-3 mb-2 min-w-80" 
                        placeholder="example@gmail.com" 
                        type="text" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    
                    {message && (!email || !validateEmail(email)) && (
                        <div className="text-red-500 text-sm mb-2">El email no es válido.</div>
                    )}

                    <label htmlFor="password" className="text-sm">CONTRASEÑA:</label>
                    <div className="relative mb-2 min-w-80">
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="border border-black p-3 w-full" 
                            placeholder="******" 
                            id="password"
                            onFocus={toggleSuggestionsVisibility} 
                        />
                    </div>

                    {footer}

                    {message && isError && (
                        <div className="text-red-500 text-sm mb-4">{message}</div>
                    )}
                    
                    {message && !isError && (
                        <div className="text-green-500 text-sm mb-4">{message}</div>
                    )}

                    <button 
                        type="submit" 
                        className="bg-yellow-400 text-white px-6 py-3 max-w-44 mt-4 self-center hover:bg-yellow-600 hover:text-slate-50 transition-colors"
                    >
                        Registrarse
                    </button>
                </form>
            </main>
        </div>
    );
}
