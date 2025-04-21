
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-xform-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-white font-inter font-bold text-2xl">Xform</span>
              <span className="text-xform-purple-light font-inter font-bold text-2xl">AI</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Transforming Tomorrow with Artificial Intelligence
            </p>
            <div className="flex space-x-4">
           
              <a
              href="https://huggingface.co/XformAI-india"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
              >
              <img
                src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
                alt="Hugging Face"
                className="w-5 h-5 text-gray-300 hover:opacity-80"
              />
              </a>

              <a href="https://inkedin.com/company/xformai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/XformAI" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition duration-300">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition duration-300">AI Consulting</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition duration-300">Custom ML Models</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition duration-300">NLP & Chatbots</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition duration-300">Predictive Analytics</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition duration-300">Terms of Service</Link></li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Contact</h3>
              <p className="text-sm text-gray-300">contact@xformai.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} XformAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
