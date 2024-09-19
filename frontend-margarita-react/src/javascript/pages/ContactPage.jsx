import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx"; 
import { enviarConsulta } from "../services/formContact.js";
import { useState } from "react";

function ContactPage() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const consulta = {
      nombre,
      email,
      mensaje
    };

    try {
      await enviarConsulta(consulta);
      alert('Consulta enviada con éxito');
      setNombre('');
      setEmail('');
      setMensaje('');
    } catch (error) {
      alert('Hubo un error al enviar la consulta');
    }
  };

  return (
    <div className="bg-custom-bg-2 bg-cover min-h-screen">
      <Header />
      <div className="flex justify-center">
        <img
          className="w-full mt-2"
          src="/img/BannerContact.svg"
          alt="404 not found"
        />
      </div>
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <img
              className="w-1/5"
              src="/img/PhoneIcon.svg"
              alt="404 not found"
            />
            <p className="text-2xl font-bold">Contacto</p>
            <p className="text-lg font-bold">Teléfono: +52 55 1234 5678</p>
            <p className="text-lg font-bold">Email: 0m8kM@example.com</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-1/5"
              src="/img/ClockIcon.svg"
              alt="404 not found"
            />
            <p className="text-2xl font-bold">Horario de atención</p>
            <p className="text-lg font-bold">Lun - Vier: 9:00 - 18:00</p>
            <p className="text-lg font-bold">Sab - Dom: Cerrado</p>
          </div>
        </div>
      </div>
   
      <div className="max-w-md mx-auto mt-10 bg-gray-200 p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Envíanos tu consulta</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Mensaje:</label>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500 w-full"
          >
            Enviar
          </button>
        </form>
      </div>

      <Footer /> 
    </div>
  );
}

export { ContactPage };
