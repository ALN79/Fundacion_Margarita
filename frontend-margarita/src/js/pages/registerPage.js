export const registerPage = () => {

    const $app = document.getElementById("app")

    $app.classList.add("bg-custom-bg-1", "bg-cover","bg-bottom", "h-screen")

    const $containerFormRegister = document.createElement("main");

    $containerFormRegister.classList.add("flex", "justify-center", "items-center");

    $containerFormRegister.innerHTML = `
    <form id="formRegister" class="flex flex-col">
        <p class="text-4xl text-center font-bold mb-5 mt-9">Registrate</p>
        <p class="text-center mb-5 font-medium">Ya estás registrado? <a href="/login" class="text-yellow-400 hover:text-yellow-500">Inicia Sesión</a></p>
        <label for="surname" class="text-sm">NOMBRE:</label>
            <input class="border border-black p-3 mb-4 min-w-80" placeholder="Lucas" type="text" id="name">
        <label for="surname" class="text-sm">APELLIDO:</label>
            <input class="border border-black p-3 mb-4 min-w-80" placeholder="Esteche" type="text" id="surname">
        <label for="email" class="text-sm">EMAIL:</label>
            <input class="border border-black p-3 mb-4 min-w-80" placeholder="example@gmail.com" type="text" id="email">
        <label for="password" class="text-sm">CONTRASEÑA:</label>
            <input class="border border-black p-3 min-w-80" placeholder="******" type="password" id="password">
        <button type="submit" class="bg-yellow-400 text-white px-6 py-3 max-w-44 mt-8 self-center hover:bg-yellow-600 hover:text-slate-50 transition-colors">Registrarse</button>
    </form>
    `

    return $containerFormRegister;

}