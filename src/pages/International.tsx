
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const International: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#082952] mb-6">International</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#219ebc] mb-4">International Students</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Admission Requirements</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Visa Information</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Student Accommodation</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">English Language Programs</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Cultural Orientation</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">International Student Support</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#219ebc] mb-4">Global Initiatives</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Exchange Programs</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Partner Universities</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Study Abroad</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">International Scholarships</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Global Research Collaborations</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">International Events</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default International;