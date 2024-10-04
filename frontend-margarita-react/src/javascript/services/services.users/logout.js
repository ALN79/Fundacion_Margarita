export const logout = async (e) => {
    e.preventDefault()
    
    try {
        const peticionLogout = await fetch('http://localhost:3000/logoutUsers', {
            method: 'POST',
            credentials: 'include'
        })
            if (peticionLogout.ok) {
                // Redirige al usuario a la página de inicio de sesión o a la página principal
                window.location.href = '/login';
            } else {
                // Manejar errores
                console.error('Error al cerrar sesión');
            }
    } catch (error) {
        alert("Error inesperado, intente de nuevo mas tarde")
        console.error('Error en la solicitud de logout', error);
    }
}

