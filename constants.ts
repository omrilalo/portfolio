
import { Project } from './types';

export const PROFILE = {
  name: "OMRI LALO",
  role: "Motion designer, compositor, 3D artist, animator, AI specialist",
  email: "omrilalo@gmail.com",
  phone: "050-2335567",
  socials: {
    instagram: "https://www.instagram.com/omrilalo/",
    linkedin: "https://www.linkedin.com/in/omri-lalo-a0b75a315/"
  },
  // BRANDING CONFIGURATION
  branding: {
    logoStatic: "public/media/images/logo_black.png",     // e.g. "/assets/logo-static.png"
    logoAnimated: "public/media/videos/logoanimblack-ezgif.com-gif-maker.gif"    // e.g. "/assets/logo-anim.gif" (Plays on hover)
  },
  landing: {
    availability: "Available for Freelance", 
    titleLine1: "MOTION",
    titleLine2: "AI SPECIALIST",
    description: "Merging motion design with generative AI to craft visual experiences that feel both nostalgic and futuristic.",
    featuredProjectIdx: 0
  },
  about: {
    greeting: "HELLO, I'M",
    bio: "B.A animation from Bezalel academy of arts and design. Very adaptive with technical tools and computer software, with a strong eye for composition and movement. Experienced at the entire creative pipeline, from pre-production to post. A very fast and diligent worker and learner, always looking to expand my horizons and develop more skills and techniques, and to grow as a person and artist.",
    photo: "public/media/images/WhatsApp Image 2026-01-09 at 15.02.41.jpeg"
  },
  skills: {
    high: ["Adobe After Effects", "Autodesk Maya", "Midjourney", "Kling AI", "Runway"],
    intermediate: ["Adobe Premiere Pro", "Resolume Arena", "Adobe Photoshop", "Sora", "Hedra", "Luma"],
    basic: ["Adobe Illustrator", "TouchDesigner", "Blender", "Unreal Engine 5", "Figma"]
  },
  experience: [
    {
      year: "2024-2025",
      role: "After Effects Artist & AI Specialist",
      company: "Pixel Studio"
    },
    {
      year: "2023",
      role: "Video Art Creator",
      company: "Event Productions"
    },
    {
      year: "2020-2024",
      role: "B.A Student (Screen Based Arts)",
      company: "Bezalel Academy of Arts and Design"
    },
    {
      year: "2023",
      role: "Exchange Student",
      company: "Maryland Institute College of Art (MICA)"
    },
    {
      year: "2020",
      role: "Intern (Creative Studio)",
      company: "Electra-Target"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'CTRL',
    title: 'CTRL',
    description: 'An audio-visual performance installation that tells the story of an astronaut falling into a black hole and discovering a new world, one that transforms him from the inside out.',
    thumbnail: 'public/media/images/CTRL/2.png',
    videoPreview: 'public/media/videos/CTRL hover.mp4',
    fullVideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vQRM5k0mVnw?si=WpZ3kosBVue7769_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    tags: ['After effects', 'Maya', 'Resolume'],
    year: '2024',
    details: 'Final project in the Animation Department at the Bezalel Academy of Arts and Design. CTRL combines a live DJ performance with animated visuals. The visuals are also operated live by me during the performance using VJ software. Together, the music and visuals merge to create an immersive, narrative, and abstract experience.',
    images: [
      'public/media/images/CTRL/2.png',
      'public/media/images/CTRL/3.png',
      'public/media/images/CTRL/P1066282.00_29_00_11.Still001.png',
      'public/media/images/CTRL/1.png',
      'public/media/images/CTRL/7.png',
      'public/media/images/CTRL/10.png',
    ]
  },
  {
    id: 'TIMELESS',
    title: 'TIMELESS',
    description: 'A short 3D animated film that explores responsibility passed down from generation to generation, and the heavy burden that comes with it.',
    thumbnail: 'public/media/images/timeless/image4.png',
    videoPreview: 'public/media/videos/timeless hover.mp4',
    fullVideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/aJv6XRSy3AY?si=1yAHSxrz0BnGC-aj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    tags: ['Maya', 'After effects'],
    year: '2023',
    details: 'A third-year animation film created at the Bezalel Academy of Arts and Design. TIMELESS follows a young prince on the day of his coronation, as he steps into a role shaped by generations before him and learns that time itself leaves little room for hesitation.',
    images: [
      'public/media/images/timeless/image1.png',
      'public/media/images/timeless/image2.png',
      'public/media/images/timeless/image3.png',
      'public/media/images/timeless/image4.png',
      'public/media/images/timeless/image5.png',
      'public/media/images/timeless/image6.png',
    ]
  },
  {
    id: 'Auto-show',
    title: 'Auto show',
    description: 'An AI-based project presenting different vehicles reimagined in the style of famous works of art.',
    thumbnail: 'public/media/images/auto show/4.png',
    videoPreview: 'public/media/videos/cars hover.mp4',
    fullVideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mSxHGcvhk8I?si=sXJ1hc49aQL9Isu9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    tags: ['Midjourny', 'Runway', 'Generative AI'],
    year: '2025',
    details: 'The project was created for Israel’s Car of the Year exhibition and uses generative AI tools to explore the relationship between automotive design and fine art across different artistic movements.',
    images: [
      'public/media/images/auto show/1.png',
      'public/media/images/auto show/2.png',
      'public/media/images/auto show/3.png',
      'public/media/images/auto show/4.png',
      'public/media/images/auto show/5.png',
      'public/media/images/auto show/6.png',
    ]
  },
  {
    id: 'Snow-park',
    title: 'Snow park',
    description: 'A wondrous journey through worlds of snow, ice, and magic.',
    thumbnail: 'public/media/images/snow/1.png',
    videoPreview: 'public/media/videos/snow hover.mp4',
    fullVideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vxd0okBg13g?si=E3UWlQ2K6fUUj4BX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    tags: ['Midjourny', 'Kling', 'After effects', 'Generative AI'],
    year: '2025',
    details: 'An immersive video project presented on a massive LED screen at the entrance to the SNOWPARK exhibition at Expo Tel Aviv. The film was created using generative AI tools combined with compositing in After Effects.',
    images: [
      'public/media/images/snow/1.png',
      'public/media/images/snow/2.png',
      'public/media/images/snow/3.png',
      'public/media/images/snow/4.png',
    ]
  },
  {
    id: 'Ninja-training',
    title: 'Ninja training',
    description: 'A short 3D animation exercise depicting a ninja warrior during training.',
    thumbnail: 'public/media/images/ninja/image2.png',
    videoPreview: 'public/media/videos/ninja_final.mp4',
    fullVideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qywNx12TQbU?si=MemV1iiKYcFI7Z75" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    tags: ['After Effects', 'Maya'],
    year: '2022',
    details: 'The exercise was designed to test advanced character animation, with a focus on body mechanics in an action scene.',
    images: [
      'public/media/images/ninja/image1.png',
      'public/media/images/ninja/image2.png',
    ]
  },
  {
    id: 'Criminal-melody',
    title: 'Criminal melody',
    description: 'A short exercise combining AI-generated imagery with compositing techniques.',
    thumbnail: 'public/media/images/criminal/Screenshot 2025-08-29 184143.png',
    videoPreview: 'public/media/videos/gangster6.mp4',
    fullVideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8hXA8Pm5XAE?si=yaoCek9ofkwIwn89" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    tags: ['Midjourny', 'After effects'],
    year: '2025',
    details: 'The exercise was designed to explore how AI-generated imagery can be combined into a single image with a cohesive and engaging look and feel.',
    images: [
      'public/media/images/criminal/Screenshot 2025-08-29 184143.png',
      'public/media/images/criminal/3.png',
      'public/media/images/criminal/2.png',
      'public/media/images/criminal/1.png',
    ]
  },
  {
    id: 'Big fish',
    title: 'Big fish',
    description: 'A short motion animation loop about a fish who dreams of becoming a shark.',
    thumbnail: 'public/media/images/fish/fish.png',
    videoPreview: 'public/media/videos/sport_fish.mp4',
    fullVideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LqLhj8Bp6IQ?si=JDCMliVrti3IYR9_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    tags: ['After effects', 'Illustrator'],
    year: '2024',
    details: 'A short motion graphics exercise that aims to create a more organic feel, inspired by classical animation and incorporating principles such as squash and stretch.',
    images: [
      'public/media/images/fish/fish.png',
    ]
  }
];
