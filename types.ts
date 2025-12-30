
export interface Scenario {
  id: number;
  situation: string;
  emoji: string;
  correctAnswer: string;
  incorrectAnswer: string;
  explanation: string;
  isPerfect: boolean; // true if Present Perfect is correct, false if Simple Past
}

export type GameState = 'START' | 'PLAYING' | 'FEEDBACK' | 'FINISHED';

export interface FeedbackData {
  isCorrect: boolean;
  message: string;
  explanation: string;
}
