import '../styles/style.css'
import { loginPage } from './pages/loginPage'
import { login } from './services/login'
import { logout } from './services/logout'
import { registerPage } from './pages/registerPage'
import { register } from './services/register'
import { Header } from './components/header'
import { landingPage } from './pages/landingPage'
import { recoverPage } from './pages/recoverPage'
import { recover } from './services/recover'
import { authJWT } from './services/authJWT'

//Definir ruta
const pathname = window.location.pathname

const $app = document.getElementById("app")

//Cargar toda la página
const cargarPagina = async () => {

    const user = await authJWT()

    //Cargar Landing Page
    if (pathname === "/home") {
        //Verifica si la sesión existe, si no existe reedirige al login
        if (!user) {
            window.location.href = '/login';
        }
        //Si existe carga la página
        $app.appendChild(Header());
        $app.appendChild(landingPage())
        const logoutButton = document.getElementById("logout");
        if (logoutButton) {
            logoutButton.addEventListener("click", logout);
        }
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
    //Cargar register
    if (pathname === "/recover") {
        $app.appendChild(recoverPage())
        const formRecover = document.getElementById("formRecover")
        if (formRecover) {
            formRecover.addEventListener("submit", recover)
        }
    }
}

cargarPagina()