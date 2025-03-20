import { useState } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setStatus(response.ok ? "Message sent successfully!" : "Failed to send message. Please try again.");
      if (response.ok) setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Error sending message.");
      console.error(error);
    }
  };

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white"
          >
            Let's Connect & Collaborate
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <form
              className="space-y-6 bg-white/20 p-6 rounded-lg shadow-xl backdrop-blur-2xl border border-white/30"
              onSubmit={handleSubmit}
            >
              {['name', 'email', 'message'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-white mb-2 capitalize">
                    {field === "email" ? "Email Address" : field === "message" ? "Message" : "Full Name"}
                  </label>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-indigo-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white backdrop-blur-lg"
                      placeholder={field === "message" ? "Let's discuss your project..." : ""}
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-indigo-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white backdrop-blur-lg"
                      placeholder={field === "email" ? "your.email@example.com" : "Your Name"}
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
              {status && <p className="text-white text-center mt-4">{status}</p>}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-white space-y-6">
              <p className="flex items-center gap-2"><EnvelopeIcon className="w-5 h-5" />lntechnologies74@gmail.com</p>
              <p className="flex items-center gap-2"><PhoneIcon className="w-5 h-5" /> +91 9133898992, 9642654225</p>
              <p className="flex items-center gap-2"><MapPinIcon className="w-5 h-5" />10-426 Adivarapu Peta (Street), Narasannapeta, Srikakulam District, 532421</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
