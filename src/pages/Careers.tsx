import Layout from '../components/layout/Layout';
import { ArrowRight, Award, Clock, DollarSign, Globe, Heart, Laptop, Brain, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-xform-purple-default" />,
      title: "Competitive Compensation",
      description: "Industry-leading salaries, equity packages, and performance bonuses."
    },
    {
      icon: <Heart className="h-8 w-8 text-xform-purple-default" />,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage for you and your dependents."
    },
    {
      icon: <Clock className="h-8 w-8 text-xform-purple-default" />,
      title: "Flexible Work",
      description: "Remote-friendly environment with flexible working hours to suit your lifestyle."
    },
    {
      icon: <Award className="h-8 w-8 text-xform-purple-default" />,
      title: "Professional Growth",
      description: "Continuous learning, conference budgets, and career advancement opportunities."
    },
    {
      icon: <Globe className="h-8 w-8 text-xform-purple-default" />,
      title: "Global Team",
      description: "Work with talented colleagues from diverse backgrounds around the world."
    },
    {
      icon: <Laptop className="h-8 w-8 text-xform-purple-default" />,
      title: "Top Equipment",
      description: "Latest tech equipment and software to help you do your best work."
    }
  ];

  const openPositions = [
    //{
      //title: "Senior Machine Learning Engineer",
      //department: "Engineering",
      //location: "San Francisco / Remote",
      //type: "Full-time",
      //tags: ["AI", "ML", "Python"]
    //}
  ];

  return (
    <Layout>
      <section className="relative bg-gradient-to-r from-xform-blue-dark to-xform-purple-dark text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-xform-blue-dark/80 to-xform-purple-dark/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-inter font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Build the future of AI with the brightest minds in the industry
          </p>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-20 bg-gradient-to-b from-xform-purple-light to-transparent animate-pulse-slow" />
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in space-y-6">
              <h2 className="text-3xl font-inter font-bold bg-gradient-to-r from-xform-blue-dark to-xform-purple-default bg-clip-text text-transparent mb-6">
                Life at XformAI
              </h2>
              <p className="text-lg text-xform-gray-default mb-6">
                At XformAI, we're building cutting-edge AI solutions that transform industries. Our team 
                consists of passionate researchers, engineers, and business professionals who are excited 
                about pushing the boundaries of what's possible with artificial intelligence.
              </p>
              <p className="text-lg text-xform-gray-default mb-6">
                We believe in fostering an inclusive environment where diverse perspectives drive innovation. 
                Our collaborative culture encourages knowledge sharing, continuous learning, and personal growth, 
                making XformAI an exceptional place to develop your career.
              </p>
              <p className="text-lg text-xform-gray-default">
                If you're excited about creating AI technologies that make a real-world impact, we'd love to have you join us!
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-xform-purple-light to-xform-blue-light rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <Card className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="text-7xl font-bold bg-gradient-to-r from-xform-blue-dark to-xform-purple-default bg-clip-text text-transparent animate-pulse-slow">
                      <span>Xform</span>AI
                    </div>
                    <p className="text-xform-gray-default italic">
                      "We're building tomorrow's technology today, and we need exceptional talent to help us get there."
                    </p>
                    <div className="flex items-center justify-center space-x-2 pt-4">
                      <Star className="h-5 w-5 text-yellow-500 animate-pulse" />
                      <p className="mt-4 text-xform-gray-default font-medium">Dr. Emma Foster, CEO</p>
                      <Star className="h-5 w-5 text-yellow-500 animate-pulse" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold bg-gradient-to-r from-xform-blue-dark to-xform-purple-default bg-clip-text text-transparent mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-xform-gray-default max-w-3xl mx-auto">
              We take care of our team so they can focus on what matters: creating amazing AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="group hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90"
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-xform-purple-light/5 to-xform-blue-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300">{benefit.icon}</div>
                    <h3 className="text-xl font-inter font-semibold mb-3 bg-gradient-to-r from-xform-blue-dark to-xform-purple-default bg-clip-text text-transparent">
                      {benefit.title}
                    </h3>
                    <p className="text-xform-gray-default dark:text-gray-300">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold bg-gradient-to-r from-xform-blue-dark to-xform-purple-default bg-clip-text text-transparent mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-xform-gray-default max-w-3xl mx-auto">
              Join our team and help build the future of artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card 
                key={index}
                className="group hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90"
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-xform-purple-light/5 to-xform-blue-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-inter font-semibold mb-3 bg-gradient-to-r from-xform-blue-dark to-xform-purple-default bg-clip-text text-transparent">
                      {position.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-xform-gray-light">Department</p>
                        <p className="text-xform-gray-default">{position.department}</p>
                      </div>
                      <div>
                        <p className="text-sm text-xform-gray-light">Location</p>
                        <p className="text-xform-gray-default">{position.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-xform-gray-light">Type</p>
                        <p className="text-xform-gray-default">{position.type}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {position.tags?.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs rounded-full bg-xform-purple-light/10 text-xform-purple-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-xform-purple-default hover:text-xform-purple-dark font-medium inline-flex items-center group">
                        <span className="mr-2">View Job Details</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-xform-blue-light to-xform-purple-light text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-inter font-bold mb-8">Don't See a Position That Fits?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and let us know how you can contribute to our mission.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-xform-purple-dark hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center hover:-translate-y-1 hover:shadow-lg group"
          >
            <span>Contact Us</span>
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
