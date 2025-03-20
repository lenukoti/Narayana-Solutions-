import { motion } from 'framer-motion';
import { CheckCircle, Clock, Star } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimatedPage } from '../components/AnimatedPage';
import { courses } from '../data/courses';
import Footer from '../components/Footer';

export const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate(); // Hook to navigate between pages

  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-200 mb-6">{course.description}</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-white" />
                    <span className="text-white">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-white">{course.rating} Rating</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Syllabus */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-md p-8 mb-8"
              >
                <h2 className="text-2xl font-bold mb-6">Course Syllabus</h2>
                <div className="space-y-6">
                  {course.syllabus.map((month, index) => (
                    <motion.div
                      key={month.month}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * index }}
                      className="border-l-4 border-indigo-500 pl-4"
                    >
                      <h3 className="text-xl font-semibold mb-3">
                        Month {month.month}: {month.title}
                      </h3>
                      <ul className="space-y-2">
                        {month.topics.map((topic, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Prerequisites */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl shadow-md p-8 mb-8"
              >
                <h2 className="text-2xl font-bold mb-6">Prerequisites</h2>
                <ul className="space-y-3">
                  {course.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      {prerequisite}
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white rounded-xl shadow-md p-6 sticky top-4"
              >
                <div className="text-center mb-6">
                  <button
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                    onClick={() => navigate('/student-registration')} // Navigate to student registration page
                  >
                    Enroll Now
                  </button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">Course Features</h3>
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-xl font-bold mb-4">Instructor</h3>
                  <div className="flex items-center gap-4">
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{course.instructor.name}</h4>
                      <p className="text-gray-600 text-sm">{course.instructor.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
};
