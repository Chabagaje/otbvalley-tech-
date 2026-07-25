import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0b1120]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold tracking-tight text-white">
          OTB<span className="text-indigo-400">Valley</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <NavLink to="/" className={({ isActive }) => `hover:text-white transition ${isActive ? 'text-white' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `hover:text-white transition ${isActive ? 'text-white' : ''}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `hover:text-white transition ${isActive ? 'text-white' : ''}`}>
            Contact
          </NavLink>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#industries" className="hover:text-white transition">Industries</a>
          <a href="#why" className="hover:text-white transition">Why Us</a>
          <Link to="/contact" className="btn-primary text-sm py-2 px-5">Partner With Us</Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-white/70 hover:text-white text-2xl">
          ☰
        </button>
      </div>

      {/* ─── Mobile menu with glassy border ─── */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0b1120]/95 backdrop-blur-xl border border-white/10 rounded-xl mx-4 mt-2 p-4 shadow-xl">
          <div className="flex flex-col gap-4 text-sm text-white/80">
            <Link to="/" onClick={closeMenu} className="hover:text-white transition">Home</Link>
            <Link to="/about" onClick={closeMenu} className="hover:text-white transition">About</Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-white transition">Contact</Link>
            <a href="#products" onClick={closeMenu} className="hover:text-white transition">Products</a>
            <a href="#industries" onClick={closeMenu} className="hover:text-white transition">Industries</a>
            <a href="#why" onClick={closeMenu} className="hover:text-white transition">Why Us</a>
            <Link to="/contact" onClick={closeMenu} className="btn-primary text-center">Partner With Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
