export const register = async (e) => {

    e.preventDefault()

    //Guarda los datos del formulario de registro
    const name = document.getElementById("name").value.trim()
    const surname = document.getElementById("surname").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()

    //Valida que todos los campos esten completos
    if (!name || !surname || !email || !password) {
        return alert("Todos los campos son obligatorios");
    }

    try {
        //Envia los datos del formulario al backend
        const peticionRegistro = await fetch("http://localhost:3000/registerUsers",{
            method: "POST",
            body: JSON.stringify({name,surname,email,password}),
            headers:{
                "Content-type":"application/json"
            }
        })
        //Manejo de errores
        if (peticionRegistro.ok) {
            window.location.href = "/login";
        }
        else{
            const {message} = await peticionRegistro.json()
            alert(message)
        }
        
    } catch (error) {
        console.error("Error Inesperado")
        alert("Ocurrio un error inesperado, intente más tarde", error)
    }
}