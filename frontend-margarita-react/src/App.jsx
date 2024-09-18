import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './javascript/pages/LandingPage';
import { LoginPage } from './javascript/pages/LoginPage';
import { RegisterPage } from './javascript/pages/RegisterPage';
import { RecoverPage } from './javascript/pages/RecoverPage';
import { ContactPage } from './javascript/pages/ContactPage';
 import { AboutUsPage } from './javascript/pages/AboutUsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recover" element={<RecoverPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export { App };