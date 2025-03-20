import { Course } from '../types';
import microsoftoffice from "../../public/microsoftoficejpg.jpg";
import java from "../../public/java.png";
import cplusimg from "../../public/c++.png";
import cimg from "../../public/cjpg.jpg";
import spokenenglish from "../../public/spkoenenglish.jpg";
import pythonimg from "../assets/python.jpg";
import webdevimg from "../assets/webdevelopment.jpg";
import narayana from "../assets/hi.jpeg.jpg";
import sqlimg from  "../assets/sql.png"
export const courses: Course[] = [
  {
    id: "java-programming",
    title: "Java Programming Masterclass",
    description: "Learn Java from basics to advanced concepts with hands-on coding and real-world projects.",
    duration: "3 months",
    rating: 4.7,
    price: 599,
    instructor: {
      name: "Lakshmi Narayana",
      title: "Senior Java Developer",
      image: narayana,
    },
    image: java,
    category: "Programming",
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of OOP concepts",
      "Computer with JDK installed"
    ],
    syllabus: [
      {
        month: 1,
        title: "Java Basics",
        topics: [
          "Data Types & Variables",
          "Control Flow Statements",
          "Methods and Functions",
          "Basic OOP Concepts"
        ]
      },
      {
        month: 2,
        title: "Intermediate Java",
        topics: [
          "Collections Framework",
          "Exception Handling",
          "File I/O",
          "Multithreading"
        ]
      },
      {
        month: 3,
        title: "Advanced Java & Projects",
        topics: [
          "Spring Boot & REST APIs",
          "Database Integration",
          "Microservices Overview",
          "Capstone Project"
        ]
      }
    ],
    features: [
      "Hands-on Coding Challenges",
      "Industry-Recognized Certificate",
      "Project-Based Learning"
    ]
  },
  {
    id: "python-programming",
    title: "Python Programming from Scratch",
    description: "Master Python with real-world projects, data structures, and automation scripts.",
    duration: "3 months",
    rating: 4.8,
    price: 550,
    instructor: {
      name: "Lakshmi Narayana",
      title: "Python Developer",
      image: narayana,
    },
    image: pythonimg,
    category: "Programming",
    prerequisites: [
      "No prior programming experience required",
      "Basic computer literacy"
    ],
    syllabus: [
      {
        month: 1,
        title: "Python Fundamentals",
        topics: [
          "Syntax & Variables",
          "Control Flow & Loops",
          "Functions & Modules",
          "Error Handling"
        ]
      },
      {
        month: 2,
        title: "Data Structures & OOP",
        topics: [
          "Lists, Tuples & Dictionaries",
          "Object-Oriented Programming",
          "File Handling",
          "Regular Expressions"
        ]
      },
      {
        month: 3,
        title: "Advanced Topics & Projects",
        topics: [
          "Web Scraping & APIs",
          "Automation with Python",
          "Django & Flask Basics",
          "Final Project"
        ]
      }
    ],
    features: [
      "Interactive Coding Exercises",
      "Industry-Standard Practices",
      "Capstone Project"
    ]
  },
  {
    id: "web-development",
    title: "Full Stack Web Development",
    description: "Learn front-end and back-end web development with hands-on projects.",
    duration: "3 months",
    rating: 4.9,
    price: 600,
    instructor: {
      name: "Lakshmi Narayana",
      title: "Full Stack Developer",
      image: narayana,
    },
    image: webdevimg,
    category: "Web & Database",
    prerequisites: [
      "Basic computer knowledge",
      "Interest in web technologies"
    ],
    syllabus: [
      {
        month: 1,
        title: "Front-End Development",
        topics: [
          "HTML & CSS Basics",
          "JavaScript Essentials",
          "Responsive Design",
          "Bootstrap & Tailwind CSS"
        ]
      },
      {
        month: 2,
        title: "JavaScript & Backend Basics",
        topics: [
          "ES6+ Features",
          "Node.js & Express.js",
          "APIs & RESTful Services",
          "MongoDB & SQL Basics"
        ]
      },
      {
        month: 3,
        title: "Full Stack Development & Projects",
        topics: [
          "React.js & State Management",
          "Authentication & Security",
          "Deploying Applications",
          "Capstone Project"
        ]
      }
    ],
    features: [
      "Hands-on Projects",
      "Industry-Standard Tools",
      "Certificate of Completion"
    ]
  },
  {
    id: "cpp-programming",
    title: "C++ Programming Essentials",
    description: "Master C++ with deep dive into data structures, algorithms, and real-world applications.",
    duration: "3 months",
    rating: 4.6,
    price: 499,
    instructor: {
      name: "Lakshmi Narayana",
      title: "C++ Specialist",
      image: narayana,
    },
    image: cplusimg,
    category: "Programming",
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of mathematical concepts"
    ],
    syllabus: [
      {
        month: 1,
        title: "C++ Basics",
        topics: [
          "Syntax and Structure",
          "Control Statements",
          "Functions and Pointers",
          "Memory Management"
        ]
      },
      {
        month: 2,
        title: "Advanced C++",
        topics: [
          "Object-Oriented Programming",
          "Templates & STL",
          "File Handling",
          "Multi-threading"
        ]
      }
    ],
    features: [
      "Algorithm-Focused Course",
      "Industry-Standard Practices",
      "Hands-on Assignments"
    ]
  },
  {
    id: "c-programming",
    title: "C Programming for Beginners",
    description: "Learn C programming from scratch with practical applications and problem-solving exercises.",
    duration: "3 months",
    rating: 4.5,
    price: 399,
    instructor: {
      name: "Lakshmi Narayana",
      title: "C Language Expert",
      image: narayana,
    },
    image: cimg,
    category: "Programming",
    prerequisites: [
      "No prior programming experience required",
      "Basic understanding of computers"
    ],
    syllabus: [
      {
        month: 1,
        title: "C Basics",
        topics: [
          "Data Types & Operators",
          "Control Flow",
          "Functions & Recursion",
          "Arrays & Pointers"
        ]
      }
    ],
    features: [
      "Beginner-Friendly Course",
      "Hands-on Coding Challenges",
      "Industry-Recognized Certification"
    ]
  },
  {
    id: "microsoft-office",
    title: "Microsoft Office Mastery",
    description: "Become proficient in Microsoft Word, Excel, PowerPoint, and Outlook with real-world scenarios.",
    duration: "3 months",
    rating: 4.7,
    price: 299,
    instructor: {
      name: "Lakshmi Narayana",
      title: "Microsoft Certified Trainer",
      image: microsoftoffice,
    },
    image: microsoftoffice,
    category: "Office Productivity",
    prerequisites: [
      "Basic computer knowledge",
      "Access to Microsoft Office Suite"
    ],
    syllabus: [
      {
        month: 1,
        title: "Microsoft Word & PowerPoint",
        topics: [
          "Document Formatting",
          "Templates & Styles",
          "Presentation Design",
          "Animations & Transitions"
        ]
      }
    ],
    features: [
      "Certificate of Completion",
      "Real-world Case Studies",
      "Practical Assignments"
    ]
  },
  {
    id: "spoken-english",
    title: "Spoken English & Communication Skills",
    description: "Improve your English speaking skills with interactive exercises and practical conversations.",
    duration: "3 months",
    rating: 4.8,
    price: 350,
    instructor: {
      name: "Lakshmi Narayana",
      title: "Language Coach",
      image: narayana
    },
    image: spokenenglish,
    category: "Soft Skills",
    prerequisites: [
      "Basic understanding of English",
      "Willingness to practice daily"
    ],
    syllabus: [
      {
        month: 1,
        title: "Basic English Conversations",
        topics: [
          "Greetings & Introductions",
          "Common Phrases",
          "Pronunciation Techniques",
          "Grammar Basics"
        ]
      }
    ],
    features: [
      "Live Interactive Classes",
      "Role-Playing Activities",
      "Confidence-Building Exercises"
    ]
  },
  {
    id: "sql-database",
    title: "SQL & Database Management",
    description: "Master SQL and database management techniques for efficient data handling.",
    duration: "3 months",
    rating: 4.6,
    price: 450,
    instructor: {
      name: "Lakshmi Narayana",
      title: "Database Specialist",
      image: narayana,
    },
    image: sqlimg,
    category: "Web & Database",
    prerequisites: [
      "Basic understanding of data structures",
      "Logical reasoning skills"
    ],
    syllabus: [
      {
        month: 1,
        title: "SQL Basics",
        topics: [
          "Database Concepts",
          "SQL Queries",
          "Joins & Subqueries",
          "Stored Procedures"
        ]
      }
    ],
    features: [
      "Practical SQL Exercises",
      "Real-world Database Projects",
      "Industry-Standard Practices"
    ]
  }
];
