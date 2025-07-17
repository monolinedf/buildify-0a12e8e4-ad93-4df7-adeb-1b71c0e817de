
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LogoPlaceholder from '../assets/logo-placeholder';
import { ChevronDown, Menu, X, ArrowUp, Search } from 'lucide-react';
import { 
  StudyImage, 
  InternationalImage, 
  ResearchImage, 
  CampusLifeImage, 
  AlumniImage, 
  OurUniImage 
} from '../assets/MenuImages';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bottomDropdown, setBottomDropdown] = useState<string | null>(null);
  const [topMenuHover, setTopMenuHover] = useState<string | null>(null);
  const [scrolledMenuOpen, setScrolledMenuOpen] = useState(false);
  const [scrolledDropdown, setScrolledDropdown] = useState<string | null>(null);
  const [bottomMenuClicked, setBottomMenuClicked] = useState<string | null>(null);
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
      setTopMenuHover(null);
    }
  };

  const toggleScrolledMenu = () => {
    setScrolledMenuOpen(!scrolledMenuOpen);
    if (searchOpen) {
      setSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    if (scrolledMenuOpen) {
      setScrolledMenuOpen(false);
    }
    setTopMenuHover(null);
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
  
  const handleScrolledDropdownHover = (dropdown: string) => {
    setActiveDropdown(dropdown);
    setScrolledDropdown(dropdown);
  };
  
  const handleScrolledDropdownLeave = () => {
    // We don't clear activeDropdown here to keep the dropdown open
    // It will be cleared when mouse leaves both the menu item and dropdown
  };
  
  const handleScrolledMenuAreaLeave = () => {
    setActiveDropdown(null);
    setScrolledDropdown(null);
  };
  
  const handleBottomDropdownHover = (dropdown: string) => {
    if (bottomMenuClicked === dropdown) {
      setBottomDropdown(dropdown);
    }
  };

  const handleBottomDropdownLeave = () => {
    // We don't clear bottomDropdown here to keep the dropdown open
    // It will be cleared when mouse leaves both the menu item and dropdown
  };
  
  const handleBottomMenuAreaLeave = () => {
    setBottomDropdown(null);
    setBottomMenuClicked(null);
  };
  
  const handleBottomMenuClick = (dropdown: string) => {
    if (bottomMenuClicked === dropdown) {
      setBottomMenuClicked(null);
      setBottomDropdown(null);
    } else {
      setBottomMenuClicked(dropdown);
      setBottomDropdown(dropdown);
    }
  };
  
  const handleTopMenuHover = (menu: string) => {
    setTopMenuHover(menu);
    setSearchOpen(false);
  };
  
  const handleTopMenuLeave = () => {
    // We don't clear topMenuHover here to keep the dropdown open
    // It will be cleared when mouse leaves both the menu item and dropdown
  };
  
  const handleTopMenuAreaLeave = () => {
    setTopMenuHover(null);
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

  // Top menu mega dropdowns
  const topMenuContent = {
    'study': {
      column1: {
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
      column2: {
        heading: 'Academic Resources',
        links: [
          'Schools and Faculties',
          'Academic Calendar',
          'Library Services',
          'Student Academic Support',
          'Scholarships',
          'ICT Services'
        ]
      },
      image: <StudyImage />,
      caption: 'Empowering students through quality education and innovative learning experiences'
    },
    'international': {
      column1: {
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
      column2: {
        heading: 'Global Initiatives',
        links: [
          'Exchange Programs',
          'Partner Universities',
          'Study Abroad',
          'International Scholarships',
          'Global Research Collaborations',
          'International Events'
        ]
      },
      image: <InternationalImage />,
      caption: 'Building global connections and fostering cultural exchange'
    },
    'research': {
      column1: {
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
      column2: {
        heading: 'Research Resources',
        links: [
          'Research Centers & Institutes',
          'Publications',
          'Research Grants',
          'Ethics Committee',
          'Research Partnerships',
          'Research Seminars'
        ]
      },
      image: <ResearchImage />,
      caption: 'Advancing knowledge through innovative research and collaboration'
    },
    'campus-life': {
      column1: {
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
      column2: {
        heading: 'Campus Resources',
        links: [
          'Campus Accommodation',
          'Transportation',
          'Security Services',
          'Student Center',
          'Technology Services',
          'Campus Map'
        ]
      },
      image: <CampusLifeImage />,
      caption: 'Creating vibrant campus experiences and fostering student community'
    },
    'alumni': {
      column1: {
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
      column2: {
        heading: 'Get Involved',
        links: [
          'Alumni Events',
          'Volunteer Opportunities',
          'Mentorship Program',
          'Give Back',
          'Career Network',
          'Regional Chapters'
        ]
      },
      image: <AlumniImage />,
      caption: 'Connecting graduates and building lifelong relationships with SINU'
    },
    'our-uni': {
      column1: {
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
      column2: {
        heading: 'Connect with SINU',
        links: [
          'News & Media',
          'Events Calendar',
          'Employment Opportunities',
          'Tender Opportunities',
          'Contact Us',
          'Campus Locations'
        ]
      },
      image: <OurUniImage />,
      caption: 'Shaping the future of education in the Solomon Islands'
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
                  <div 
                    key={item.id}
                    className={`relative ${topMenuHover === item.id ? 'text-[#39c4f1]' : ''}`}
                    onMouseEnter={() => handleTopMenuHover(item.id)}
                  >
                    <Link 
                      to={`/${item.id}`}
                      className={`hover:text-[#39c4f1] transition-colors py-2 block ${topMenuHover === item.id ? 'text-[#39c4f1]' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </div>
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
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        )}

        {/* Second row - always visible when not scrolled */}
        {!scrolled && (
          <>
            {/* Top menu mega dropdown */}
            {topMenuHover && (
              <div 
                className="absolute w-full bg-white shadow-lg z-40"
                onMouseEnter={() => handleTopMenuHover(topMenuHover)}
                onMouseLeave={handleTopMenuAreaLeave}
              >
                <div className="container mx-auto px-4 py-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div>
                      <h3 className="text-[#39c4f1] font-bold text-lg mb-4">
                        {topMenuContent[topMenuHover as keyof typeof topMenuContent].column1.heading}
                      </h3>
                      <ul className="space-y-2">
                        {topMenuContent[topMenuHover as keyof typeof topMenuContent].column1.links.map((link, index) => (
                          <li key={index}>
                            <Link to="#" className="text-[#219ebc] hover:underline flex items-center">
                              <span className="mr-2">•</span> {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Column 2 */}
                    <div>
                      <h3 className="text-[#39c4f1] font-bold text-lg mb-4">
                        {topMenuContent[topMenuHover as keyof typeof topMenuContent].column2.heading}
                      </h3>
                      <ul className="space-y-2">
                        {topMenuContent[topMenuHover as keyof typeof topMenuContent].column2.links.map((link, index) => (
                          <li key={index}>
                            <Link to="#" className="text-[#219ebc] hover:underline flex items-center">
                              <span className="mr-2">•</span> {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Column 3 - Image */}
                    <div className="flex flex-col items-center">
                      <div className="rounded-lg overflow-hidden shadow-md w-full">
                        {topMenuContent[topMenuHover as keyof typeof topMenuContent].image}
                      </div>
                      <p className="text-center text-gray-600 mt-3 italic">
                        {topMenuContent[topMenuHover as keyof typeof topMenuContent].caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
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
                      className={`relative group ${bottomDropdown === item.id ? 'text-[#082952]' : ''}`}
                      onMouseEnter={() => item.hasDropdown && handleBottomDropdownHover(item.id)}
                      onMouseLeave={handleBottomDropdownLeave}
                    >
                      <div className="flex items-center">
                        <Link 
                          to={`/${item.id}`}
                          className={`hover:text-[#082952] transition-colors py-1 ${bottomDropdown === item.id ? 'text-[#082952]' : ''}`}
                        >
                          {item.label}
                        </Link>
                        {item.hasDropdown && (
                          <button 
                            onClick={() => handleBottomMenuClick(item.id)}
                            className="ml-1 p-1 hover:text-[#082952]"
                          >
                            <ChevronDown size={16} />
                          </button>
                        )}
                      </div>
                      
                      {/* Dropdown for bottom menu items */}
                      {item.hasDropdown && bottomDropdown === item.id && (
                        <div 
                          className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[200px] z-50"
                          onMouseEnter={() => handleBottomDropdownHover(item.id)}
                          onMouseLeave={handleBottomMenuAreaLeave}
                        >
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
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && handleScrolledDropdownHover(item.id)}
                    onMouseLeave={handleScrolledDropdownLeave}
                  >
                    <Link 
                      to={`/${item.id}`}
                      className="hover:bg-white hover:text-[#39c4f1] transition-colors py-1 px-3 rounded flex items-center"
                    >
                      {item.label}
                      {item.hasDropdown && <ChevronDown size={16} className="ml-1" />}
                    </Link>
                    
                    {/* Dropdown for scrolled menu items */}
                    {item.hasDropdown && scrolledDropdown === item.id && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-[#082952] shadow-lg rounded-md min-w-[200px] z-50"
                        onMouseEnter={() => handleScrolledDropdownHover(item.id)}
                        onMouseLeave={handleScrolledMenuAreaLeave}
                      >
                        <div className="py-2">
                          {bottomDropdownContent[item.id as keyof typeof bottomDropdownContent].map((link, index) => (
                            <Link 
                              key={index}
                              to="#"
                              className="block px-4 py-2 text-white hover:bg-white hover:text-[#082952] transition-colors"
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
              <div className="flex items-center">
                <button 
                  className={`p-2 rounded-full transition-colors mr-2 ${searchOpen ? 'bg-white text-[#39c4f1]' : 'text-white hover:bg-white hover:text-[#39c4f1]'}`}
                  onClick={toggleSearch}
                >
                  {searchOpen ? <X size={20} /> : <Search size={20} />}
                </button>
                <button 
                  className={`hidden lg:block p-2 rounded-full transition-colors ${scrolledMenuOpen ? 'bg-white text-[#39c4f1]' : 'text-white hover:bg-white hover:text-[#39c4f1]'}`}
                  onClick={toggleScrolledMenu}
                >
                  {scrolledMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <button 
                  className={`lg:hidden p-2 rounded-full transition-colors ${mobileMenuOpen ? 'bg-white text-[#39c4f1]' : 'text-white hover:bg-white hover:text-[#39c4f1]'}`}
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
            
            {/* Scrolled mega menu dropdown */}
            {scrolledMenuOpen && (
              <div 
                className="bg-[#219ebc] text-white w-full absolute z-50 shadow-lg"
                onMouseLeave={() => {
                  setScrolledMenuOpen(false);
                  setActiveDropdown(null);
                }}
              >
                <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Column 1 - Main menu items */}
                  <div className="space-y-2">
                    {topMenuItems.map((item) => (
                      <div 
                        key={item.id}
                        className={`cursor-pointer p-2 rounded flex justify-between items-center ${activeDropdown === item.id ? 'bg-white text-[#39c4f1]' : 'hover:bg-white hover:text-[#39c4f1]'}`}
                        onMouseEnter={() => handleScrolledDropdownHover(item.id)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown size={16} />
                      </div>
                    ))}
                  </div>

                  {/* Columns 2 & 3 - Dynamic content based on active dropdown */}
                  {activeDropdown && topMenuContent[activeDropdown as keyof typeof topMenuContent] && (
                    <>
                      <div className="bg-white p-4 rounded">
                        <h3 className="text-[#39c4f1] font-bold mb-3">
                          {topMenuContent[activeDropdown as keyof typeof topMenuContent].column1.heading}
                        </h3>
                        <ul className="space-y-2">
                          {topMenuContent[activeDropdown as keyof typeof topMenuContent].column1.links.map((link, index) => (
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
                          {topMenuContent[activeDropdown as keyof typeof topMenuContent].column2.heading}
                        </h3>
                        <ul className="space-y-2">
                          {topMenuContent[activeDropdown as keyof typeof topMenuContent].column2.links.map((link, index) => (
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
          </div>
        )}

        {/* Mega menu dropdown for mobile - REMOVED as requested */}
      </header>

      {/* Mobile menu - only for mobile devices */}
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
      
      {/* Mobile menu when scrolled - only for mobile devices */}
      {mobileMenuOpen && scrolled && (
        <div className="lg:hidden fixed inset-0 bg-[#082952] z-40 pt-20 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-4">
              {/* Combined menu items for scrolled mobile view */}
              {[...topMenuItems, ...bottomMenuItems].map((item) => (
                <div key={item.id} className="border-b border-[#219ebc] pb-2">
                  <Link 
                    to={`/${item.id}`}
                    className="block py-2 px-4 text-white hover:bg-[#219ebc] rounded"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                  
                  {'hasDropdown' in item && item.hasDropdown && (
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