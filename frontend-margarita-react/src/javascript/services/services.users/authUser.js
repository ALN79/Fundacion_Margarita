import { useState, useEffect } from 'react';
import { authJWT } from './authJWT.js';

//Funcion asincrona para autorizar el usuario 
export const authUser = () => {
    //Define las constantes user y loading(pantalla de carga)
    const [user, setUser] = useState(null) //user = null
    const [loading, setLoading] = useState(true) //loading = true

    //UseEffect ejecuta la funcion cada vez que se recarga el sitio
    useEffect(() => {
        //Funcion asincrona para guardar el estado del usuario
        const checkAuth = async () => {
            //Guarda si existe el usuario o no (true, false)
            const userExist = await authJWT()
            //El valor guardado se le atribuye a user
            setUser(userExist)
            //La pantalla de carga finaliza
            setLoading(false)
        }
        //Ejecuta la funcion
        checkAuth()

    }, []);
    //Retorna los valores dentro de user y loading
    return {user, loading}
}; 