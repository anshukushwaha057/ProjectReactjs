import { Link, NavLink } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Company Name */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Employee Manager</h2>
          <p className="text-sm text-gray-200">&copy; 2025 All Rights Reserved</p>
        </div>

        {/* Center Section - Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
          <NavLink to="/" className="text-sm hover:text-gray-300">Dashboard</NavLink>
          <NavLink to="/employees" className="text-sm hover:text-gray-300">Employees</NavLink>
          <NavLink to="/attendance" className="text-sm hover:text-gray-300">Attendance</NavLink>
          <NavLink to="/payroll" className="text-sm hover:text-gray-300">Payroll</NavLink>
          <NavLink to="/contact" className="text-sm hover:text-gray-300">Contact</NavLink>
        </nav>

        {/* Right Section - Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="https://facebook.com" target="_blank" className="hover:text-gray-300">
            <Facebook />
          </Link>
          <Link to="https://twitter.com" target="_blank" className="hover:text-gray-300">
            <Twitter />
          </Link>
          <Link to="https://linkedin.com" target="_blank" className="hover:text-gray-300">
            <Linkedin />
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
