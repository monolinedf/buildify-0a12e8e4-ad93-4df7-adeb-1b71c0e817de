
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Alumni: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#082952] mb-6">Alumni</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#219ebc] mb-4">Alumni Network</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Alumni Association</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Notable Alumni</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Alumni Directory</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Update Your Information</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Alumni Benefits</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Alumni Magazine</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#219ebc] mb-4">Get Involved</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Alumni Events</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Volunteer Opportunities</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Mentorship Program</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Give Back</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Career Network</a>
              </li>
              <li className="flex items-start">
                <span className="text-[#39c4f1] mr-2">•</span>
                <a href="#" className="hover:text-[#39c4f1]">Regional Chapters</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Alumni;