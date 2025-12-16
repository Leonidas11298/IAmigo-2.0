import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Server, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-background bg-grid-white/[0.05] bg-grid-size" />

      {/* Radial Gradient Mask */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Animated Particles / Accent Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-secondary/20 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 p-4 max-w-7xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-md shadow-lg shadow-primary/10">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-medium tracking-wide">Infraestructura de IA v2.5 Online</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 pb-6 max-w-5xl"
        >
          Infraestructura de IA <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-secondary animate-shimmer bg-[length:200%_100%]">
            para Empresas
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          Automatiza operaciones complejas, despliega agentes autónomos y escala tus procesos sin aumentar tu nómina. Todo en una sola plataforma.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          {/* Primary CTA */}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex h-12 w-full sm:w-auto overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#8b5cf6_50%,#06b6d4_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-950/80">
              Ver Demo en Vivo
              <Zap className="ml-2 w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
            </span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => document.getElementById('casos-de-uso')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 text-zinc-300 hover:text-white transition-all font-medium group"
          >
            <Server className="w-4 h-4 text-zinc-500 group-hover:text-primary transition-colors" />
            Ver Casos de Uso
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;