export const noSessionPage = () => {  
    const $app = document.getElementById("app");  

    // Añadimos overflow-hidden para evitar desplazamiento no deseado
    $app.classList.add("bg-custom-bg-2", "bg-cover", "bg-top", "overflow-hidden", "h-screen");  

    const $containernoSessionPage = document.createElement("main");  
    $containernoSessionPage.classList.add("flex", "justify-center", "items-center", "h-full");  

    // Ajustes responsive en la imagen y su contenedor
    $containernoSessionPage.innerHTML = `  
 
<div class="relative w-full h-screen flex justify-center">
    <!-- Capa amarilla con más altura -->
    <div class="absolute top-1/3 transform -translate-y-1/3 w-full h-1/2 bg-yellow-400 z-0 text-white p-6 text-xl"> 
        <div class="mt-10"> 
            Somos una plataforma digital que conecta personas, empresas y <br> 
            organizaciones que desean hacer un cambio positivo en el mundo <br> 
            con causas y proyectos que necesitan apoyo. Creemos en el poder <br> 
            de la comunidad para generar impacto y transformar vidas.<br> 
            A través de nuestra plataforma, facilitamos la interacción entre <br> 
            donantes y organizaciones sin fines de lucro, asegurando que cada donación <br> 
            llegue de manera transparente y efectiva a quienes más lo <br> 
            necesitan.
        </div> 
    </div>

    <!-- Contenedor de la imagen, oculto en pantallas pequeñas -->
    <div class="relative z-10 flex justify-end w-full hidden sm:flex">
        <img src="/img/prueba.png" alt="Not found" class="w-full sm:w-7/12 md:w-10/11 lg:w-6/6">  
    </div>
</div>

    `;  

    return $containernoSessionPage;  
}
