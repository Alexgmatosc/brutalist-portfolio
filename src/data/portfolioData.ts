export const portfolioData = {
    es: {
        hero: {
            firstName: "Alexander",
            lastName: "Matos",
            roles: ["Web Developer", "UX Designer", "Creative Coder"],
            description: [
                "> ROL: DESARROLLADOR WEB & UX DESIGNER.",
                "> OBJETIVO: CONSTRUIR PRODUCTOS DIGITALES DONDE LA LÓGICA DEL CÓDIGO Y LA ESTÉTICA DEL DISEÑO CONVERGEN."
            ],
            buttons: {
                projects: "Ver Proyectos",
                contact: "Contactar"
            }
        },
        about: {
            sidebarIntro: "Desarrollador web con formación en Bellas Artes. Llevando la composición visual al código para transformar ideas complejas en experiencias digitales memorables.",
            bioParagraphs: [
                "Mi camino creativo comenzó en Venezuela, donde estudié Bellas Artes en la Universidad Centroccidental Lisandro Alvarado. Durante esa etapa, mi mundo se definía por el lienzo, la estética y la composición visual. Sin embargo, tras establecerme en Madrid, mi curiosidad por cómo las personas interactúan con la tecnología me llevó a estudiar Diseño UX.",
                "Diseñar experiencias fue solo el principio; rápidamente sentí la necesidad de aprender a construirlas desde cero. Este salto hacia el desarrollo de software me llevó a 42 Madrid, una etapa que cambió mi vida. Allí no solo forjé mi pensamiento lógico y mi capacidad para resolver problemas, sino que adquirí una autonomía total ante cualquier reto técnico. Fue entonces cuando comprendí que la programación y el arte no son mundos opuestos: ambas disciplinas tratan de dar estructura, equilibrio y significado a una idea.",
                "Hoy, con 5 años de experiencia en el sector tecnológico, mi propósito principal es fusionar mis dos grandes pasiones: el arte y la tecnología. He consolidado una base técnica robusta que me permite moverme con soltura entre lenguajes tradicionales como PHP y dominar el ecosistema moderno con herramientas como React, Astro y TypeScript. Mi enfoque siempre está en cazar ineficiencias operativas y construir plataformas donde una funcionalidad impecable se encuentre con un diseño visualmente impactante.",
                "El arte sigue siendo mi filtro para ver el mundo, manteniendo vivo mi interés por el lettering y el diseño. Y cuando necesito desconectar de las pantallas, lo más probable es que me encuentres tocando el bajo, buscando un buen café oscuro, o recorriendo el asfalto de Madrid sobre mi Cinelli de piñón fijo."
            ],
            devSkills: ['React', 'Astro', 'TypeScript', 'Node.js', 'PHP', 'Tailwind', 'Linux', 'Terminal'],
            uxSkills: ['Figma', 'Wireframing', 'User Research', 'Prototipado', 'Sistemas de Diseño', 'Accesibilidad']
        },
        sections: {
            devTitle: "DEV PROJECTS",
            uxTitle: "UX DESIGN & ARTICLES",
            contactTitle: "Hablemos",
            contactDescription: "¿Tienes un proyecto en mente, necesitas optimizar una plataforma o buscas darle una vuelta a tu interfaz? Escríbeme y le damos forma a tu idea."
        },
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            dev: "Dev",
            ux: "UX",
            contact: "Contacto"
        },
        contactForm: {
            name: "Identificador [Nombre]",
            email: "Nodo de Retorno [Email]",
            message: "Carga Útil [Mensaje]",
            send: "Ejecutar",
            success: "Conexión establecida. Mensaje simulado enviado."
        }
    },
    en: {
        hero: {
            firstName: "Alexander",
            lastName: "Matos",
            roles: ["Web Developer", "UX Designer", "Creative Coder"],
            description: [
                "> ROLE: WEB DEVELOPER & UX DESIGNER.",
                "> OBJECTIVE: BUILD DIGITAL PRODUCTS WHERE THE LOGIC OF CODE AND THE AESTHETICS OF DESIGN CONVERGE."
            ],
            buttons: {
                projects: "View Projects",
                contact: "Contact"
            }
        },
        about: {
            sidebarIntro: "Web developer with a background in Fine Arts. Bringing visual composition to code to transform complex ideas into memorable digital experiences.",
            bioParagraphs: [
                "My creative journey began in Venezuela, where I studied Fine Arts at the Universidad Centroccidental Lisandro Alvarado. During that time, my world was defined by the canvas, aesthetics, and visual composition. However, after settling in Madrid, my curiosity about how people interact with technology led me to study UX Design.",
                "Designing experiences was just the beginning; I quickly felt the need to learn how to build them from scratch. This leap into software development brought me to 42 Madrid, a stage that changed my life. There, I not only forged my logical thinking and problem-solving skills, but I also acquired total autonomy in the face of any technical challenge. It was then that I understood that programming and art are not opposite worlds: both disciplines are about giving structure, balance, and meaning to an idea.",
                "Today, with 5 years of experience in the tech sector, my main purpose is to merge my two great passions: art and technology. I have consolidated a robust technical foundation that allows me to move easily between traditional languages like PHP and master the modern ecosystem with tools like React, Astro, and TypeScript. My focus is always on hunting down operational inefficiencies and building platforms where impeccable functionality meets a visually striking design.",
                "Art remains my filter for viewing the world, keeping my interest in lettering and design alive. And when I need to disconnect from the screens, you'll most likely find me playing bass, looking for a good dark roast coffee, or riding the asphalt of Madrid on my fixed-gear Cinelli."
            ],
            devSkills: ['React', 'Astro', 'TypeScript', 'Node.js', 'PHP', 'Tailwind', 'Linux', 'Terminal'],
            uxSkills: ['Figma', 'Wireframing', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility']
        },
        sections: {
            devTitle: "DEV PROJECTS",
            uxTitle: "UX DESIGN & ARTICLES",
            contactTitle: "Let's Talk",
            contactDescription: "Have a project in mind, need to optimize a platform, or looking to revamp your interface? Write me and let's shape your idea."
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