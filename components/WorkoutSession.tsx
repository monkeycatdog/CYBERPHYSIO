import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, RotateCcw, ChevronLeft, Info } from 'lucide-react';
import { EXERCISES, TIMINGS } from '../constants';
import { WorkoutPhase } from '../types';
import { ExerciseIllustration } from './ExerciseIllustrations';

interface WorkoutSessionProps {
  onFinish: () => void;
  onExit: () => void;
}

const WorkoutSession: React.FC<WorkoutSessionProps> = ({ onFinish, onExit }) => {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [repCount, setRepCount] = useState(1);
  const [phase, setPhase] = useState<WorkoutPhase>(WorkoutPhase.PREPARE);
  const [timeLeft, setTimeLeft] = useState(TIMINGS.PREPARE);
  const [isActive, setIsActive] = useState(true);

  // Sound effects refs (conceptual, using visual cues primarily)
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentExercise = EXERCISES[exerciseIndex];
  const progressPercentage = ((exerciseIndex) / EXERCISES.length) * 100;

  const playPhaseTransition = useCallback(() => {
    // In a real app, trigger audio beep here
  }, []);

  const nextPhase = useCallback(() => {
    playPhaseTransition();

    if (phase === WorkoutPhase.PREPARE) {
      setPhase(WorkoutPhase.CONTRACT);
      setTimeLeft(TIMINGS.CONTRACT);
      return;
    }

    if (phase === WorkoutPhase.CONTRACT) {
      setPhase(WorkoutPhase.RELAX);
      setTimeLeft(TIMINGS.RELAX);
      return;
    }

    if (phase === WorkoutPhase.RELAX) {
      if (repCount < TIMINGS.REPS) {
        setRepCount((prev) => prev + 1);
        setPhase(WorkoutPhase.CONTRACT);
        setTimeLeft(TIMINGS.CONTRACT);
      } else {
        // Exercise Complete
        if (exerciseIndex < EXERCISES.length - 1) {
          setExerciseIndex((prev) => prev + 1);
          setRepCount(1);
          setPhase(WorkoutPhase.PREPARE);
          setTimeLeft(TIMINGS.PREPARE);
        } else {
          onFinish();
        }
      }
    }
  }, [phase, repCount, exerciseIndex, onFinish, playPhaseTransition]);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0.1) {
            nextPhase();
            return 0; // Will get reset in nextPhase immediately
          }
          return prev - 0.1;
        });
      }, 100);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, nextPhase]);

  // Handler for manual skip
  const handleSkip = () => {
    if (exerciseIndex < EXERCISES.length - 1) {
      setExerciseIndex((prev) => prev + 1);
      setRepCount(1);
      setPhase(WorkoutPhase.PREPARE);
      setTimeLeft(TIMINGS.PREPARE);
    } else {
      onFinish();
    }
  };

  // Handler for previous
  const handlePrev = () => {
    if (exerciseIndex > 0) {
      setExerciseIndex((prev) => prev - 1);
      setRepCount(1);
      setPhase(WorkoutPhase.PREPARE);
      setTimeLeft(TIMINGS.PREPARE);
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case WorkoutPhase.CONTRACT: return 'text-cyber-neon border-cyber-neon';
      case WorkoutPhase.RELAX: return 'text-cyber-cyan border-cyber-cyan';
      case WorkoutPhase.PREPARE: return 'text-white border-white';
      default: return 'text-gray-500 border-gray-500';
    }
  };

  const getPhaseLabel = () => {
    switch (phase) {
      case WorkoutPhase.CONTRACT: return 'CONTRACT';
      case WorkoutPhase.RELAX: return 'RELAX';
      case WorkoutPhase.PREPARE: return 'GET READY';
      default: return '';
    }
  };

  return (
    <div className="fixed inset-0 w-full h-[100dvh] flex flex-col bg-cyber-black text-white overflow-hidden">
      {/* Top Bar */}
      <div className="h-14 md:h-16 flex-none flex items-center justify-between px-4 md:px-6 border-b border-cyber-panel bg-cyber-dark/50 z-20">
        <button onClick={onExit} className="text-gray-400 hover:text-white transition p-2">
          <ChevronLeft size={20} />
        </button>
        <div className="flex-1 mx-4 md:mx-8">
            <div className="flex justify-between text-[10px] md:text-xs font-mono text-gray-500 mb-1">
                <span>PROGRESS</span>
                <span>{exerciseIndex + 1} / {EXERCISES.length}</span>
            </div>
            <div className="h-1 w-full bg-cyber-panel rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-neon"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                />
            </div>
        </div>
        <div className="w-9" /> {/* Spacer */}
      </div>

      {/* Main Content Area - Split Vertical on Mobile, Horizontal on Desktop */}
      <div className="flex-1 relative flex flex-col md:flex-row min-h-0">
        
        {/* Left Panel: Info & Visual (Top on Mobile) */}
        {/* min-h-0 allows the nested scroll to work properly within flex container */}
        <div className="flex-1 md:w-1/2 p-4 md:p-12 flex flex-col relative z-10 min-h-0">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentExercise.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full"
                >
                    {/* Header Info */}
                    <div className="flex-none flex items-center gap-2 md:gap-3 mb-2 md:mb-6">
                        <div className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-cyber-panel border border-cyber-dim rounded text-[10px] md:text-xs font-mono text-cyber-cyan">
                            EXERCISE {currentExercise.id < 10 ? `0${currentExercise.id}` : currentExercise.id}
                        </div>
                        <div className="text-[10px] md:text-xs font-mono text-gray-500 tracking-wider">
                           SPINAL PROTOCOL
                        </div>
                    </div>
                    
                    <h2 className="flex-none text-xl md:text-5xl font-bold leading-tight text-white mb-2 md:mb-4 truncate">
                        {currentExercise.title}
                    </h2>
                    
                    {/* Visual Guide Container - Fixed Height on Mobile to prevent layout shifting */}
                    {/* Reduced height from h-32 to h-28 on mobile to save vertical space */}
                    <div className="flex-none w-full h-28 md:h-auto md:aspect-[2/1] bg-cyber-panel border border-cyber-dim rounded-lg relative overflow-hidden group flex items-center justify-center p-2 md:p-4 mb-3 md:mb-4">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-neon/5 via-transparent to-transparent opacity-50" />
                        
                        <div className="h-full aspect-square relative z-10">
                            <ExerciseIllustration id={currentExercise.id} />
                        </div>
                    </div>

                    {/* Scrollable Description Area */}
                    <div className="flex-1 overflow-y-auto pr-2 space-y-2 md:space-y-3 min-h-0">
                        <div className="flex gap-3 items-start">
                             <div className="w-0.5 md:w-1 h-8 md:h-12 bg-cyber-dim mt-1 rounded-full overflow-hidden flex-shrink-0">
                                 <div className="w-full h-1/2 bg-cyber-neon" />
                             </div>
                             <div>
                                <h3 className="text-[10px] md:text-sm text-gray-400 font-mono mb-0.5">INSTRUCTION</h3>
                                <p className="text-sm md:text-lg text-gray-200 leading-relaxed">
                                    {currentExercise.description}
                                </p>
                             </div>
                        </div>

                        <div className="p-2 md:p-4 rounded border border-cyber-dim bg-cyber-dim/20 text-xs md:text-sm font-mono text-cyber-cyan/80 flex items-center gap-2">
                            <Play size={12} className="md:w-3.5 md:h-3.5 flex-shrink-0" />
                            {currentExercise.conditions}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Right Panel: Timer & Controls (Bottom on Mobile) */}
        {/* Changed justify-center to justify-evenly to spread elements out nicely */}
        <div className="flex-none h-[42vh] md:h-auto md:flex-1 md:w-1/2 bg-cyber-dark/30 border-t md:border-t-0 md:border-l border-cyber-panel flex flex-col relative z-20">
             
             <div className="relative z-10 flex flex-col items-center justify-evenly h-full w-full py-2">
                {/* Timer Ring - Reduced to w-32 (128px) on mobile to fit tight screens */}
                <div className="relative w-32 h-32 md:w-80 md:h-80 flex items-center justify-center">
                    {/* SVG Ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle
                            cx="50%" cy="50%" r="48%"
                            className="stroke-cyber-panel"
                            strokeWidth="6"
                            fill="none"
                        />
                        <motion.circle
                            cx="50%" cy="50%" r="48%"
                            className={`stroke-current ${phase === WorkoutPhase.CONTRACT ? 'text-cyber-neon' : phase === WorkoutPhase.RELAX ? 'text-cyber-cyan' : 'text-white'}`}
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 1 }}
                            animate={{ 
                                pathLength: phase === WorkoutPhase.PREPARE 
                                    ? timeLeft / TIMINGS.PREPARE 
                                    : phase === WorkoutPhase.CONTRACT 
                                        ? timeLeft / TIMINGS.CONTRACT 
                                        : timeLeft / TIMINGS.RELAX 
                            }}
                            transition={{ duration: 0.1, ease: "linear" }}
                        />
                    </svg>
                    
                    {/* Digital Display */}
                    <div className="text-center">
                        <motion.div 
                            key={phase}
                            className={`text-4xl md:text-8xl font-mono font-bold tracking-tighter tabular-nums ${getPhaseColor().split(' ')[0]}`}
                        >
                            {Math.ceil(timeLeft)}
                        </motion.div>
                        <motion.div 
                            key={`${phase}-label`}
                            className={`text-xs md:text-2xl font-bold tracking-[0.2em] mt-1 md:mt-2 ${getPhaseColor().split(' ')[0]}`}
                        >
                            {getPhaseLabel()}
                        </motion.div>
                    </div>
                </div>

                {/* Rep Counter or Prep Text */}
                <div className="h-6 md:h-8 flex items-center justify-center">
                  {phase !== WorkoutPhase.PREPARE ? (
                      <div className="flex items-center gap-2 font-mono text-lg md:text-xl">
                          <span className="text-gray-500 text-xs md:text-base">REP</span>
                          <span className="text-white text-xl md:text-3xl font-bold">{repCount}</span>
                          <span className="text-gray-600">/</span>
                          <span className="text-gray-600">{TIMINGS.REPS}</span>
                      </div>
                  ) : (
                      <div className="font-mono text-xs md:text-xl text-gray-500 animate-pulse">
                          GET INTO POSITION
                      </div>
                  )}
                </div>

                 {/* Controls */}
                 <div className="w-full flex justify-center gap-6">
                    <button 
                        onClick={handlePrev}
                        className="p-3 md:p-4 rounded-full bg-cyber-panel border border-cyber-dim text-gray-400 hover:text-white hover:border-white transition-all active:scale-95"
                        disabled={exerciseIndex === 0}
                    >
                        <RotateCcw size={18} className="md:w-6 md:h-6" />
                    </button>
                    
                    <button 
                        onClick={() => setIsActive(!isActive)}
                        className={`p-4 md:p-6 rounded-full border-2 transition-all active:scale-95 shadow-lg ${isActive ? 'bg-transparent border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10' : 'bg-cyber-neon border-cyber-neon text-cyber-black hover:bg-cyber-neon/80'}`}
                    >
                        {isActive ? <Pause size={24} fill="currentColor" className="md:w-8 md:h-8" /> : <Play size={24} fill="currentColor" className="ml-1 md:w-8 md:h-8" />}
                    </button>

                    <button 
                        onClick={handleSkip}
                        className="p-3 md:p-4 rounded-full bg-cyber-panel border border-cyber-dim text-gray-400 hover:text-white hover:border-white transition-all active:scale-95"
                    >
                        <SkipForward size={18} className="md:w-6 md:h-6" />
                    </button>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSession;