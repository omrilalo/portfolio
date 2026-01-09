
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Landing } from './pages/Landing';
import { Gallery } from './pages/Gallery';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';

// Scroll to top helper
const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const BackgroundBlobs = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    
    {/* 
      Container with clean blur applied
      Blur 80px creates that soft, ambient light effect without distortion
    */}
    <div className="absolute inset-0 w-full h-full" style={{ filter: 'blur(100px)' }}>
      
      {/* Warm Orange Blob - Top Left */}
      <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-warm-orange rounded-full mix-blend-screen opacity-20 animate-blob-1"></div>
      
      {/* Warm Magenta Blob - Top Right */}
      <div className="absolute top-[0%] right-[-10%] w-[50vw] h-[50vw] bg-warm-magenta rounded-full mix-blend-screen opacity-20 animate-blob-2"></div>
      
      {/* Warm Red Blob - Bottom Left */}
      <div className="absolute bottom-[-10%] left-[0%] w-[40vw] h-[40vw] bg-warm-red rounded-full mix-blend-screen opacity-20 animate-blob-3"></div>
    </div>
    
    {/* Global Grain Overlay (from index.html) */}
    <div className="noise-bg"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white/90 selection:bg-warm-orange selection:text-white overflow-x-hidden font-sans relative">
      <HashRouter>
        <ScrollToTop />
        <BackgroundBlobs />
        
        <Navbar />
        
        {/* Main Content Frame */}
        <main className="relative z-10">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
        
      </HashRouter>
    </div>
  );
};

export default App;
