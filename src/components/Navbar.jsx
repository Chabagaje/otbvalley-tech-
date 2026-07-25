import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Industries", href: "#industries" },
    { label: "Why Us", href: "#why" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0b1120]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          OTB<span className="text-indigo-400">Valley</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition">{link.label}</a>
          ))}
          <a href="#contact" className="btn-primary text-sm py-2 px-5">Partner With Us</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/70 hover:text-white text-2xl">☰</button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0b1120]/95 backdrop-blur-xl border-t border-white/5 px-4 py-6 flex flex-col gap-4 text-sm text-white/70">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-center" onClick={() => setIsOpen(false)}>Partner With Us</a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
