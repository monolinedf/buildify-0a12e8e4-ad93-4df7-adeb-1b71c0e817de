
import React from 'react';
import { Waves, Sprout, Fish, Sun, Brain, Building2 } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Climate Resilience",
      description: "Research and education focused on climate adaptation strategies for island communities.",
      icon: <Waves size={40} className="text-[#219ebc]" />
    },
    {
      title: "Sustainable Development",
      description: "Programs promoting economic growth while preserving natural resources and cultural heritage.",
      icon: <Sprout size={40} className="text-[#219ebc]" />
    },
    {
      title: "Marine Conservation",
      description: "Initiatives to protect and restore marine ecosystems critical to island livelihoods.",
      icon: <Fish size={40} className="text-[#219ebc]" />
    },
    {
      title: "Renewable Energy",
      description: "Research and implementation of clean energy solutions tailored to island contexts.",
      icon: <Sun size={40} className="text-[#219ebc]" />
    },
    {
      title: "Indigenous Knowledge",
      description: "Documentation and application of traditional knowledge in contemporary challenges.",
      icon: <Brain size={40} className="text-[#219ebc]" />
    },
    {
      title: "Public Health",
      description: "Programs addressing unique health challenges facing island populations.",
      icon: <Building2 size={40} className="text-[#219ebc]" />
    }
  ];

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">Our Programs</h2>
          <div className="w-20 h-1 bg-[#39c4f1] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            The Center for Island Futures offers a range of programs addressing the most pressing challenges facing Pacific Island nations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold text-[#219ebc] mb-3">{program.title}</h3>
              <p className="text-gray-700">{program.description}</p>
              <a href="#" className="inline-block mt-4 text-[#39c4f1] hover:text-[#082952] font-medium">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;