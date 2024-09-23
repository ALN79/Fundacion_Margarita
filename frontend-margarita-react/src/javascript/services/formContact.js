const API_URL = 'http://localhost:3000/enviar-consulta';

export const enviarConsulta = async (consulta) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(consulta),
    });

    if (!response.ok) {
      throw new Error('Error al enviar la consulta');
    }

    return response.json();
  } catch (error) {
    console.error('Hubo un problema con el envío:', error);
    throw error;
  }
};


