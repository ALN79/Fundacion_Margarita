import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { HiEnvelope } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { sendContact } from "../services/services.contact/formContact.js";

function ContactPage() {
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

  return (
    <div className="bg-custom-bg-2 bg-cover min-h-screen overflow-hidden">
      <Header />
      <div className="flex justify-center">
        <img
          className="w-full mt-2"
          src="/img/BannerContact.svg"
          alt="404 not found"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-5 py-10 flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="lg:w-2/3 max-w-md lg:max-w-none bg-gray-200 bg-opacity-90 p-6 rounded-lg shadow-md relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center flex items-center justify-center">
            <HiEnvelope className="mr-2" /> {/* Icono de correo */}
            Envíanos tu consulta
          </h2>
          <form onSubmit={sendContact} className="space-y-4 text-black">
            <div className="mb-6 mt-3">
              <Label htmlFor="name" className="mb-2 block" style={{ color: 'black' }}> 
                Tu nombre
              </Label>
              <TextInput
                id="name"
                name="name"
                placeholder="Ingresa tu nombre..."
                style={{ color: 'black' }} 
                className="w-full"
              />
            </div>
            <div className="mb-6 mt-3">
              <Label htmlFor="email" className="mb-2 block" style={{ color: 'black' }}> 
                Tu email
              </Label>
              <TextInput
                id="email"
                name="email"
                placeholder="ejemplo@gmail.com"
                type="email"
                style={{ color: 'black' }} 
                className="w-full"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block" style={{ color: 'black' }}> 
                Asunto
              </Label>
              <TextInput
                id="subject"
                name="subject"
                placeholder="Describir el asunto..."
                style={{ color: 'black' }} 
                className="w-full"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="message" className="mb-2 block" style={{ color: 'black' }}> 
                Tu mensaje
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Ingresa tu mensaje..."
                rows={4}
                style={{ color: 'black' }} 
                className="w-full p-2 resize-none"
              />
            </div>
            <div className="mb-6">
              <Button id="button-contact" type="submit" className="w-full bg-yellow-400 p-2 hover:bg-yellow-500 transition-colors">
                Enviar mensaje
              </Button>
            </div>
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

        <div className="flex flex-col gap-4 lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="p-4 bg-gray-200 bg-opacity-70 rounded-lg text-center"
          >
            <img
              className="w-10 sm:w-1/5 mx-auto"
              src="/img/PhoneIcon.svg"
              alt="404 not found"
            />
            <p className="text-xl sm:text-2xl font-bold">Contacto</p>
            <p className="text-sm sm:text-lg font-bold">Teléfono: +54 9 3704 409-3764</p>
            <p className="text-sm sm:text-lg font-bold">Email: fundacionmargarita24@gmail.com</p>
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
      </div>

      <Footer />
    </div>
  );
}

export { ContactPage };
