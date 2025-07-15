
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LogoPlaceholder from '../assets/logo-placeholder';
import { ChevronDown, Menu, X, ArrowUp, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bottomDropdown, setBottomDropdown] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
      setShowBackToTop(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

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
      setSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchInputRef.current?.value);
    // Close search after submission
    setSearchOpen(false);
  };

  const handleDropdownHover = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };
  
  const handleBottomDropdownHover = (dropdown: string) => {
    setBottomDropdown(dropdown);
  };

  const handleBottomDropdownLeave = () => {
    setBottomDropdown(null);
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
    { label: 'About Us', id: 'about-us', hasDropdown: true },
    { label: 'Our Programs', id: 'our-programs', hasDropdown: true },
    { label: 'Our Research', id: 'our-research', hasDropdown: true },
    { label: 'Apply', id: 'apply', hasDropdown: true },
    { label: 'Quick Links', id: 'quick-links', hasDropdown: true }
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

  // Bottom menu dropdowns
  const bottomDropdownContent = {
    'about-us': ['News/Blog', 'Our People'],
    'our-programs': ['PGDip', 'Fellowships', 'Masterclasses', 'Masters'],
    'our-research': ['Research Themes', 'Community Engagement Programs (SOILs)', 'Our Partners'],
    'apply': ['Masterclass', 'Fellowship', 'Research Grant'],
    'quick-links': ['Staff Portal', 'Student Portal', 'Moodle', 'Apply Now']
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
                <button 
                  className="text-white hover:bg-white hover:text-[#39c4f1] p-1 rounded-full transition-colors"
                  onClick={toggleSearch}
                >
                  {searchOpen ? <X size={20} /> : <Search size={20} />}
                </button>
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
          <>
            {/* Search bar */}
            {searchOpen && (
              <div className="bg-white py-2 shadow-md">
                <div className="container mx-auto px-4">
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search..."
                      className="w-full py-2 px-4 outline-none text-gray-800"
                    />
                    <button 
                      type="submit"
                      className="bg-[#219ebc] text-white p-2 rounded-r"
                    >
                      <Search size={20} />
                    </button>
                  </form>
                </div>
              </div>
            )}
            
            {/* Bottom menu */}
            <div className="bg-[#219ebc] text-white py-2">
              <div className="container mx-auto px-4">
                <nav className="hidden lg:flex justify-center space-x-8">
                  {bottomMenuItems.map((item) => (
                    <div 
                      key={item.id}
                      className="relative group"
                      onMouseEnter={() => item.hasDropdown && handleBottomDropdownHover(item.id)}
                      onMouseLeave={handleBottomDropdownLeave}
                    >
                      <Link 
                        to={`/${item.id}`}
                        className="hover:text-[#082952] transition-colors py-1 flex items-center"
                      >
                        {item.label}
                        {item.hasDropdown && <ChevronDown size={16} className="ml-1" />}
                      </Link>
                      
                      {/* Dropdown for bottom menu items */}
                      {item.hasDropdown && bottomDropdown === item.id && (
                        <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[200px] z-50">
                          <div className="py-2">
                            {bottomDropdownContent[item.id as keyof typeof bottomDropdownContent].map((link, index) => (
                              <Link 
                                key={index}
                                to="#"
                                className="block px-4 py-2 text-[#219ebc] hover:bg-gray-100"
                              >
                                {link}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </>
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
              <div className="flex items-center">
                <button 
                  className={`p-2 rounded-full transition-colors mr-2 ${searchOpen ? 'bg-white text-[#39c4f1]' : 'text-white hover:bg-white hover:text-[#39c4f1]'}`}
                  onClick={toggleSearch}
                >
                  {searchOpen ? <X size={20} /> : <Search size={20} />}
                </button>
                <button 
                  className={`p-2 rounded-full transition-colors ${mobileMenuOpen ? 'bg-white text-[#39c4f1]' : 'text-white hover:bg-white hover:text-[#39c4f1]'}`}
                  onClick={toggleMobileMenu}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
            
            {/* Search bar when scrolled */}
            {searchOpen && (
              <div className="bg-white py-2 shadow-inner">
                <div className="container mx-auto px-4">
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search..."
                      className="w-full py-2 px-4 outline-none text-gray-800"
                    />
                    <button 
                      type="submit"
                      className="bg-[#219ebc] text-white p-2 rounded-r"
                    >
                      <Search size={20} />
                    </button>
                  </form>
                </div>
              </div>
            )}
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
              {/* Top menu items */}
              {topMenuItems.map((item) => (
                <div key={item.id} className="border-b border-[#219ebc] pb-2">
                  <Link 
                    to={`/${item.id}`}
                    className="block py-2 px-4 text-white hover:bg-[#219ebc] rounded"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              
              {/* Bottom menu items with dropdowns */}
              {bottomMenuItems.map((item) => (
                <div key={item.id} className="border-b border-[#219ebc] pb-2">
                  <Link 
                    to={`/${item.id}`}
                    className="block py-2 px-4 text-white hover:bg-[#219ebc] rounded"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                  
                  {item.hasDropdown && (
                    <div className="pl-8 mt-1 space-y-1">
                      {bottomDropdownContent[item.id as keyof typeof bottomDropdownContent].map((link, index) => (
                        <Link 
                          key={index}
                          to="#"
                          className="block py-1 px-4 text-[#219ebc] bg-white/10 rounded"
                          onClick={toggleMobileMenu}
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Search in mobile menu */}
              <div className="mt-4">
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full py-2 px-4 outline-none text-gray-800 rounded-l"
                  />
                  <button 
                    type="submit"
                    className="bg-[#219ebc] text-white p-2 rounded-r"
                  >
                    <Search size={20} />
                  </button>
                </form>
              </div>
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