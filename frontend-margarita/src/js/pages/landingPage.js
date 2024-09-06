export const landingPage = () => {

    const $app = document.getElementById("app")

    $app.classList.add("bg-custom-bg-2", "bg-cover", "h-screen")

    const $containerLandingPage = document.createElement("main");

    $containerLandingPage.classList.add("flex", "justify-center");

    $containerLandingPage.innerHTML = `
    <main class="flex justify-center">
        <p class="text-black text-5xl mt-72">Contenido Principal</p>
    </main>
    `

    return $containerLandingPage;

}