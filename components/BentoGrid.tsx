import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, CartesianGrid } from 'recharts';
import { Bot, Zap, TrendingUp, Cpu, Database } from 'lucide-react';

const data = [
  { name: 'Lun', value: 400 },
  { name: 'Mar', value: 300 },
  { name: 'Mie', value: 550 },
  { name: 'Jue', value: 450 },
  { name: 'Vie', value: 650 },
  { name: 'Sab', value: 600 },
  { name: 'Dom', value: 850 },
];

const Card: React.FC<{ children: React.ReactNode; className?: string; title: string; icon: React.ReactNode }> = ({
  children,
  className,
  title,
  icon,
}) => (
  <div
    className={`relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-md p-6 ${className} group`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    {/* Border Glow */}
    <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: `linear-gradient(45deg, transparent 40%, rgba(6, 182, 212, 0.3) 50%, transparent 60%)`, // primary color glow
        zIndex: 1
      }}
    />

    <div className="relative z-10 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-300 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
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
  const fullText = "Analizando métricas... He detectado una oportunidad de optimización del 23% en el flujo de ventas.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length + 50) {
        index = 0; // Loop with pause
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[350px]">

      {/* Card 1: Intelligent Dashboards (Large) */}
      <motion.div
        className="lg:col-span-2 row-span-1"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <Card title="Analítica en Tiempo Real" icon={<TrendingUp size={20} />} className="h-full">
          <div className="h-full w-full -ml-2 select-none">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#71717a', fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#06b6d4' }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#06b6d4"
                  strokeWidth={3}
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#fff' }}
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
        className="lg:col-span-1"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card title="Automatización n8n" icon={<Zap size={20} />} className="h-full">
          <div className="flex items-center justify-center h-full relative overflow-hidden">
            <svg width="240" height="120" viewBox="0 0 240 120" className="opacity-80">
              {/* Node 1 */}
              <rect x="20" y="40" width="40" height="40" rx="8" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
              <path d="M40 50L40 70M30 60L50 60" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />

              {/* Node 2 */}
              <rect x="180" y="40" width="40" height="40" rx="8" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
              <path d="M195 55L205 60L195 65" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Connecting Line */}
              <path d="M62 60 H178" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />

              {/* Traveling Packet */}
              <motion.circle
                r="6"
                fill="#fff"
                initial={{ cx: 62, cy: 60 }}
                animate={{ cx: 178, cy: 60 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              >
                <animate attributeName="fill" values="#06b6d4;#8b5cf6;#06b6d4" dur="2s" repeatCount="indefinite" />
              </motion.circle>
            </svg>

            <div className="absolute bottom-4 left-4 right-4 bg-zinc-800/50 rounded-lg p-2 flex justify-between items-center text-xs font-mono text-zinc-400 border border-white/5">
              <span>Webhook_01</span>
              <span className="text-emerald-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                200 OK
              </span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Card 3: AI Agents (Wide Bottom) */}
      <motion.div
        className="lg:col-span-3 row-span-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Card title="Agente IA Autónomo" icon={<Bot size={20} />} className="h-full">
          <div className="flex flex-col md:flex-row h-full gap-6 items-center">

            <div className="flex-1 w-full bg-zinc-950/50 rounded-xl p-4 border border-white/5 h-48 flex flex-col overflow-hidden relative">
              {/* Messages */}
              <div className="space-y-3">
                <div className="bg-zinc-800/30 self-end p-2 rounded-lg text-sm text-zinc-400 w-3/4 ml-auto">
                  Genera un reporte de rendimiento de Q4.
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center">
                    <Cpu size={14} className="text-white" />
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg text-sm text-zinc-100 flex-1">
                    {typedText}
                    <span className="inline-block w-1.5 h-4 bg-primary ml-1 animate-pulse align-middle" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-64 flex flex-col gap-3">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-800/30 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-zinc-400">Estado: ACTIVO</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-800/30 border border-white/5">
                <Database size={12} className="text-zinc-500" />
                <span className="text-xs font-mono text-zinc-400">Conectado a Postgres</span>
              </div>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden mt-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  animate={{ width: ["0%", "45%", "60%", "90%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              <span className="text-[10px] text-right text-zinc-600">Procesando Tokens...</span>
            </div>

          </div>
        </Card>
      </motion.div>

    </div>
  );
};

export default BentoGrid;