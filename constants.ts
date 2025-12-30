
import { Scenario } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    situation: "Look! The deck is wet. The recruits finished cleaning it just a minute ago.",
    emoji: "⚓ 🧹 💧",
    correctAnswer: "Recruits HAVE WASHED the deck.",
    incorrectAnswer: "Recruits washed the deck.",
    isPerfect: true,
    explanation: "We use Present Perfect ('Have Washed') because the evidence (the wet floor) is visible right now."
  },
  {
    id: 2,
    situation: "The deck is dry and clean. The recruits cleaned it this morning. Now it is evening.",
    emoji: "☀️ 🧹 ✨",
    correctAnswer: "Recruits WASHED the deck.",
    incorrectAnswer: "Recruits have washed the deck.",
    isPerfect: false,
    explanation: "We use Simple Past ('Washed') because the action finished in the past and the floor is already dry. There is no current link."
  },
  {
    id: 3,
    situation: "Look at the anchor! There is fresh rust on it. The sea water caused this.",
    emoji: "⛓️ 🌊 🦀",
    correctAnswer: "The salt water HAS RUSTED the anchor.",
    incorrectAnswer: "The salt water rusted the anchor.",
    isPerfect: true,
    explanation: "We use Present Perfect because the rust is still there on the anchor. It is a current result."
  },
  {
    id: 4,
    situation: "The cook is gone, but look: the plates are full and dinner is on the table.",
    emoji: "👨‍🍳 🍲 🍽️",
    correctAnswer: "The cook HAS PREPARED dinner.",
    incorrectAnswer: "The cook prepared dinner.",
    isPerfect: true,
    explanation: "We use Present Perfect because the dinner is ready to eat right now. It has current relevance."
  },
  {
    id: 5,
    situation: "The ship is safe in the port. It is sunny today, but there was a big storm yesterday.",
    emoji: "🚢 ☀️ ⛈️",
    correctAnswer: "We HAD a storm yesterday.",
    incorrectAnswer: "We have had a storm.",
    isPerfect: false,
    explanation: "We use Simple Past because the storm is over and the sun is out now. The event is finished."
  },
  {
    id: 6,
    situation: "Officer, look at the binoculars! They are in pieces on the floor.",
    emoji: "🔭 💥 🛠️",
    correctAnswer: "Someone HAS BROKEN the binoculars.",
    incorrectAnswer: "Someone broke the binoculars.",
    isPerfect: true,
    explanation: "We use Present Perfect because the broken pieces are visible evidence right now."
  },
  {
    id: 7,
    situation: "These binoculars are old and dusty. They broke two years ago during a training drill.",
    emoji: "🔭 🕰️ 🕸️",
    correctAnswer: "They BROKE two years ago.",
    incorrectAnswer: "They have broken two years ago.",
    isPerfect: false,
    explanation: "We use Simple Past because the event happened at a specific time (two years ago) and is completely finished."
  },
  {
    id: 8,
    situation: "The fuel gauge is at 100%. The supply ship just finished its task.",
    emoji: "⛽ 🚢 ✅",
    correctAnswer: "The supply ship HAS REFUELED our vessel.",
    incorrectAnswer: "The supply ship refueled our vessel.",
    isPerfect: true,
    explanation: "We use Present Perfect because the result (full tank) is relevant and visible right now."
  },
  {
    id: 9,
    situation: "The ship's tanks were empty last week, so we filled them at the naval base.",
    emoji: "⛽ 📅 ⚓",
    correctAnswer: "We FILLED the tanks last week.",
    incorrectAnswer: "We have filled the tanks last week.",
    isPerfect: false,
    explanation: "We use Simple Past because 'last week' refers to a finished period in the past."
  },
  {
    id: 10,
    situation: "Listen! The alarm is ringing loudly! An emergency is happening right now.",
    emoji: "🚨 🔊 ⚠️",
    correctAnswer: "An emergency HAS STARTED.",
    incorrectAnswer: "An emergency started.",
    isPerfect: true,
    explanation: "We use Present Perfect because the action has immediate relevance to the current situation."
  },
  {
    id: 11,
    situation: "The fire drill started at 08:00 and finished at 09:00. It is 11:00 now.",
    emoji: "👨‍🚒 🕘 ⏹️",
    correctAnswer: "The drill STARTED at 08:00.",
    incorrectAnswer: "The drill has started at 08:00.",
    isPerfect: false,
    explanation: "We use Simple Past because the drill is over and we are talking about a specific point in time."
  },
  {
    id: 12,
    situation: "There is a fresh scratch on the hull. We hit a small rock a few seconds ago.",
    emoji: "🚢 🪨 💥",
    correctAnswer: "We HAVE HIT a rock.",
    incorrectAnswer: "We hit a rock.",
    isPerfect: true,
    explanation: "We use Present Perfect because the scratch is fresh evidence of the recent event."
  },
  {
    id: 13,
    situation: "The ship hit a pier in 2015. You can see the old repair marks if you look closely.",
    emoji: "🚢 🏚️ 🏗️",
    correctAnswer: "The ship HIT a pier in 2015.",
    incorrectAnswer: "The ship has hit a pier in 2015.",
    isPerfect: false,
    explanation: "We use Simple Past for historical events tied to a specific date like 2015."
  },
  {
    id: 14,
    situation: "The Petty Officer is worried. He doesn't have the keys to the armory in his pocket.",
    emoji: "😰 🔑 🚫",
    correctAnswer: "He HAS LOST the keys.",
    incorrectAnswer: "He lost the keys.",
    isPerfect: true,
    explanation: "We use Present Perfect because the state of being 'lost' continues to affect the present."
  },
  {
    id: 15,
    situation: "The Ensign lost his keys yesterday, but he found them under his bunk this morning.",
    emoji: "🔑 🗓️ 🛌",
    correctAnswer: "He LOST his keys yesterday.",
    incorrectAnswer: "He has lost his keys yesterday.",
    isPerfect: false,
    explanation: "We use Simple Past because 'yesterday' indicates a finished time and the problem is already solved."
  }
];
