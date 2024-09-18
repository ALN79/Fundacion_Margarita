const noSessionHeader = () => {
    const $header = document.createElement("header");

    $header.classList.add("flex", "flex-col", "sm:flex-row", "my-1", "bg-white", "border-y", "border-black", "h-auto", "sm:h-28", "pr-4");

    $header.innerHTML = `
        <div class="flex items-center justify-between bg-slate-400 sm:w-auto w-full mb-4 sm:mb-0">   
            <img src="img/logoPagina.svg" alt="Logo" class="px-4" height="auto" width="370">
            <button id="menu-toggle" class="sm:hidden block text-white px-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
        <div id="menu" class="hidden sm:flex flex-col sm:flex-row justify-evenly w-full mb-4 sm:mb-0">
            <!-- Puedes agregar aquí elementos de navegación o enlaces adicionales -->
        </div>
        <div id="buttons" class="hidden sm:flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-10 sm:mb-0">
            <a href="/register" class="w-full sm:w-auto">
                <button class="w-full sm:w-auto whitespace-nowrap bg-yellow-400 px-8 py-3 hover:bg-yellow-500 hover:text-red-700 hover:scale-95 transition-all text-white">
                    Registrate
                </button>
            </a>
            <a href="/login" class="w-full sm:w-auto">
                <button class="w-full sm:w-auto whitespace-nowrap bg-yellow-400 px-8 py-3 hover:bg-yellow-500 hover:text-red-700 hover:scale-95 transition-all text-white">
                    Iniciar Sesion
                </button>
            </a>
        </div>
    `;

    // Add event listener for the hamburger menu
    const $menuToggle = $header.querySelector("#menu-toggle");
    const $buttons = $header.querySelector("#buttons");

    $menuToggle.addEventListener("click", () => {
        $buttons.classList.toggle("hidden");
        $buttons.classList.toggle("flex");
        $buttons.classList.toggle("justify-center"); // Centra los botones al mostrar en móviles
    });

    return $header;
}

export { noSessionHeader };
