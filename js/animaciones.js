// Animación de entrada del hero
export function animarHero() {
    const tl = gsap.timeline()

    tl.from(".hero-disponible", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out"
    })
    .from(".nombre-linea1", {
        opacity: 0,
        x: -100,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.2")
    .from(".nombre-linea2", {
        opacity: 0,
        x: 100,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from(".hero-titulo", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.3")
    .from(".hero-descripcion", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.3")
    .from(".hero-botones", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.3")
    .from(".hero-bg-texto span", {
        opacity: 0,
        scale: 1.2,
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=1")
}

export function animarServicios() {
    gsap.from(".servicio-card", {
        scrollTrigger: {
            trigger: "#servicios",
            start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    })

    gsap.from(".seccion-header", {
        scrollTrigger: {
            trigger: "#servicios",
            start: "top 80%",
        },
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: "power3.out"
    })
}

export function animarProyectos() {
    gsap.from(".proyecto-card", {
        scrollTrigger: {
            trigger: "#proyectos",
            start: "top 80%",
        },
        opacity: 0,
        x: -80,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    })
}

export function animarContacto() {
    gsap.from(".contacto-info", {
        scrollTrigger: {
            trigger: "#contacto",
            start: "top 80%",
        },
        opacity: 0,
        x: -80,
        duration: 0.8,
        ease: "power3.out"
    })

    gsap.from(".contacto-form", {
        scrollTrigger: {
            trigger: "#contacto",
            start: "top 80%",
        },
        opacity: 0,
        x: 80,
        duration: 0.8,
        ease: "power3.out"
    })
}

export function animarFooter() {
    gsap.from("footer", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out"
    })
}