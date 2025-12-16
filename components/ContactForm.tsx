import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://n8npanel.iamigo.com.mx/webhook/correos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formState,
                    sentAt: new Date().toISOString()
                }),
            });

            if (!response.ok) throw new Error('Error al enviar formulario');

            setStatus('success');
            setFormState({ name: '', email: '', company: '', message: '' });

            // Reset status after delay to allow sending another message if needed
            setTimeout(() => setStatus('idle'), 5000);

        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            alert('Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.');
            setStatus('idle');
        }
    };

    return (
        <section id="contact" className="py-24 px-4 bg-background relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-4">
                        Comienza Hoy
                    </h2>
                    <p className="text-zinc-400">
                        Agenda una llamada estratégica o envíanos tu caso de uso.
                    </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative">
                    {/* Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />

                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center min-h-[400px] text-center"
                            >
                                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">¡Recibido!</h3>
                                <p className="text-zinc-400 max-w-md">
                                    Tu solicitud ha sido procesada por nuestro agente de routing. Revisa tu correo, te hemos enviado confirmación de recepción.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-400">Nombre</label>
                                        <input
                                            required
                                            type="text"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-400">Email Corporativo</label>
                                        <input
                                            required
                                            type="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="nombre@empresa.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Empresa / Sitio Web</label>
                                    <input
                                        type="text"
                                        value={formState.company}
                                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="https://miempresa.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">¿Qué te gustaría automatizar?</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                        placeholder="Describe brevemente tus necesidades..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Enviando a n8n...
                                        </>
                                    ) : (
                                        <>
                                            Enviar Solicitud
                                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
