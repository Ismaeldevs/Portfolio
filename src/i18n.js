import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definir traducciones directamente en el archivo
const esTranslations = {
  "navbar": {
    "home": "Inicio",
    "tech": "Tecnologías",
    "projects": "Proyectos",
    "contact": "Contacto",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "downloadCV": "Descargar CV"
  },
  "hero": {
    "greeting": "¡Hola! Soy",
    "name": "Ismael Chávez",
    "title": "Desarrollador de Software",
    "titleHighlight": "Full-Stack",
    "subtitle": "Full-Stack Web & Apasionado por la",
    "subtitleHighlight": "seguridad informática",
    "subtitleEnd": "",
    "ctaProjects": "Ver Proyectos",
    "ctaContact": "Contactar",
    "description": "Centrémonos en ofrecer soluciones significativas, aceptando los retos como oportunidades para perfeccionar y mejorar.",
    "subdesc": "Cada reto es un paso hacia la excelencia!"
  },
  "tech": {
    "title": "Tecnologías & Herramientas",
    "desc": "Stack tecnológico moderno para crear aplicaciones web de alta calidad y rendimiento."
  },
  "stats": {
    "titleStats": "Mi Impacto en Números",
    "experience": "Año de Experiencia",
    "projects": "Proyectos Desarrollados",
    "technologies": "Tecnologías Dominadas",
    "dedication": "Dedicación"
  },
  "projects": {
    "title": "Proyectos Destacados",
    "desc": "Una selección de mis trabajos más recientes, desde aplicaciones web hasta herramientas de ciberseguridad.",
    "ArConstructora": {
      "title": "CONSTRUCTORA AR S.R.L",
      "desc": "Un proyecto privado con Landing page y sistema de gestión para gestionar todos los datos de una empresa de construcción, desde un usuario hasta lo contable."
    },
    "NoxRecon": {
      "title": "NoxRecon - OSINT Toolkit",
      "desc": "Proyecto de ciberseguridad para realizar reconocimiento de manera rápida y eficiente."
    },
    "Nakamatec": {
      "title": "NakamaTec",
      "desc": "Landing Page para una empresa de software."
    },
    "Uptask": {
      "title": "UpTask",
      "desc": "Administra tus proyectos y tareas."
    }
  },
  "contacts": {
    "title": "Trabajemos Juntos",
    "desc": "¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a convertirlas en realidad.",
    "formTitle": "Envíame un mensaje",
    "formDesc": "¿Tienes una idea de proyecto? ¡Hablemos!",
    "textButton": "Contactame",
    "altContact": "O contáctame directamente",
    "name": "Ismael Chávez",
    "role": "Full-Stack Developer",
    "availability": "Disponible para proyectos",
    "expYears": "Año de experiencia",
    "projects": "Proyectos desarrollados",
    "downloadCV": "Descargar CV",
    "responseTime": "Tiempo de respuesta: 24h",
    "quote": "La tecnología es mejor cuando une a las personas."
  },
  "footer": {
    "copyright": "Desarrollado con ❤️",
    "allRights": "Todos los derechos reservados"
  },
};

const enTranslations = {
  "navbar": {
    "home": "Home",
    "tech": "Technologies",
    "projects": "Projects",
    "contact": "Contact",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "downloadCV": "Download CV"
  },
  "hero": {
    "greeting": "Hello! I'm",
    "name": "Ismael Chávez",
    "title": "Software Developer",
    "titleHighlight": "Full-Stack",
    "subtitle": "Full-Stack Web & Passionate about",
    "subtitleHighlight": "cybersecurity",
    "subtitleEnd": "",
    "ctaProjects": "View Projects",
    "ctaContact": "Contact",
    "description": "Let's focus on delivering meaningful solutions, embracing challenges as opportunities to refine and improve.",
    "subdesc": "Every challenge is a step toward excellence!"
  },
  "tech": {
    "title": "Technologies & Tools",
    "desc": "Modern technology stack to create high-quality, high-performance web applications."
  },
  "stats": {
    "titleStats": "My Impact in Numbers",
    "experience": "Years of Experience",
    "projects": "Projects Developed",
    "technologies": "Technologies Mastered",
    "dedication": "Dedication"
  },
  "projects": {
    "title": "Featured Projects",
    "desc": "A selection of my most recent work, from web applications to cybersecurity tools.",
    "ArConstructora": {
      "title": "CONSTRUCTORA AR S.R.L",
      "desc": "A private project with a landing page and management system to handle all data of a construction company, from users to accounting."
    },
    "NoxRecon": {
      "title": "NoxRecon - OSINT Toolkit",
      "desc": "Cybersecurity project to perform reconnaissance quickly and efficiently."
    },
    "Nakamatec": {
      "title": "NakamaTec",
      "desc": "Landing page for a software company."
    },
    "Uptask": {
      "title": "UpTask",
      "desc": "Manage your projects and tasks."
    }
  },
  "contacts": {
    "title": "Let's Work Together",
    "desc": "Do you have a project in mind? I'd love to hear your ideas and help you turn them into reality.",
    "formTitle": "Send me a message",
    "formDesc": "Have a project idea? Let's talk!",
    "textButton": "Contact me",
    "altContact": "Or contact me directly",
    "name": "Ismael Chávez",
    "role": "Full-Stack Developer",
    "availability": "Available for projects",
    "expYears": "Years of experience",
    "projects": "Projects developed",
    "downloadCV": "Download CV",
    "responseTime": "Response time: 24h",
    "quote": "Technology is best when it brings people together."
  },
    "footer": {
      "copyright": "Developed with ❤️",
      "allRights": "All rights reserved"
    },
};

// Debug: Verificar que los archivos se cargan correctamente
console.log('ES Translations loaded:', esTranslations);
console.log('EN Translations loaded:', enTranslations);

const resources = {
  es: {
    translation: esTranslations
  },
  en: {
    translation: enTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Idioma por defecto: Español
    fallbackLng: 'es',
    debug: true, // Habilitar debug para ver qué está pasando
    interpolation: {
      escapeValue: false // React ya escapa por defecto
    }
  });

export default i18n;
