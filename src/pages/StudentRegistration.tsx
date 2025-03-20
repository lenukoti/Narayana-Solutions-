import { useState } from "react";
import Footer from "../components/Footer";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    course: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, course, email, phone, address } = formData;
    
    const whatsappMessage = `Student Registration%0A%0AName: ${firstName} ${lastName}%0ACourse: ${course}%0AEmail: ${email}%0APhone: ${phone}%0AAddress: ${address}`;
    
    const whatsappURL = `https://wa.me/919133898992?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#3037cb] p-6">
      {/* Left Side - Quote */}
      <div className="md:w-1/2 text-center md:text-left p-6">
        <h2 className="text-4xl font-bold text-white">“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”</h2>
        <p className="text-gray-300 mt-4 text-lg">Start your journey with us and shape your future!</p>
      </div>
      
      {/* Right Side - Form */}
      <div className="md:w-1/2 max-w-md bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-xl shadow-lg transform transition-all hover:scale-105">
        <h3 className="text-3xl font-bold text-white text-center">Student Registration</h3>
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-3 w-1/2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-3 w-1/2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            required
          >
            <option value="">Select Course</option>
            <option value="Tally">Tally</option>
            <option value="MS-Office">MS-Office</option>
            <option value="Photoshop">Photoshop</option>
            <option value="Java">Java</option>
            <option value="Oracle">Oracle</option>
            <option value="Web Designing">Web Designing</option>
            <option value="C-Language">C-Language</option>
            <option value="Python">Python</option>
            <option value="DCA">DCA</option>
            <option value="GST">GST</option>
            <option value="PGDCA">PGDCA</option>
            <option value="DPA">DPA</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold p-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-200 hover:shadow-xl"
          >
            Register
          </button>
        </form>
      </div>
     
    </div>
     <Footer/>
     </>
  );
};

export default StudentRegistration;
