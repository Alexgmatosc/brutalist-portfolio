export const portfolioData = {
    es: {
        hero: {
            firstName: "Alexander",
            lastName: "Matos",
            roles: ["<span class='text-primary'>WEB</span>Dev", "<span class='text-primary'>UX</span>Design"],
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
            uxSkills: ['Figma', 'Wireframing', 'UX Research', 'Prototipado', 'Sistemas de Diseño', 'Accesibilidad'],
            labels: {
                profile: '_PERFIL',
                motion: 'SIEMPRE EN MOVIMIENTO',
                skills: '_HABILIDADES',
                dev: '# DESARROLLO',
                ux: '# DISEÑO',
                portrait: 'RETRATO'
            }
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
            blog: "Blog",
            contact: "Contacto"
        },
        contactForm: {
            name: "Nombre",
            email: "Email",
            message: "Mensaje",
            send: "Enviar Mensaje",
            success: "ÉXITO: Mensaje enviado correctamente",
            error: "ERROR: No se pudo enviar el mensaje. Inténtalo de nuevo.",
            placeholderName: "Ej. Alex Matos",
            placeholderEmail: "hola@ejemplo.com",
            placeholderMessage: "Cuéntame brevemente sobre tu proyecto o idea...",
            statusOpen: "ABIERTO A NUEVAS PROPUESTAS",
            statusProtocol: "COMUNICACIÓN DIRECTA",
            sending: "PROCESANDO...",
            sent: "¡ENVIADO!"
        }
    },
    en: {
        hero: {
            firstName: "Alexander",
            lastName: "Matos",
            roles: ["<span class='text-primary'>WEB</span>Dev", "<span class='text-primary'>UX</span>Design"],
            description: [
                "> DESIGN AND DEVELOPMENT OF DIGITAL EXPERIENCES.",
                "> FUNCTIONAL, AESTHETIC, AND STRIKING DIGITAL EXPERIENCES."
            ],
            buttons: {
                projects: "View Projects",
                contact: "Contact"
            }
        },
        about: {
            sidebarIntro: "Web developer with an artist's heart. Combining pure software logic with unique visual experience design.",
            bioParagraphs: [
                "Today, with 6 years of experience in the tech sector, my main purpose is to merge my two great passions: art and technology. I have consolidated a robust technical foundation that allows me to move effortlessly between traditional languages like PHP and JavaScript and master the modern ecosystem with tools like React, Astro, and TypeScript. My focus is always on seeking operational improvements and building platforms where functionality meets a visually striking design.",
                "The visual remains my filter for viewing the world, keeping my interest in disciplines like lettering and tattooing alive in my personal life. And when I need to disconnect from the screens, you'll most likely find me looking for a good coffee, or riding the asphalt of Madrid on my fixed-gear bike."
            ],
            devSkills: ['React', 'Astro', 'TypeScript', 'Node.js', 'PHP', 'Tailwind', 'Linux', 'Terminal', 'Git', 'C'],
            uxSkills: ['Figma', 'Wireframing', 'UX Research', 'Prototyping', 'Design Systems', 'Accessibility'],
            labels: {
                profile: '_PROFILE',
                motion: 'ALWAYS IN MOTION',
                skills: '_SKILLS',
                dev: '# DEVELOPMENT',
                ux: '# DESIGN',
                portrait: 'PORTRAIT'
            }
        },
        sections: {
            devTitle: "DEV PROJECTS",
            uxTitle: "UX DESIGN & ARTICLES",
            contactTitle: "Let's talk a bit",
            contactDescription: "[Have a project in mind? Tell me a bit more]"
        },
        nav: {
            home: "Home",
            about: "About",
            dev: "Dev",
            ux: "UX",
            blog: "Blog",
            contact: "Contact"
        },
        contactForm: {
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
            success: "SUCCESS: Message sent successfully",
            error: "ERROR: Could not send message. Please try again.",
            placeholderName: "e.g. Alex Matos",
            placeholderEmail: "hello@example.com",
            placeholderMessage: "Briefly tell me about your project or idea...",
            statusOpen: "OPEN TO NEW PROPOSALS",
            statusProtocol: "DIRECT COMMUNICATION",
            sending: "PROCESSING...",
            sent: "SENT!"
        }
    }
};

export function getI18n(lang: 'es' | 'en') {
    return portfolioData[lang] || portfolioData.es;
}