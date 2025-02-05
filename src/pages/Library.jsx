import { motion } from 'framer-motion';
import { Book, Search } from 'lucide-react';

const categories = ['Research Papers', 'Technical Documents', 'Case Studies', 'Industry Reports'];

const documents = [
  {
    title: 'Advanced Persistent Threats: Analysis and Defense',
    category: 'Research Papers',
    date: '2024',
  },
  {
    title: 'Zero Trust Architecture Implementation Guide',
    category: 'Technical Documents',
    date: '2024',
  },
  {
    title: 'Financial Sector Security Enhancement',
    category: 'Case Studies',
    date: '2024',
  },
  {
    title: 'Cybersecurity Market Analysis 2024',
    category: 'Industry Reports',
    date: '2024',
  },
];

const LibraryPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            The <span className="gradient-text">Library</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Access our comprehensive collection of cybersecurity research,
            technical documents, and industry insights.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/4"
          >
            <div className="card-gradient p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer"
                  >
                    <Book className="w-4 h-4" />
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-3/4"
          >
            <div className="card-gradient p-6 rounded-xl mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-4">
              {documents.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-gradient p-6 rounded-xl"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
                      <span className="text-sm text-blue-400">{doc.category}</span>
                    </div>
                    <span className="text-gray-400">{doc.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;