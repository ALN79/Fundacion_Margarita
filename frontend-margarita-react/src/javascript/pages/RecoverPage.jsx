function RecoverPage() {
    return (
        <div className="bg-custom-bg-1 bg-cover bg-bottom h-screen">
            <main className="flex justify-center items-center">
                <form id="formRecover" action="" className="flex flex-col">
                    <p className="text-4xl text-center font-bold mb-5 mt-12">Recuperar cuenta</p>
                    <p className="text-center mb-5 font-medium">Ingresa tu correo electrónico</p>

                    <label htmlFor="emailRecover" className="text-sm">EMAIL:</label>
                    <input className="border border-black p-3 mb-4 min-w-[20rem]" placeholder="example@gmail.com" type="text" id="emailRecover" />

                    <button type="submit" className="bg-yellow-400 text-white px-6 py-3 max-w-44 mt-8 self-center hover:bg-yellow-600 hover:text-slate-50 transition-colors">Recuperar</button>
                </form>
            </main>
        </div>
    );
}

export { RecoverPage };
