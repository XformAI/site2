import Layout from '../components/layout/Layout';
import { ArrowRight, Brain, Database, MessageSquare, PieChart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: <Brain className="h-10 w-10 text-xform-purple-default" />,
      title: "AI Consulting",
      description: "Strategic guidance for integrating AI into your business operations and product development."
    },
    {
      icon: <Database className="h-10 w-10 text-xform-purple-default" />,
      title: "Custom ML Models",
      description: "Bespoke machine learning solutions tailored to your specific business challenges and goals."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-xform-purple-default" />,
      title: "NLP & Chatbots",
      description: "Advanced natural language processing and conversational AI for superior customer interactions."
    },
    {
      icon: <PieChart className="h-10 w-10 text-xform-purple-default" />,
      title: "Predictive Analytics",
      description: "Data-driven forecasting to anticipate market trends and optimize business decisions."
    }
  ];

  const blogPosts = [
    {
      title: "The Future of Large Language Models",
      excerpt: "Exploring how the next generation of LLMs will revolutionize human-computer interaction and knowledge work.",
      date: "April 10, 2025",
      author: "Dr. Alex Chen",
      category: "NLP"
    },
    {
      title: "Advances in Multimodal AI Systems",
      excerpt: "How combining vision, language, and audio in AI systems is creating more capable and versatile models.",
      date: "April 5, 2025",
      author: "Maya Johnson",
      category: "Vision"
    },
    {
      title: "Ethical Considerations in AI Deployment",
      excerpt: "A framework for responsible AI implementation that balances innovation with ethical safeguards.",
      date: "March 28, 2025",
      author: "Dr. Sam Williams",
      category: "Ethics"
    }
  ];

  return (
    <Layout>
      <section className="relative bg-gradient-to-r from-xform-blue-dark to-xform-purple-dark text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] animate-pulse-slow opacity-30" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-xform-purple/20 rounded-full blur-xl animate-float" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-xform-blue-light/20 rounded-full blur-xl animate-floating" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold animate-fade-in text-white">
                Powering the Future of Business with AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 animate-fadeInUp glass-morphism p-4 rounded-lg backdrop-blur-sm">
                Custom AI solutions + Real-time research updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <Link 
                  to="/contact" 
                  className="glass-morphism hover:bg-white/20 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center group hover:-translate-y-1 hover:shadow-lg hover:shadow-xform-purple/20"
                >
                  Talk to Us
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  to="/blog" 
                  className="glass-morphism hover:bg-white/20 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:shadow-xform-blue-light/20"
                >
                  Explore Our AI Research
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-xform-purple/20 to-xform-blue-light/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="relative animate-float">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto drop-shadow-[0_0_35px_rgba(139,92,246,0.3)] hover:scale-105 transition-all duration-500">
                  <path fill="#9F7AEA" d="M45.7,-72.8C59.9,-66.2,72.6,-55.1,80.2,-41C87.8,-26.8,90.2,-9.6,87.8,6.9C85.3,23.5,78,39.3,67.4,51.4C56.8,63.5,42.9,71.8,28.3,75.7C13.6,79.6,-1.7,79.1,-17.5,76.3C-33.2,73.6,-49.4,68.6,-60.6,58.3C-71.7,48,-77.9,32.4,-80.8,16.1C-83.7,-0.2,-83.4,-17.2,-77.3,-31.1C-71.2,-45,-59.3,-55.9,-45.6,-62.9C-31.9,-69.9,-16,-72.9,0.4,-73.6C16.8,-74.2,33.5,-72.3,45.7,-72.8Z" className="transition-all duration-300 hover:scale-105" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="font-bold text-4xl font-inter mb-2 text-white animate-pulse-fast">XformAI</div>
                    <div className="text-lg animate-fade-in">Transforming Tomorrow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-r from-xform-blue-dark to-xform-purple-dark text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg- bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] animate-pulse-slow opacity-30" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-xform-purple/20 rounded-full blur-xl animate-float" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-xform-blue-light/20 rounded-full blur-xl animate-floating" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-white mb-4">What We Do</h2>
            <p className="text-lg text-xform-gray-default max-w-3xl mx-auto">
              We deliver cutting-edge AI solutions to help businesses automate processes, 
              gain insights from data, and create exceptional customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="rounded-xl p-6 transition-all duration-500 animate-fadeInUp hover:shadow-xl hover:-translate-y-2 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`,
                  backgroundColor: 'rgba(0, 0, 0, 0.77)', // light glass
                  backgroundBlendMode: 'overlay',
                  border: '1px solid rgba(255, 3, 3, 0.99)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem'
                }}
              >
                <div className="mb-4 transform transition-transform hover:scale-110 duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-inter font-semibold mb-3 text-gradient">{service.title}</h3>
                <p className="text-foreground/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="relative bg-gradient-to-r from-xform-blue-dark to-xform-purple-dark text-white py-20 md:py-32 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-xform-black-dark mb-4">Who We Work With</h2>
            <p className="text-lg text-xform-gray-default max-w-3xl mx-auto">
              Trusted by innovative companies across industries to deliver transformative AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-6 bg-gray-100 rounded-md h-24 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-xform-gray-light font-bold text-xl">LOGO {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className="relative bg-gradient-to-r from-xform-blue-dark to-xform-purple-dark text-white py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-inter font-bold mb-8">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Let's collaborate to explore how our AI solutions can drive innovation and growth for your organization.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-xform-purple-dark hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300 inline-flex items-center"
          >
            Let's Talk
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
