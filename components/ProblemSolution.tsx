import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, FileSpreadsheet, Clock, AlertCircle, Zap, Brain, TrendingUp } from 'lucide-react';

const ProblemSolution: React.FC = () => {
    return (
        <section id="casos-de-uso" className="py-24 px-4 bg-zinc-950 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                        ¿Por qué cambiar?
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        La brecha entre las empresas que automatizan y las que no, se está volviendo insuperable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* OLD WAY */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl p-8 border border-red-500/10 bg-red-500/5 backdrop-blur-sm relative overflow-hidden group hover:border-red-500/20 transition-all"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <span className="text-red-500/20 font-black text-9xl absolute -top-10 -right-10 rotate-12 select-none">VS</span>
                        </div>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-red-500/10 rounded-xl">
                                <FileSpreadsheet className="text-red-400 w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-red-200">La Forma Antigua</h3>
                        </div>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 min-w-[24px]"><X className="text-red-500 w-6 h-6" /></div>
                                <div>
                                    <h4 className="font-bold text-red-100 mb-1">Costos Operativos Altos</h4>
                                    <p className="text-zinc-400 text-sm">Contratar más personal para tareas repetitivas escala tus costos linealmente.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 min-w-[24px]"><Clock className="text-red-500 w-6 h-6" /></div>
                                <div>
                                    <h4 className="font-bold text-red-100 mb-1">Lentitud de Respuesta</h4>
                                    <p className="text-zinc-400 text-sm">Los procesos manuales toman días. Los clientes esperan respuestas en segundos.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 min-w-[24px]"><AlertCircle className="text-red-500 w-6 h-6" /></div>
                                <div>
                                    <h4 className="font-bold text-red-100 mb-1">Errores Humanos</h4>
                                    <p className="text-zinc-400 text-sm">Fatiga y distracción causan pérdidas de datos y oportunidades perdidas.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* NEW WAY */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl p-8 border border-primary/20 bg-gradient-to-br from-zinc-900 via-primary/5 to-secondary/5 relative overflow-hidden shadow-2xl shadow-primary/5 ring-1 ring-white/10"
                    >
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-x-[-100%] animate-shimmer" />

                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-primary/20 rounded-xl shadow-lg shadow-primary/20">
                                <Brain className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">El Ecosistema Iamigo</h3>
                        </div>

                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 min-w-[24px] bg-emerald-500/20 p-1 rounded-full"><Check className="text-emerald-400 w-4 h-4" /></div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Escalabilidad Infinito</h4>
                                    <p className="text-zinc-300 text-sm">Añade agentes, no empleados. Tu capacidad de operación crece con un clic.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 min-w-[24px] bg-emerald-500/20 p-1 rounded-full"><Zap className="text-emerald-400 w-4 h-4" /></div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Tiempo Real (24/7)</h4>
                                    <p className="text-zinc-300 text-sm">Tus agentes nunca duermen. Atención y procesamiento instantáneo a cualquier hora.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 min-w-[24px] bg-emerald-500/20 p-1 rounded-full"><TrendingUp className="text-emerald-400 w-4 h-4" /></div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Precisión de Datos</h4>
                                    <p className="text-zinc-300 text-sm">Pipelines de datos estructurados e integración directa con tu CRM.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <button onClick={() => window.location.href = "https://wa.me/525621212799/?text=Hola, quiero una automatizacion para mi empresa"} className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
                                Migrar a IAmigo
                            </button>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
