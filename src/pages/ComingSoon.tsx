import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-[#020817] flex flex-col items-center justify-between p-8 text-center overflow-hidden">
      {/* Pixar-style background glow - Adjusted for better mobile depth */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />
      
      {/* Top Section: Logo */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="pt-12 md:pt-20"
      >
        <Logo size="lg" light />
      </motion.div>
      
      {/* Middle Section: Main Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto space-y-8"
      >/
        <div className="space-y-4">
          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase italic" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Launching <span className="text-[#FF6A00]">Soon...</span>
          </h1>
          
          <p className="text-white/70 text-base md:text-lg leading-relaxed px-4">
            Our app is launching in a few days. We're fine-tuning the engines for the ultimate student experience!
          </p>
        </div>

        {/* Animated Character / GIF Area */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full scale-150 group-hover:bg-orange-500/10 transition-colors" />
          <img 
            src="/run.gif" 
            alt="Running" 
            className="w-32 md:w-40 relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
          />
        </motion.div>
      </motion.div>
      
      {/* Bottom Section: Footer (Non-fixed for better scrolling on small screens) */}
      <div className="pb-8 space-y-2">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">
          © 2026 CampusRun
        </p>
        <p className="text-white/50 text-[9px] uppercase tracking-widest">
          Coming Soon to your University
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;