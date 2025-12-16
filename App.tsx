import React from 'react';
import HeroSection from './components/HeroSection';
import TechStack from './components/TechStack';
import BentoGrid from './components/BentoGrid';
import DashboardPreview from './components/DashboardPreview';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-pink-500/30">
      <Navbar />
      <HeroSection />
      <TechStack />
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
        <BentoGrid />
        <DashboardPreview />
      </div>
      <Footer />
    </main>
  );
};

export default App;