import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* DNA Background Abstract Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-500">
           <motion.path
             d="M30,10 Q70,50 30,90"
             fill="none"
             stroke="currentColor"
             strokeWidth="3"
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
           />
           <motion.path
             d="M70,10 Q30,50 70,90"
             fill="none"
             stroke="currentColor"
             strokeWidth="3"
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
           />
        </svg>
      </div>
      
      {/* Text Foreground */}
      <span className="relative z-10 text-xl font-bold tracking-tighter text-white mix-blend-overlay font-serif">
        NV
      </span>
    </div>
  );
};

export default Logo;