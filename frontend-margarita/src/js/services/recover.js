const recover = async (e) => {

    e.preventdefault()

    //Guardar los datos del formulario
    const emailRecover = document.getElementById("emailRecover")

    if (!emailRecover) {
        return alert("Todos los campos son obligatorios");
    }

    try {
        //Envia los datos del formulario al backend
        const peticionRecover = await fetch("http://localhost:3000/recoverUsers",{
            method: "POST",
            body: JSON.stringify({emailRecover}),
            headers:{
                "Content-type":"application/json"   
            },
            credentials: "include"
        })
        //Manejo de errores
        if (!peticionRecover.ok){
            const {message} = await peticionRecover.json()
            alert(message)
        }
        else{
            window.location.href = "/login"
        }
    } catch (error) {
        console.error("ERROR AL RECUPERAR CONTRASEÑA",error)
    }
}

export {recover}
