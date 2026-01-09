
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GradientFrame } from './GradientFrame';
import { Sparkles } from 'lucide-react';
import { PROFILE } from '../constants';
import { getOptimizedMediaSrc } from '../utils';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white font-bold' : 'text-white/60 hover:text-warm-orange';
  };

  // Logic to determine what to show in the logo slot
  const hasCustomLogo = PROFILE.branding && PROFILE.branding.logoStatic !== "";
  const logoSrc = (isLogoHovered && PROFILE.branding.logoAnimated)
    ? getOptimizedMediaSrc(PROFILE.branding.logoAnimated)
    : getOptimizedMediaSrc(PROFILE.branding.logoStatic);

  return (
    <div id="navbar-wrapper" className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none transition-opacity duration-300">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <GradientFrame padding="p-0" rounded="rounded-full">
          <nav className="flex items-center justify-between px-6 py-3 bg-black/20 backdrop-blur-xl rounded-full">
            
            <Link 
              to="/" 
              className="flex items-center gap-2 font-display font-bold text-xl tracking-tighter"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              {hasCustomLogo ? (
                /* Custom Logo rendering */
                <div className="h-8 w-auto min-w-[32px] overflow-visible">
                  <img 
                    src={logoSrc} 
                    alt={PROFILE.name} 
                    className="h-full w-auto object-contain brightness-110"
                  />
                </div>
              ) : (
                /* Default Text Logo (Fallback) */
                <>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-warm-orange to-warm-magenta flex items-center justify-center text-white shadow-md">
                    <Sparkles size={16} />
                  </div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-warm-orange to-warm-magenta uppercase">
                    {PROFILE.name}
                  </span>
                </>
              )}
            </Link>

            <div className="hidden md:flex items-center gap-8 font-sans font-medium">
              <Link to="/" className={`transition-colors duration-300 ${isActive('/')}`}>HOME</Link>
              <Link to="/gallery" className={`transition-colors duration-300 ${isActive('/gallery')}`}>GALLERY</Link>
              <Link to="/about" className={`transition-colors duration-300 ${isActive('/about')}`}>ABOUT</Link>
            </div>

             {/* Mobile Navigation Links */}
             <div className="md:hidden flex items-center gap-4 font-sans text-xs tracking-widest">
                <Link to="/gallery" className={`transition-colors duration-300 ${isActive('/gallery')}`}>WORKS</Link>
                <div className="w-[1px] h-3 bg-white/10"></div>
                <Link to="/about" className={`transition-colors duration-300 ${isActive('/about')}`}>ABOUT</Link>
             </div>
          </nav>
        </GradientFrame>
      </div>
    </div>
  );
};
