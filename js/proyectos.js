// Datos de los proyectos
const proyectos = [
    {
        numero: "01",
        nombre: "Pokédex",
        descripcion: "Aplicación web que consume la PokeAPI en tiempo real. Muestra imágenes HD, stats y permite buscar cualquier pokémon.",
        tecnologias: ["HTML", "CSS", "JavaScript", "REST API"],
        link: "#"
    },
    {
        numero: "02",
        nombre: "RPG Inventory",
        descripcion: "Sistema CRUD completo con LocalStorage. Permite crear, buscar, filtrar y eliminar personajes con persistencia de datos.",
        tecnologias: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        link: "#"
    },
    {
        numero: "03",
        nombre: "Portafolio",
        descripcion: "Este mismo portafolio — diseño cyberpunk Tokyo con animaciones GSAP, SEO optimizado y enfoque en conversión.",
        tecnologias: ["HTML", "CSS", "JavaScript", "GSAP"],
        link: "#"
    }
]

// Renderizar proyectos
export function renderizarProyectos() {
    const contenedor = document.getElementById("proyectos-grid")

    proyectos.forEach(proyecto => {
        let card = document.createElement("div")
        card.className = "proyecto-card"

        card.innerHTML = `
            <div class="proyecto-numero">${proyecto.numero}</div>
            <div class="proyecto-info">
                <h3>${proyecto.nombre}</h3>
                <p>${proyecto.descripcion}</p>
                <div class="proyecto-tecnologias">
                    ${proyecto.tecnologias.map(tech => `<span>${tech}</span>`).join("")}
                </div>
            </div>
            <a href="${proyecto.link}" class="proyecto-link">Ver proyecto →</a>
        `

        contenedor.appendChild(card)
    })
}
