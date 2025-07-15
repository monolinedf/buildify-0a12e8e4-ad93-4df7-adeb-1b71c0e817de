
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">About the Center</h2>
          <div className="w-20 h-1 bg-[#39c4f1] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-gray-700">
              The Center for Island Futures at Solomon Islands National University is dedicated to addressing the unique challenges and opportunities facing Pacific Island nations in the 21st century.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Our interdisciplinary approach brings together experts in climate science, sustainable development, indigenous knowledge, marine conservation, renewable energy, and public health to develop innovative solutions for island communities.
            </p>
            <p className="text-lg text-gray-700">
              Through research, education, and community engagement, we aim to build resilient and sustainable futures for island nations while preserving cultural heritage and natural resources.
            </p>
          </div>
          
          <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#219ebc] mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              To advance knowledge and develop practical solutions that enhance the resilience, sustainability, and prosperity of Pacific Island communities in the face of environmental, social, and economic challenges.
            </p>
            
            <h3 className="text-2xl font-bold text-[#219ebc] mb-4">Our Vision</h3>
            <p className="text-gray-700">
              A future where Pacific Island nations thrive as models of sustainable development, cultural preservation, and environmental stewardship, leading global efforts in climate adaptation and resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;