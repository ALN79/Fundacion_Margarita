import { useState } from 'react';
import { login } from "../services/services.users/login.js";
import { Link } from 'react-router-dom';
import { NoSessionHeader } from "../components/NoSessionHeader";

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage('Todos los campos son obligatorios.');
            setIsError(true);
            return;
        }

        if (!validateEmail(email)) {
            setMessage('El email no es válido.');
            setIsError(true);
            return;
        }

        login({ email, password })
            .then(() => {
                setMessage('Inicio de sesión exitoso.');
                setIsError(false);
            })
            .catch(() => {
                setMessage('Error al iniciar sesión. Verifica tus credenciales.');
                setIsError(true);
            });
    };

    return (
        <div className="bg-custom-bg-1 bg-cover bg-bottom h-screen">
            <NoSessionHeader />
            <main className="flex justify-center items-center">
                <form id="formLogin" action="" className="flex flex-col" onSubmit={handleLogin}>
                    <p className="text-4xl text-center font-bold mb-5 mt-16">Inicia Sesión</p>
                    <p className="text-center mb-5 font-medium">Inicia Sesión para continuar</p>

                    <label htmlFor="emailLogin" className="text-sm">EMAIL:</label>
                    <input 
                        className="border border-black p-3 mb-4 min-w-80" 
                        placeholder="example@gmail.com" 
                        type="text" 
                        id="emailLogin" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    
                    {message && !email && (
                        <div className="text-red-500 text-sm mb-2">El email es obligatorio.</div>
                    )}

                    {message && email && !validateEmail(email) && (
                        <div className="text-red-500 text-sm mb-2">El email no es válido.</div>
                    )}

                    <label htmlFor="passwordLogin" className="text-sm">CONTRASEÑA:</label>
                    <input 
                        className="border border-black p-3 min-w-80" 
                        placeholder="******" 
                        type="password" 
                        id="passwordLogin" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    {message && !password && (
                        <div className="text-red-500 text-sm mb-2">La contraseña es obligatoria.</div>
                    )}
                    
                    <Link to="/register">
                        <p className="text-center mt-5 font-normal">No tienes una cuenta? 
                            <span className="text-yellow-400 hover:text-yellow-500 transition-colors"> Regístrate</span>
                        </p>
                    </Link>

                    <Link to="/recover">
                        <p className="text-center text-sm mt-5 font-normal text-yellow-500 hover:text-yellow-600">¿Has olvidado la contraseña?</p>
                    </Link>
                    
                    {message && isError && (
                        <div className="text-red-500 text-sm mb-4">{message}</div>
                    )}
                    
                    {message && !isError && (
                        <div className="text-green-500 text-sm mb-4">{message}</div>
                    )}
                    
                    <button type="submit" className="bg-yellow-400 text-white px-6 py-3 max-w-44 mt-8 self-center hover:bg-yellow-600 hover:text-slate-50 transition-colors">Inicia Sesión</button>
                </form>
            </main>
        </div>
    );
}
