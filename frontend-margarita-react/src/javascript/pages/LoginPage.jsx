function LoginPage() {
    return (
        <div className="bg-custom-bg-1 bg-cover bg-bottom h-screen">
            <main className="flex justify-center items-center">
                <form id="formLogin" action="" className="flex flex-col">
                    <p className="text-4xl text-center font-bold mb-5 mt-24">Inicia Sesión</p>
                    <p className="text-center mb-5 font-medium">Inicia Sesión para continuar</p>

                    <label htmlFor="emailLogin" className="text-sm">EMAIL:</label>
                    <input className="border border-black p-3 mb-4 min-w-80" placeholder="example@gmail.com" type="text" id="emailLogin" />

                    <label htmlFor="passwordLogin" className="text-sm">CONTRASEÑA:</label>
                    <input className="border border-black p-3 min-w-80" placeholder="******" type="password" id="passwordLogin" />
                    
                    <p className="text-center mt-5 font-normal">No tienes una cuenta? <a href="/register" className="text-yellow-400 hover:text-yellow-500 transition-colors">Regístrate</a></p>
                    <button type="submit" className="bg-yellow-400 text-white px-6 py-3 max-w-44 mt-8 self-center hover:bg-yellow-600 hover:text-slate-50 transition-colors">Inicia Sesión</button>
                </form>
            </main>
        </div>
    );
}

export { LoginPage };