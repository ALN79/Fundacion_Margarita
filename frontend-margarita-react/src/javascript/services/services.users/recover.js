export const recover = async (e) => {

    e.preventDefault()

    //Guardar los datos del formulario
    const emailRecover = document.getElementById("emailRecover").value.trim()

    if (!emailRecover) {
        return alert("Todos los campos son obligatorios");
    }

    //Carga del boton del formulario
    const submitButtonRecover = document.getElementById("button-recover")
    submitButtonRecover.disabled = true
    submitButtonRecover.innerHTML = `
    <img src="img/loadingImage.png" alt="" width="90" height="90" class="animate-spin -my-7" />
    `

    try {
        //Envia los datos del formulario al backend
        const peticionRecover = await fetch("http://localhost:3000/reset-password", {
            method: "POST",
            body: JSON.stringify({ emailRecover }),
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include"
        })
        //Manejo de errores
        if (!peticionRecover.ok) {
            const { message } = await peticionRecover.json()
            alert(message)
        }
        else {
            alert("Correo de recuperación enviado correctamente")
            window.location.href = "/"
        }
    } catch (error) {
        alert("Error inesperado, intente de nuevo mas tarde")
        console.error("ERROR AL RECUPERAR CONTRASEÑA", error)
    }
    finally {
        //Devuelve el boton del formulario a su estado original
        submitButtonRecover.disabled = false
        submitButtonRecover.innerHTML = "Enviar Mensaje"
    }
}

