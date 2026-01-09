
import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { GradientFrame } from '../components/GradientFrame';
import { ArrowRight, Loader2 } from 'lucide-react';
import { PROJECTS, PROFILE } from '../constants';
import { getOptimizedMediaSrc } from '../utils';

export const Landing: React.FC = () => {
  // Select a random project once when the component mounts
  const featuredProject = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * PROJECTS.length);
    return PROJECTS[randomIndex] || PROJECTS[0];
  }, []);

  const featuredThumbnailUrl = getOptimizedMediaSrc(featuredProject.thumbnail);
  const featuredVideoUrl = getOptimizedMediaSrc(featuredProject.videoPreview);

  // Video Hover Logic
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
        if (videoRef.current.readyState === 0) videoRef.current.load();
        videoRef.current.play().catch(e => console.log('Autoplay prevented', e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-8 overflow-x-hidden">
      {/* 
        HERO GRID: Strict 2-column layout on desktop to prevent overlap.
      */}
      <div className="max-w-7xl w-full hero-grid items-center">
        
        {/* Left Content Column */}
        {/* Removed overflow-hidden here to prevent button clipping on hover scale */}
        <div className="hero-left-col space-y-8 order-2 lg:order-1 relative z-10 w-full">
          <div className="space-y-4">
            <h1 className="font-display font-bold leading-[1.1] text-white">
              <span className="block mb-2 tracking-tighter text-6xl md:text-8xl">{PROFILE.landing.titleLine1}</span>
              
              {/* 
                HOME HERO TITLE WRAPPER 
                Optimized with responsive clamp and conditional nowrap via CSS.
              */}
              <span 
                className="tracking-tighter max-w-full text-5xl md:text-6xl block" 
                style={{ 
                  fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
                  lineHeight: '1.1', 
                  fontVariantLigatures: 'none',
                  WebkitFontSmoothing: 'antialiased',
                  verticalAlign: 'top'
                }}
              >
                <span 
                  className="hero-title-gradient text-transparent bg-clip-text bg-gradient-to-r from-warm-orange via-warm-red to-warm-magenta animate-gradient-x"
                  style={{ 
                    WebkitBackgroundClip: 'text',
                    display: 'inline-block',
                    fontVariantLigatures: 'none'
                  }}
                >
                  {PROFILE.landing.titleLine2}
                </span>
              </span>
            </h1>
            <p className="font-sans text-xl text-white/60 max-w-md leading-relaxed">
              {PROFILE.landing.description}
            </p>
          </div>

          {/* Added a small margin/padding to the container to ensure scaling buttons don't hit the screen edge */}
          <div className="flex flex-col sm:flex-row gap-4 py-2">
            <Link to="/gallery" className="inline-block">
              <button className="group relative px-8 py-4 bg-white text-black font-display font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-warm-orange via-warm-red to-warm-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2 group-hover:text-white transition-colors">
                  VIEW WORKS <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
            <Link to="/about" className="inline-block">
              <button className="px-8 py-4 border-2 border-white/10 bg-white/5 backdrop-blur-sm text-white/80 font-display font-bold text-lg rounded-full hover:border-warm-orange hover:text-warm-orange transition-colors">
                CONTACT ME
              </button>
            </Link>
          </div>
        </div>

        {/* Right Visuals Column */}
        <div className="hero-right-col relative order-1 lg:order-2 h-[50vh] lg:h-[70vh] w-full flex items-center justify-center z-20">
          <GradientFrame className="w-full h-full max-h-[600px] animate-float" padding="p-2" rounded="rounded-[3rem]">
            <Link 
              to={`/project/${featuredProject.id}`} 
              className="w-full h-full relative overflow-hidden group block rounded-[2.5rem]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
               <img 
                 src={featuredThumbnailUrl} 
                 alt="Featured Work" 
                 className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 z-10 ${isHovering && isVideoLoaded ? 'opacity-0' : 'opacity-100 scale-100 group-hover:scale-110'}`}
               />

               <div className="absolute inset-0 w-full h-full bg-black z-0">
                  <video
                    ref={videoRef}
                    src={featuredVideoUrl}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onCanPlay={() => setIsVideoLoaded(true)}
                    className="w-full h-full object-cover"
                  />
               </div>

               {isHovering && !isVideoLoaded && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                      <Loader2 className="w-10 h-10 text-white animate-spin" />
                  </div>
               )}

               <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-lg border border-white/10 z-30">
                  <p className="text-xs font-mono text-white/40 uppercase tracking-tighter">Featured Project</p>
                  <p className="font-display font-bold text-xl text-white tracking-tighter">{featuredProject.title}</p>
               </div>
            </Link>
          </GradientFrame>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .hero-title-gradient {
          white-space: normal; /* Allow wrap on mobile */
          max-width: 100%;
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: minmax(480px, 1fr) minmax(420px, 520px);
            gap: clamp(24px, 4vw, 64px);
          }
          .hero-left-col {
            min-width: 0;
          }
          .hero-right-col {
            width: 100%;
          }
          .hero-title-gradient {
            white-space: nowrap; /* Keep single line on desktop */
          }
        }
      `}</style>
    </div>
  );
};
