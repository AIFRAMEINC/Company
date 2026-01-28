import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

interface OverlayPageProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const OverlayPage: React.FC<OverlayPageProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-black overflow-y-auto overflow-x-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-indigo-900/20 blur-[150px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-purple-900/20 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <button 
            onClick={onClose}
            className="group flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                <ArrowRight size={20} className="rtl-icon" />
            </div>
            <span className="text-sm font-medium tracking-wide">بازگشت به خانه</span>
          </button>
          
          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-neutral-700 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto w-full flex-grow">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-12 rtl-text border-b border-neutral-800 pb-8"
            >
                {title}
            </motion.h2>
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="rtl-text text-lg leading-loose text-neutral-300 space-y-8 text-justify"
            >
                {children}
            </motion.div>
        </div>

        {/* Footer in Overlay */}
        <div className="mt-20 pt-8 border-t border-neutral-900 text-center text-neutral-600 text-sm font-mono">
            HumanV Platform
        </div>
      </div>
    </motion.div>
  );
};

export default OverlayPage;