import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import { auth } from './Firebase/FireBase.js'

import './Firebase/Register.js'
import './Firebase/Logout.js'

onAuthStateChanged(auth, async (user) => {
    console.log(user)
})