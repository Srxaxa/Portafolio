export function iniciarFormContacto() {
    const form = document.getElementById("form-contacto")

    form.addEventListener("submit", async function(evento) {
        evento.preventDefault()

        let nombre = document.getElementById("contact-nombre").value
        let email = document.getElementById("contact-email").value
        let mensaje = document.getElementById("contact-mensaje").value

        if (nombre === "" || email === "" || mensaje === "") {
            mostrarAlerta("// Por favor llena todos los campos")
            return
        }

        mostrarAlerta("// Enviando mensaje...")

        try {
            let response = await fetch("https://formspree.io/f/mdajvzpp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, email, mensaje })
            })

            if (response.ok) {
                mostrarAlerta("// Mensaje enviado — te contactaré pronto", 4000)
                form.reset()
            } else {
                mostrarAlerta("// Error al enviar — intenta de nuevo")
            }
        } catch (error) {
            mostrarAlerta("// Error de conexión — intenta de nuevo")
        }
    })
}

export function mostrarAlerta(mensaje, duracion = 3000) {
    const alerta = document.getElementById("alerta-logro")
    const texto = document.getElementById("alerta-texto")

    texto.textContent = mensaje
    alerta.classList.add("mostrar")

    setTimeout(() => {
        alerta.classList.remove("mostrar")
    }, duracion)
}