import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Play } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 w-full h-[100dvh] bg-cyber-black overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-cyber-neon/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-cyber-cyan/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-evenly p-6 max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-4 relative">
            <Activity size={56} className="md:w-20 md:h-20 text-cyber-neon drop-shadow-[0_0_15px_rgba(57,255,20,0.6)]" />
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white text-center">
            CYBER<span className="text-cyber-cyan">PHYSIO</span>
          </h1>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
        >
            <p className="text-gray-400 text-sm md:text-lg font-mono mb-2">
            SPINAL HEALTH PROTOCOL v1.0
            </p>
            <p className="text-[10px] md:text-xs tracking-[0.2em] opacity-70 text-cyber-cyan">
            FLEXIBILITY // STRENGTH
            </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(57, 255, 20, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="group relative px-10 py-5 bg-transparent border-2 border-cyber-neon text-cyber-neon text-lg font-bold uppercase tracking-widest overflow-hidden w-full max-w-[280px]"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            Initialize <Play size={20} fill="currentColor" />
          </span>
          <div className="absolute inset-0 bg-cyber-neon transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-10" />
        </motion.button>
      </div>
    </div>
  );
};

export default WelcomeScreen;