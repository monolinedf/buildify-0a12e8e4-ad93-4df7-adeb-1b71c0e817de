
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#082952] to-[#219ebc] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Center for Island Futures
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Pioneering sustainable solutions for Pacific Island nations through research, education, and community engagement
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#about" 
            className="bg-white text-[#082952] hover:bg-[#39c4f1] hover:text-white transition-colors py-3 px-8 rounded-md font-semibold text-lg"
          >
            Learn More
          </a>
          <a 
            href="#programs" 
            className="bg-[#39c4f1] text-white hover:bg-white hover:text-[#082952] transition-colors py-3 px-8 rounded-md font-semibold text-lg"
          >
            Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;