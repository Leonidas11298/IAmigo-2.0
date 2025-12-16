import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { Bot, Zap, TrendingUp, MoreHorizontal } from 'lucide-react';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 550 },
  { name: 'Thu', value: 450 },
  { name: 'Fri', value: 650 },
  { name: 'Sat', value: 600 },
  { name: 'Sun', value: 800 },
];

const Card: React.FC<{ children: React.ReactNode; className?: string; title: string; icon: React.ReactNode }> = ({
  children,
  className,
  title,
  icon,
}) => (
  <div
    className={`relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-md p-6 ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700" />
    <div className="relative z-10 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  </div>
);

const BentoGrid: React.FC = () => {
  // Chat Typewriter State
  const [typedText, setTypedText] = useState('');
  const fullText = "Analyzing market trends... Found 3 arbitrage opportunities.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length + 20) {
        index = 0; // Loop
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
      
      {/* Card 1: Intelligent Dashboards (Large) */}
      <motion.div 
        className="md:col-span-2 row-span-1"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <Card title="Real-time Analytics" icon={<TrendingUp size={20} />} className="h-full group">
          <div className="h-full w-full -ml-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#71717a', fontSize: 12 }} 
                />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>

      {/* Card 2: Automation (Small - Top Right) */}
      <motion.div
        className="md:col-span-1"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card title="n8n Workflows" icon={<Zap size={20} />} className="h-full">
           <div className="flex items-center justify-center h-full relative">
              <svg width="200" height="100" viewBox="0 0 200 100">
                <motion.circle 
                  cx="40" cy="50" r="15" 
                  fill="#22c55e" 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [0.8, 1.1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <motion.circle 
                  cx="160" cy="50" r="15" 
                  fill="#ec4899" 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [0.8, 1.1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                />
                
                {/* Connecting Line */}
                <line x1="55" y1="50" x2="145" y2="50" stroke="#3f3f46" strokeWidth="2" />
                
                {/* Traveling Packet */}
                <motion.circle 
                  r="6" 
                  fill="#fff"
                  initial={{ cx: 55, cy: 50 }}
                  animate={{ cx: 145, cy: 50 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
              <div className="absolute bottom-2 text-xs text-zinc-500 font-mono">
                Running Workflow ID: #8821
              </div>
           </div>
        </Card>
      </motion.div>

      {/* Card 3: AI Agents (Small - Bottom Right - moved to full row for mobile visual balance or keep as is) */}
      {/* Actually prompt asked for "Right Bottom". Let's assume a 2x2 or grid structure depending on screen. */}
      {/* I will add a 4th card to make grid nice, or stretch one. Let's do a 3rd card that is also small/medium. */}
      {/* Re-reading prompt: Card 1 (Big Left), Card 2 (Small Right Top), Card 3 (Small Right Bottom). */}
      
      {/* Adjusting Grid layout to match prompt precisely */}
      {/* 
        Grid Template Areas:
        [ Card 1 ] [ Card 2 ]
        [ Card 1 ] [ Card 3 ]
      */}
    
      <motion.div
         className="md:col-span-1 md:col-start-3 md:row-start-2"
         initial={{ opacity: 0, x: 20 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ delay: 0.4 }}
         viewport={{ once: true }}
      >
        <Card title="AI Agent Response" icon={<Bot size={20} />} className="h-full">
          <div className="flex flex-col h-full justify-between py-2">
            <div className="bg-zinc-800/50 p-3 rounded-tr-xl rounded-tl-xl rounded-br-xl mb-3 self-start max-w-[90%] border border-white/5">
              <div className="flex gap-2 items-center mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-zinc-400 uppercase">Agent-007</span>
              </div>
              <p className="text-sm text-zinc-200 font-mono leading-relaxed">
                {typedText}
                <span className="inline-block w-1.5 h-4 bg-indigo-500 ml-1 animate-pulse align-middle" />
              </p>
            </div>
             <div className="relative">
                <div className="h-8 w-full bg-zinc-800/30 rounded-full flex items-center px-3 border border-white/5">
                   <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" />
                   <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce delay-75 ml-1" />
                   <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce delay-150 ml-1" />
                </div>
             </div>
          </div>
        </Card>
      </motion.div>

    </div>
  );
};

export default BentoGrid;