import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">Employee Manager</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-gray-200"}>Dashboard</NavLink>
          <NavLink to="/employees" className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-gray-200"}>Employees</NavLink>
          <NavLink to="/attendance" className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-gray-200"}>Attendance</NavLink>
          <NavLink to="/payroll" className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-gray-200"}>Payroll</NavLink>
          <NavLink to="/github" className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-gray-200"}>GitHub</NavLink>
        </nav>

        {/* User Profile */}
        <div className="hidden md:flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHw3MbEzTzp1ogxbXU1uCaZDF1PmXtpREgA&s"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm">John Doe</span>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-700 p-4 mt-2 space-y-2">
          <NavLink to="/" className="block hover:text-gray-200">Dashboard</NavLink>
          <NavLink to="/employees" className="block hover:text-gray-200">Employees</NavLink>
          <NavLink to="/attendance" className="block hover:text-gray-200">Attendance</NavLink>
          <NavLink to="/payroll" className="block hover:text-gray-200">Payroll</NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
