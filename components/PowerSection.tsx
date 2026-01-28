import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PowerSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="power" className="relative py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-20">
            <div>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    transition={{ duration: 1 }}
                    className="h-1 bg-indigo-600 mb-6"
                />
                <motion.h3 
                    className="text-4xl md:text-5xl font-bold text-white rtl-text leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    قدرت در <br/>
                    <span className="text-neutral-500">عین سادگی</span>
                </motion.h3>
            </div>
            
            <motion.p 
                className="text-neutral-400 text-lg rtl-text leading-relaxed text-justify"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                ما در HumanV مرزهای تکنولوژی را جابه‌جا می‌کنیم. تمرکز ما بر ایجاد ساختارهایی است که نه تنها کارآمد هستند، بلکه استانداردهای جدیدی را در صنعت هوش مصنوعی تعریف می‌کنند.
            </motion.p>
        </div>

        {/* Corporate Image Frame */}
        <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-sm border border-neutral-800 bg-neutral-900 group">
            {/* Parallax effect on image */}
            <motion.img 
                style={{ y }}
                src="https://picsum.photos/id/48/1920/1080?grayscale" 
                alt="Corporate Architecture" 
                className="absolute inset-0 w-full h-[120%] object-cover object-center opacity-60 group-hover:opacity-80 transition-opacity duration-700"
            />
            
            {/* Tech Overlay Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-white/30"></div>
                <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-white/30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 text-9xl font-bold tracking-tighter select-none">NV</div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-10 flex justify-between items-end">
                <div>
                    <p className="text-indigo-400 text-xs tracking-[0.3em] uppercase mb-1">Infrastructure</p>
                    <p className="text-white text-xl font-medium">Global AI Network</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default PowerSection;