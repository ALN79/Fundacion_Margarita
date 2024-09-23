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


const pathname = window.location.pathname

const $app = document.getElementById("app")


const cargarPagina = async () => {

    const user = await authJWT()

   
    if (pathname === "/home") {
        
        if (!user) {
            window.location.href = '/login';
        }

        $app.appendChild(Header());
        $app.appendChild(landingPage())
        const logoutButton = document.getElementById("logout");
        if (logoutButton) {
            logoutButton.addEventListener("click", logout);
        }
    }


    if (pathname === "/register") {
        $app.appendChild(registerPage())
        const formRegister = document.getElementById("formRegister")
        if (formRegister) {
            formRegister.addEventListener("submit", register)
        }
    }
    
    if (pathname === "/login") {
        $app.appendChild(loginPage())
        const formLogin = document.getElementById("formLogin")
        if (formLogin) {
            formLogin.addEventListener("submit", login)
        }
    }
    
    if (pathname === "/recover") {
        $app.appendChild(recoverPage())
        const formRecover = document.getElementById("formRecover")
        if (formRecover) {
            formRecover.addEventListener("submit", recover)
        }
    }
}

cargarPagina()