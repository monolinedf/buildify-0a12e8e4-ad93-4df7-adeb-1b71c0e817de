
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OurResearch = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-b from-[#082952] to-[#219ebc] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Research</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Exploring innovative solutions for sustainable island futures
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#082952] mb-4">Research Focus Areas</h2>
              <div className="w-20 h-1 bg-[#39c4f1] mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-700">
                Our research addresses the most pressing challenges facing Pacific Island nations through an interdisciplinary approach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                'Marine Science & Conservation',
                'Climate Change Adaptation',
                'Sustainable Development',
                'Indigenous Knowledge',
                'Public Health',
                'Renewable Energy'
              ].map((area, index) => (
                <div key={index} className="bg-[#f8f9fa] rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-[#219ebc]"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#082952] mb-4">{area}</h3>
                    <p className="text-gray-700 mb-6">
                      Brief description of this research area, including key challenges, approaches, and potential impacts.
                    </p>
                    <a 
                      href="#" 
                      className="inline-block py-2 px-6 bg-[#082952] text-white rounded hover:bg-[#39c4f1] transition-colors"
                    >
                      Explore Projects
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#082952] mb-4">Featured Research Projects</h2>
              <div className="w-20 h-1 bg-[#39c4f1] mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-700">
                Discover some of our current research initiatives making an impact in the Pacific region.
              </p>
            </div>
            
            <div className="space-y-12">
              {[1, 2, 3].map((project) => (
                <div key={project} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="bg-[#219ebc] h-64 rounded-lg"></div>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-[#219ebc] mb-3">Research Project Title</h3>
                    <p className="text-gray-700 mb-4">
                      Detailed description of the research project, including its objectives, methodology, current progress, and expected outcomes. This section provides an overview of how the project addresses specific challenges facing Pacific Island nations.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-[#e0f7fa] text-[#00838f] text-sm px-3 py-1 rounded-full">Topic Tag</span>
                      <span className="bg-[#e0f7fa] text-[#00838f] text-sm px-3 py-1 rounded-full">Topic Tag</span>
                      <span className="bg-[#e0f7fa] text-[#00838f] text-sm px-3 py-1 rounded-full">Topic Tag</span>
                    </div>
                    <a 
                      href="#" 
                      className="inline-block py-2 px-6 bg-[#082952] text-white rounded hover:bg-[#39c4f1] transition-colors"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurResearch;