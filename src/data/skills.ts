import { SkillCategory } from '../types/skills';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Pruebas de penetración',
    icon: 'Target',
    color: 'cyan',
    skills: [
      { 
        name: 'Seguridad de Aplicaciones Web',
        description: 'Experto en OWASP Top 10, SQL injection, XSS, CSRF y vulnerabilidades web avanzadas. Proficiente en Burp Suite Pro, OWASP ZAP y técnicas de explotación personalizadas.'
      },
      { 
        name: 'Pruebas de Penetración de Redes',
        description: 'Evaluación de seguridad de red integral utilizando Nmap, Wireshark, Metasploit y scripts personalizados. Experiencia con pruebas de red internas y externas.'
      },
      { 
        name: 'Seguridad de Aplicaciones Móviles',
        description: 'Evaluación de seguridad de aplicaciones Android que incluye análisis estático/dinámico, ingeniería inversa y manipulación en tiempo de ejecución.'
      },
      { 
        name: 'Seguridad Inalámbrica',
        description: 'Evaluación de seguridad de WiFi, cracking de WPA/WEP, detección de puntos de acceso no autorizados y pruebas de penetración en redes inalámbricas utilizando la suite Aircrack-ng.'
      },
      { 
        name: 'Ingeniería Social',
        description: 'Campañas de phishing, pretexting, evaluación de seguridad física y análisis del factor humano.'
      }
    ]
  },
  {
    title: 'Herramientas de Seguridad',
    icon: 'Settings',
    color: 'purple',
    skills: [
      { 
        name: 'Burp Suite Professional',
        description: 'Aplicación web avanzada de pruebas de seguridad, desarrollo de extensiones personalizadas, creación de macros y escaneo automatizado con técnicas de verificación manual.'
      },
      { 
        name: 'Metasploit Framework',
        description: 'Dominio del marco de explotación que incluye desarrollo de módulos personalizados, generación de payloads, técnicas de post-explotación y estrategias de evasión.'
      },
      { 
        name: 'Nessus & OpenVAS',
        description: 'Escaneo de vulnerabilidades, evaluación de cumplimiento, creación de políticas personalizadas y gestión de vulnerabilidades con informes detallados y orientación sobre remediación.'
      },
      { 
        name: 'Wireshark & tcpdump',
        description: 'Análisis de protocolos de red, inspección de tráfico, análisis de comunicación de malware y forense de red con filtros personalizados y técnicas de análisis.'
      },
      { 
        name: 'Nmap',
        description: 'Escaneo de redes, detección de hosts, servicios y sistemas operativos, y mapeo de infraestructura de red con scripts personalizados para auditorías de seguridad.'
      },
      { 
        name: 'Aircrack-ng Suite',
        description: 'Evaluación de seguridad inalámbrica, cracking de claves WPA/WEP, análisis de paquetes y pruebas de penetración en redes WiFi.'
      }
    ]
  },
  {
    title: 'Programación & Scripting',
    icon: 'Code',
    color: 'green',
    skills: [
      { 
        name: 'Desarrollo de Seguridad en Python',
        description: 'Automatización de seguridad, desarrollo de exploits, creación de herramientas y scripting utilizando bibliotecas como Scapy, Requests, BeautifulSoup y frameworks de seguridad personalizados.'
      },
      { 
        name: 'Bash & PowerShell',
        description: 'Automatización de sistemas, scripting de seguridad, análisis de registros y tareas administrativas en entornos de Linux y Windows con técnicas de scripting avanzadas.'
      },
      { 
        name: 'JavaScript & Node.js',
        description: 'Pruebas de seguridad web, explotación de navegadores, desarrollo de payloads XSS y creación de herramientas de seguridad utilizando frameworks y APIs modernas de JavaScript.'
      },
      { 
        name: 'SQL & Seguridad en Bases de Datos',
        description: 'Técnicas de inyección SQL, evaluación de seguridad de bases de datos, optimización de consultas y endurecimiento de bases de datos en MySQL, PostgreSQL y MSSQL.'
      },
    ]
  }
];