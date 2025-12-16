import React from 'react';
import { 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  CreditCard, 
  Zap, 
  Workflow 
} from 'lucide-react';

// Using icons to represent stack since external brand SVGs are tricky without local assets
const stackItems = [
  { name: 'React', icon: <Code2 className="w-8 h-8" /> },
  { name: 'Next.js', icon: <Globe className="w-8 h-8" /> },
  { name: 'Tailwind', icon: <Zap className="w-8 h-8" /> },
  { name: 'n8n', icon: <Workflow className="w-8 h-8" /> },
  { name: 'Supabase', icon: <Database className="w-8 h-8" /> },
  { name: 'OpenAI', icon: <Cpu className="w-8 h-8" /> },
  { name: 'Stripe', icon: <CreditCard className="w-8 h-8" /> },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-10 bg-zinc-950 border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
      
      <div className="flex w-full">
        {/* First Loop */}
        <div className="flex animate-scroll whitespace-nowrap">
          {stackItems.map((item, idx) => (
            <div
              key={`stack-1-${idx}`}
              className="mx-8 group flex items-center gap-3 cursor-default"
            >
              <div className="text-zinc-600 group-hover:text-white transition-colors duration-500">
                 {item.icon}
              </div>
              <span className="text-xl font-bold text-zinc-700 group-hover:text-zinc-200 transition-colors duration-500 uppercase tracking-widest">
                {item.name}
              </span>
            </div>
          ))}
        </div>
        {/* Second Loop (Duplicate for seamless infinite scroll) */}
        <div className="flex animate-scroll whitespace-nowrap" aria-hidden="true">
          {stackItems.map((item, idx) => (
            <div
              key={`stack-2-${idx}`}
              className="mx-8 group flex items-center gap-3 cursor-default"
            >
               <div className="text-zinc-600 group-hover:text-white transition-colors duration-500">
                 {item.icon}
              </div>
              <span className="text-xl font-bold text-zinc-700 group-hover:text-zinc-200 transition-colors duration-500 uppercase tracking-widest">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;