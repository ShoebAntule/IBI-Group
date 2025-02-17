import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Rise of AI-Powered Cybersecurity',
    excerpt: 'Explore how artificial intelligence is transforming the landscape of cybersecurity...',
    date: 'March 1, 2024',
    author: 'John Smith',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
  },
  {
    title: 'Zero Trust Architecture: A Modern Approach',
    excerpt: 'Understanding the principles and implementation of Zero Trust security...',
    date: 'February 28, 2024',
    author: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
  },
  {
    title: 'Protecting Against Ransomware in 2024',
    excerpt: 'Latest strategies and best practices for ransomware protection...',
    date: 'February 25, 2024',
    author: 'Michael Brown',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
  },
];

const BlogPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger every time the element comes into view
    threshold: 0.1, // Trigger when 50% of the element is visible
  });

  return (
    <div className="pt-16">
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'} // Animate based on visibility
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        {/* Page Header Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay informed with the latest insights, trends, and updates in cybersecurity.
          </p>
        </motion.div>

        {/* Posts Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: index * 0.2 }}
              ref={ref}
              className="card-gradient rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <button className="text-blue-400 hover:text-blue-300 flex items-center">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPage;
