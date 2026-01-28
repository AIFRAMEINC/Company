import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote } from 'lucide-react';

interface Founder {
    id: string;
    name: string;
    role: string;
    quote: string;
    longDescription?: string; // Optional detailed text for the expanded view
}

const foundersData: Founder[] = [
    {
        id: 'moein',
        name: "محمدمعین پیسوده",
        role: "Co-Founder",
        quote: "خدارو میشه بهترین ریاضی‌دان توصیف کرد.",
        longDescription: "ریاضیات زبان هستی است و هوش مصنوعی، تلاش ما برای صحبت کردن به این زبان. ما در HumanV سعی داریم این نظم الهی را در الگوریتم‌هایمان بازتاب دهیم."
    },
    {
        id: 'aidin',
        name: "آیدین بابازاده",
        role: "Co-Founder",
        quote: "همه ما در هر شغلی مهندسیم.",
        longDescription: "مهندسی یعنی یافتن راه‌حل برای چالش‌ها. مهم نیست هنرمند باشید یا مدیر، ابزارهای هوش مصنوعی ما مهندس درون شما را بیدار می‌کنند تا بهترین راه‌حل‌ها را بسازید."
    }
];

const Founders: React.FC = () => {
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);

  return (
    <section id="founders" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="rtl-text">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">تیم رهبری</h2>
                 <p className="text-neutral-500">معماران استراتژی و نوآوری</p>
             </div>
             <div className="hidden md:block w-1/3 h-[1px] bg-neutral-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {foundersData.map((founder) => (
                <motion.div 
                    key={founder.id}
                    layoutId={`card-${founder.id}`}
                    onClick={() => setSelectedFounder(founder)}
                    className="cursor-pointer relative group bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 p-10 hover:border-neutral-600 transition-colors duration-500 flex flex-col justify-between"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                     <div>
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div 
                                layoutId={`avatar-${founder.id}`}
                                className="w-12 h-12 bg-gradient-to-br from-indigo-900 to-neutral-800 flex items-center justify-center rounded-sm"
                            >
                                <span className="text-white font-serif font-bold text-lg">{founder.name.charAt(0)}</span>
                            </motion.div>
                            <div>
                                <motion.h4 layoutId={`name-${founder.id}`} className="text-xl font-bold text-white font-serif">{founder.name}</motion.h4>
                                <motion.p layoutId={`role-${founder.id}`} className="text-indigo-400 text-xs tracking-widest uppercase mt-1">{founder.role}</motion.p>
                            </div>
                        </div>
                        <motion.p layoutId={`quote-${founder.id}`} className="text-neutral-400 font-medium text-lg leading-relaxed rtl-text mb-4 italic">
                            «{founder.quote}»
                        </motion.p>
                    </div>
                    
                    <div className="w-full h-[1px] bg-neutral-800 group-hover:bg-indigo-900/50 transition-colors duration-500"></div>
                    <div className="mt-4 flex items-center text-xs text-neutral-600 group-hover:text-indigo-400 transition-colors">
                        <span>برای مشاهده بیشتر کلیک کنید</span>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

      {/* Expanded View Modal (Transform Effect) */}
      <AnimatePresence>
        {selectedFounder && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedFounder(null)}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md"
                />
                
                <motion.div 
                    layoutId={`card-${selectedFounder.id}`}
                    className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-700 p-8 md:p-12 rounded-lg shadow-2xl overflow-hidden"
                >
                    <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedFounder(null); }}
                        className="absolute top-6 left-6 text-neutral-500 hover:text-white transition-colors z-20"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.div 
                            layoutId={`avatar-${selectedFounder.id}`}
                            className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-black flex items-center justify-center rounded-full mb-6 shadow-lg shadow-indigo-500/20"
                        >
                            <span className="text-white font-serif font-bold text-3xl">{selectedFounder.name.charAt(0)}</span>
                        </motion.div>

                        <motion.h4 layoutId={`name-${selectedFounder.id}`} className="text-3xl md:text-4xl font-bold text-white font-serif mb-2">{selectedFounder.name}</motion.h4>
                        <motion.p layoutId={`role-${selectedFounder.id}`} className="text-indigo-400 text-sm tracking-[0.3em] uppercase mb-8">{selectedFounder.role}</motion.p>

                        <div className="relative">
                            <Quote className="absolute -top-6 -right-6 text-neutral-800 w-12 h-12 rotate-180" />
                            <motion.p layoutId={`quote-${selectedFounder.id}`} className="text-xl md:text-2xl text-white font-light leading-relaxed rtl-text mb-8 relative z-10">
                                {selectedFounder.quote}
                            </motion.p>
                        </div>

                        {selectedFounder.longDescription && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 border-t border-neutral-800 pt-8"
                            >
                                <p className="text-neutral-400 text-base leading-loose rtl-text max-w-lg mx-auto">
                                    {selectedFounder.longDescription}
                                </p>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Founders;