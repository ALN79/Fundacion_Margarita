import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { authUser } from "./javascript/services/authUser.js"
import { LandingPage } from './javascript/pages/LandingPage';
import { LoginPage } from './javascript/pages/LoginPage';
import { RegisterPage } from './javascript/pages/RegisterPage';
import { RecoverPage } from './javascript/pages/RecoverPage';
import { ContactPage } from './javascript/pages/ContactPage';
import { AboutUsPage } from './javascript/pages/AboutUsPage';
import {NoSessionPage} from "./javascript/pages/NoSessionPage"
import { LoadingPage } from './javascript/pages/loadingPage';
import { Binance } from './javascript/pages/binance.jsx';
import { UpdatePasswordPage } from './javascript/pages/updatePasswordPage.jsx';
function App() {

  //Desestructura user y loading del resultado de la función
  const { user, loading } = authUser()

  //Mientras espera la función asincrona, renderiza la pantalla de carga
  if (loading) {
    return (
      <LoadingPage/>
    )
  }

  //Sino renderiza el sitio
  return (
    <Router>
      <Routes>

        <Route path="/login"
          element={user ? <Navigate to={"/home"} /> : <LoginPage />}
        />
        <Route path="/register"
          element={user ? <Navigate to={"/home"} /> : <RegisterPage />}
        />
        <Route path="/recover"
          element={user ? <Navigate to={"/home"} /> : <RecoverPage />}
        />
        <Route path="/reset/:token"
          element={user ? <Navigate to={"/home"} /> : <UpdatePasswordPage/>}
        />
        <Route path="/home"
          element={user ? <LandingPage /> : <Navigate to={"/login"} />}
        />
        <Route path="/contact"
          element={user ? <ContactPage /> : <Navigate to={"/login"} />}
        />
        <Route path="/binance"
          element={user ? <Binance /> : <Navigate to={"/login"} />}
        />
        <Route path="/aboutUs"
          element = {<AboutUsPage/>}
        />
        <Route path="/"
          element = {<NoSessionPage/>}
        />
      </Routes>
    </Router>
  );
}

export { App };