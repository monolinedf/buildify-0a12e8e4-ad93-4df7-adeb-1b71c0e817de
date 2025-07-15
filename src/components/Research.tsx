
import React from 'react';

const Research: React.FC = () => {
  const researchAreas = [
    {
      title: "Marine Science & Conservation",
      description: "Studying coral reef ecosystems, sustainable fisheries, and marine protected areas.",
      image: "bg-[url('https://placehold.co/600x400/219ebc/ffffff?text=Marine+Science')]"
    },
    {
      title: "Climate Change Adaptation",
      description: "Developing strategies for coastal communities to adapt to rising sea levels and extreme weather events.",
      image: "bg-[url('https://placehold.co/600x400/219ebc/ffffff?text=Climate+Adaptation')]"
    },
    {
      title: "Renewable Energy Solutions",
      description: "Researching solar, wind, and ocean energy technologies optimized for island environments.",
      image: "bg-[url('https://placehold.co/600x400/219ebc/ffffff?text=Renewable+Energy')]"
    }
  ];

  return (
    <section id="research" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">Our Research</h2>
          <div className="w-20 h-1 bg-[#39c4f1] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            The Center conducts cutting-edge research addressing the unique challenges and opportunities of island environments.
          </p>
        </div>
        
        <div className="space-y-12">
          {researchAreas.map((area, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${area.image} h-64 bg-cover bg-center rounded-lg shadow-md`}></div>
              <div>
                <h3 className="text-2xl font-bold text-[#219ebc] mb-4">{area.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{area.description}</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#39c4f1] mr-2">•</span>
                    <span>Current projects in {area.title.split('&')[0].trim().toLowerCase()}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#39c4f1] mr-2">•</span>
                    <span>Research publications and findings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#39c4f1] mr-2">•</span>
                    <span>Collaboration opportunities</span>
                  </li>
                </ul>
                <a 
                  href="#" 
                  className="inline-block mt-6 py-2 px-6 bg-[#082952] text-white rounded hover:bg-[#39c4f1] transition-colors"
                >
                  View Research Projects
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;