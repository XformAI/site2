import Layout from '../components/layout/Layout';
import { Mail, MapPin, Phone } from 'lucide-react';
import XformMap from '../components/GoogleMap';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-xform-blue-dark dark:bg-gray-900 text-white py-20 md:py-32 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-inter font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Let's discuss how our AI solutions can transform your business
          </p>
        </div>
      </section>

      {/* Contact Info Section - Now vertically aligned */}
      <section className="py-16 md:py-24 transition-colors duration-300 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl text-center animate-fade-in">
              <h2 className="text-3xl font-inter font-bold text-xform-blue-dark dark:text-white mb-12 transition-colors duration-300">Get in Touch</h2>
              
              <div className="space-y-10">
              <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
              <div className="flex flex-col items-center text-center group flex-1 px-4">
                <div className="flex-shrink-0 bg-xform-purple-light dark:bg-xform-purple-dark rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-xform-blue-dark dark:text-white mb-2 transition-colors duration-300">Email Us</h3>
                <p className="text-xform-gray-default dark:text-gray-300 mb-1 transition-colors duration-300">For general inquiries:</p>
                <a href="mailto:contact@xformai.com" className="text-xform-purple-default hover:text-xform-purple-dark dark:text-xform-purple-light dark:hover:text-white transition duration-300">
                  contact@xformai.com
                </a>
                <p className="text-xform-gray-default dark:text-gray-300 mt-2 mb-1 transition-colors duration-300">For partnership opportunities:</p>
                <a href="mailto:partnerships@xformai.com" className="text-xform-purple-default hover:text-xform-purple-dark dark:text-xform-purple-light dark:hover:text-white transition duration-300">
                  partnerships@xformai.com
                </a>
              </div>

              <div className="flex flex-col items-center text-center group flex-1 px-4">
                <div className="flex-shrink-0 bg-xform-purple-light dark:bg-xform-purple-dark rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-xform-blue-dark dark:text-white mb-2 transition-colors duration-300">Call Us</h3>
                <p className="text-xform-gray-default dark:text-gray-300 mb-1 transition-colors duration-300">Main Office:</p>
                <a href="tel:+1-555-123-4567" className="text-xform-purple-default hover:text-xform-purple-dark dark:text-xform-purple-light dark:hover:text-white transition duration-300">
                  +1 (555) 123-4567
                </a>
                <p className="text-xform-gray-default dark:text-gray-300 mt-2 mb-1 transition-colors duration-300">Support Team:</p>
                <a href="tel:+1-555-987-6543" className="text-xform-purple-default hover:text-xform-purple-dark dark:text-xform-purple-light dark:hover:text-white transition duration-300">
                  +1 (555) 987-6543
                </a>
              </div>

              <div className="flex flex-col items-center text-center group flex-1 px-4">
                <div className="flex-shrink-0 bg-xform-purple-light dark:bg-xform-purple-dark rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-xform-blue-dark dark:text-white mb-2 transition-colors duration-300">Visit Us</h3>
                <p className="text-xform-gray-default dark:text-gray-300 transition-colors duration-300">
                  Bhubaneswar<br />
                  Odisha<br />
                  India<br />
                  751024
                </p>
              </div>
            </div>
              </div>   
              {/* Social Media Links */}
              <div className="mt-16">
                <h3 className="text-xl font-medium text-xform-blue-dark dark:text-white mb-6 transition-colors duration-300">Connect With Us</h3>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://inkedin.com/company/xformai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-xform-blue-dark dark:bg-xform-blue-light text-white hover:bg-xform-blue-light dark:hover:bg-xform-blue-dark rounded-full p-3 transition duration-300 transform hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
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
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-xform-blue-dark dark:bg-xform-blue-light text-white hover:bg-xform-blue-light dark:hover:bg-xform-blue-dark rounded-full p-3 transition duration-300 transform hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-inter font-bold text-xform-blue-dark dark:text-white mb-8 text-center transition-colors duration-300">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.01] transition-all duration-300">
            <XformMap center={{ lat: 20.355765, lng: 85.819244 }} zoom={15} className="h-96 w-full" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;