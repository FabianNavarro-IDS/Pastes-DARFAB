import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import { auth } from "./FireBase.js";
import { mensaje } from './Mensaje.js'

const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = loginForm['loginEmail'].value
    const password = loginForm['loginPassword'].value

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log((credentials))

        const loginModal = document.querySelector('#loginModal')
        const modal = bootstrap.Modal.getInstance(loginModal)
        modal.hide()

    mensaje ("Bienvenido " + credentials.user.email)
    
    } catch (error) {
        if (error.code === 'auth/user-not-found'){
            mensaje("Correo Incorrecto", "error")
        } else if (error.code === 'auth/wrong-password'){
            mensaje("Contraseña Incorrecta", "error")
        } else if (error.code){
            mensaje("Algo va mal", "error")
        }
    }
})