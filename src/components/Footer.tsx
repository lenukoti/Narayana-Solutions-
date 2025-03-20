import { Mail, Phone, MapPin, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">LN TECHNOLOGIES</h2>
          <p className="text-gray-400">
            Innovating the future with cutting-edge technology and expertise.
          </p>
        </div>
        
        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-300 space-y-3">
            <li className="flex items-center gap-3 hover:text-indigo-400">
              <Mail className="w-5 h-5 text-indigo-400" />
              <span className="break-words">lntechnologies74@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 hover:text-indigo-400">
              <Phone className="w-5 h-5 text-indigo-400" />
              <span>9133898992, 9642654225</span>
            </li>
            <li className="flex items-start gap-3 hover:text-indigo-400">
              <MapPin className="w-5 h-5 text-indigo-400" />
              <span className="break-words">
                10-426 Adivarapu Peta (Street), Narasannapeta, Srikakulam District, 532421
              </span>
            </li>
          </ul>
        </div>
        
        {/* Directors */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Directors</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-3 hover:text-indigo-400">
              <User className="w-5 h-5 text-indigo-400" />
              <span>Enukoti Lakshmi Narayana</span>
            </li>
            <li className="flex items-center gap-3 hover:text-indigo-400">
              <User className="w-5 h-5 text-indigo-400" />
              <span>Bandaru Jagadeesh Kumar</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center text-gray-500 mt-10 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} LN TECHNOLOGIES. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
