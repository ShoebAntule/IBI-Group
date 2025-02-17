import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import framer-motion for animations
import { useInView } from 'react-intersection-observer';  // Import the intersection observer hook
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ServicesPage from './pages/Services';
import SolutionsPage from './pages/Solutions';
import ClientelePage from './pages/Clientele';
import ResourcesPage from './pages/Resources';
import LibraryPage from './pages/Library';
import BlogPage from './pages/Blog';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Footer from './components/Footer';

// Section component with scale animation
const Section = ({ id, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger on every view (not just the first time)
    threshold: 0.3, // Trigger when 30% of the element is visible (you can adjust this)
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }} // Start small (scale 0.8) and invisible
      animate={{
        opacity: inView ? 1 : 0,  // Fade in when in view
        scale: inView ? 1 : 0.8,   // Scale to original size when in view, shrink when out of view
      }}
      transition={{ duration: 0.8, ease: 'easeInOut' }} // Smooth transition for the animation
      id={id}
      className="py-16"
    >
      {children}
    </motion.section>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Section id="hero">
            <Hero />
          </Section>
          <Section id="stats">
            <Stats />
          </Section>
          <Section id="services">
            <ServicesPage />
          </Section>
          <Section id="solutions">
            <SolutionsPage />
          </Section>
          <Section id="clientele">
            <ClientelePage />
          </Section>
          <Section id="resources">
            <ResourcesPage />
          </Section>
          <Section id="library">
            <LibraryPage />
          </Section>
          <Section id="blog">
            <BlogPage />
          </Section>
          <Section id="about">
            <AboutPage />
          </Section>
          <Section id="contact">
            <ContactPage />
          </Section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
