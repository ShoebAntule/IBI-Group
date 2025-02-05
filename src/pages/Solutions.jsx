import { motion } from 'framer-motion';
import { Shield, Lock, Search, FileCheck } from 'lucide-react';

const solutions = [
  {
    icon: Shield,
    title: 'Integrated Security Solutions',
    description: 'Comprehensive security integration across your entire infrastructure.',
  },
  {
    icon: Search,
    title: 'Cyber Forensics',
    description: 'Advanced digital forensics and incident response capabilities.',
  },
  {
    icon: Lock,
    title: 'Risk Consulting',
    description: 'Expert guidance on security strategy and risk management.',
  },
  {
    icon: FileCheck,
    title: 'Compliance Management',
    description: 'Ensure adherence to industry standards and regulations.',
  },
];

const SolutionsPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cutting-edge cybersecurity solutions designed to protect your business
            in an ever-evolving threat landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card-gradient p-6 rounded-xl"
            >
              <solution.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;