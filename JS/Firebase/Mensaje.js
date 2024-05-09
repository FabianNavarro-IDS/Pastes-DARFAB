export function mensaje(message, type = "Success"){
Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === "Success" ? "green" : "red"
    },
    onClick: function(){} // Callback after click
  }).showToast();
}