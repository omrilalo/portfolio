
import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';

export const Gallery: React.FC = () => {
  // Desktop layout logic (2 Columns top-to-bottom)
  const desktopCol1 = PROJECTS.filter((_, i) => i % 2 === 0);
  const desktopCol2 = PROJECTS.filter((_, i) => i % 2 === 1);

  // Tablet layout logic (2 Columns)
  const tabletCol1 = PROJECTS.filter((_, i) => i % 2 === 0);
  const tabletCol2 = PROJECTS.filter((_, i) => i % 2 === 1);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center space-y-4">
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white">
            SELECTED{' '}
            {/* Simplified text effect for WORKS */}
            <span className="relative inline-block align-top" style={{ 
              lineHeight: '1', 
              fontVariantLigatures: 'none',
              WebkitFontSmoothing: 'antialiased'
            }}>
              <span 
                className="relative block text-transparent bg-clip-text bg-gradient-to-r from-warm-orange via-warm-red to-warm-magenta animate-gradient-x"
                style={{ 
                  zIndex: 1,
                  WebkitBackgroundClip: 'text',
                  paddingRight: '0.02em'
                }}
              >
                WORKS
              </span>
            </span>
          </h2>
          <p className="font-sans text-white/50 max-w-lg mx-auto">
            A curated collection of motion graphics, generative art, and AI-assisted experiments.
          </p>
        </div>

        {/* DESKTOP LAYOUT (2 Columns, Staggered) */}
        <div className="hidden lg:flex gap-16 items-start justify-center">
            <div className="flex flex-col gap-16 flex-1">
                {desktopCol1.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <div className="flex flex-col gap-16 flex-1 pt-48">
                {desktopCol2.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>

        {/* TABLET LAYOUT (2 Columns) */}
        <div className="hidden md:flex lg:hidden gap-8 items-start">
             <div className="flex flex-col gap-12 flex-1">
                {tabletCol1.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <div className="flex flex-col gap-12 flex-1 pt-32">
                {tabletCol2.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>

        {/* MOBILE LAYOUT (1 Column) */}
        <div className="flex md:hidden flex-col gap-8">
            {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};
