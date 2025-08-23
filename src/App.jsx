import React from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingShapes from './components/FloatingShapes';
import ScrollProgress from './components/ScrollProgress';
import PerformanceMetrics from './components/PerformanceMetrics';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Scroll Progress Indicator */}
        <ScrollProgress />
        
        {/* Floating Background Shapes */}
        <FloatingShapes />
        
        {/* Performance Metrics */}
        <PerformanceMetrics />
        
        {/* Background pattern */}
        <div className="fixed inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/10 to-pink-800/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:50px_50px]"></div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Tech />
            <Projects />
            <Contact />
          </main>
          
          {/* Footer */}
          <footer className="py-8 text-center text-gray-400 border-t border-white/10">
            <div className="container mx-auto px-4">
              <p className="text-sm">
               {t("footer.allRights")} © 2025 Ismael Chávez. <span className="block sm:inline">{t("footer.copyright")}</span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
