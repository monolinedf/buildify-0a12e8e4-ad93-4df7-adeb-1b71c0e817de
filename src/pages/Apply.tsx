
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Apply = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-b from-[#082952] to-[#219ebc] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Apply</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join the Center for Island Futures and be part of creating sustainable solutions for Pacific Island nations
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#082952] mb-6">Application Process</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The Center for Island Futures welcomes applications from students, researchers, and professionals who are passionate about creating sustainable futures for Pacific Island nations.
                </p>
                
                <div className="space-y-8 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#219ebc] text-white font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#082952] mb-2">Review Eligibility Requirements</h3>
                      <p className="text-gray-700">
                        Check the specific eligibility criteria for your program of interest, including academic qualifications, language proficiency, and other requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#219ebc] text-white font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#082952] mb-2">Prepare Required Documents</h3>
                      <p className="text-gray-700">
                        Gather all necessary documents, including academic transcripts, letters of recommendation, statement of purpose, CV/resume, and proof of language proficiency.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#219ebc] text-white font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#082952] mb-2">Complete Online Application</h3>
                      <p className="text-gray-700">
                        Fill out the online application form, upload required documents, and pay the application fee (if applicable).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#219ebc] text-white font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#082952] mb-2">Interview (if required)</h3>
                      <p className="text-gray-700">
                        Some programs may require an interview as part of the selection process. You will be notified if an interview is needed.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#219ebc] text-white font-bold mr-4">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#082952] mb-2">Receive Decision</h3>
                      <p className="text-gray-700">
                        Applications are typically reviewed within 4-6 weeks. You will be notified of the decision via email.
                      </p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="#application-form" 
                  className="inline-block py-3 px-8 bg-[#082952] text-white rounded hover:bg-[#39c4f1] transition-colors font-medium"
                >
                  Start Your Application
                </a>
              </div>
              
              <div>
                <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-bold text-[#219ebc] mb-4">Application Deadlines</h3>
                  <ul className="space-y-4">
                    <li className="border-b border-gray-200 pb-3">
                      <span className="font-medium block">Undergraduate Programs</span>
                      <span className="text-gray-700">Fall Semester: May 15, 2025</span><br />
                      <span className="text-gray-700">Spring Semester: October 15, 2025</span>
                    </li>
                    <li className="border-b border-gray-200 pb-3">
                      <span className="font-medium block">Postgraduate Programs</span>
                      <span className="text-gray-700">Fall Semester: April 1, 2025</span><br />
                      <span className="text-gray-700">Spring Semester: September 1, 2025</span>
                    </li>
                    <li className="border-b border-gray-200 pb-3">
                      <span className="font-medium block">Research Positions</span>
                      <span className="text-gray-700">Rolling basis (check specific positions)</span>
                    </li>
                    <li>
                      <span className="font-medium block">Short Courses</span>
                      <span className="text-gray-700">Varies by course (typically 4 weeks before start date)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#219ebc] mb-4">Contact Admissions</h3>
                  <p className="text-gray-700 mb-4">
                    Have questions about the application process? Our admissions team is here to help.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#39c4f1] mr-2">✉️</span>
                      <span className="text-gray-700">admissions@islandfutures.sinu.edu.sb</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#39c4f1] mr-2">📞</span>
                      <span className="text-gray-700">+677 12345678</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#39c4f1] mr-2">🕒</span>
                      <span className="text-gray-700">Monday-Friday, 8:00 AM - 4:30 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="application-form" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#082952] mb-4">Application Form</h2>
              <div className="w-20 h-1 bg-[#39c4f1] mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-700">
                Complete the form below to start your application process. Fields marked with an asterisk (*) are required.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <form>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#219ebc] mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#39c4f1]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#39c4f1]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#39c4f1]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#39c4f1]"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#219ebc] mb-4">Program Information</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="programType" className="block text-gray-700 mb-2">Program Type *</label>
                      <select 
                        id="programType" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#39c4f1]"
                        required
                      >
                        <option value="">Select Program Type</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="postgraduate">Postgraduate</option>
                        <option value="research">Research Position</option>
                        <option value="shortCourse">Short Course</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="specificProgram" className="block text-gray-700 mb-2">Specific Program *</label>
                      <select 
                        id="specificProgram" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#39c4f1]"
                        required
                      >
                        <option value="">Select Specific Program</option>
                        <option value="program1">Program 1</option>
                        <option value="program2">Program 2</option>
                        <option value="program3">Program 3</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="startDate" className="block text-gray-700 mb-2">Intended Start Date *</label>
                      <select 
                        id="startDate" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#39c4f1]"
                        required
                      >
                        <option value="">Select Start Date</option>
                        <option value="fall2025">Fall 2025</option>
                        <option value="spring2026">Spring 2026</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#219ebc] mb-4">Additional Information</h3>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Why are you interested in this program? *</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#39c4f1]"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="terms" className="text-gray-700">
                      I confirm that the information provided is accurate and complete. I understand that any false or misleading information may result in the rejection of my application. *
                    </label>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 bg-[#082952] text-white rounded hover:bg-[#39c4f1] transition-colors font-medium"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;