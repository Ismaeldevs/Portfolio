import { Shield, Code, Cloud, Brain, CheckCircle, Star } from 'lucide-react';
import { SkillCategory } from '../../../types/skills';
import SkillCard from './SkillCard';

const icons = { Shield, Code, Cloud, Brain };

interface SkillDetailsProps {
  category: SkillCategory;
  isAnimating: boolean;
}

export default function SkillDetails({ category, isAnimating }: SkillDetailsProps) {
  const Icon = icons[category.icon as keyof typeof icons] || Shield;

  const getCategoryColor = (color: string) => {
    switch(color) {
      case 'cyan': return 'text-electric-blue';
      case 'purple': return 'text-electric-purple';
      case 'green': return 'text-electric-emerald';
      case 'blue': return 'text-electric-cyan';
      default: return 'text-electric-blue';
    }
  };

  const getCategoryGradient = (color: string) => {
    switch(color) {
      case 'cyan': return 'from-electric-blue/20 to-electric-cyan/20';
      case 'purple': return 'from-electric-purple/20 to-electric-rose/20';
      case 'green': return 'from-electric-emerald/20 to-electric-cyan/20';
      case 'blue': return 'from-electric-cyan/20 to-electric-blue/20';
      default: return 'from-electric-blue/20 to-electric-cyan/20';
    }
  };

  return (
    <div className={`transition-all duration-300 ${
      isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
    }`}>
      {/* Category Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className={`p-4 rounded-xl bg-gradient-to-r ${getCategoryGradient(category.color)} border border-current/30`}>
            <Icon className={`w-8 h-8 ${getCategoryColor(category.color)}`} />
          </div>
          <div>
            <h3 className="heading-secondary text-3xl text-slate-100">
              {category.title}
            </h3>
            <p className="text-slate-400 mt-1">
              {category.skills.length} habilidades especializadas
            </p>
          </div>
        </div>
        
        {/* Proficiency Indicator */}
        <div className="flex items-center space-x-2">
          <Star className={`w-5 h-5 ${getCategoryColor(category.color)}`} />
          <span className={`text-sm font-semibold ${getCategoryColor(category.color)}`}>
            Expert Level
          </span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {category.skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            color={category.color}
            delay={index * 100}
          />
        ))}
      </div>

      {/* Category Summary */}
      <div className={`premium-card p-6 bg-gradient-to-r ${getCategoryGradient(category.color)} border-l-4 border-current`}>
        <div className="flex items-start space-x-4">
          <CheckCircle className={`w-6 h-6 ${getCategoryColor(category.color)} mt-1 flex-shrink-0`} />
          <div>
            <h4 className={`text-lg font-semibold ${getCategoryColor(category.color)} mb-2`}>
              Experiencia profesional
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {getCategoryDescription(category.title)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function getCategoryDescription(title: string): string {
  switch(title) {
    case 'Pruebas de penetración':
      return 'Capacidades integrales de evaluación de seguridad, incluyendo pruebas de aplicaciones web, penetración en redes y análisis de seguridad móvil. Experiencia con herramientas y metodologías estándar del sector.';
    case 'Herramientas de Seguridad':
      return 'Dominio de herramientas de seguridad de nivel profesional, incluyendo Burp Suite Pro, Metasploit, Nessus, Nmap, etc. Capaz de personalizar herramientas y automatizar flujos de trabajo de seguridad para mejorar la eficiencia.';
    case 'Programación & Scripting':
      return 'Fuerte base de programación en múltiples lenguajes con enfoque en automatización de seguridad, desarrollo de herramientas y scripting. Experiencia en la creación de soluciones de seguridad personalizadas e integración de la seguridad en flujos de trabajo de desarrollo.';
    default:
      return 'Experiencia especializada en este dominio con experiencia práctica y aprendizaje continuo para mantenerse al día con las tecnologías y amenazas emergentes.';
  }
}