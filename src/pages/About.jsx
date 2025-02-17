import { useEffect, useState } from 'react';
import { Shield, Users, Award, Target } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'We prioritize the protection of our clients\' assets above all else.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Building long-term relationships through trust and collaboration.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering the highest quality solutions and service.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Constantly evolving to stay ahead of emerging threats.',
  },
];

const team = [
  {
    name: 'John Smith',
    position: 'CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    name: 'Sarah Johnson',
    position: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  {
    name: 'Michael Brown',
    position: 'Head of Security',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
  },
];

const AboutPage = () => {
  const [visible, setVisible] = useState(false);

  const observeVisibility = (element) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'transform', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-5', 'scale-95');
          } else {
            entry.target.classList.add('opacity-0', 'translate-y-5', 'scale-95');
            entry.target.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
          }
        });
      },
      { threshold: 0.5 } // 50% of the element should be visible
    );

    observer.observe(element);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-out');
    elements.forEach((element) => observeVisibility(element));
  }, []);

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          ref={(el) => el && observeVisibility(el)}
          className="text-center mb-16 fade-in-out opacity-0 transform translate-y-5 scale-95 transition-all duration-1000 ease-in-out"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">IBI</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Leading the future of cybersecurity with innovative AI-powered solutions.
          </p>
        </div>

        {/* Values Grid with Step Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={value.title}
              ref={(el) => el && observeVisibility(el)}
              className={`card-gradient p-6 rounded-xl text-center fade-in-out opacity-0 transform translate-y-5 scale-95 transition-all duration-1000 ease-in-out`}
              style={{
                transitionDelay: `${index * 0.1}s`, // Add delay based on index for step animation
              }}
            >
              <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>

        <div
          ref={(el) => el && observeVisibility(el)}
          className="text-center mb-12 fade-in-out opacity-0 transform translate-y-5 scale-95 transition-all duration-1000 ease-in-out"
        >
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the experts leading our mission to revolutionize cybersecurity.
          </p>
        </div>

        {/* Leadership Team with Step Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => el && observeVisibility(el)}
              className="card-gradient rounded-xl overflow-hidden fade-in-out opacity-0 transform translate-y-5 scale-95 transition-all duration-1000 ease-in-out"
              style={{
                transitionDelay: `${index * 0.1}s`, // Add delay based on index for step animation
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
