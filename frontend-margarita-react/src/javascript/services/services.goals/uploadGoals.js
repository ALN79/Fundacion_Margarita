export const uploadGoals = async (e) => {
    e.preventDefault();

    const titleGoal = document.getElementById('title-goal').value.trim();
    const descriptionGoal = document.getElementById('description-goal').value.trim();
    const emailContactGoal = document.getElementById('email-goal').value.trim();
    const numberContactGoal = document.getElementById('number-goal').value.trim();
    const typeGoal = document.getElementById('type-goal').value;
    
    // Inicializamos amountGoal en null
    let amountGoal = undefined;

    // Si el tipo de meta es "Dinero", necesitamos validar y obtener amountGoal
    if (typeGoal === 'Dinero') {
        amountGoal = document.getElementById('amount-goal').value.trim();
        amountGoal = parseInt(amountGoal)
        if (!amountGoal) {
            return alert("Debes ingresar una cantidad para la meta de Dinero");
        }
    }

    // Validamos los campos obligatorios, pero excluimos amountGoal si no es "Dinero"
    if (!titleGoal || !descriptionGoal || !numberContactGoal || !emailContactGoal || !typeGoal) {
        return alert("Todos los campos deben estar completos");
    }

    try {
        const response = await fetch('http://localhost:3000/upload-goals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ 
                titleGoal, 
                descriptionGoal, 
                numberContactGoal, 
                emailContactGoal, 
                typeGoal, 
                ...(amountGoal && { amountGoal })  // Solo incluimos amountGoal si existe
            }),
        });

        if (response.ok) {
            alert("Causa subida correctamente");
            window.location.href = '/goals';
            return;
        }

        alert("Ocurrió un error inesperado, intenta de nuevo más tarde");

    } catch (error) {
        console.error("No se pudo subir la causa", error);
        alert("Ocurrió un error inesperado, intenta de nuevo más tarde");
    }
};
