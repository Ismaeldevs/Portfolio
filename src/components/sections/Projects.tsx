import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { Code, Globe, Terminal, Cpu, Shield, Eye, Layers } from 'lucide-react';

export default function Projects() {
  return (
    <section id="proyectos" className="relative section-padding grid-bg">
      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: Code, color: 'text-electric-blue', top: '15%', left: '8%', delay: '0s' },
          { icon: Globe, color: 'text-electric-purple', top: '25%', right: '12%', delay: '1.5s' },
          { icon: Terminal, color: 'text-electric-emerald', bottom: '30%', left: '10%', delay: '3s' },
          { icon: Cpu, color: 'text-electric-amber', bottom: '20%', right: '8%', delay: '4.5s' },
          { icon: Shield, color: 'text-electric-cyan', top: '45%', left: '5%', delay: '6s' },
          { icon: Layers, color: 'text-electric-rose', top: '35%', right: '45%', delay: '7.5s' },
        ].map(({ icon: Icon, color, delay, ...position }, index) => (
          <div 
            key={index}
            className="absolute opacity-5 animate-float-gentle"
            style={{ 
              ...position,
              animationDelay: delay,
              animationDuration: '8s'
            }}
          >
            <Icon className={`w-20 h-20 ${color}`} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-4">
              {[Code, Terminal, Globe].map((Icon, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-xl glass-effect animate-glow-pulse"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <Icon className="w-8 h-8 text-electric-emerald" />
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="heading-primary text-4xl md:text-6xl mb-6">
            <span className="gradient-text">PROYECTOS DESTACADOS</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Proyectos innovadores de ciberseguridad que demuestran experiencia en 
            <span className="text-electric-emerald font-semibold"> seguridad web</span>,
            <span className="text-electric-blue font-semibold"> herramientas de pruebas de penetración</span>, y
            <span className="text-electric-purple font-semibold"> automatización de seguridad</span>
          </p>
        </div>

        {/* Enhanced Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>



        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="premium-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-electric-blue" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Explora más proyectos
            </h3>
            <p className="text-slate-300 mb-6">
              Consulta mi GitHub para ver proyectos adicionales, contribuciones y trabajo de código abierto en ciberseguridad.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl glass-effect border border-electric-blue/30 text-electric-blue hover:text-electric-cyan transition-colors duration-300 group"
            >
              <span className="font-semibold">Ver GitHub</span>
              <Globe className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}