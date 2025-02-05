import { motion } from 'framer-motion';

const clients = [
  {
    name: 'Tech Corp',
    testimonial: 'IBI has transformed our security infrastructure with their cutting-edge solutions.',
    author: 'John Smith',
    position: 'CTO',
  },
  {
    name: 'Global Finance',
    testimonial: 'The level of protection and service we receive from IBI is unmatched.',
    author: 'Sarah Johnson',
    position: 'CISO',
  },
  {
    name: 'Healthcare Plus',
    testimonial: 'IBI helps us maintain the highest level of security for sensitive patient data.',
    author: 'Michael Brown',
    position: 'Security Director',
  },
];

const ClientelePage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Clients</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Trusted by leading organizations across industries to provide
            state-of-the-art cybersecurity solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card-gradient p-6 rounded-xl"
            >
              <blockquote className="text-gray-300 mb-4">
                "{client.testimonial}"
              </blockquote>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold">{client.author}</p>
                <p className="text-gray-400 text-sm">
                  {client.position} at {client.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientelePage;