import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ismael-chavez',
    icon: FaLinkedin,
    color: 'text-electric-blue',
    textColor: 'text-electric-blue',
    hoverColor: 'hover:text-electric-cyan',
    bgColor: 'bg-electric-blue/20',
    borderColor: 'border-electric-blue/30',
    description: 'Red profesional'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Ismaeldevs',
    icon: FaGithub,
    color: 'text-electric-purple',
    textColor: 'text-electric-purple',
    hoverColor: 'hover:text-electric-cyan',
    bgColor: 'bg-electric-purple/20',
    borderColor: 'border-electric-purple/30',
    description: 'Proyectos de Código Abierto'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ismachz_',
    icon: FaInstagram,
    color: 'text-electric-amber',
    textColor: 'text-electric-amber',
    hoverColor: 'hover:text-electric-cyan',
    bgColor: 'bg-electric-amber/20',
    borderColor: 'border-electric-amber/30',
    description: 'Actualizaciones Sociales'
  },
  {
    name: 'X (Anteriormente Twitter)',
    url: 'https://x.com/Ismanchz',
    icon: FaXTwitter,
    color: 'text-electric-black',
    textColor: 'text-electric-white',
    hoverColor: 'hover:text-electric-white',
    bgColor: 'bg-electric-black/20',
    borderColor: 'border-electric-black/30',
    description: 'Perspectivas Tecnológicas'
  },
];

export default function SocialLinks() {
  return (
    <div className="space-y-6">
      {/* Grid Layout for Social Links */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {socialLinks.map(({ name, url, icon: Icon, color, textColor, hoverColor, bgColor, borderColor, description }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label={name}
          >
            {/* Glow Effect */}
            <div className={`absolute -inset-1 rounded-xl ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg`}></div>
            
            {/* Main Card */}
            <div className={`relative p-4 rounded-xl glass-effect border ${borderColor} hover:scale-105 transition-all duration-300`}>
              <div className="flex flex-col items-center space-y-2">
                <Icon className={`w-8 h-8 ${color} ${hoverColor} transition-colors duration-300`} />
                <div className="text-center">
                  <div className={`font-semibold text-sm ${textColor} ${hoverColor} transition-colors duration-300`}>
                    {name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {description}
                  </div>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className={`absolute top-1 right-1 w-2 h-2 rounded-full ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          </a>
        ))}
      </div>


    </div>
  );
}
