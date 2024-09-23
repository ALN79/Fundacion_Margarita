import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { authUser } from "./javascript/services/authUser.js"
import { LandingPage } from './javascript/pages/LandingPage';
import { LoginPage } from './javascript/pages/LoginPage';
import { RegisterPage } from './javascript/pages/RegisterPage';
import { RecoverPage } from './javascript/pages/RecoverPage';
import { ContactPage } from './javascript/pages/ContactPage';
import { AboutUsPage } from './javascript/pages/AboutUsPage';
function App() {

  //Desestructura user y loading del resultado de la función
  const {user, loading} = authUser()

  //Mientras espera la función asincrona, renderiza la pantalla de carga
  if (loading) {
    return (
      <main className="bg-slate-400">
            <div className="flex justify-center items-center animate-spin rounded-full h-screen w-screen">
          <img src="img/loadingImage.png" alt="" width="400" height="400"/>
        </div>
      </main>
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
        <Route path="/home"
          element={user ? <LandingPage /> : <Navigate to={"/login"} />}
        />
          <Route path="/contact"
          element={user ? <ContactPage /> : <Navigate to={"/login"} />}
        />
          <Route path="/aboutus"
          element={user ? <AboutUsPage /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </Router>
  );
}

export { App };