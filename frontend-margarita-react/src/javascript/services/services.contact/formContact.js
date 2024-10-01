export const sendContact = async (e) => {

  e.preventDefault()

  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const subject = document.getElementById("subject").value.trim()
  const message = document.getElementById("message").value.trim()

  if (!name || !email || !subject || !message) {
    return alert('Datos faltantes');
  }

  //Carga del boton del formulario
  const submitButtonContact = document.getElementById("button-contact")
  submitButtonContact.disabled = true
  submitButtonContact.innerHTML = `
  <img src="img/loadingImage.png" alt="" width="90" height="90" class="animate-spin -my-7" />
  `

  try {
    const response = await fetch("http://localhost:3000/send-contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (!response.ok) {
      throw new Error('Error al enviar la consulta');
    }
    else {
      alert("Correo Enviado Correctamente");
      //Deja en blanco los inputs del formulario
      e.target.reset()
    }
  } catch (error) {
    alert("Error inesperado, intente de nuevo mas tarde")
    console.error('Hubo un problema con el envío:', error);
    throw error;
  }
  finally{
    //Devuelve el boton del formulario a su estado original
    submitButtonContact.disabled = false
    submitButtonContact.innerHTML = "Enviar Mensaje"
  }
};
