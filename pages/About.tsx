
import React from 'react';
import { GradientFrame } from '../components/GradientFrame';
import { Mail, Instagram, Linkedin, Send } from 'lucide-react';
import { PROFILE } from '../constants';
import { getOptimizedMediaSrc } from '../utils';

export const About: React.FC = () => {
  const photoUrl = getOptimizedMediaSrc(PROFILE.about.photo);
  const bioParagraphs = PROFILE.about.bio.split('\n').filter(p => p.trim() !== '');

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 flex flex-col items-center gap-20">
      
      {/* Top Section: Bio & Profile */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Photo Section */}
        <div className="relative order-2 md:order-1">
            <GradientFrame padding="p-2" rounded="rounded-full" className="aspect-square max-w-md mx-auto">
                <img 
                    src={photoUrl} 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full transition-all duration-700"
                    style={{ objectPosition: 'center 15%' }}
                />
            </GradientFrame>
        </div>

        {/* Text Section */}
        <div className="space-y-8 order-1 md:order-2">
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white">
                {PROFILE.about.greeting} <br />
                {/* Simplified text effect for the NAME */}
                <span className="relative inline-block align-top" style={{ 
                  lineHeight: '1.1', 
                  fontVariantLigatures: 'none',
                  WebkitFontSmoothing: 'antialiased'
                }}>
                  <span 
                    className="relative block text-transparent bg-clip-text bg-gradient-to-r from-warm-orange via-warm-red to-warm-magenta animate-gradient-x"
                    style={{ 
                      zIndex: 1,
                      WebkitBackgroundClip: 'text',
                      paddingRight: '0.05em'
                    }}
                  >
                    {PROFILE.name}
                  </span>
                </span>
            </h1>
            
            <div className="font-sans text-lg text-white/70 space-y-4 leading-relaxed bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-sm">
                {bioParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="pt-8 border-t border-white/10">
                <h3 className="font-mono text-sm text-white/30 mb-4 uppercase tracking-widest">Connect</h3>
                <div className="flex gap-6">
                    {PROFILE.socials.instagram && (
                        <a href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/5 shadow-sm rounded-full hover:bg-warm-orange hover:text-white transition-all group">
                            <Instagram size={24} />
                        </a>
                    )}
                    <a href={`mailto:${PROFILE.email}`} className="p-3 bg-white/5 border border-white/5 shadow-sm rounded-full hover:bg-warm-red hover:text-white transition-all group">
                        <Mail size={24} />
                    </a>
                    {PROFILE.socials.linkedin && (
                        <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/5 shadow-sm rounded-full hover:bg-warm-magenta hover:text-white transition-all group">
                            <Linkedin size={24} />
                        </a>
                    )}
                </div>
            </div>
        </div>
      </div>

      {/* Bottom Section: Contact Form */}
      <div className="w-full max-w-2xl">
        <GradientFrame padding="p-8 md:p-12" rounded="rounded-[2.5rem]">
            <div className="space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Let's Create Something</h2>
                    <p className="text-white/40 font-sans">Have a project in mind? Fill out the form below.</p>
                </div>

                <form
  className="space-y-6"
  action="https://formspree.io/f/mzddpddk"
  method="POST"
>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="space-y-2">
    <label
      htmlFor="name"
      className="ml-2 text-xs font-mono font-bold text-white/30 uppercase tracking-wider block"
    >
      Name
    </label>
    <input
      id="name"
      name="name"
      type="text"
      required
      className="w-full bg-white/5 border-2 border-transparent focus:border-warm-orange/50 hover:bg-white/10 transition-all rounded-xl px-4 py-3 outline-none text-white font-sans placeholder-white/20"
      placeholder="Your Name"
    />
  </div>

  <div className="space-y-2">
    <label
      htmlFor="email"
      className="ml-2 text-xs font-mono font-bold text-white/30 uppercase tracking-wider block"
    >
      Email
    </label>
    <input
      id="email"
      name="email"
      type="email"
      required
      className="w-full bg-white/5 border-2 border-transparent focus:border-warm-red/50 hover:bg-white/10 transition-all rounded-xl px-4 py-3 outline-none text-white font-sans placeholder-white/20"
      placeholder="name@example.com"
    />
  </div>
</div>

<div className="space-y-2">
  <label
    htmlFor="message"
    className="ml-2 text-xs font-mono font-bold text-white/30 uppercase tracking-wider block"
  >
    Project Details
  </label>
  <textarea
    id="message"
    name="message"
    rows={4}
    required
    className="w-full bg-white/5 border-2 border-transparent focus:border-warm-magenta/50 hover:bg-white/10 transition-all rounded-xl px-4 py-3 outline-none text-white font-sans placeholder-white/20 resize-none"
    placeholder="Tell me about your idea..."
  ></textarea>
</div>

{/* Optional: nicer email subject in your inbox */}
<input type="hidden" name="_subject" value="New message from portfolio site" />

<button
  type="submit"
  className="w-full group relative px-8 py-4 bg-white text-black font-display font-bold text-lg rounded-xl overflow-hidden transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg"
>
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-warm-orange via-warm-red to-warm-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  <span className="relative flex items-center justify-center gap-3 group-hover:text-white transition-colors">
    SEND REQUEST{" "}
    <Send
      size={18}
      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
    />
  </span>
</button>
</form>
