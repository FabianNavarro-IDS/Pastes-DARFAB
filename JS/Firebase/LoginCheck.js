const LoggedOutLinks = document.querySelectorAll('.loggedout')
const LoggedInLinks = document.querySelectorAll('.loggedin')

const carrito = document.querySelectorAll('#Carrito')

export const loginCheck = user => {
if (user){
    LoggedInLinks.forEach(link => link.style.display = 'block')
    LoggedOutLinks.forEach(link => link.style.display = 'none')

    carrito.forEach(link => link.style.display = 'block')
} else {
    LoggedInLinks.forEach(link => link.style.display = 'none')
    LoggedOutLinks.forEach(link => link.style.display = 'block')

    carrito.forEach(link => link.style.display = 'none')
}
}