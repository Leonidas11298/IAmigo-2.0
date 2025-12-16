import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';

interface Message {
    id: string;
    type: 'bot' | 'user';
    text: string;
}

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', type: 'bot', text: 'Hola! 👋 Soy el agente de IA de Iamigo. ¿En qué puedo ayudarte hoy?' },
        { id: '2', type: 'bot', text: 'Puedo agendar una demo, explicarte nuestros servicios o conectarte con un humano.' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [sessionId] = useState(() => Math.random().toString(36).substring(7));

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg: Message = { id: Date.now().toString(), type: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('https://n8npanel.iamigo.com.mx/webhook/agentePage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chatInput: userMsg.text,
                    sessionId: sessionId
                }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            // Assuming n8n returns { output: "response text" } or similar. Adjusting to a generic fallback.
            const botResponseText = data.output || data.text || data.message || JSON.stringify(data);

            const botMsg: Message = { id: (Date.now() + 1).toString(), type: 'bot', text: botResponseText };
            setMessages(prev => [...prev, botMsg]);

        } catch (error) {
            console.error('Error sending message:', error);
            const errorMsg: Message = { id: (Date.now() + 1).toString(), type: 'bot', text: 'Lo siento, tuve un problema conectando con el servidor. Por favor intenta de nuevo.' };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-[350px] h-[500px] bg-zinc-900 border border-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 bg-zinc-950 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                                        <Bot size={20} />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-950" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Iamigo Support Agent</h4>
                                    <p className="text-xs text-zinc-400">Always online</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-zinc-900/50">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                                    {msg.type === 'bot' && (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center mt-1">
                                            <Bot size={14} className="text-white" />
                                        </div>
                                    )}
                                    <div className={`p-3 rounded-2xl max-w-[85%] text-sm ${msg.type === 'user'
                                            ? 'bg-primary text-white rounded-tr-none'
                                            : 'bg-zinc-800 text-zinc-200 rounded-tl-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center mt-1">
                                        <Bot size={14} className="text-white" />
                                    </div>
                                    <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none text-zinc-200">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-zinc-950 border-t border-white/5">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="relative"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Escribe un mensaje..."
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all text-white"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                                </button>
                            </form>
                            <div className="mt-2 text-center">
                                <span className="text-[10px] text-zinc-600">Powered by Iamigo Infrastructure</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                layout
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/20 flex items-center justify-center"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} className="fill-current" />}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
