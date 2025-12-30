
import React, { useState, useMemo } from 'react';
import { GameState, Scenario, FeedbackData } from './types';
import { SCENARIOS } from './constants';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('START');
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lastFeedback, setLastFeedback] = useState<FeedbackData | null>(null);

  const startGame = () => {
    // Shuffle the scenarios themselves
    const shuffled = [...SCENARIOS].sort(() => Math.random() - 0.5);
    setScenarios(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setGameState('PLAYING');
    setLastFeedback(null);
  };

  const handleAnswer = (answer: string) => {
    const current = scenarios[currentIndex];
    const isCorrect = answer === current.correctAnswer;
    
    setScore(prev => isCorrect ? prev + 10 : prev - 5);
    setLastFeedback({
      isCorrect,
      message: isCorrect ? "Excellent Report, Officer!" : "Incorrect Report!",
      explanation: current.explanation
    });
    setGameState('FEEDBACK');
  };

  const nextScenario = () => {
    if (currentIndex + 1 < scenarios.length) {
      setCurrentIndex(prev => prev + 1);
      setGameState('PLAYING');
      setLastFeedback(null);
    } else {
      setGameState('FINISHED');
    }
  };

  const currentScenario = scenarios[currentIndex];

  // Randomize the choices for the current scenario
  const choices = useMemo(() => {
    if (!currentScenario) return [];
    return [currentScenario.correctAnswer, currentScenario.incorrectAnswer]
      .sort(() => Math.random() - 0.5);
  }, [currentScenario]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-[#001f3f] text-white p-6 shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-4">
          <i className="fas fa-anchor text-3xl text-yellow-500"></i>
          <h1 className="text-xl md:text-2xl font-bold heading-font tracking-tight uppercase">Captain's Log: The Inspection</h1>
        </div>
        <div className="bg-white/10 px-4 py-2 rounded-full font-bold text-sm md:text-base whitespace-nowrap">
          Score: <span className={score >= 0 ? 'text-green-400' : 'text-red-400'}>{score}</span>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center max-w-2xl">
        {gameState === 'START' && (
          <div className="text-center bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-t-8 border-[#001f3f] w-full">
            <div className="mb-6 relative inline-block">
                <i className="fas fa-ship text-7xl navy-text"></i>
                <div className="absolute -top-2 -right-2 bg-yellow-500 w-6 h-6 rounded-full border-4 border-white"></div>
            </div>
            <h2 className="text-3xl font-bold navy-text mb-4 heading-font">Welcome, Petty Officer!</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The Admiral is inspecting the ship. Your duty is to report the current status correctly. 
              Remember: Use <b>Present Perfect</b> for current evidence, and <b>Simple Past</b> for finished actions with no current link.
            </p>
            <button 
              onClick={startGame}
              className="bg-[#001f3f] hover:bg-[#003366] text-white font-bold py-4 px-12 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center gap-3 mx-auto uppercase tracking-widest"
            >
              <i className="fas fa-play"></i> Start Mission
            </button>
          </div>
        )}

        {gameState === 'PLAYING' && currentScenario && (
          <div className="w-full space-y-6">
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-slate-200">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  Log Entry {currentIndex + 1} / {scenarios.length}
                </span>
                <span className="text-4xl filter drop-shadow-sm">{currentScenario.emoji}</span>
              </div>
              
              <div className="mb-10">
                <h4 className="text-xs font-bold text-[#001f3f] mb-2 uppercase tracking-tighter opacity-50">Situation:</h4>
                <p className="text-xl font-medium text-slate-800 leading-relaxed italic border-l-4 border-yellow-500 pl-4">
                  "{currentScenario.situation}"
                </p>
              </div>

              <div className="space-y-4">
                {choices.map((choice, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleAnswer(choice)}
                    className="w-full p-6 border-2 border-slate-100 hover:border-[#001f3f] hover:bg-[#f8fafc] rounded-2xl transition-all text-left font-bold text-slate-700 flex items-center justify-between group shadow-sm hover:shadow-md"
                  >
                    <span className="flex-grow">{choice}</span>
                    <i className="fas fa-chevron-right text-slate-300 group-hover:text-[#001f3f] transform group-hover:translate-x-1 transition-transform"></i>
                  </button>
                ))}
              </div>
            </div>
            <div className="text-center text-slate-400 text-xs uppercase tracking-widest font-bold">
              <i className="fas fa-crosshairs mr-2"></i> Report with absolute precision
            </div>
          </div>
        )}

        {gameState === 'FEEDBACK' && lastFeedback && (
          <div className={`w-full bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-l-8 transform transition-all ${lastFeedback.isCorrect ? 'border-green-500 animate-pulse-subtle' : 'border-red-500'}`}>
            <div className="flex items-center gap-5 mb-8">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg ${lastFeedback.isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                <i className={`fas ${lastFeedback.isCorrect ? 'fa-check' : 'fa-times'} text-2xl`}></i>
              </div>
              <div>
                <h2 className={`text-2xl font-black uppercase tracking-tight ${lastFeedback.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {lastFeedback.message}
                </h2>
                <p className="text-slate-400 text-sm font-bold uppercase">Inspection Result</p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl mb-10 border border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <i className="fas fa-book-open"></i> Grammar Intelligence:
              </h4>
              <p className="text-slate-700 leading-relaxed font-semibold text-lg">
                {lastFeedback.explanation}
              </p>
            </div>

            <button 
              onClick={nextScenario}
              className="w-full bg-[#001f3f] hover:bg-[#003366] text-white font-bold py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest active:scale-95"
            >
              Next Log Entry <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        )}

        {gameState === 'FINISHED' && (
          <div className="text-center bg-white p-10 md:p-16 rounded-3xl shadow-2xl border-b-8 border-yellow-500 w-full">
            <div className="relative inline-block mb-8">
                <i className="fas fa-award text-8xl text-yellow-500"></i>
                <div className="absolute top-0 right-0 animate-ping w-4 h-4 bg-yellow-400 rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold navy-text mb-2 heading-font uppercase">Inspection Complete</h2>
            <p className="text-slate-400 mb-8 font-bold tracking-widest uppercase text-sm">Final Efficiency Rating</p>
            
            <div className="text-7xl font-black navy-text mb-12 drop-shadow-md">
              {score}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={startGame}
                className="bg-[#001f3f] text-white py-5 rounded-2xl font-bold shadow-xl hover:bg-[#003366] transition-all uppercase tracking-widest"
              >
                Restart Mission
              </button>
              <button 
                onClick={() => window.location.reload()}
                className="bg-slate-100 text-slate-600 py-5 rounded-2xl font-bold hover:bg-slate-200 transition-all uppercase tracking-widest"
              >
                Exit Records
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="p-8 text-center">
        <div className="flex justify-center gap-4 mb-2 text-slate-300">
            <i className="fas fa-anchor"></i>
            <i className="fas fa-compass"></i>
            <i className="fas fa-life-ring"></i>
        </div>
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            &copy; 2024 Naval English Training Center • Petty Officer Academy
        </p>
      </footer>
    </div>
  );
};

export default App;
