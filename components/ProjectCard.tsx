
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { GradientFrame } from './GradientFrame';
import { Loader2 } from 'lucide-react';
import { getOptimizedMediaSrc } from '../utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const thumbnailUrl = getOptimizedMediaSrc(project.thumbnail);
  const videoPreviewUrl = getOptimizedMediaSrc(project.videoPreview);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
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
    <Link to={`/project/${project.id}`} className={`block group ${className}`}>
      <GradientFrame padding="p-1" rounded="rounded-2xl" className="h-full">
        <div 
          className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Static Image */}
          <img 
            src={thumbnailUrl} 
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-10 ${isHovering && isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
          />
          
          {/* Video Layer */}
          <div className="absolute inset-0 w-full h-full bg-black z-0">
            <video
              ref={videoRef}
              src={videoPreviewUrl}
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={() => setIsVideoLoaded(true)}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Loader */}
          {isHovering && !isVideoLoaded && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                <Loader2 className="w-6 h-6 text-white animate-spin" />
            </div>
          )}

          {/* Overlay Content */}
          <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
            <h3 className="text-white font-display font-bold text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {project.title}
            </h3>
            <p className="text-gray-200 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {project.description}
            </p>
          </div>
        </div>
      </GradientFrame>
    </Link>
  );
};
