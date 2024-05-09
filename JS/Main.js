import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import { auth } from './Firebase/FireBase.js'
import { loginCheck } from './Firebase/LoginCheck.js'

import './Firebase/Register.js'
import './Firebase/login.js'
import './Firebase/Logout.js'


onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
})