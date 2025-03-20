import { motion } from "framer-motion";
import isoLogo from "../assets/iso.jpg"; // Ensure the image exists

const ISOCertification = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col md:flex-row items-center justify-center bg-[#4338ca]   p-8 border border-blue-800 mx-auto text-left"
    >
      {/* Left Section - Certification Benefits */}
      <div className="md:w-1/2 text-white">
        <h2 className="text-3xl font-bold">Why ISO 9001:2015 Matters?</h2>
        <p className="text-lg mt-3 leading-relaxed">
          Our <span className="font-semibold">ISO 9001:2015 certification</span> ensures **high-quality standards** in education and services, offering:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-200">
          <li>Continuous improvement and innovation</li>
          <li>Enhanced customer satisfaction</li>
          <li>Compliance with global standards</li>
          <li>Streamlined and efficient processes</li>
        </ul>
      </div>

      {/* Right Section - ISO Logo & Certification */}
      <div className="md:w-1/2 flex flex-col items-center text-center mt-6 md:mt-0">
        <img
          src={isoLogo}
          alt="ISO Certification"
          className="h-24 w-auto object-contain mb-4"
        />
        <h3 className="text-3xl font-extrabold text-white">
          ISO 9001:2015 Certified
        </h3>
        <p className="text-lg text-gray-200 mt-3 leading-relaxed">
          We follow **ISO 9001:2015 quality standards**, ensuring world-class education and professional growth.
        </p>
      </div>
    </motion.div>
  );
};

export default ISOCertification;
