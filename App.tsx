import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import WorkoutSession from './components/WorkoutSession';
import FinishedScreen from './components/FinishedScreen';

enum AppState {
  WELCOME = 'WELCOME',
  WORKOUT = 'WORKOUT',
  FINISHED = 'FINISHED',
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.WELCOME);

  const startWorkout = () => setAppState(AppState.WORKOUT);
  const finishWorkout = () => setAppState(AppState.FINISHED);
  const goHome = () => setAppState(AppState.WELCOME);

  return (
    <div className="font-sans text-white bg-cyber-black min-h-screen">
      {appState === AppState.WELCOME && (
        <WelcomeScreen onStart={startWorkout} />
      )}
      {appState === AppState.WORKOUT && (
        <WorkoutSession onFinish={finishWorkout} onExit={goHome} />
      )}
      {appState === AppState.FINISHED && (
        <FinishedScreen onHome={goHome} />
      )}
    </div>
  );
};

export default App;