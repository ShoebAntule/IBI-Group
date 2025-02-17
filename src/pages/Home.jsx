import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import the hook for detecting visibility
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';

const Home = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: false,  // Trigger every time it comes into view
    threshold: 0.5,      // Trigger when 50% of the element is visible
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,  
    threshold: 0.5,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <main>
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 20 }}  // Start hidden and slightly below
        animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}  // Trigger animation when visible
        transition={{ duration: 0.6 }}  // Duration of the animation
      >
        <Hero />
      </motion.div>

      {/* Stats Section */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 20 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Stats />
      </motion.div>

      {/* Services Section */}
      <motion.div
        ref={servicesRef}
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 20 }}  
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Services />
      </motion.div>
    </main>
  );
};

export default Home;
