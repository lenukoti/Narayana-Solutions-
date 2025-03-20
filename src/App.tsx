import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CourseDetail } from './pages/CourseDetail';
import { Courses } from './pages/Courses';
import  {Home}  from './pages/Home';
import WhatsAppButton from './components/WhatsappButton';
import StudentRegistration from './pages/StudentRegistration';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 relative">
        <Navbar />
        <WhatsAppButton /> {/* Move it outside of AnimatePresence */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student-registration" element={<StudentRegistration />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}


export default App;