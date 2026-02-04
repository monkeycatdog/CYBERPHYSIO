import React from 'react';

interface IllustrationProps {
  id: number;
  color?: string;
  className?: string;
}

export const ExerciseIllustration: React.FC<IllustrationProps> = ({ 
  id, 
  color = "#39ff14", // Default neon green
  className = "" 
}) => {
  
  const renderPath = () => {
    switch(id) {
      // 1. Sphinx: Prone, elbows down
      case 1: return (
        <g>
          <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" /> {/* Floor */}
          <circle cx="35" cy="45" r="5" /> {/* Head */}
          <path d="M35 50 C45 60 55 75 70 80 L90 80" /> {/* Spine/Legs */}
          <path d="M40 65 L40 80 L55 80" /> {/* Arms on floor */}
        </g>
      );
      
      // 2. Cat: All fours arched
      case 2: return (
        <g>
          <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
          <circle cx="25" cy="55" r="5" />
          <path d="M30 55 Q55 25 80 55" /> {/* Arched Back */}
          <path d="M35 50 L35 80" /> {/* Arms */}
          <path d="M75 50 L75 80" /> {/* Legs */}
        </g>
      );

      // 3. Cobra: Prone, arms straight
      case 3: return (
        <g>
          <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
          <circle cx="25" cy="35" r="5" />
          <path d="M25 40 Q35 70 60 80 L90 80" />
          <path d="M40 55 L45 80" /> {/* Straight arms */}
        </g>
      );

      // 4. Child's Pose
      case 4: return (
        <g>
          <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
          <circle cx="70" cy="72" r="5" />
          <path d="M70 72 Q50 50 30 70" /> {/* Back */}
          <path d="M30 70 L50 80" /> {/* Legs under */}
          <path d="M65 70 L15 80" /> {/* Arms stretched */}
        </g>
      );

      // 5. Lumbar Twist (Supine)
      case 5: return (
        <g>
           <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
           <circle cx="30" cy="75" r="5" />
           <path d="M30 75 L60 75" /> {/* Torso */}
           <path d="M60 75 L75 55 L85 70" /> {/* Legs twisted */}
           <path d="M35 75 L35 55" /> {/* Arms out */}
           <path d="M70 45 Q 80 40 85 50" strokeWidth="1" strokeDasharray="3 3" /> {/* Arrow */}
        </g>
      );

      // 6. Pelvic Tilt (Supine, knees bent)
      case 6: return (
        <g>
           <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
           <circle cx="20" cy="75" r="5" />
           <path d="M20 75 L60 75" /> {/* Torso flat */}
           <path d="M60 75 L75 50 L90 75" /> {/* Knees bent */}
           <path d="M40 65 L40 75" strokeWidth="2" markerEnd="url(#arrow)" /> {/* Press down */}
        </g>
      );

      // 7. One Leg to Chest
      case 7: return (
        <g>
           <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
           <circle cx="20" cy="75" r="5" />
           <path d="M20 75 L60 75" /> {/* Torso */}
           <path d="M60 75 L90 75" /> {/* One leg straight */}
           <path d="M60 75 L50 55 L40 65" /> {/* One leg hugged */}
           <path d="M30 70 L45 60" /> {/* Arms holding */}
        </g>
      );

      // 8. Knees to Chest
      case 8: return (
        <g>
           <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
           <circle cx="20" cy="70" r="5" />
           <path d="M20 70 L50 75" /> {/* Upper back up slightly */}
           <path d="M50 75 L40 55 L35 65" /> {/* Legs hugged */}
           <path d="M30 65 L40 55" /> {/* Arms */}
        </g>
      );

      // 9. Arm Lift (Quadruped)
      case 9: return (
        <g>
           <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
           <circle cx="25" cy="55" r="5" />
           <path d="M30 55 L75 55" /> {/* Back flat */}
           <path d="M30 55 L10 50" /> {/* Arm forward */}
           <path d="M35 55 L35 80" /> {/* Support Arm */}
           <path d="M75 55 L75 80" /> {/* Legs */}
        </g>
      );

      // 10. Leg Lift (Quadruped)
      case 10: return (
        <g>
           <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
           <circle cx="25" cy="55" r="5" />
           <path d="M30 55 L75 55" />
           <path d="M35 55 L35 80" />
           <path d="M75 55 L95 50" /> {/* Leg Back */}
           <path d="M70 55 L70 80" /> {/* Support Leg */}
        </g>
      );

      // 11. Bird-Dog
      case 11: return (
        <g>
           <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
           <circle cx="25" cy="55" r="5" />
           <path d="M30 55 L75 55" />
           <path d="M30 55 L10 50" /> {/* Arm fwd */}
           <path d="M75 55 L95 50" /> {/* Leg back */}
           <path d="M35 55 L35 80" /> {/* Support */}
           <path d="M70 55 L70 80" /> {/* Support */}
        </g>
      );

      // 12. Crunch
      case 12: return (
        <g>
           <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
           <circle cx="25" cy="65" r="5" />
           <path d="M25 70 L55 75" /> {/* Back lifted */}
           <path d="M55 75 L70 50 L85 75" /> {/* Knees bent */}
           <path d="M30 65 L60 60" /> {/* Arms reaching */}
        </g>
      );

      // 13. Oblique Rotation
      case 13: return (
        <g>
           <path d="M10 80 L90 80" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
           <circle cx="25" cy="60" r="5" />
           <path d="M25 65 L55 75" />
           <path d="M55 75 L70 50 L85 75" />
           <path d="M30 60 L50 55" /> {/* Arms to side */}
           <path d="M20 50 Q 30 40 40 50" strokeWidth="1" strokeDasharray="3 3" /> {/* Rotation arrow */}
        </g>
      );

      default: return null;
    }
  }

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`w-full h-full drop-shadow-[0_0_8px_rgba(57,255,20,0.3)] ${className}`}
    >
      {renderPath()}
    </svg>
  );
};