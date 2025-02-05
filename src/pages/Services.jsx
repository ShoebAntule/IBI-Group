import { motion } from 'framer-motion';
import { Shield, Mail, Laptop, Cloud, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Network Defense',
    description: 'AI-driven threat detection and real-time monitoring for comprehensive network security.',
    features: [
      'Real-time threat monitoring',
      'AI-powered anomaly detection',
      'Network traffic analysis',
      'Automated incident response'
    ]
  },
  {
    icon: Mail,
    title: 'Email Security',
    description: 'Advanced phishing prevention and spam filtering to protect your communication channels.',
    features: [
      'Phishing protection',
      'Spam filtering',
      'Email encryption',
      'Data loss prevention'
    ]
  },
  {
    icon: Laptop,
    title: 'Endpoint Protection',
    description: 'Complete device security with real-time threat detection and response capabilities.',
    features: [
      'Device management',
      'Malware protection',
      'Access control',
      'Security updates'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Secure cloud environments with continuous compliance monitoring and threat prevention.',
    features: [
      'Cloud infrastructure security',
      'Compliance monitoring',
      'Data protection',
      'Access management'
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive cybersecurity solutions powered by cutting-edge AI technology
            to protect your business from evolving threats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card-gradient p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <service.icon className="w-12 h-12 text-blue-400 mr-4" />
                <h2 className="text-2xl font-semibold">{service.title}</h2>
              </div>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <ArrowRight className="w-5 h-5 text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center space-x-2 transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;