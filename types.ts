export interface Exercise {
  id: number;
  title: string;
  description: string;
  picture: string; // This is a description of the picture based on the JSON provided
  conditions: string;
}

export enum WorkoutPhase {
  IDLE = 'IDLE',
  PREPARE = 'PREPARE', // Buffer before starting an exercise
  CONTRACT = 'CONTRACT',
  RELAX = 'RELAX',
  FINISHED = 'FINISHED'
}

export interface WorkoutState {
  currentIndex: number;
  currentRep: number;
  phase: WorkoutPhase;
  timeLeft: number;
  isActive: boolean;
}