
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CampusLife: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#082952] mb-6">Campus Life</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#219ebc] mb-4">Student Experience</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Student Clubs & Organizations</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Sports & Recreation</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Arts & Culture</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Dining Services</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Health & Wellness</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Campus Events</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#219ebc] mb-4">Campus Resources</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Campus Accommodation</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Transportation</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Security Services</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Student Center</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Technology Services</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Campus Map</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CampusLife;