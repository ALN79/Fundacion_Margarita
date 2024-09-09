const logout = async (e) => {
    try {
        const peticionLogout = fetch('http://localhost:3000/logoutUsers', {
            method: 'POST',
            credentials: 'include'
        })
        (response => {
            if (peticionLogout.ok) {
                // Redirige al usuario a la página de inicio de sesión o a la página principal
                window.location.href = '/login';
            } else {
                // Manejar errores
                console.error('Error al cerrar sesión');
            }
        })
    } catch (error) {
        console.error('Error en la solicitud de logout', error);
    }
}

export {logout}
