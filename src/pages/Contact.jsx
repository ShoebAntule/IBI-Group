import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get in touch with our team of cybersecurity experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card-gradient p-8 rounded-xl"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="card-gradient p-6 rounded-xl">
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">contact@ibi.com</p>
                </div>
              </div>
            </div>

            <div className="card-gradient p-6 rounded-xl">
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="card-gradient p-6 rounded-xl">
              <div className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-400">
                    123 Security Street<br />
                    Cyber City, CS 12345
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;