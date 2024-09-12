function Header () {
  
  return (
    <header className="font-sans flex flex-row  my-1  bg-white-400 border-y border-black h-28">
      <div className="flex items-center justify-center bg-slate-400">
        <img src="img/logoPagina.svg" alt="" className="px-4" height="auto" width="370" />
      </div>
      <div className="flex justify-evenly w-screen">
        <button className="font-medium hover:font-semibold transition-all">NOVEDADES</button>
        <button className="font-medium hover:font-semibold transition-all">METAS</button>
        <button className="font-medium hover:font-semibold transition-all">SOBRE NOSOTROS</button>
      </div>
      <div className="flex items-center mx-10">
        <button id="logout" className="whitespace-nowrap bg-yellow-400 px-8 py-3 hover:bg-yellow-500 hover:text-red-700 hover:scale-95 transition-all">CERRAR SESIÓN</button>
      </div>
    </header>
  );
}
export { Header }
