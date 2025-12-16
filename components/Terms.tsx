import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-primary/30">
            <Navbar />

            <main className="max-w-4xl mx-auto px-6 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Política de Privacidad y Términos</h1>
                    <p className="text-zinc-500 mb-12">Fecha de última actualización: 13 de mayo de 2025</p>

                    <div className="space-y-12 text-lg leading-relaxed">

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Introducción</h2>
                            <p>
                                Iamigo, accesible desde www.iamigo.com.mx, se dedica a la creación de agentes de inteligencia artificial integrados con herramientas como n8n, Google Suite y Chatwoot. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal de los usuarios que interactúan con nuestros servicios.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Información que recopilamos</h2>
                            <p className="mb-4">
                                Al utilizar la autenticación de Google para acceder a nuestros servicios, recopilamos la siguiente información:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Dirección de correo electrónico principal:</strong> Utilizada para identificar y comunicarnos con el usuario.</li>
                                <li><strong>Información del perfil de Google:</strong> Incluye nombre, apellidos y fotografía de perfil, utilizada para personalizar la experiencia del usuario.</li>
                            </ul>
                            <p className="mb-2">Estos datos se obtienen a través de los siguientes permisos de OAuth 2.0:</p>
                            <ul className="list-disc pl-6 space-y-1 font-mono text-sm text-zinc-400">
                                <li>openid</li>
                                <li>https://www.googleapis.com/auth/userinfo.email</li>
                                <li>https://www.googleapis.com/auth/userinfo.profile</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Uso de la información</h2>
                            <p className="mb-4">La información recopilada se utiliza exclusivamente para:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Autenticar y autorizar el acceso del usuario a nuestros servicios.</li>
                                <li>Personalizar la experiencia del usuario dentro de la plataforma.</li>
                                <li>Proporcionar soporte técnico y responder a consultas del usuario.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Compartición de información</h2>
                            <p>
                                Iamigo no comparte, vende ni alquila la información personal de los usuarios a terceros para fines publicitarios. Sin embargo, podemos compartir información con servicios de terceros integrados en nuestra plataforma, como Chatwoot, únicamente para proporcionar soporte técnico y mejorar la experiencia del usuario. Estos servicios están sujetos a sus propias políticas de privacidad.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Almacenamiento y seguridad de la información</h2>
                            <p>
                                Implementamos medidas de seguridad técnicas y organizativas para proteger la información personal de los usuarios contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Los datos se almacenan en servidores seguros y se conservan únicamente durante el tiempo necesario para cumplir con los fines descritos en esta política.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Derechos del usuario</h2>
                            <p className="mb-4">Los usuarios tienen derecho a:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Acceder a su información personal que tenemos almacenada.</li>
                                <li>Solicitar la corrección o eliminación de su información personal.</li>
                                <li>Revocar el acceso de Iamigo a su cuenta de Google en cualquier momento a través de la configuración de su cuenta de Google.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Cambios en la política de privacidad</h2>
                            <p>
                                Iamigo se reserva el derecho de modificar esta política de privacidad en cualquier momento. Notificaremos a los usuarios sobre cualquier cambio significativo mediante la publicación de la nueva política en nuestro sitio web. Se recomienda a los usuarios revisar periódicamente esta política para estar informados sobre cómo protegemos su información.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Contacto</h2>
                            <p className="mb-2">Si tienes preguntas o inquietudes sobre esta política de privacidad, puedes contactarnos en:</p>
                            <ul className="list-none space-y-1">
                                <li>Correo electrónico: <a href="mailto:soporte@iamigo.com.mx" className="text-primary hover:underline">soporte@iamigo.com.mx</a></li>
                                <li>Dirección: Poza Rica Veracruz, México</li>
                            </ul>
                        </section>

                        <hr className="border-white/10 my-12" />

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-6">Términos y Condiciones</h2>
                            <p className="mb-6">
                                Al acceder y utilizar los servicios de Iamigo, aceptas cumplir con los siguientes términos y condiciones:
                            </p>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-white mb-2">Uso aceptable</h3>
                                    <p>Te comprometes a utilizar nuestros servicios de manera legal y ética, sin infringir los derechos de terceros ni realizar actividades que puedan dañar, deshabilitar o sobrecargar nuestros servicios.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">Propiedad intelectual</h3>
                                    <p>Todos los contenidos y materiales disponibles en Iamigo, incluidos, entre otros, textos, gráficos, logotipos y software, son propiedad de Iamigo o de sus licenciantes y están protegidos por las leyes de propiedad intelectual.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">Limitación de responsabilidad</h3>
                                    <p>Iamigo no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso de nuestros servicios.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">Modificaciones</h3>
                                    <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">Ley aplicable</h3>
                                    <p>Estos términos y condiciones se rigen por las leyes de México, y cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Veracruz, Veracruz.</p>
                                </div>
                            </div>
                        </section>

                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default Terms;
