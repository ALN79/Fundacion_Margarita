const Header = () => {

    const $header = document.createElement("header")

    $header.classList.add("flex", "flex-row", "my-1", "bg-white-400", "border-y", "border-black", "h-28")

    $header.innerHTML = `
    <div class="flex items-center justify-center bg-slate-400">
        <img src="img/logoPagina.svg" alt="" class="px-4" height="auto" width="370">
    </div>
    <div class="flex justify-evenly w-screen" >
        <button class="font-medium hover:font-semibold 
        transition-all">NOVEDADES</button>
        <button class="font-medium hover:font-semibold 
        transition-all">METAS</button>
        <button class="font-medium hover:font-semibold 
        transition-all">SOBRE NOSOTROS</button>
    </div>
    <div class="flex items-center mx-10">
        <button class="whitespace-nowrap bg-yellow-400 px-8 py-3 hover:bg-yellow-500 hover:text-red-700 hover:scale-95 transition-all">CERRAR SESIÓN</button>
    </div>
    `

    return $header
}

export { Header }