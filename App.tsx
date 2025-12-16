import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Terms from './components/Terms';
import ChatWidget from './components/ChatWidget';
import DevModeToggle from './components/DevModeToggle';

const App: React.FC = () => {
  return (
    <Router>
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/conditions" element={<Terms />} />
        </Routes>

        {/* Floating Widgets (Global) */}
        <ChatWidget />
        <DevModeToggle />
      </main>
    </Router>
  );
};

export default App;