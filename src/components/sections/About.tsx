import { memo } from 'react';
import { Globe, Zap, Brain, Code, Shield, GraduationCap, Award, User } from 'lucide-react';

export default memo(function About() {
  return (
    <section id="sobre-mi" className="section-padding grid-bg">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Reduced animations for mobile */}
        {Array.from({ length: window.innerWidth < 768 ? 3 : 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-float-gentle will-change-transform"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + (i % 2) * 70}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: '8s',
              transform: 'translate3d(0, 0, 0)'
            }}
          >
            <User className="w-12 h-12 text-electric-blue" />
          </div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-primary text-4xl md:text-6xl mb-6 gradient-text">
            Sobre Mi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Professional Info */}
          <div className="space-y-6 animate-slide-right">
            {/* Educación */}
            <div className="premium-card p-6 hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-electric-blue/20 to-electric-purple/20 border border-electric-blue/30">
                  <GraduationCap className="w-6 h-6 text-electric-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-secondary text-xl text-electric-blue mb-2">
                    Educación
                  </h3>
                  <p className="text-lg font-semibold text-slate-200 mb-1">
                    Licenciatura en Ciberdefensa
                  </p>
                  <p className="text-slate-400">
                    Universidad de Defensa Nacional • Actualmente inscrito
                  </p>
                  <p className="text-lg font-semibold text-slate-200 mb-1">
                    Curso de Seguridad Ofensiva
                  </p>
                  <p className="text-slate-400">
                    EndPoint Security • Finalizado (2025)
                  </p>
                  <p className="text-lg font-semibold text-slate-200 mb-1">
                    Técnico universitario en Programación
                  </p>
                  <p className="text-slate-400">
                    Universidad Tecnológica Nacional - FRT • 2023-2024
                  </p>
                </div>
              </div>
            </div>

            {/* Training */}
            <div className="premium-card p-6 hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-electric-emerald/20 to-electric-cyan/20 border border-electric-emerald/30">
                  <Shield className="w-6 h-6 text-electric-emerald" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-secondary text-xl text-electric-emerald mb-2">
                    Formación profesional
                  </h3>
                  <p className="text-lg font-semibold text-slate-200 mb-1">
                    En busca de oportunidades para aplicar y expandir mis conocimientos en análisis de vulnerabilidades y pruebas de penetración.
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="premium-card p-6 hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-electric-purple/20 to-electric-rose/20 border border-electric-purple/30">
                  <Globe className="w-6 h-6 text-electric-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-secondary text-xl text-electric-purple mb-2">
                    Idiomas
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-200">Español</span>
                      <span className="text-electric-emerald font-semibold">Nativo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-200">Inglés</span>
                      <span className="text-electric-blue font-semibold">Intermedio (B1)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bio & Mission */}
          <div className="space-y-6 animate-slide-left">
            {/* Professional Bio */}
            <div className="premium-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-6 h-6 text-electric-amber" />
                <h3 className="heading-secondary text-xl text-electric-amber">
                  Perfil Profesional
                </h3>
              </div>
              
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Profesional apasionado por la ciberseguridad con una sólida base en 
                  <span className="text-electric-blue font-semibold"> programación</span> y 
                  <span className="text-electric-purple font-semibold"> hacking ético</span>. 
                  Actualmente cursando estudios avanzados mientras busco adquirir experiencia práctica en 
                  análisis de vulnerabilidades y pruebas de penetración.
                </p>
                
                <p>
                  Especializándome en la seguridad de aplicaciones web, pruebas de penetración en redes, 
                  y soluciones de seguridad impulsadas por IA. Siempre dispuesto a enfrentar nuevos desafíos 
                  y contribuir a la comunidad de ciberseguridad.
                </p>

                <p>
                  Mi misión es desarrollar sistemas de auditoría inteligentes basados en IA que anticipen y neutralicen amenazas cibernéticas emergentes, 
                  cerrando la brecha entre innovación tecnológica y seguridad digital.
                </p>

              </div>
            </div>

            {/* Core Values */}
            <div className="premium-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-6 h-6 text-electric-rose" />
                <h3 className="heading-secondary text-xl text-electric-rose">
                  Valores Fundamentales
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: 'Práctica Ética', color: 'text-electric-blue' },
                  { icon: Brain, label: 'Innovación', color: 'text-electric-purple' },
                  { icon: Code, label: 'Excelencia', color: 'text-electric-emerald' },
                  { icon: Award, label: 'Integridad', color: 'text-electric-amber' },
                ].map((value) => (
                  <div key={value.label} className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/30">
                    <value.icon className={`w-5 h-5 ${value.color}`} />
                    <span className="text-slate-200 font-medium">{value.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});