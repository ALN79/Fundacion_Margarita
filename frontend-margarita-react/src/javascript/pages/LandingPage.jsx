import { useState, useEffect } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { BannerName } from "../components/bannerName.jsx";
import { motion } from "framer-motion";
import { authJWT } from "../services/services.users/authJWT.js";
import { FaBitcoin } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";   
import { FaBuilding } from "react-icons/fa";

export function LandingPage() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [pageSize] = useState(6);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = "d91c443745374cf4b666da7a29e1695d";
  const query = "ayuda humanitaria";

  const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const totalPages = Math.ceil(totalResults / pageSize);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const user = await authJWT();
        setUser({ ...user, username: capitalizeFirstLetter(user.username) });
      } catch (error) {
        console.error("Error al obtener el nombre del usuario", error);
      }
    };

    fetchUsername();

    const fetchNews = async () => {
      setLoading(true);
      const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === "ok") {
          setArticles(data.articles);
          setTotalResults(data.totalResults);
        } else {
          console.error("Error en la API:", data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const renderSkeleton = () => {
    return Array(pageSize).fill().map((_, index) => (
      <div key={index} className="bg-white h-96 w-full sm:w-60 shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col animate-pulse">
        <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    ));
  };

  const renderNews = () => {
    if (loading) {
      return renderSkeleton();
    }
    return articles.map((article) => (
      <div
        key={article.url}
        className="bg-white h-auto sm:h-96 w-full shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col"
      >
        {article.urlToImage && (
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
            />
          </a>
        )}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">{article.title}</h2>

        </div>
      </div>
    ));
  };

  const renderPagination = () => (
    <div className="flex space-x-4 mt-4">
      <button
        onClick={handlePreviousPage}
        disabled={page === 1}
        className={`px-4 py-2 border ${
          page === 1 ? "bg-gray-300 text-gray-500" : "bg-white text-yellow-500"
        } hover:bg-yellow-400 hover:text-white transition-colors`}
      >
        Página Anterior
      </button>
      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className={`px-4 py-2 border ${
          page === totalPages
            ? "bg-gray-300 text-gray-500"
            : "bg-white text-yellow-400"
        } hover:bg-yellow-500 hover:text-white transition-colors`}
      >
        Página Siguiente
      </button>
    </div>
  );

  return (
    <div className="bg-custom-bg-2 bg-cover min-h-screen">
      <Header />
      <main className="flex flex-col justify-center items-center px-4 py-8">
        {user ? (
          <BannerName username={user.username} />
        ) : (
          <p>Cargando usuario...</p>
        )}
        <h1 className="text-2xl sm:text-3xl font-semibold mb-0 mt-5 text-center">Noticias que podrían interesarte</h1>
        <div className="w-full max-w-6xl mt-8 flex flex-col lg:flex-row gap-4">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderNews()}
          </div>

          <motion.aside
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, duration: 0.8 }}
            className="w-full lg:w-1/3 bg-white shadow-md p-4 rounded-lg"
          >
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-2 border-yellow-200">
                <h3 className="text-md text-center font-semibold mb-2 text-yellow-400">
                  Donación en Criptomonedas
                </h3>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mb-4 text-gray-600 text-center text-bold font-semibold">
                    ¡SUMAMOS LA ÚLTIMA TECNOLOGÍA PARA QUE PUEDAS AYUDAR!
                  </p>
                  <div className="flex justify-center">
                    <FaBitcoin className="text-yellow-400 text-4xl mb-4" />
                  </div>
                  <p className=" text-gray-600 text-center ">
                    Implementamos donaciones a través de criptomonedas
                  </p>
                </motion.div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md border-2 border-yellow-200 ">
                <h3 className="text-md text-center font-semibold mb-2 text-yellow-400">
                  Donación de insumos
                </h3>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600 mb-4 text-center">
                    Ayúdanos a suplir necesidades claves para el funcionamiento
                    diario del Hogar.
                  </p>
                  <div className="flex justify-center">
                    <FaHandHoldingHeart className="text-yellow-400 text-4xl mb-4" />
                  </div>
                  <p className="text-gray-600 text-center">
                    Danos una mano con donaciones materiales para la vida
                    cotidiana de las personas.
                  </p>
                </motion.div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md border-2 border-yellow-200">
                <h3 className="text-md font-semibold mb-2 text-yellow-400 text-center">
                  Empresas
                </h3>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600 mb-4 text-center">
                    Tu empresa puede apoyarnos de diferentes maneras:
                  </p>
                  <div className="flex justify-center">
                    <FaBuilding className="text-yellow-400 text-4xl mb-4" />
                  </div>
                  <p className="text-gray-600 text-center ">
                    Padrino corporativo, Voluntariado, Acciones especiales,
                    Sponsor de eventos.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.aside>
        </div>

        {renderPagination()}
      </main>
      <Footer />
    </div>
  );
}
