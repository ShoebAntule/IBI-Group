import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero id="hero" />
          <Stats id="stats" />
          <ServicesPage id="services" />
          <SolutionsPage id="solutions" />
          <ClientelePage id="clientele" />
          <ResourcesPage id="resources" />
          <LibraryPage id="library" />
          <BlogPage id="blog" />
          <AboutPage id="about" />
          <ContactPage id="contact" />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
