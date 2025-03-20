import { motion } from 'framer-motion';
import { BookOpen, Contact, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedPage } from '../components/AnimatedPage';
import { courses } from '../data/courses';
import Footer from '../components/Footer';
import heroimg from '../../public/heroimg.png';
import ContactForm from '../components/ContactForm';
import About from '../components/About';
import ISOCertification from '../components/IsoCertification';

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Well-structured courses designed for practical learning'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: '24/7 support from mentors and fellow learners'
  }
];

export const Home = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <div className="relative bg-[#2c61ff] text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-24 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learn, Build, and Succeed – Your Future Starts Here!
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Master in-demand skills with our comprehensive courses and expert
              instructors. Start your journey to success today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/courses"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Courses
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.img
            src={heroimg}
            alt="Hero"
            className="w-full md:w-1/2 max-w-md mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>


      {/* Featured Courses Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your learning journey with our most popular courses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <Link to={`/courses/${course.id}`}>
                  <div className="relative h-48">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                      <span className="text-sm font-semibold">
              
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Duration:</span>
                        <span className="text-sm font-semibold">
                          {course.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold">
                          {course.rating}
                        </span>
                        <span className="text-yellow-400">★</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best learning experience with our comprehensive
              features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <feature.icon className="w-12 h-12 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Join thousands of students who have already taken the first step
              towards their dream career
            </p>
            <Link
              to="/courses"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </div>
      <ISOCertification/>
      <About/>
      <ContactForm/>
      <Footer/>
    </AnimatedPage>
  );
};