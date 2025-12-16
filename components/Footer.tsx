import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-zinc-950 overflow-hidden pt-20 pb-10 border-t border-white/5">
      
      {/* Background Beams Simulation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-gradient-to-b from-indigo-500/20 to-transparent blur-[6rem] rounded-full opacity-60" />
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute top-[-50%] left-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-30 origin-bottom-left"
         />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 mb-6">
            Ready to stop manual ops?
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Integrate your new digital employee today and scale without headcount.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-zinc-900 border border-zinc-800 text-white px-6 py-4 rounded-lg w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="w-full sm:w-auto bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Get Started
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t border-white/5 pt-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-pink-500" />
              <span className="font-bold">aiaf</span>
            </div>
            <p className="text-sm text-zinc-500">
              Building the future of autonomous enterprise.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Changelog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-4">Social</h4>
             <div className="flex gap-4">
               <Github className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
               <Twitter className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
               <Linkedin className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
             </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-zinc-600">
          © 2024 AIAF Inc. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;