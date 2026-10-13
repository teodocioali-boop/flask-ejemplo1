document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ app.js cargado");

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("¡Mensaje enviado!");
            form.reset();
        });
    }
});