import { recentChallenges } from '../../data/ctf';
import CTFCard from '../ui/ctf/CTFCard';
import { Flag, Target, Shield, Lock, Zap, Terminal, Trophy } from 'lucide-react';

export default function CTF() {
  return (
    <section id="ctf" className="relative section-padding bg-slate-900/50">
      {/* Floating CTF Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: Flag, color: 'text-electric-purple', top: '12%', left: '6%', delay: '0s' },
          { icon: Target, color: 'text-electric-blue', top: '28%', right: '8%', delay: '1s' },
          { icon: Shield, color: 'text-electric-emerald', bottom: '25%', left: '12%', delay: '2s' },
          { icon: Lock, color: 'text-electric-amber', bottom: '18%', right: '10%', delay: '3s' },
          { icon: Terminal, color: 'text-electric-cyan', top: '50%', left: '4%', delay: '4s' },
          { icon: Trophy, color: 'text-electric-rose', top: '40%', right: '50%', delay: '5s' },
        ].map(({ icon: Icon, color, delay, ...position }, index) => (
          <div 
            key={index}
            className="absolute opacity-5 animate-float-gentle"
            style={{ 
              ...position,
              animationDelay: delay,
              animationDuration: '7s'
            }}
          >
            <Icon className={`w-18 h-18 ${color}`} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-4">
              {[Flag, Target, Shield].map((Icon, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-xl glass-effect animate-glow-pulse"
                  style={{ animationDelay: `${index * 0.25}s` }}
                >
                  <Icon className="w-8 h-8 text-electric-purple" />
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="heading-primary text-4xl md:text-6xl mb-6">
            <span className="gradient-text">DESAFIOS DE CTF</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Logros de Capture The Flag que demuestran experiencia en
            <span className="text-electric-purple font-semibold"> redes</span>,
            <span className="text-electric-blue font-semibold"> ingeniería inversa</span>, y
            <span className="text-electric-emerald font-semibold"> explotación web</span>
          </p>
        </div>

        {/* Enhanced CTF Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {recentChallenges.map((challenge, index) => (
            <div
              key={challenge.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <CTFCard challenge={challenge} />
            </div>
          ))}
        </div>





        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="premium-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-electric-purple" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Únete al desafío
            </h3>
            <p className="text-slate-300 mb-6">
              ¿Interesado en desafíos de ciberseguridad? ¡Colaboremos y enfrentemos los CTF juntos!
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl glass-effect border border-electric-purple/30 text-electric-purple hover:text-electric-cyan transition-colors duration-300 group"
            >
              <span className="font-semibold">Ponte en contacto</span>
              <Target className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}