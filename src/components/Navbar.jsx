import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0b1120]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <Link to="/" className="text-2xl font-bold tracking-tight text-white">
          OTB<span className="text-indigo-400">Valley</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-base font-medium text-white/70">
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
          <Link to="/contact" className="btn-primary text-sm py-2.5 px-6">Partner With Us</Link>
        </div>

        {/* ─── Mobile menu button with glassy border ─── */}
        <button
          onClick={toggleMenu}
          className="md:hidden bg-white/5 backdrop-blur-md border border-white/15 rounded-xl p-2.5 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* ─── Mobile menu with glassy border ─── */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0b1120]/95 backdrop-blur-xl border border-white/10 rounded-xl mx-4 mt-2 p-5 shadow-xl">
          <div className="flex flex-col gap-5 text-base text-white/80">
            <Link to="/" onClick={closeMenu} className="hover:text-white transition font-medium">Home</Link>
            <Link to="/about" onClick={closeMenu} className="hover:text-white transition font-medium">About</Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-white transition font-medium">Contact</Link>
            <a href="#products" onClick={closeMenu} className="hover:text-white transition font-medium">Products</a>
            <a href="#industries" onClick={closeMenu} className="hover:text-white transition font-medium">Industries</a>
            <a href="#why" onClick={closeMenu} className="hover:text-white transition font-medium">Why Us</a>
            <Link to="/contact" onClick={closeMenu} className="btn-primary text-center">Partner With Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
