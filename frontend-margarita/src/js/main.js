import '../styles/style.css'
import { loginPage } from './pages/loginPage'
import { registerPage } from './pages/registerPage'
import { Header } from './components/header'
import { landingPage } from './pages/landingPage'

//Definir ruta
const pathname = window.location.pathname

const $app = document.getElementById("app")

//Cargar toda la página
const cargarPagina = async () => {
    
    $app.appendChild(Header());

    //Cargar Landing Page
    if (pathname === "/") $app.appendChild(landingPage())
    //Cargar Register
    if (pathname === "/register") $app.appendChild(registerPage())
    //Cargar Login
    if (pathname === "/login") $app.appendChild(loginPage())
}

cargarPagina()