import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { authUser } from "./javascript/services/services.users/authUser.js"
import { LandingPage } from './javascript/pages/LandingPage';
import { LoginPage } from './javascript/pages/LoginPage';
import { RegisterPage } from './javascript/pages/RegisterPage';
import { RecoverPage } from './javascript/pages/RecoverPage';
import { ContactPage } from './javascript/pages/ContactPage';
import { AboutUsPage } from './javascript/pages/AboutUsPage';
import {NoSessionPage} from "./javascript/pages/NoSessionPage"
import { LoadingPage } from './javascript/pages/loadingPage';
import  MargaritasTransfer  from './javascript/pages/TransferM.jsx';
import { UpdatePasswordPage } from './javascript/pages/updatePasswordPage.jsx';
import {GoalsPage} from "./javascript/pages/GoalsPage.jsx"
import { UploadGoalsPage } from './javascript/pages/UploadGoalsPage.jsx';
import { ProfilePage } from './javascript/pages/ProfilePage.jsx';
import { OneGoalPage } from './javascript/pages/OneGoalPage.jsx';

import { CreateaddressM } from './javascript/pages/CreateaddressM.jsx'; // Esto es solo para ver lo de la creaccion de direcciones no se usara

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
        <Route path="/goals"
          element={user ? <GoalsPage /> : <Navigate to={"/login"} />}
        />
        <Route path="/upload-goals"
          element={user ? <UploadGoalsPage /> : <Navigate to={"/login"} />}
        />
        <Route path="/goal/:id"
          element={user ? <OneGoalPage /> : <Navigate to={"/login"} />}
        />
        <Route path="/TransferM"
          element={user ? <MargaritasTransfer /> : <Navigate to={"/login"} />}
        />
        <Route path="/CreateaddressM"
          element={user ? <CreateaddressM /> : <Navigate to={"/login"} />} // Esto es solo para ver lo de la creaccion de direcciones no se usara
        />
        <Route path="/aboutUs"
          element = {<AboutUsPage/>}
        />
        <Route path="/"
          element = {<NoSessionPage/>}
        />
          <Route path="/Profile"
          element={user ? <ProfilePage /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </Router>
  );
}

export { App };