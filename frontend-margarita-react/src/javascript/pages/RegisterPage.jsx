function RegisterPage() {
    return (
        <div className="bg-custom-bg-1 bg-cover bg-bottom h-screen">
            <main className="flex justify-center items-center">
                <form id="formRegister" className="flex flex-col">
                    <p className="text-4xl text-center font-bold mb-5 mt-20">Regístrate</p>
                    <p className="text-center mb-5 font-medium">¿Ya estás registrado? <a href="/login" className="text-yellow-400 hover:text-yellow-500">Inicia Sesión</a></p>
                    
                    <label htmlFor="name" className="text-sm">NOMBRE:</label>
                    <input className="border border-black p-3 mb-4 min-w-80" placeholder="Lucas" type="text" id="name" />
                    
                    <label htmlFor="surname" className="text-sm">APELLIDO:</label>
                    <input className="border border-black p-3 mb-4 min-w-80" placeholder="Esteche" type="text" id="surname" />
                    
                    <label htmlFor="email" className="text-sm">EMAIL:</label>
                    <input className="border border-black p-3 mb-4 min-w-80" placeholder="example@gmail.com" type="text" id="email" />
                    
                    <label htmlFor="password" className="text-sm">CONTRASEÑA:</label>
                    <input className="border border-black p-3 min-w-80" placeholder="******" type="password" id="password" />
                    
                    <button type="submit" className="bg-yellow-400 text-white px-6 py-3 max-w-44 mt-8 self-center hover:bg-yellow-600 hover:text-slate-50 transition-colors">Registrarse</button>
                </form>
            </main>
        </div>
    );
}

export { RegisterPage };
