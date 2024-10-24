export const renderGoals = async () => {
    try {
        const goalsInfo = await fetch("http://localhost:3000/get-info-goals")
        
            if (!goalsInfo.ok){
                console.error("Error al obtener las causas")
                alert("No existen causas disponibles")
                return[]
        }

        const data = await goalsInfo.json()


        return data

    } catch (error) {
        alert("Hubo un error inesperado al obtener las causas, intentelo más tarde")
        console.error("ERROR AL OBTENER LAS CAUSAS",error)
    }

}