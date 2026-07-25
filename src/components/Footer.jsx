const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8 px-4 bg-[#0b1120]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
        <div><span className="font-medium text-white/50">OTBValley</span> <span className="mx-2">·</span> Technology Innovation Hub</div>
        <div className="flex flex-wrap gap-6">
          <a href="#" className="hover:text-white/60 transition">Products</a>
          <a href="#" className="hover:text-white/60 transition">About</a>
          <a href="#" className="hover:text-white/60 transition">Contact</a>
          <a href="#" className="hover:text-white/60 transition">Privacy</a>
        </div>
        <span>© 2026 OTBValley. All rights reserved.</span>
      </div>
    </footer>
  );
};
export default Footer;
