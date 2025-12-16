import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Home, BarChart2, Users, Settings, Bell, Menu } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 3D Tilt Effect: Starts tilted, straightens out as you scroll to it
  const rotateX = useTransform(scrollYProgress, [0.1, 0.5], [15, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="py-20 perspective-1000 min-h-[800px]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience the Power</h2>
        <p className="text-zinc-400">Control your entire digital workforce from one central command center.</p>
      </div>

      <div className="relative flex justify-center [perspective:1000px]">
        <motion.div
          style={{ 
            rotateX, 
            scale,
            opacity,
            transformStyle: "preserve-3d" 
          }}
          className="w-full max-w-6xl rounded-xl border border-white/10 bg-zinc-950 shadow-2xl overflow-hidden relative z-10"
        >
          {/* Browser Header */}
          <div className="h-10 bg-zinc-900 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            
            <div className="ml-4 flex-1 flex justify-center">
              <div className="bg-zinc-950/50 px-32 py-1 rounded text-xs text-zinc-500 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                dashboard.aiaf.platform
              </div>
            </div>
          </div>

          {/* App UI */}
          <div className="flex h-[600px] bg-zinc-950">
            {/* Sidebar */}
            <div className="w-16 md:w-64 border-r border-white/5 p-4 flex flex-col gap-6 bg-zinc-900/20">
              <div className="flex items-center gap-2 text-indigo-400 font-bold px-2">
                 <div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-pink-500" />
                 <span className="hidden md:block">AIAF</span>
              </div>
              <nav className="flex flex-col gap-2">
                {[
                  { icon: <Home size={20} />, label: 'Overview', active: true },
                  { icon: <BarChart2 size={20} />, label: 'Analytics', active: false },
                  { icon: <Users size={20} />, label: 'Agents', active: false },
                  { icon: <Settings size={20} />, label: 'Settings', active: false },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${item.active ? 'bg-indigo-500/10 text-indigo-400' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                  >
                    {item.icon}
                    <span className="hidden md:block text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <div className="h-16 border-b border-white/5 flex items-center justify-between px-6">
                <h3 className="font-semibold text-lg">Dashboard Overview</h3>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="bg-zinc-900 border border-white/5 rounded-full pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:border-indigo-500/50 w-64"
                    />
                  </div>
                  <Bell className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-white" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500" />
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 overflow-y-auto">
                <div className="grid grid-cols-3 gap-6 mb-6">
                  {[
                    { label: 'Total Revenue', value: '$124,500', change: '+12%', color: 'indigo' },
                    { label: 'Active Agents', value: '1,420', change: '+25%', color: 'pink' },
                    { label: 'Tasks Automated', value: '45.2M', change: '+8%', color: 'emerald' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl">
                      <p className="text-zinc-400 text-xs uppercase tracking-wider mb-1">{stat.label}</p>
                      <div className="flex items-end justify-between">
                        <h4 className="text-2xl font-bold">{stat.value}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-${stat.color}-500/20 text-${stat.color}-400`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-64 bg-zinc-900/50 border border-white/5 rounded-xl p-4 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-2 w-full max-w-lg">
                    <div className="flex justify-between text-sm text-zinc-400 mb-2">
                       <span>Server Load</span>
                       <span>45%</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                       <div className="h-full bg-indigo-500 w-[45%]" />
                    </div>
                     <div className="flex justify-between text-sm text-zinc-400 mb-2 pt-4">
                       <span>Memory Usage</span>
                       <span>72%</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                       <div className="h-full bg-pink-500 w-[72%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Glow effect behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-indigo-500/20 blur-[100px] -z-10 rounded-full" />
      </div>
    </section>
  );
};

export default DashboardPreview;