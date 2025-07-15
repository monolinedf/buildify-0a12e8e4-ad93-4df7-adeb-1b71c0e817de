
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OurPrograms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-b from-[#082952] to-[#219ebc] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover the academic and research programs offered by the Center for Island Futures
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#082952] mb-4">Academic Programs</h2>
              <div className="w-20 h-1 bg-[#39c4f1] mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-700">
                Our academic programs are designed to equip students with the knowledge and skills needed to address the unique challenges facing Pacific Island nations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {['Undergraduate', 'Postgraduate', 'Certificate'].map((level, index) => (
                <div key={index} className="bg-[#f8f9fa] rounded-lg shadow-md overflow-hidden">
                  <div className="bg-[#219ebc] h-2"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#082952] mb-4">{level} Programs</h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-[#39c4f1] mr-2">•</span>
                        <span className="text-gray-700">Program Name 1</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#39c4f1] mr-2">•</span>
                        <span className="text-gray-700">Program Name 2</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#39c4f1] mr-2">•</span>
                        <span className="text-gray-700">Program Name 3</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#39c4f1] mr-2">•</span>
                        <span className="text-gray-700">Program Name 4</span>
                      </li>
                    </ul>
                    <a 
                      href="#" 
                      className="inline-block py-2 px-6 bg-[#082952] text-white rounded hover:bg-[#39c4f1] transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#082952] mb-4">Professional Development</h2>
              <div className="w-20 h-1 bg-[#39c4f1] mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-700">
                We offer a range of short courses and workshops for professionals seeking to enhance their skills in sustainable development, climate resilience, and related fields.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-[#219ebc] mb-3">Short Course Title</h3>
                  <p className="text-gray-700 mb-4">
                    Brief description of the course, including its objectives, target audience, and key topics covered.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#e0f7fa] text-[#00838f] text-sm px-3 py-1 rounded-full">Duration: 2 weeks</span>
                    <span className="bg-[#e0f7fa] text-[#00838f] text-sm px-3 py-1 rounded-full">Format: Online/In-person</span>
                  </div>
                  <a href="#" className="text-[#082952] hover:text-[#39c4f1] font-medium">
                    View Course Details →
                  </a>
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

export default OurPrograms;