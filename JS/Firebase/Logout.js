import { signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import { auth } from './FireBase.js'

const logout = document.querySelector('#salirCuenta')

logout.addEventListener('click', async() => {
    await signOut(auth)
    console.log('logout')
})