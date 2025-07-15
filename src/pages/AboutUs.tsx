
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-b from-[#082952] to-[#219ebc] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Learn about the Center for Island Futures at Solomon Islands National University
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#082952] mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The Center for Island Futures was established in 2020 as a response to the growing challenges facing Pacific Island nations, including climate change, resource depletion, and economic sustainability.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Founded by a group of dedicated researchers and educators from Solomon Islands National University, the Center aims to bridge the gap between academic research and practical solutions for island communities.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our interdisciplinary approach brings together experts from various fields, including environmental science, economics, indigenous studies, public health, and engineering, to develop holistic solutions to complex challenges.
                </p>
                <p className="text-lg text-gray-700">
                  Through partnerships with local communities, government agencies, international organizations, and other academic institutions, we work to implement sustainable solutions that respect cultural values and traditional knowledge while embracing innovation and technology.
                </p>
              </div>
              <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#219ebc] mb-4">Key Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#39c4f1] mr-3 font-bold">•</span>
                    <div>
                      <span className="font-medium">Founded:</span>
                      <p className="text-gray-700">2020</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#39c4f1] mr-3 font-bold">•</span>
                    <div>
                      <span className="font-medium">Location:</span>
                      <p className="text-gray-700">Kukum Campus, Honiara, Solomon Islands</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#39c4f1] mr-3 font-bold">•</span>
                    <div>
                      <span className="font-medium">Staff:</span>
                      <p className="text-gray-700">25 full-time researchers and 15 support staff</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#39c4f1] mr-3 font-bold">•</span>
                    <div>
                      <span className="font-medium">Research Projects:</span>
                      <p className="text-gray-700">Currently managing 12 major research initiatives</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#39c4f1] mr-3 font-bold">•</span>
                    <div>
                      <span className="font-medium">Partners:</span>
                      <p className="text-gray-700">Collaborating with 30+ organizations globally</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#082952] mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-[#219ebc] h-48"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#082952] mb-1">Dr. Name Surname</h3>
                    <p className="text-[#39c4f1] font-medium mb-4">Position Title</p>
                    <p className="text-gray-700 mb-4">
                      Brief description of the team member's expertise, background, and contributions to the Center.
                    </p>
                    <a href="#" className="text-[#219ebc] hover:text-[#082952] font-medium">
                      View Profile →
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

export default AboutUs;