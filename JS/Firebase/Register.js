import { createUserWithEmailandPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from './FireBase.js'

const registerform = document.querySelector('#register-form')

registerform.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = registerform ['resgisterEmail'].value
    const password = registerform ['resgisterPassword'].value

   try {
    const userCredentials = await createUserWithEmailandPassword(auth, email, password)
    console.log(userCredentials)
   } catch (error) {
    console.log(error)
   }
})