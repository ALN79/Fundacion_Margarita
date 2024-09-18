const login = async (e) => {

    e.preventDefault()

    //Guarda los datos del formulario de login
    const emailLogin = document.getElementById("emailLogin").value.trim()
    const passwordLogin = document.getElementById("passwordLogin").value.trim()

    if (!emailLogin || !passwordLogin) {
        return alert("Todos los campos son obligatorios");
    }


    try {
        //Envia los datos del formulario al backend
        const peticionLogin = await fetch("http://localhost:3000/loginUsers",{
            method: "POST",
            body: JSON.stringify({emailLogin,passwordLogin}),
            headers:{
                "Content-type":"application/json"   
            },
            credentials: "include"
        })
        //Manejo de errores
        if (!peticionLogin.ok){
            const {message} = await peticionLogin.json()
            alert(message)
        }
        else{
            window.location.href = "/home"
        }
    } catch (error) {
        console.error("ERROR AL INICIAR SESIÓN",error)
    }
}



export {login}