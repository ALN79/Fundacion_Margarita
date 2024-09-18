import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './javascript/pages/LandingPage';
import { LoginPage } from './javascript/pages/LoginPage';
import { RegisterPage } from './javascript/pages/RegisterPage';
import { RecoverPage } from './javascript/pages/RecoverPage';
import { ContactPage } from './javascript/pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recover" element={<RecoverPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export { App };