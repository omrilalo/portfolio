
/**
 * Determines the type of media based on the URL.
 * Returns: 'youtube' | 'vimeo' | 'video' | 'image'
 */
export const getMediaType = (url: string): 'youtube' | 'vimeo' | 'video' | 'image' => {
  if (!url) return 'image';
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
  if (url.includes('vimeo.com')) return 'vimeo';
  // Assume generic URLs that aren't the above are direct video files or local assets
  if (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov')) return 'video';
  // Fallback for placeholder URLs that might not end in mp4 but are videos
  if (url.includes('coverr') || url.includes('istockphoto')) return 'video';
  return 'image';
};

/**
 * Extracts the YouTube Video ID.
 */
const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

/**
 * Generates the correct embed URL.
 * Includes origin parameter to help prevent Error 153/150.
 */
export const getEmbedUrl = (url: string) => {
  if (!url) return '';

  const origin = window.location.origin;

  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = getYouTubeId(url);
    if (!videoId) return url;
    // enablejsapi and origin help YouTube verify the request in sandboxed environments
    return `https://www.youtube.com/embed/${videoId}?rel=0&enablejsapi=1&origin=${encodeURIComponent(origin)}`;
  }

  if (url.includes('vimeo.com')) {
    const match = url.match(/vimeo\.com\/(\d+)/);
    const videoId = match ? match[1] : url.split('/').pop();
    return `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`;
  }

  return url;
};

/**
 * Identity function - keeps paths simple.
 */
export const getOptimizedMediaSrc = (url: string) => {
  return url; 
};
