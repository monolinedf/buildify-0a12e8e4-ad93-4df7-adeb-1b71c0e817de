
import React from 'react';

// These components use free images from Unsplash with appropriate captions
// Each image is responsive and will fit the column width

export const StudyImage: React.FC = () => (
  <div className="aspect-w-16 aspect-h-9">
    <img 
      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
      alt="Students studying in a library" 
      className="w-full h-full object-cover"
    />
  </div>
);

export const InternationalImage: React.FC = () => (
  <div className="aspect-w-16 aspect-h-9">
    <img 
      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
      alt="International students from diverse backgrounds" 
      className="w-full h-full object-cover"
    />
  </div>
);

export const ResearchImage: React.FC = () => (
  <div className="aspect-w-16 aspect-h-9">
    <img 
      src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
      alt="Researchers working in a laboratory" 
      className="w-full h-full object-cover"
    />
  </div>
);

export const CampusLifeImage: React.FC = () => (
  <div className="aspect-w-16 aspect-h-9">
    <img 
      src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
      alt="Students enjoying campus activities" 
      className="w-full h-full object-cover"
    />
  </div>
);

export const AlumniImage: React.FC = () => (
  <div className="aspect-w-16 aspect-h-9">
    <img 
      src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
      alt="Alumni gathering at a university event" 
      className="w-full h-full object-cover"
    />
  </div>
);

export const OurUniImage: React.FC = () => (
  <div className="aspect-w-16 aspect-h-9">
    <img 
      src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
      alt="University campus buildings" 
      className="w-full h-full object-cover"
    />
  </div>
);