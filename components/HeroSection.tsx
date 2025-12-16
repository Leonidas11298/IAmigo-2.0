import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-zinc-950 bg-grid-white/[0.05] bg-grid-size" />
      
      {/* Radial Gradient Mask - Creates the spotlight effect on the grid */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-10 p-4 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI Infrastructure v2.0 is live</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 pb-4"
        >
          Create, own, and <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            monetize AI agents
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          Our platform combines enterprise-grade AI infrastructure with blockchain technology, creating a new paradigm for AI democratization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-950/80">
              Start Building <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="flex items-center gap-2 px-8 py-3 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 transition-all">
            <Play className="w-4 h-4 fill-current" />
            Watch Demo
          </button>
        </motion.div>
      </div>

      {/* Decorative Gradient Blob */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
    </div>
  );
};

export default HeroSection;