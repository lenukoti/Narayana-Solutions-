import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { AnimatedPage } from '../components/AnimatedPage';
import { CourseCard } from '../components/CourseCard';
import { courses } from '../data/courses';
import Footer from '../components/Footer';

const categories = ["All", "Programming", "Web & Database", "Office Productivity", "Soft Skills"];

export const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filter Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Explore Our Courses
            </h1>
            
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } transition-colors duration-200`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center text-gray-600 py-12">
              No courses found matching your criteria.
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </AnimatedPage>
  );
};