import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CourseCardProps } from '../types';

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
    >
      <Link to={`/courses/${course.id}`}>
        <div className="relative h-48">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold">{course.rating}</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Duration:</span>
              <span className="text-sm font-semibold">{course.duration}</span>
            </div>
           
          </div>
        </div>
      </Link>
    </motion.div>
  );
};