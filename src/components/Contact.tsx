
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-[#39c4f1] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Get in touch with the Center for Island Futures to learn more about our programs, research, or collaboration opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#219ebc] mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#39c4f1]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#39c4f1]"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#39c4f1]"
                  placeholder="Message subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#39c4f1]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-[#082952] text-white rounded hover:bg-[#39c4f1] transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-[#219ebc] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[#219ebc] mr-3">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Address:</p>
                    <p className="text-gray-700">Solomon Islands National University, Kukum Campus, Honiara, Solomon Islands</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#219ebc] mr-3">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p className="text-gray-700">+677 12345678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#219ebc] mr-3">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-700">islandfutures@sinu.edu.sb</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#219ebc] mb-6">Office Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday:</span>
                  <span className="font-medium">8:00 AM - 4:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Saturday:</span>
                  <span className="font-medium">9:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;