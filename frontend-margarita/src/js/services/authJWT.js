export const authJWT = async () => {
    try {
        const response = await fetch("http://localhost:3000/authenticate-jwt",{
            method: "GET",
            credentials: "include", 
        });
        
        if(response.ok){
        //Retorna los datos del usuario (true) si el jwt es valido
            const data = await response.json()
            return data.user
        }
        //Sino retorna falso
        return false
    //Manejo de errores
    } catch (error) {
        alert("Error al autenticar el usuario", error)
        return false
    }
}