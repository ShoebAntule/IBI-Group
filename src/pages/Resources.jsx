import { motion } from 'framer-motion';
import { FileText, Video, Download } from 'lucide-react';

const resources = [
  {
    type: 'Whitepaper',
    title: 'The Future of AI in Cybersecurity',
    description: 'Explore how artificial intelligence is revolutionizing cyber defense.',
    icon: FileText,
  },
  {
    type: 'Webinar',
    title: 'Advanced Threat Detection',
    description: 'Learn about modern approaches to identifying and preventing cyber threats.',
    icon: Video,
  },
  {
    type: 'Report',
    title: 'Cybersecurity Trends 2025',
    description: 'Comprehensive analysis of emerging security challenges and solutions.',
    icon: Download,
  },
];

const ResourcesPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Access our latest research, whitepapers, and webinars to stay ahead
            in cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card-gradient p-6 rounded-xl"
            >
              <resource.icon className="w-8 h-8 text-blue-400 mb-4" />
              <span className="text-sm text-blue-400">{resource.type}</span>
              <h3 className="text-xl font-semibold my-2">{resource.title}</h3>
              <p className="text-gray-400 mb-4">{resource.description}</p>
              <button className="text-blue-400 hover:text-blue-300 flex items-center space-x-2">
                <span>Download</span>
                <Download className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;