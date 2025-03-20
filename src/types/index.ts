export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  rating: number;
  price: number;
  instructor: {
    name: string;
    title: string;
    image: string;
  };
  syllabus: {
    month: number;
    title: string;
    topics: string[];
  }[];
  image: string;
  category: string;
  prerequisites: string[];
  features: string[];
}

export interface CourseCardProps {
  course: Course;
}