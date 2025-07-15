
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const QuickLinks: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#082952] mb-6">Quick Links</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-[#219ebc] mb-4">Staff Portal</h2>
            <p className="text-gray-600 mb-4">Access staff resources, email, and administrative tools.</p>
            <a href="#" className="text-[#39c4f1] hover:underline">Access Portal →</a>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-[#219ebc] mb-4">Student Portal</h2>
            <p className="text-gray-600 mb-4">Access your student email, grades, and registration tools.</p>
            <a href="#" className="text-[#39c4f1] hover:underline">Access Portal →</a>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-[#219ebc] mb-4">Moodle</h2>
            <p className="text-gray-600 mb-4">Access course materials, assignments, and online learning resources.</p>
            <a href="#" className="text-[#39c4f1] hover:underline">Access Moodle →</a>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-[#219ebc] mb-4">Apply Now</h2>
            <p className="text-gray-600 mb-4">Start your application for programs, fellowships, and research grants.</p>
            <a href="#" className="text-[#39c4f1] hover:underline">Start Application →</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuickLinks;