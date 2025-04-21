
import Layout from '../components/layout/Layout';
import { ArrowRight, Brain, Database, Eye, MessageSquare, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-xform-purple-default dark:text-xform-purple-light" />,
      title: "AI Consulting",
      description: "Strategic guidance to help your business identify the best AI opportunities and develop an implementation roadmap.",
      features: [
        "AI readiness assessment",
        "Technology selection guidance",
        "Implementation strategy",
        "ROI analysis",
        "Custom AI roadmap"
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-xform-purple-default dark:text-xform-purple-light" />,
      title: "Custom ML Models",
      description: "Bespoke machine learning solutions designed specifically for your unique business challenges and data environment.",
      features: [
        "Custom model development",
        "Algorithm selection",
        "Model training & optimization",
        "Performance benchmarking",
        "Deployment support"
      ]
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-xform-purple-default dark:text-xform-purple-light" />,
      title: "NLP & Chatbots",
      description: "Natural language processing and conversational AI that enhances customer interactions and automates support.",
      features: [
        "Custom chatbot development",
        "Intent recognition",
        "Sentiment analysis",
        "Multilingual support",
        "Integration with existing systems"
      ]
    },
    {
      icon: <PieChart className="h-12 w-12 text-xform-purple-default dark:text-xform-purple-light" />,
      title: "Predictive Analytics",
      description: "Data-driven forecasting that helps you anticipate market trends and make better business decisions.",
      features: [
        "Predictive modeling",
        "Time-series forecasting",
        "Customer behavior analysis",
        "Risk assessment",
        "Anomaly detection"
      ]
    },
    {
      icon: <Eye className="h-12 w-12 text-xform-purple-default dark:text-xform-purple-light" />,
      title: "Computer Vision",
      description: "Advanced image and video analysis capabilities that automate visual inspection and enhance object recognition.",
      features: [
        "Object detection & tracking",
        "Image classification",
        "Facial recognition",
        "Quality control automation",
        "Medical imaging analysis"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-xform-blue-dark dark:bg-gray-900 text-white py-20 md:py-32 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-inter font-bold mb-6 animate-fade-in">Our AI Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Cutting-edge artificial intelligence services to transform your business
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 md:py-24 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`animate-fade-in ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="mb-6 transform transition-transform hover:scale-110 duration-300">{service.icon}</div>
                  <h2 className="text-3xl font-inter font-bold text-xform-blue-dark dark:text-white mb-4 transition-colors duration-300">{service.title}</h2>
                  <p className="text-lg text-xform-gray-default dark:text-gray-300 mb-6 transition-colors duration-300">{service.description}</p>
                  
                  <h3 className="text-xl font-medium text-xform-blue-default dark:text-xform-blue-light mb-4 transition-colors duration-300">Key Features</h3>
                  <ul className="space-y-3 mb-8 stagger-animate">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start group">
                        <div className="mr-3 mt-1 text-xform-purple-default dark:text-xform-purple-light transition-colors duration-300 group-hover:scale-110 transition-transform duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xform-gray-default dark:text-gray-300 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="bg-xform-purple-default hover:bg-xform-purple-dark dark:bg-xform-purple-light dark:hover:bg-xform-purple-dark text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-flex items-center btn-hover"
                  >
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                
                <div className={`bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center p-10 h-64 md:h-auto animate-fade-in card-hover ${index % 2 === 1 ? 'md:order-1' : ''}`} style={{ animationDelay: "0.2s" }}>
                  <div className="text-center floating">
                    <div className="text-6xl text-xform-purple-light dark:text-xform-purple-default mb-4 transition-colors duration-300">{index + 1}</div>
                    <div className="text-xform-gray-default dark:text-gray-300 font-medium transition-colors duration-300">Solution</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-xform-blue-dark dark:text-white mb-4 transition-colors duration-300">Industry Solutions</h2>
            <p className="text-lg text-xform-gray-default dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Our AI expertise spans across industries, delivering custom solutions for unique challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animate">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 animate-fade-in hover-lift hover-glow">
              <h3 className="text-xl font-inter font-semibold mb-4 text-xform-blue-dark dark:text-white transition-colors duration-300">Financial Services</h3>
              <p className="text-xform-gray-default dark:text-gray-300 mb-4 transition-colors duration-300">
                AI-powered fraud detection, risk assessment, algorithmic trading, and personalized financial recommendations.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 animate-fade-in hover-lift hover-glow" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-inter font-semibold mb-4 text-xform-blue-dark dark:text-white transition-colors duration-300">Healthcare</h3>
              <p className="text-xform-gray-default dark:text-gray-300 mb-4 transition-colors duration-300">
                Medical imaging analysis, predictive diagnostics, patient care optimization, and drug discovery acceleration.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 animate-fade-in hover-lift hover-glow" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-inter font-semibold mb-4 text-xform-blue-dark dark:text-white transition-colors duration-300">Manufacturing</h3>
              <p className="text-xform-gray-default dark:text-gray-300 mb-4 transition-colors duration-300">
                Predictive maintenance, quality control automation, supply chain optimization, and production forecasting.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 animate-fade-in hover-lift hover-glow" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-inter font-semibold mb-4 text-xform-blue-dark dark:text-white transition-colors duration-300">Retail</h3>
              <p className="text-xform-gray-default dark:text-gray-300 mb-4 transition-colors duration-300">
                Demand forecasting, inventory optimization, personalized recommendations, and customer behavior analysis.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 animate-fade-in hover-lift hover-glow" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-inter font-semibold mb-4 text-xform-blue-dark dark:text-white transition-colors duration-300">Technology</h3>
              <p className="text-xform-gray-default dark:text-gray-300 mb-4 transition-colors duration-300">
                Natural language processing, computer vision integration, recommendation systems, and AI product development.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 animate-fade-in hover-lift hover-glow" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-xl font-inter font-semibold mb-4 text-xform-blue-dark dark:text-white transition-colors duration-300">Energy</h3>
              <p className="text-xform-gray-default dark:text-gray-300 mb-4 transition-colors duration-300">
                Energy consumption forecasting, grid optimization, predictive maintenance for equipment, and renewable energy planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-xform-blue-light to-xform-purple-light dark:from-xform-blue-dark dark:to-xform-purple-dark text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-inter font-bold mb-8">Ready to Leverage the Power of AI?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a consultation and discover how our AI solutions can transform your business.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-xform-purple-dark hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 font-medium py-3 px-8 rounded-md transition duration-300 inline-flex items-center btn-hover"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
