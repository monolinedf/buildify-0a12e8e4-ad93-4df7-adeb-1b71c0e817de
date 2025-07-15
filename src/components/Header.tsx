
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoPlaceholder from '../assets/logo-placeholder';
import { ChevronDown, Menu, X, ArrowUp } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
      setShowBackToTop(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownHover = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const topMenuItems = [
    { label: 'Study', id: 'study' },
    { label: 'International', id: 'international' },
    { label: 'Research', id: 'research' },
    { label: 'Campus Life', id: 'campus-life' },
    { label: 'Alumni', id: 'alumni' },
    { label: 'Our Uni', id: 'our-uni' }
  ];

  const bottomMenuItems = [
    { label: 'About Us', id: 'about-us' },
    { label: 'Our Programs', id: 'our-programs' },
    { label: 'Our Research', id: 'our-research' },
    { label: 'Apply', id: 'apply' }
  ];

  const dropdownContent = {
    'study': {
      column2: {
        heading: 'Academic Programs',
        links: [
          'Undergraduate Programs',
          'Postgraduate Programs',
          'Distance & Flexible Learning',
          'SINU TAFE & TVET',
          'University Preparatory Courses',
          'Short Courses'
        ]
      },
      column3: {
        heading: 'Academic Resources',
        links: [
          'Schools and Faculties',
          'Academic Calendar',
          'Library Services',
          'Student Academic Support',
          'Scholarships',
          'ICT Services'
        ]
      }
    },
    'international': {
      column2: {
        heading: 'International Students',
        links: [
          'Admission Requirements',
          'Visa Information',
          'Student Accommodation',
          'English Language Programs',
          'Cultural Orientation',
          'International Student Support'
        ]
      },
      column3: {
        heading: 'Global Initiatives',
        links: [
          'Exchange Programs',
          'Partner Universities',
          'Study Abroad',
          'International Scholarships',
          'Global Research Collaborations',
          'International Events'
        ]
      }
    },
    'research': {
      column2: {
        heading: 'Research Areas',
        links: [
          'Marine Science & Conservation',
          'Climate Change Adaptation',
          'Sustainable Development',
          'Indigenous Knowledge',
          'Public Health',
          'Renewable Energy'
        ]
      },
      column3: {
        heading: 'Research Resources',
        links: [
          'Research Centers & Institutes',
          'Publications',
          'Research Grants',
          'Ethics Committee',
          'Research Partnerships',
          'Research Seminars'
        ]
      }
    },
    'campus-life': {
      column2: {
        heading: 'Student Experience',
        links: [
          'Student Clubs & Organizations',
          'Sports & Recreation',
          'Arts & Culture',
          'Dining Services',
          'Health & Wellness',
          'Campus Events'
        ]
      },
      column3: {
        heading: 'Campus Resources',
        links: [
          'Campus Accommodation',
          'Transportation',
          'Security Services',
          'Student Center',
          'Technology Services',
          'Campus Map'
        ]
      }
    },
    'alumni': {
      column2: {
        heading: 'Alumni Network',
        links: [
          'Alumni Association',
          'Notable Alumni',
          'Alumni Directory',
          'Update Your Information',
          'Alumni Benefits',
          'Alumni Magazine'
        ]
      },
      column3: {
        heading: 'Get Involved',
        links: [
          'Alumni Events',
          'Volunteer Opportunities',
          'Mentorship Program',
          'Give Back',
          'Career Network',
          'Regional Chapters'
        ]
      }
    },
    'our-uni': {
      column2: {
        heading: 'Our University',
        links: [
          'Mission & Vision',
          'History',
          'Executive Leadership',
          'Organizational Structure',
          'Strategic Plan',
          'Policies & Procedures'
        ]
      },
      column3: {
        heading: 'Connect with SINU',
        links: [
          'News & Media',
          'Events Calendar',
          'Employment Opportunities',
          'Tender Opportunities',
          'Contact Us',
          'Campus Locations'
        ]
      }
    }
  };

  return (
    <>
      <header className={`w-full transition-all duration-300 ${scrolled ? 'fixed top-0 z-50' : 'relative'}`}>
        {/* First row - always visible when not scrolled */}
        {!scrolled && (
          <div className="bg-[#082952] text-white py-3">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="flex items-center">
                <LogoPlaceholder className="h-16 w-auto mr-4" />
                <div>
                  <h1 className="text-2xl font-bold">Center for Island Futures</h1>
                  <p className="text-[#219ebc]">Solomon Islands National University</p>
                </div>
              </div>
              <nav className="hidden lg:flex space-x-6">
                {topMenuItems.map((item) => (
                  <Link 
                    key={item.id}
                    to={`/${item.id}`}
                    className="hover:text-[#39c4f1] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <button 
                className="lg:hidden text-white"
                onClick={toggleMobileMenu}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        )}

        {/* Second row - always visible when not scrolled */}
        {!scrolled && (
          <div className="bg-[#219ebc] text-white py-2">
            <div className="container mx-auto px-4">
              <nav className="hidden lg:flex justify-center space-x-8">
                {bottomMenuItems.map((item) => (
                  <Link 
                    key={item.id}
                    to={`/${item.id}`}
                    className="hover:text-[#082952] transition-colors py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Scrolled header - visible only when scrolled */}
        {scrolled && (
          <div className="bg-[#082952] text-white py-3 shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="flex items-center">
                <div>
                  <h1 className="text-xl font-bold text-white">Center for Island Futures</h1>
                  <p className="text-sm text-[#219ebc]">Solomon Islands National University</p>
                </div>
              </div>
              <nav className="hidden lg:flex space-x-6">
                {bottomMenuItems.map((item) => (
                  <Link 
                    key={item.id}
                    to={`/${item.id}`}
                    className="hover:bg-white hover:text-[#39c4f1] transition-colors py-1 px-3 rounded"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <button 
                className={`p-2 rounded-full transition-colors ${mobileMenuOpen ? 'bg-white text-[#39c4f1]' : 'text-white hover:bg-white hover:text-[#39c4f1]'}`}
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        )}

        {/* Mega menu dropdown */}
        {mobileMenuOpen && (
          <div 
            className="bg-[#219ebc] text-white w-full absolute z-50 shadow-lg"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1 - Main menu items */}
              <div className="space-y-2">
                {topMenuItems.map((item) => (
                  <div 
                    key={item.id}
                    className={`cursor-pointer p-2 rounded flex justify-between items-center ${activeDropdown === item.id ? 'bg-white text-[#39c4f1]' : 'hover:bg-white hover:text-[#39c4f1]'}`}
                    onMouseEnter={() => handleDropdownHover(item.id)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} />
                  </div>
                ))}
              </div>

              {/* Columns 2 & 3 - Dynamic content based on active dropdown */}
              {activeDropdown && dropdownContent[activeDropdown as keyof typeof dropdownContent] && (
                <>
                  <div className="bg-white p-4 rounded">
                    <h3 className="text-[#39c4f1] font-bold mb-3">
                      {dropdownContent[activeDropdown as keyof typeof dropdownContent].column2.heading}
                    </h3>
                    <ul className="space-y-2">
                      {dropdownContent[activeDropdown as keyof typeof dropdownContent].column2.links.map((link, index) => (
                        <li key={index}>
                          <Link to="#" className="text-[#219ebc] hover:underline flex items-center">
                            <span className="mr-2">•</span> {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <h3 className="text-[#39c4f1] font-bold mb-3">
                      {dropdownContent[activeDropdown as keyof typeof dropdownContent].column3.heading}
                    </h3>
                    <ul className="space-y-2">
                      {dropdownContent[activeDropdown as keyof typeof dropdownContent].column3.links.map((link, index) => (
                        <li key={index}>
                          <Link to="#" className="text-[#219ebc] hover:underline flex items-center">
                            <span className="mr-2">•</span> {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && !scrolled && (
        <div className="lg:hidden fixed inset-0 bg-[#082952] z-40 pt-20 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-4">
              {topMenuItems.concat(bottomMenuItems).map((item) => (
                <Link 
                  key={item.id}
                  to={`/${item.id}`}
                  className="block py-2 px-4 text-white hover:bg-[#219ebc] rounded"
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Back to top button */}
      {showBackToTop && (
        <button 
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#39c4f1] text-white hover:bg-[#219ebc] transition-colors z-50 shadow-lg"
          onClick={scrollToTop}
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Header;