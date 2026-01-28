import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    onOpenPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (page === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        onOpenPage(page);
    }
  };

  const navLinks = [
    { title: 'خانه', id: 'home' },
    { title: 'درباره ما', id: 'about' },
    { title: 'چشم‌انداز', id: 'vision' },
    { title: 'تیم مدیریت', id: 'founders' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-neutral-800 py-3'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={(e) => handleNavClick(e, 'home')}
        >
            <Logo />
            <span className="text-lg font-light tracking-wide hidden sm:block">HumanV</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
                <a 
                    key={index} 
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 relative group"
                >
                    {link.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
            ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-black border-b border-neutral-800 overflow-hidden"
            >
                <div className="flex flex-col p-6 gap-4">
                    {navLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={`#${link.id}`}
                            onClick={(e) => handleNavClick(e, link.id)}
                            className="text-neutral-400 hover:text-white text-lg transition-colors"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;