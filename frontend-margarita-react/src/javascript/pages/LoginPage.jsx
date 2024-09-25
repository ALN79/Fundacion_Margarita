import { login } from "../services/login.js";
import { Link } from 'react-router-dom';
import { NoSessionHeader } from "../components/NoSessionHeader";

export function LoginPage() {
    return (
        <div className="bg-custom-bg-1 bg-cover bg-bottom h-screen">
            <NoSessionHeader/>
            <main className="flex justify-center items-center">
                <form id="formLogin" action="" className="flex flex-col" onSubmit={login}>
                    <p className="text-4xl text-center font-bold mb-5 mt-16">Inicia Sesión</p>
                    <p className="text-center mb-5 font-medium">Inicia Sesión para continuar</p>

                    <label htmlFor="emailLogin" className="text-sm">EMAIL:</label>
                    <input className="border border-black p-3 mb-4 min-w-80" placeholder="example@gmail.com" type="text" id="emailLogin" />

                    <label htmlFor="passwordLogin" className="text-sm">CONTRASEÑA:</label>
                    <input className="border border-black p-3 min-w-80" placeholder="******" type="password" id="passwordLogin" />
                    
                    <Link to="/register">
                    <p className="text-center mt-5 font-normal">No tienes una cuenta? <a href="/register" className="text-yellow-400 hover:text-yellow-500 transition-colors">Regístrate</a></p>
                    </Link>

                    <Link to="/recover">
                        <p className="text-center text-sm mt-5 font-normal text-yellow-500 hover:text-yellow-600 ">¿Has olvidado la contraseña?</p>
                    </Link>
                    
                    <button type="submit" className="bg-yellow-400 text-white px-6 py-3 max-w-44 mt-8 self-center hover:bg-yellow-600 hover:text-slate-50 transition-colors">Inicia Sesión</button>
                </form>
            </main>
        </div>
    );
}
