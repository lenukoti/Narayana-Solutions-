import teacherwithstudents from "../assets/teacherwithstudents.jpg";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 p-10 md:p-20 bg-white rounded-2xl shadow-xl">
      {/* Image with Animation */}
      <img
        src={teacherwithstudents}
        alt="About Us"
        className="w-full md:w-1/2 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        loading="lazy"
      />

      {/* Text Section */}
      <div className="text-center md:text-left max-w-lg animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Who We Are</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-indigo-600">LN Technologies</span>, we believe in empowering students and educators 
          with cutting-edge learning solutions. Our team is dedicated to fostering innovation, creativity, and 
          collaboration to enhance educational experiences.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          From personalized learning tools to expert guidance, we strive to make education more accessible and effective. 
          Join us on this journey towards a smarter future!
        </p>
      </div>
    </div>
  );
}

export default About;
