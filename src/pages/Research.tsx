
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Research: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#082952] mb-6">Research</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#219ebc] mb-4">Research Areas</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Marine Science & Conservation</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Climate Change Adaptation</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Sustainable Development</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Indigenous Knowledge</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Public Health</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Renewable Energy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#219ebc] mb-4">Research Resources</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Research Centers & Institutes</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Publications</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Research Grants</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Ethics Committee</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Research Partnerships</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Research Seminars</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Research;