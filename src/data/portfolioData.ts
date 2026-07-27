export const portfolioData = {
    es: {
        hero: {
            firstName: "Alexander",
            lastName: "Matos",
            roles: ["Web", "UXDesign"],
            description: [
                "> DISEÑO Y DESARROLLO DE EXPERIENCIAS DIGITALES.",
                "> EXPERIENCIAS DIGITALES FUNCIONALES, ESTÉTICAS Y LLAMATIVAS."
            ],
            buttons: {
                projects: "Ver Proyectos",
                contact: "Contactar"
            }
        },
        about: {
            sidebarIntro: "Desarrollador web con corazon de artista. Combinando la lógica pura del software con el diseño de experiencias visuales únicas.",
            bioParagraphs: [
                "Hoy, con 6 años de experiencia en el sector tecnológico, mi propósito principal es fusionar mis dos grandes pasiones: el arte y la tecnología. He consolidado una base técnica robusta que me permite moverme con soltura entre lenguajes tradicionales como PHP y JavaScript y dominar el ecosistema moderno con herramientas como React, Astro y TypeScript. Mi enfoque siempre está en buscar mejoras operativas y construir plataformas donde una funcionalidad se encuentre con un diseño visualmente impactante.",
                "Lo visual sigue siendo mi filtro para ver el mundo, manteniendo vivo mi interés por disciplinas como el lettering y el tatuaje en mi vida personal. Y cuando necesito desconectar de las pantallas, lo más probable es que me encuentres buscando un buen café, o recorriendo el asfalto de Madrid sobre mi bici de piñón fijo."
            ],
            devSkills: ['React', 'Astro', 'TypeScript', 'Node.js', 'PHP', 'Tailwind', 'Linux', 'Terminal', 'Git', 'C'],
            uxSkills: ['Figma', 'Wireframing', 'UX Research', 'Prototipado', 'Sistemas de Diseño', 'Accesibilidad']
        },
        sections: {
            devTitle: "DEV PROJECTS",
            uxTitle: "UX DESIGN & ARTICLES",
            contactTitle: "Hablemos un poco",
            contactDescription: "[¿Tienes un proyecto en mente? Cuentame un poco más]"
        },
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            dev: "Dev",
            ux: "UX",
            contact: "Contacto"
        },
        contactForm: {
            name: "[Nombre]",
            email: "[Email]",
            message: "[Escribe tu mensaje]",
            send: "[Enviar]",
            success: "Conexión establecida.Tu Mensaje ha sido enviado."
        }
    },
    en: {
        hero: {
            firstName: "Alexander",
            lastName: "Matos",
            roles: ["Web", "UXDesign"],
            description: [
                "> ROLE: WEB DEVELOPER & UX DESIGNER.",
                "> OBJECTIVE: TRANSFORM INEFFICIENT PROCESSES INTO FUNCTIONAL, AESTHETIC, AND STRIKING DIGITAL EXPERIENCES."
            ],
            buttons: {
                projects: "View Projects",
                contact: "Contact"
            }
        },
        about: {
            sidebarIntro: "Web developer with an artist's soul (literally). Intersecting pure software logic with unique visual experience design.",
            bioParagraphs: [
                "Today, with 5 years of experience in the tech sector, my main purpose is to merge my two great passions: art and technology. I have consolidated a robust technical foundation that allows me to move easily between traditional languages like PHP and JavaScript, and master the modern ecosystem with tools like React, Astro, and TypeScript. My focus is always on hunting down operational inefficiencies and building platforms where functionality meets a visually striking design.",
                "Art remains my filter for viewing the world, keeping my interest in disciplines like lettering and tattooing alive. And when I need to disconnect from the screens, you'll most likely find me looking for a good dark roast coffee, or riding the asphalt of Madrid on my fixed-gear bike."
            ],
            devSkills: ['React', 'Astro', 'TypeScript', 'Node.js', 'PHP', 'Tailwind', 'Linux', 'Terminal'],
            uxSkills: ['Figma', 'Wireframing', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility']
        },
        sections: {
            devTitle: "DEV PROJECTS",
            uxTitle: "UX DESIGN & ARTICLES",
            contactTitle: "Initiate Sequence",
            contactDescription: "Have a project in mind? Input parameters into the terminal. I will respond in less than 24 clock cycles."
        },
        nav: {
            home: "Home",
            about: "About",
            dev: "Dev",
            ux: "UX",
            contact: "Contact"
        },
        contactForm: {
            name: "Identifier [Name]",
            email: "Return Node [Email]",
            message: "Payload [Message]",
            send: "Execute",
            success: "Connection established. Simulated message sent."
        }
    }
};

export function getI18n(lang: 'es' | 'en') {
    return portfolioData[lang] || portfolioData.es;
}