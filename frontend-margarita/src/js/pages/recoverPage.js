export const recoverPage = () => {

    const $app = document.getElementById("app")

    $app.classList.add("bg-custom-bg-1", "bg-cover", "bg-bottom", "h-screen")

    const $containerFormRecover = document.createElement("main");

    $containerFormRecover.classList.add("flex", "justify-center", "items-center");

    $containerFormRecover.innerHTML = `
    <form id="formRecover" action="" class="flex flex-col">
        <p class="text-4xl text-center font-bold mb-5 mt-12">Recuperar cuenta</p>
        <p class="text-center mb-5 font-medium">Ingresa tu correo electronico</p>
        <label for="emailRecover" class="text-sm">EMAIL:</label>
        <input class="border border-black p-3 mb-4 min-w-80" placeholder="example@gmail.com" type="text" id="emailRecover">
        <button type="submit" class="bg-yellow-400 text-white px-6 py-3 max-w-44 mt-8 self-center hover:bg-yellow-600 hover:text-slate-50 transition-colors">Recuperar</button>
    </form>
    `

    return $containerFormRecover;

}