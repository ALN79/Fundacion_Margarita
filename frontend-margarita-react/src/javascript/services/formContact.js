export const sendContact = async (e) => {

  e.preventDefault()

  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const subject = document.getElementById("subject").value.trim()
  const message = document.getElementById("message").value.trim()

  if (!name || !email || !subject || !message) {
    return alert('Datos faltantes');
}

  try {
    const response = await fetch("http://localhost:3000/send-contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,email,subject,message}),
    });

    if (!response.ok) {
      throw new Error('Error al enviar la consulta');
    }

    return alert("Correo Enviado Correctamente"); 
  } catch (error) {
    console.error('Hubo un problema con el envío:', error);
    throw error;
  }
};


