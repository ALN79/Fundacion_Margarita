import '../styles/style.css'
import { loginPage } from './pages/loginPage'
import { login } from './services/login'
import { registerPage } from './pages/registerPage'
import { register } from './services/register'
import { Header } from './components/header'
import { landingPage } from './pages/landingPage'

//Definir ruta
const pathname = window.location.pathname

const $app = document.getElementById("app")

//Cargar toda la página
const cargarPagina = async () => {
    
    //Cargar Landing Page
    if (pathname === "/home") {
        $app.appendChild(Header());
        $app.appendChild(landingPage())
    }

    //Cargar Register
    if (pathname === "/register") {
        $app.appendChild(registerPage())
        const formRegister = document.getElementById("formRegister")
        if (formRegister) {
            formRegister.addEventListener("submit", register)
        }
    }
    //Cargar Login
    if (pathname === "/login") {
        $app.appendChild(loginPage())
        const formLogin = document.getElementById("formLogin")
        if (formLogin) {
            formLogin.addEventListener("submit", login)
        }
    }
}

cargarPagina()