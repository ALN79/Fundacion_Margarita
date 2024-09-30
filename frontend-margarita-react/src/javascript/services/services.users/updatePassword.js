export const updatePassword = async (token, e) => {

    e.preventDefault()

    const passwordUpdate  = document.getElementById("passwordUpdate").value
    const passwordUpdateRepeat = document.getElementById("passwordUpdateRepeat").value
    
    if (!passwordUpdate || !passwordUpdateRepeat) {
        return alert("Rellena los campos")
    }
    if (passwordUpdate != passwordUpdateRepeat) {
        return alert("Los campos deben coincidir")
    }
    try {
        //Envia el token y la contraseña al backend
        const peticionUpdate = await fetch("http://localhost:3000/update-password",{
            method: "POST",
            body: JSON.stringify({passwordUpdate, token}),
            headers:{
                "Content-type":"application/json"
            }
        })
        //Manejo de errores
        if (!peticionUpdate.ok){
            const {message} = await peticionUpdate.json()
            alert(message)
        }
        else{
            alert("Contraseña reestablecida")
            window.location.href = "/login"
        }
    } catch (error) {
        alert("Error inesperado, intente de nuevo mas tarde")
        console.error("ERROR AL ACTUALIZAR CONTRASEÑA",error)
    }
}