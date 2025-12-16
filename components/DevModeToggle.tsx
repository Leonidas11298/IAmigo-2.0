import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, X } from 'lucide-react';

const DevModeToggle: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="fixed bottom-6 left-6 z-50">
                <button
                    onClick={() => setIsActive(!isActive)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-xs font-mono font-bold uppercase tracking-wider ${isActive
                            ? 'bg-emerald-500 text-black border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600'
                        }`}
                >
                    <Terminal size={12} />
                    {isActive ? 'Dev Mode: ON' : 'Dev Mode'}
                </button>
            </div>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-20 left-6 w-[400px] z-50 bg-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden font-mono text-xs shadow-2xl"
                    >
                        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Code size={14} />
                                <span>system_status.json</span>
                            </div>
                            <button onClick={() => setIsActive(false)} className="text-zinc-500 hover:text-white">
                                <X size={14} />
                            </button>
                        </div>
                        <div className="p-4 text-emerald-400 overflow-x-auto">
                            <pre>
                                {`{
  "system": "IAmigo-Infra-v2.5",
  "status": "operational",
  "region": "us-east-1",
  "current_load": "42%",
  "active_agents": 1240,
  "queue_depth": 0,
  "environment": "production",
  "features": {
     "n8n_bridge": true,
     "auto_scaling": true,
     "vector_db": "ready"
  }
}`}
                            </pre>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default DevModeToggle;
