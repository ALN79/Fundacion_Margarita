export const loginPage = () => {

    const $app = document.getElementById("app")

    $app.classList.add("bg-custom-bg-1", "bg-cover", "bg-bottom", "h-screen")

    const $containerFormLogin = document.createElement("main");

    $containerFormLogin.classList.add("flex", "justify-center", "items-center");

    $containerFormLogin.innerHTML = `
    <form action="" class="flex flex-col">
        <p class="text-4xl text-center font-bold mb-5 mt-12">Inicia Sesión</p>
        <p class="text-center mb-5 font-medium">Inicia Sesion para continuar</p>
        <label for="email" class="text-sm">EMAIL:</label>
        <input class="border border-black p-3 mb-4 min-w-80" placeholder="example@gmail.com" type="text" id="email">
        <label for="contraseña" class="text-sm">CONTRASEÑA:</label>
        <input class="border border-black p-3 min-w-80" placeholder="******" type="password" id="contraseña">
        <p class="text-center mt-5 font-normal">No tienes una cuenta? <a href="" class="text-yellow-400 hover:text-yellow-500 transition-colors">Registrate</a></p>
        <button type="submit" class="bg-yellow-400 text-white px-6 py-3 max-w-44 mt-8 self-center hover:bg-yellow-600 hover:text-slate-50 transition-colors">Inicia Sesión</button>
    </form>
    `

    return $containerFormLogin;

}