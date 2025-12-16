import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TechStack from './TechStack';
import BentoGrid from './BentoGrid';
import ProblemSolution from './ProblemSolution';
import DashboardPreview from './DashboardPreview';
import ContactForm from './ContactForm';
import Footer from './Footer';

const LandingPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <HeroSection />

            {/* Logos Carrusel */}
            <TechStack />

            <div className="py-20 space-y-32">
                {/* Bento Grid Servicios */}
                <div id="servicios" className="px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-4">
                            Todo lo que necesitas
                        </h2>
                        <p className="text-zinc-400 text-lg">Stack completo de automatización.</p>
                    </div>
                    <BentoGrid />
                </div>

                {/* Problema vs Solución */}
                <ProblemSolution />

                {/* Mockup 3D */}
                <div className="px-4 md:px-8 max-w-7xl mx-auto">
                    <DashboardPreview />
                </div>

                {/* Formulario Contacto */}
                <ContactForm />
            </div>

            <Footer />
        </>
    );
};

export default LandingPage;
