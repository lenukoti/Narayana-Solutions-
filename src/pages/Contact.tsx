import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { AnimatedPage } from '../components/AnimatedPage';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@edupro.com',
      link: 'mailto:contact@edupro.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Education Street, Learning City, 12345',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <AnimatedPage>
      <div className="min-h-20 bg-gray-50 py-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll
              respond as soon as possible.
            </p>
          </motion.div>

        </div>
      </div>
      <ContactForm/>
      <Footer/>
    </AnimatedPage>
  );
};