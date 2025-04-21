
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Calendar, Search, Tag, User } from 'lucide-react';


const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'NLP', 'Computer Vision', 'Ethics', 'Machine Learning', 'Research'];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Large Language Models",
      excerpt: "Exploring how the next generation of LLMs will revolutionize human-computer interaction and knowledge work.",
      date: "April 10, 2025",
      author: "Jeevan",
      category: "NLP",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      tags: ["LLM", "GPT", "NLP"]
    },
    {
      id: 2,
      title: "Advances in Multimodal AI Systems",
      excerpt: "How combining vision, language, and audio in AI systems is creating more capable and versatile models.",
      date: "April 5, 2025",
      author: "Amlan",
      category: "Computer Vision",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      tags: ["Multimodal", "Vision", "Audio"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeFilter === 'All' || post.category === activeFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-xform-blue-dark text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-inter font-bold mb-6 animate-fade-in">AI Research Hub</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Exploring the cutting-edge of artificial intelligence and its applications
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-xform-purple-light focus:border-xform-purple-light"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    activeFilter === category 
                      ? 'bg-xform-purple-default text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="inline-block px-3 py-1 bg-xform-purple-light bg-opacity-20 text-xform-purple-dark text-sm rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center ml-auto text-xform-gray-light text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-inter font-semibold mb-3 text-xform-blue-dark">{post.title}</h3>
                    <p className="text-xform-gray-default mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <div key={i} className="flex items-center text-xs text-xform-gray-default bg-gray-100 px-2 py-1 rounded">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center border-t pt-4">
                      <div className="flex items-center">
                        <div className="bg-xform-purple-light rounded-full h-8 w-8 flex items-center justify-center text-white font-bold text-sm">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="ml-2 text-sm text-xform-gray-default">{post.author}</span>
                      </div>
                      <button className="ml-auto text-xform-purple-default hover:text-xform-purple-dark font-medium text-sm">
                        Read Article
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-inter font-medium text-xform-gray-default mb-2">No articles found</h3>
              <p className="text-xform-gray-light">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-xform-blue-dark to-xform-purple-dark rounded-2xl text-white p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-inter font-bold mb-4">Stay Updated on AI Advancements</h2>
                <p className="text-gray-200 mb-4">
                  Subscribe to our newsletter to receive the latest research, insights, and industry news straight to your inbox.
                </p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-800"
                  />
                  <button 
                    type="submit" 
                    className="bg-xform-purple-default hover:bg-xform-purple-light text-white font-medium py-3 px-6 rounded-md transition duration-300"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-gray-300 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Blog;
