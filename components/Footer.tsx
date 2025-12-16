import React from 'react';
import { motion } from 'framer-motion';

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

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t border-white/5 pt-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-pink-500" />
              <span className="font-bold">IAmigo</span>
            </div>
            <p className="text-sm text-zinc-500">
              Construyendo el futuro de tu empresa autónoma.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="/#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="/#casos-de-uso" className="hover:text-primary transition-colors">Casos de Uso</a></li>
              <li><a href="/#tecnologia" className="hover:text-primary transition-colors">Tecnología</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Precios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/conditions" className="hover:text-primary transition-colors">Términos y Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Social</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/manuel.suarez.422440/" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.648 0-2.928 1.67-2.928 3.403v1.518h3.945l-1.045 3.667h-2.9v7.98h-4.887Z" />
                </svg>
              </a>
              <a href="https://wa.me/525621212799/?text=Hola, quiero una automatizacion para mi empresa" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@manuel_s112" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.53-1.15a8.3 8.3 0 0 0-.08 2.05 8.16 8.16 0 0 1-5.63 7.82 8.4 8.4 0 0 1-9.98-2.61 8.35 8.35 0 0 1 2.5-11.37c2.37-1.54 5.56-1.46 7.85.19.14.1.27.22.42.34v4.18c-1-.95-2.22-1.55-3.56-1.58-1.58-.06-3.13.75-3.99 2.1-.9 1.41-.67 3.36.56 4.49 1.17 1.1 2.97 1.25 4.31.39.42-.26.78-.63 1.05-1.06.46-.73.66-1.58.6-2.43.01-4.73.01-9.45.01-14.18l-.2-2.19z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-zinc-600">
            © {new Date().getFullYear()} IAmigo. Todos los derechos reservados.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;