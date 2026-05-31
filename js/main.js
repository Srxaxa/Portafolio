import { animarHero, animarServicios, animarProyectos, animarContacto, animarFooter } from "./animaciones.js"
import { renderizarProyectos } from "./proyectos.js"
import { iniciarFormContacto, mostrarAlerta } from "./contacto.js"

animarHero()
animarServicios()
renderizarProyectos()
animarProyectos()
animarContacto()
animarFooter()
iniciarFormContacto()

// Bienvenida al cargar
setTimeout(() => {
    mostrarAlerta("// Bienvenido a mi portafolio")
}, 1500)


