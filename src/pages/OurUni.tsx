
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OurUni: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#082952] mb-6">Our University</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#219ebc] mb-4">Our University</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Mission & Vision</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">History</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Executive Leadership</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Organizational Structure</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Strategic Plan</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Policies & Procedures</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#219ebc] mb-4">Connect with SINU</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">News & Media</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Events Calendar</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Employment Opportunities</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Tender Opportunities</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Contact Us</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Campus Locations</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurUni;