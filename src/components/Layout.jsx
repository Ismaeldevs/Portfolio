import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/10 to-pink-800/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:50px_50px]"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 md:px-8 lg:px-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
