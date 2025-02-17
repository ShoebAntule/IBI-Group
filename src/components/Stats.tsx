import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Shield, Users, Clock, ShieldCheck } from 'lucide-react';

const stats = [
  {
    icon: ShieldCheck,
    value: 99.9,
    label: 'Threat Detection Rate',
    suffix: '%',
  },
  {
    icon: Users,
    value: 500,
    label: 'Enterprise Clients',
    suffix: '+',
  },
  {
    icon: Clock,
    value: 24,
    label: 'Monitoring',
    suffix: '/7',
  },
  {
    icon: Shield,
    value: 1,
    label: 'Threats Prevented',
    suffix: 'M+',
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }} // Start slightly lower and invisible
              animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
              className="card-gradient p-6 rounded-xl text-center transform transition-all duration-300"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover animation with Framer Motion
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-blue-400" />
              </div>
              <div className="text-3xl font-bold mb-2">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
