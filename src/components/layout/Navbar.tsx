
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xform-blue-dark font-inter font-bold text-2xl">Xform</span>
              <span className="text-xform-purple-default font-inter font-bold text-2xl">AI</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-inter text-xform-gray-dark hover:text-xform-blue-default transition duration-300">Home</Link>
            <Link to="/about" className="font-inter text-xform-gray-dark hover:text-xform-blue-default transition duration-300">About Us</Link>
            <Link to="/services" className="font-inter text-xform-gray-dark hover:text-xform-blue-default transition duration-300">Services</Link>
            <Link to="/blog" className="font-inter text-xform-gray-dark hover:text-xform-blue-default transition duration-300">AI Research</Link>
            <Link to="/careers" className="font-inter text-xform-gray-dark hover:text-xform-blue-default transition duration-300">Careers</Link>
            <Link to="/contact" className="font-inter text-xform-gray-dark hover:text-xform-blue-default transition duration-300">Contact Us</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-xform-gray-dark hover:text-xform-blue-default focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-xform-gray-dark hover:text-xform-blue-default"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-xform-gray-dark hover:text-xform-blue-default"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-xform-gray-dark hover:text-xform-blue-default"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-xform-gray-dark hover:text-xform-blue-default"
              onClick={toggleMenu}
            >
              AI Research
            </Link>
            <Link
              to="/careers"
              className="block px-3 py-2 rounded-md text-base font-medium text-xform-gray-dark hover:text-xform-blue-default"
              onClick={toggleMenu}
            >
              Careers
            </Link>
            
            <Link 
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-xform-gray-dark hover:text-xform-blue-default"
             > 
              Contact Us
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
