import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Users } from 'lucide-react';
import { AnimatedPage } from '../components/AnimatedPage';
import narayana from "../assets/hi.jpeg.jpg"
import jagadeesh from "../assets/jagadeesh.jpg"
import Footer from '../components/Footer';
const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Students Trained',
    description: 'Learners from around the globe'
  },
  {
    icon: BookOpen,
    value: '100+',
    label: 'Courses',
    description: 'In-depth learning materials'
  },
  {
    icon: Award,
    value: '95%',
    label: 'Success Rate',
    description: 'Course completion rate'
  },
  {
    icon: GraduationCap,
    value: '85%',
    label: 'Placement Rate',
    description: 'Career success stories'
  }
];

const team = [
  {
    name: 'ENUKOTI LAKSHMI NARAYANA',
    role: 'Lead Python Instructor',
    image: narayana,
    bio: 'Founder of LN Technologies, Computer Science with 5+ years of teaching experience'
  },
  {
    name: 'BANDARU JAGDEESH KUMAR',
    role: 'Computer Science Specialist',
    image: jagadeesh,
    bio: 'Founder of LN Technologies, Computer Science with 10+ years of teaching experience'
  }

];

export const About = () => {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-indigo-700 text-white py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering Future Tech Leaders
              </h1>
              <p className="text-xl text-indigo-100">
                Our mission is to provide world-class education that bridges the gap
                between traditional learning and industry demands.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-gray-500">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Expert Instructors
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Learn from industry professionals with years of real-world experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-84 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-gradient-to-br from-indigo-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Commitment to Excellence
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're dedicated to providing cutting-edge education that prepares
                students for real-world challenges. Our focus on practical skills
                and industry-relevant projects ensures that our graduates are
                ready to make an immediate impact in their careers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Industry-Aligned Curriculum
                  </h3>
                  <p className="text-gray-600">
                    Our courses are designed in collaboration with industry experts
                    to ensure relevance and practicality.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Career Support
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive career services including resume building,
                    interview preparation, and job placement assistance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer/>
    </AnimatedPage>
  );
};