
import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { GradientFrame } from '../components/GradientFrame';
import { ArrowLeft, ArrowRight, Calendar, Tag, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getOptimizedMediaSrc, getMediaType, getEmbedUrl } from '../utils';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);
  const projectIndex = PROJECTS.findIndex(p => p.id === id);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle Navbar Visibility and Scroll Locking
  useEffect(() => {
    const navbar = document.getElementById('navbar-wrapper');
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
      if (navbar) {
        navbar.style.opacity = '0';
        navbar.style.visibility = 'hidden';
        navbar.style.pointerEvents = 'none';
      }
    } else {
      document.body.style.overflow = 'unset';
      if (navbar) {
        navbar.style.opacity = '1';
        navbar.style.visibility = 'visible';
        navbar.style.pointerEvents = 'auto';
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (navbar) {
        navbar.style.opacity = '1';
        navbar.style.visibility = 'visible';
        navbar.style.pointerEvents = 'auto';
      }
    };
  }, [selectedImageIndex]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, project?.images]);

  const handleNextImage = useCallback(() => {
    if (project && selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % project.images.length);
    }
  }, [project, selectedImageIndex]);

  const handlePrevImage = useCallback(() => {
    if (project && selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + project.images.length) % project.images.length);
    }
  }, [project, selectedImageIndex]);

  if (!project) {
    return <div className="min-h-screen pt-32 text-center text-white">Project not found</div>;
  }

  const mediaType = getMediaType(project.fullVideo);
  const mediaUrl = project.fullVideo;

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center">
            <button onClick={() => navigate('/gallery')} className="flex items-center gap-2 text-white/50 hover:text-warm-orange transition-colors font-medium">
                <ArrowLeft size={20} /> Back to Gallery
            </button>
            <div className="text-sm font-mono text-white/30">
                PROJECT {projectIndex + 1} / {PROJECTS.length}
            </div>
        </div>

        {/* Main Video Display */}
        <GradientFrame padding="p-2" rounded="rounded-3xl">
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner relative">
                {(mediaType === 'youtube' || mediaType === 'vimeo') ? (
                  <iframe 
                    src={getEmbedUrl(mediaUrl)} 
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title={project.title}
                  />
                ) : (
                  <video 
                    src={getOptimizedMediaSrc(mediaUrl)} 
                    controls 
                    className="w-full h-full object-cover"
                  />
                )}
            </div>
        </GradientFrame>

        {/* Info & Text */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
                <h1 className="font-display font-bold text-5xl md:text-6xl text-white">{project.title}</h1>
                <div className="prose prose-lg text-white/70 leading-relaxed font-sans">
                    <p className="font-medium text-white">{project.description}</p>
                    <p>{project.details}</p>
                </div>
            </div>
            
            {/* Sidebar Details */}
            <div className="space-y-6">
                <GradientFrame padding="p-[2px]" rounded="rounded-2xl">
                    <div className="bg-white/5 p-6 rounded-2xl space-y-6">
                        <div>
                            <h3 className="flex items-center gap-2 font-display font-bold text-white mb-2">
                                <Calendar size={18} className="text-warm-orange" /> YEAR
                            </h3>
                            <p className="font-mono text-white/60">{project.year}</p>
                        </div>
                        <div>
                            <h3 className="flex items-center gap-2 font-display font-bold text-white mb-2">
                                <Tag size={18} className="text-warm-magenta" /> TECHNOLOGIES
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs font-medium text-white/70">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </GradientFrame>
            </div>
        </div>

        {/* Supplementary Image Gallery */}
        <div className="space-y-6 pt-12">
            <h3 className="font-display font-bold text-3xl text-white">Process & Stills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="cursor-zoom-in" 
                      onClick={() => setSelectedImageIndex(idx)}
                    >
                      <GradientFrame padding="p-1" rounded="rounded-2xl">
                          <img 
                              src={getOptimizedMediaSrc(img)} 
                              alt={`Process ${idx}`} 
                              className="w-full aspect-[4/3] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500" 
                          />
                      </GradientFrame>
                    </div>
                ))}
            </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-white/10 pt-12 flex justify-between items-center">
             {prevProject ? (
                 <Link to={`/project/${prevProject.id}`} className="group text-left">
                    <span className="block text-xs font-mono text-white/30 mb-1">PREVIOUS</span>
                    <span className="flex items-center gap-2 font-display font-bold text-xl text-white group-hover:text-warm-orange transition-colors">
                        <ArrowLeft size={20} /> {prevProject.title}
                    </span>
                 </Link>
             ) : <div />}

             {nextProject ? (
                 <Link to={`/project/${nextProject.id}`} className="group text-right">
                    <span className="block text-xs font-mono text-white/30 mb-1">NEXT</span>
                    <span className="flex items-center gap-2 font-display font-bold text-xl text-white group-hover:text-warm-magenta transition-colors">
                         {nextProject.title} <ArrowRight size={20} />
                    </span>
                 </Link>
             ) : <div />}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
          
          {/* Enhanced Close Button */}
          <div className="absolute top-8 right-8 z-[10000]">
            <button 
              className="w-14 h-14 bg-white text-black hover:bg-warm-orange hover:text-white rounded-full transition-colors duration-300 shadow-2xl group flex items-center justify-center"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close fullscreen"
            >
              <X size={32} className="group-hover:rotate-90 group-active:scale-90 transition-transform duration-500 ease-out" />
            </button>
          </div>

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button 
                className="absolute left-6 md:left-10 z-[10000] p-4 md:p-5 bg-white/5 hover:bg-white/15 text-white hover:text-warm-orange hover:scale-110 active:scale-95 rounded-full transition-all duration-300 backdrop-blur-md"
                onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                aria-label="Previous image"
              >
                <ChevronLeft size={44} />
              </button>
              <button 
                className="absolute right-6 md:right-10 z-[10000] p-4 md:p-5 bg-white/5 hover:bg-white/15 text-white hover:text-warm-orange hover:scale-110 active:scale-95 rounded-full transition-all duration-300 backdrop-blur-md"
                onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                aria-label="Next image"
              >
                <ChevronRight size={44} />
              </button>
            </>
          )}

          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={() => setSelectedImageIndex(null)}
          >
            <img 
              src={getOptimizedMediaSrc(project.images[selectedImageIndex])} 
              alt="Fullscreen view"
              className="max-w-[85%] max-h-[85vh] object-contain shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-500"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Navigation Counter */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="px-5 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white/50 font-mono text-[11px] tracking-[0.2em]">
              {selectedImageIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
