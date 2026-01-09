export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoPreview: string; // URL for the hover preview
  fullVideo: string; // URL for the detail page
  tags: string[];
  year: string;
  details: string; // Long description
  images: string[]; // Additional gallery images
}

export enum RoutePath {
  HOME = '/',
  GALLERY = '/gallery',
  PROJECT = '/project/:id',
  ABOUT = '/about',
}