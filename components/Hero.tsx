import React from 'react';
import { motion } from 'framer-motion';

const SpaceVoidBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Nebula / Void Glows */}
            <motion.div 
                className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-indigo-900/10 rounded-full blur-[100px]"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-[-20%] right-[10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[120px]"
                animate={{ 
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.15, 0.1],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Subtle Cosmic Waves */}
            <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1440 800">
                <defs>
                    <linearGradient id="waveGradient" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                
                {[0, 1, 2].map((i) => (
                    <motion.path
                        key={i}
                        fill="none"
                        stroke="url(#waveGradient)"
                        strokeWidth="1.5"
                        initial={{ d: `M0,${400 + i * 50} C360,${300 + i * 50} 1080,${500 + i * 50} 1440,${400 + i * 50}` }}
                        animate={{
                            d: [
                                `M0,${400 + i * 50} C360,${300 + i * 50} 1080,${500 + i * 50} 1440,${400 + i * 50}`,
                                `M0,${400 + i * 50} C360,${500 + i * 50} 1080,${300 + i * 50} 1440,${400 + i * 50}`,
                                `M0,${400 + i * 50} C360,${300 + i * 50} 1080,${500 + i * 50} 1440,${400 + i * 50}`
                            ]
                        }}
                        transition={{
                            duration: 15 + i * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 2
                        }}
                    />
                ))}
            </svg>
            
            {/* Floating Dust Particles */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(transparent, black)' }}>
                 {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: Math.random() * 2 + 1 + 'px',
                            height: Math.random() * 2 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            opacity: Math.random() * 0.5 + 0.1,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.1, 0.5, 0.1]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                 ))}
            </div>
        </div>
    );
};

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const powerSection = document.getElementById('power');
    if (powerSection) {
        powerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
        {/* Space Void Animation Background */}
        <SpaceVoidBackground />

        {/* Technical Grid Background (Low Opacity Overlay) */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ 
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                backgroundSize: '50px 50px' 
             }}>
        </div>
        
        {/* Radial Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-0 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative mt-20"
            >
                {/* Glow effect behind title */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-white tracking-tighter relative z-10 drop-shadow-2xl">
                    HumanV
                </h1>
            </motion.div>

            <motion.p 
                className="text-lg md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-loose rtl-text font-light mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <span className="text-white/80">هوش مصنوعی</span>، معمار آینده‌ی کسب‌وکار شما.
                <br />
                <span className="text-sm md:text-lg mt-4 block text-neutral-500">
                «ابزارهای هوش مصنوعی همیشه برای بهتر کردن شغل‌ها هستند»
                </span>
            </motion.p>

            <motion.div 
                className="mt-20 flex flex-col items-center gap-4 cursor-pointer group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                onClick={handleScrollDown}
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 group-hover:text-white transition-colors duration-300">Scroll</span>
                <div className="w-[30px] h-[50px] border border-neutral-700 rounded-full flex justify-center p-2 group-hover:border-white transition-colors duration-300">
                    <motion.div 
                        className="w-1 h-2 bg-white rounded-full"
                        animate={{ y: [0, 15, 0], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Hero;