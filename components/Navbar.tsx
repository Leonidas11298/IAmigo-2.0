import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
        ? 'bg-background/80 backdrop-blur-md border-white/5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
        : 'bg-transparent border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.href = '/'}>
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
            <img src="/iamigo-logo.png" alt="Iamigo Logo" className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
            Iamigo
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Servicios', href: '/#servicios' },
            { label: 'Casos de Uso', href: '/#casos-de-uso' },
            { label: 'Tecnología', href: '/#tecnologia' },
            { label: 'Precios', href: '/#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => {
              // Check if we are on landing page, if not, navigate there
              if (window.location.pathname !== '/') {
                window.location.href = '/#contact';
              } else {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative px-6 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-sm hover:bg-white transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              Agendar Demo
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] py-6' : 'max-h-0 py-0'}`}>
        <div className="px-6 flex flex-col gap-4">
          {[
            { label: 'Servicios', href: '/#servicios' },
            { label: 'Casos de Uso', href: '/#casos-de-uso' },
            { label: 'Tecnología', href: '/#tecnologia' },
            { label: 'Precios', href: '/#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (window.location.pathname !== '/') {
                window.location.href = '/#contact';
              } else {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full bg-white text-black px-5 py-3 rounded-lg text-base font-semibold mt-2"
          >
            Agendar Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;