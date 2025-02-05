import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Mail, Laptop, Cloud } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Network Defense',
    description: 'AI-driven threat detection and real-time monitoring for comprehensive network security.',
  },
  {
    icon: Mail,
    title: 'Email Security',
    description: 'Advanced phishing prevention and spam filtering to protect your communication channels.',
  },
  {
    icon: Laptop,
    title: 'Endpoint Protection',
    description: 'Complete device security with real-time threat detection and response capabilities.',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Secure cloud environments with continuous compliance monitoring and threat prevention.',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Core Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions powered by cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="card-gradient p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <service.icon className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;