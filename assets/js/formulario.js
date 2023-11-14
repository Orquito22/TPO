
function sendMail() {
    const form_name = document.getElementById("name").value;
    const form_email = document.getElementById("email").value;
    const form_message = document.getElementById("message").value;
    const form_phone = document.getElementById("phone").value;

    if (!form_name || !form_email || !form_message || !form_phone) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value,
    };

    // Deben ingresar el serviceID y templateID
    const serviceID = '';
    const templateID = '';

    emailjs.send(serviceID, templateID, params).then(function (res) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("phone").value = "";
    })
    alert("Su mensaje se envio con exito!!")
    .catch (err => console.log(err));

}