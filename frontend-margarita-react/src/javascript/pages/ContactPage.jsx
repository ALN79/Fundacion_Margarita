import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx"; 
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { HiEnvelope } from "react-icons/hi2";
import { FaTshirt, FaBreadSlice, FaDonate, FaBitcoin, FaShareAlt } from "react-icons/fa"; // Íconos
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


function ContactPage() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mostrarDescripcionRopa, setMostrarDescripcionRopa] = useState(false);
  const [mostrarDescripcionComida, setMostrarDescripcionComida] = useState(false);
  const [mostrarDescripcionDinero, setMostrarDescripcionDinero] = useState(false);
  const [mostrarDescripcionCripto, setMostrarDescripcionCripto] = useState(false);
  const [mostrarDescripcionRedes, setMostrarDescripcionRedes] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

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

      <div className="container mx-auto px-4 sm:px-0 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 relative inline-block group">
        Formas en las que puedes ayudar
        <span className="block h-1 bg-yellow-400 absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        
        <div className="flex flex-col items-center text-center max-w-xs group">
          <div
            className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 transform hover:bg-yellow-400 hover:scale-110 cursor-pointer"
            onClick={() => setMostrarDescripcionRopa(!mostrarDescripcionRopa)}
          >
            <FaTshirt className="text-2xl" />
          </div>
          <p className="text-lg font-bold mt-2 relative inline-block group">
            Donar ropa
            <span className="block h-1 bg-yellow-400 absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p
            className={`text-sm text-black mt-1 transition-opacity duration-300 ${
              mostrarDescripcionRopa ? 'bg-gray-200 bg-opacity-70 opacity-100' : 'opacity-0'
            } sm:block`}
          >
            Ayuda a quienes más lo necesitan donando ropa en buen estado para abrigar y proteger a familias en situación vulnerable.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs group">
          <div
            className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 transform hover:bg-yellow-400 hover:scale-110 cursor-pointer"
            onClick={() => setMostrarDescripcionComida(!mostrarDescripcionComida)}
          >
            <FaBreadSlice className="text-2xl" />
          </div>
          <p className="text-lg font-bold mt-2 relative inline-block group">
            Donar comida
            <span className="block h-1 bg-yellow-400 absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p
            className={`text-sm text-black mt-1 transition-opacity duration-300 ${
              mostrarDescripcionComida ? 'bg-gray-200 bg-opacity-70 opacity-100' : 'opacity-0'
            } sm:block`}
          >
            Con tu donación de alimentos, puedes aportar a mejorar la nutrición de familias y comunidades que lo necesitan.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs group">
          <div
            className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 transform hover:bg-yellow-400 hover:scale-110 cursor-pointer"
            onClick={() => setMostrarDescripcionDinero(!mostrarDescripcionDinero)}
          >
            <FaDonate className="text-2xl" />
          </div>
          <p className="text-lg font-bold mt-2 relative inline-block group">
            Donar dinero
            <span className="block h-1 bg-yellow-400 absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p
            className={`text-sm text-black mt-1 transition-opacity duration-300 ${
              mostrarDescripcionDinero ? 'bg-gray-200 bg-opacity-70 opacity-100' : 'opacity-0'
            } sm:block`}
          >
            Con tu aporte económico, podremos llevar a cabo más acciones solidarias y proyectos que mejoren la vida de quienes más lo necesitan.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs group">
          <div
            className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 transform hover:bg-yellow-400 hover:scale-110 cursor-pointer"
            onClick={() => setMostrarDescripcionCripto(!mostrarDescripcionCripto)}
          >
            <FaBitcoin className="text-2xl" />
          </div>
          <p className="text-lg font-bold mt-2 relative inline-block group">
            Donar criptomonedas
            <span className="block h-1 bg-yellow-400 absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p
            className={`text-sm text-black mt-1 transition-opacity duration-300 ${
              mostrarDescripcionCripto ? 'bg-gray-200 bg-opacity-70 opacity-100' : 'opacity-0'
            } sm:block`}
          >
            Si prefieres el mundo digital, puedes contribuir donando criptomonedas para apoyar nuestras causas solidarias.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs group">
          <div
            className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 transform hover:bg-yellow-400 hover:scale-110 cursor-pointer"
            onClick={() => setMostrarDescripcionRedes(!mostrarDescripcionRedes)}
          >
            <FaShareAlt className="text-2xl" />
          </div>
          <p className="text-lg font-bold mt-2 relative inline-block group">
            Difundir en redes
            <span className="block h-1 bg-yellow-400 absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p
            className={`text-sm text-black mt-1 transition-opacity duration-300 ${
              mostrarDescripcionRedes ? 'bg-gray-200 bg-opacity-70 opacity-100' : 'opacity-0'
            } sm:block`}
          >
            Ayúdanos a llegar a más personas compartiendo nuestra misión y campañas en tus redes sociales.
          </p>
        </div>

      </div>
    </div>

      <div className="container mx-auto px-4 sm:px-0 py-10 flex flex-col lg:flex-row gap-8 justify-center items-center">
        
        <div className="lg:w-2/3 max-w-md lg:max-w-none bg-gray-200 bg-opacity-90 p-6 rounded-lg shadow-md relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center flex items-center justify-center">
            <HiEnvelope className="mr-2" /> {/* Icono de correo */}
            Envíanos tu consulta
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-6 mt-3">
              <Label htmlFor="email" className="mb-2 block">
                Tu email
              </Label>
              <TextInput 
                id="email" 
                name="email" 
                placeholder="ejemplo@gmail.com" 
                type="email" 
                className="w-full"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block">
                Asunto
              </Label>
              <TextInput 
                id="subject" 
                name="subject" 
                placeholder="Describir el asunto..." 
                className="w-full"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="message" className="mb-2 block">
                Tu mensaje
              </Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Ingresa tu mensaje..." 
                rows={4} 
                className="w-full"
              />
            </div>
            <div className="mb-6">
              <Button type="submit" className="w-full bg-yellow-400">
                Enviar mensaje
              </Button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="mailto:info@company.com" className="hover:underline">
                info@company.com
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="tel:2124567890" className="hover:underline">
                212-456-7890
              </a>
            </p>
          </form>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 h-1 bg-yellow-400"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute top-0 right-0 w-1 bg-yellow-400"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-0 right-0 h-1 bg-yellow-400"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1, delay: 3 }}
            className="absolute bottom-0 left-0 w-1 bg-yellow-400"
          />
        </div>

       <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="p-4 bg-gray-200 bg-opacity-70 rounded-lg text-center"
      >
        <img
          className="w-16 sm:w-1/5 mx-auto"
          src="/img/PhoneIcon.svg"
          alt="404 not found"
        />
        <p className="text-xl sm:text-2xl font-bold">Contacto</p>
        <p className="text-sm sm:text-lg font-bold">Teléfono: +54 9 3704 409-3764</p>
        <p className="text-sm sm:text-lg font-bold">Email: fundacionmargarita@gmail.com</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="p-4 bg-gray-200 bg-opacity-70 rounded-lg text-center"
      >

        <div className="text-2xl font-bold mb-4">{formatTime(time)}</div>
        <p className="text-xl sm:text-2xl font-bold">Horario de atención</p>
        <p className="text-sm sm:text-lg font-bold">Lun - Vier: 9:00 - 18:00</p>
        <p className="text-sm sm:text-lg font-bold">Sab - Dom: Cerrado</p>
      </motion.div>
    </div>

      <Footer /> 
    </div>
  );
}

export { ContactPage };
