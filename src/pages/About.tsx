import Layout from '../components/layout/Layout';
import { Award, Briefcase, CheckCircle, TrendingUp } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <TrendingUp className="h-8 w-8 text-xform-purple-default" />,
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI, constantly exploring new approaches and technologies."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-xform-purple-default" />,
      title: "Excellence",
      description: "We are committed to excellence in every solution we build, setting the highest standards for our work."
    },
    {
      icon: <Award className="h-8 w-8 text-xform-purple-default" />,
      title: "Integrity",
      description: "We believe in ethical AI development and transparent practices that build trust with our clients."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-xform-purple-default" />,
      title: "Collaboration",
      description: "We work closely with our clients, treating their challenges as our own to ensure mutual success."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Emma Foster",
      role: "CEO & Chief AI Scientist",
      bio: "Former research lead at DeepMind with over 15 years of experience in machine learning and AI applications."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Previously led engineering teams at Google AI and has contributed to multiple breakthrough papers on neural networks."
    },
    {
      name: "Sophia Rodriguez",
      role: "VP of AI Research",
      bio: "PhD in Computer Science from Stanford, specializing in natural language processing and computational linguistics."
    },
    {
      name: "James Wilson",
      role: "Director of Business Development",
      bio: "MBA from Harvard with extensive experience helping enterprises implement AI strategies across industries."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-xform-blue-dark text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-inter font-bold mb-6 animate-fade-in text-gradient">About XformAI</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Pioneering the future through innovative AI solutions and research
          </p>
        </div>
      </section>

      {/* Mission & Vision Section with Glassmorphism */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="glass-morphism p-8 rounded-xl animate-fade-in hover-lift">
              <h2 className="text-3xl font-inter font-bold text-gradient mb-6">Our Mission</h2>
              <p className="text-lg text-foreground/80 mb-4">
                At XformAI, our mission is to democratize artificial intelligence by creating accessible, 
                powerful, and ethical AI solutions that solve real-world problems for businesses and organizations of all sizes.
              </p>
              <p className="text-lg text-foreground/80">
                We believe that AI should be a force for positive transformation, enhancing human capabilities 
                rather than replacing them, and creating new opportunities for innovation and growth.
              </p>
            </div>
            
            <div className="glass-morphism p-8 rounded-xl animate-fade-in hover-lift" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-inter font-bold text-gradient mb-6">Our Vision</h2>
              <p className="text-lg text-foreground/80 mb-4">
                We envision a future where AI is seamlessly integrated into every aspect of business and society, 
                working alongside humans to solve the most pressing challenges of our time.
              </p>
              <p className="text-lg text-foreground/80">
                Our vision is to be at the forefront of this AI revolution, driving innovation through 
                our research while building practical solutions that deliver immediate value to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section with Enhanced Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-gradient mb-4">Our Core Values</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              These principles guide everything we do, from how we develop our AI models to how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animate">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="glass-morphism rounded-lg p-8 hover-lift transition duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-inter font-semibold mb-3 text-gradient">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section with Modern Cards
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-gradient mb-4">Our Leadership Team</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Meet the experts and visionaries behind XformAI's groundbreaking work in artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animate">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="glass-morphism rounded-lg overflow-hidden hover-lift"
              >
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-xform-purple-light to-xform-blue-light rounded-full mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-inter font-semibold mb-1 text-gradient">{member.name}</h3>
                  <p className="text-xform-purple-default font-medium mb-4">{member.role}</p>
                  <p className="text-foreground/80">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose XformAI Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-xform-blue-dark to-xform-purple-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold mb-4">Why Choose XformAI?</h2>
            <p className="text-lg max-w-3xl mx-auto">
              What makes our AI solutions different from the rest
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 animate-fade-in">
              <h3 className="text-xl font-inter font-semibold mb-4">Research-Backed Solutions</h3>
              <p className="text-gray-200">
                Our solutions are built on cutting-edge research, ensuring you always benefit from the latest advancements in AI.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-inter font-semibold mb-4">Customized Approach</h3>
              <p className="text-gray-200">
                We don't believe in one-size-fits-all. Every solution is tailored to your specific business needs and challenges.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-inter font-semibold mb-4">Ethical AI Development</h3>
              <p className="text-gray-200">
                We build AI with integrity, prioritizing fairness, transparency, and responsibility in everything we create.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
