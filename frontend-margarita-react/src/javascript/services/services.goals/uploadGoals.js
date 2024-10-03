const uploadGoals = async (e) => {
    
    const titleGoal = document.getElementById('title-goal').value.trim();
    const descriptionGoal = document.getElementById('description-goal').value.trim();
    const amountGoal = document.getElementById('amount-goal').value.trim();
    const typeGoal = document.getElementById('type-goal').value
    const emailContactGoal = document.getElementById('email-goal').value.trim();
    const numberContactGoal = document.getElementById('number-goal').value.trim();


    if (!titleGoal || !descriptionGoal || !numberContactGoal || !emailContactGoal) {
        alert("Todos los campos deben estar completos")
    }
    try {
        const response = await fetch('/upload-goals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({titleGoal,descriptionGoal,numberContactGoal,emailContactGoal, typeGoal, amountGoal}),
        });
        if (response.ok) {
            return alert("Causa subida correctamente")
        }   
        alert("Ocurrio un error inesperado, intente de nuevo más tarde")

    } catch (error) {
        console.error("No se pudo subir la causa", error)
        alert("Ocurrio un error inesperado, intente de nuevo más tarde")
    }
    
};
