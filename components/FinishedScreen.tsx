import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home } from 'lucide-react';

interface FinishedScreenProps {
  onHome: () => void;
}

const FinishedScreen: React.FC<FinishedScreenProps> = ({ onHome }) => {
  return (
    <div className="fixed inset-0 w-full h-[100dvh] bg-cyber-black flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-neon/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="z-10 w-full h-full flex flex-col items-center justify-evenly max-w-md mx-auto">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="flex flex-col items-center"
            >
                <CheckCircle size={80} className="md:w-[100px] md:h-[100px] text-cyber-neon mb-4 drop-shadow-[0_0_20px_rgba(57,255,20,0.5)]" />
                
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                    SESSION <span className="text-cyber-neon">COMPLETE</span>
                </h2>
            </motion.div>
            
            <p className="text-gray-400 text-sm md:text-lg px-4">
                Spinal health protocol executed successfully. Flexibility and strength markers updated.
            </p>

            <button
                onClick={onHome}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-cyber-panel border border-cyber-dim hover:border-cyber-cyan hover:text-cyber-cyan text-white transition-all rounded-lg uppercase tracking-wider font-bold w-full md:w-auto"
            >
                <Home size={20} /> Return to Base
            </button>
        </div>
    </div>
  );
};

export default FinishedScreen;