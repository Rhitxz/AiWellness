import { randomFill } from "crypto";

const tiredSuggestions = [
  "Take a short nap (15–25 minutes max)",
  "Step away from screens for 10–20 minutes",
  "Drink a glass of water – dehydration can worsen fatigue",
  "Go for a short walk or stretch your body",
  "Do some light breathing or meditation exercises",
  "Listen to calming or favorite music",
  "Have a healthy snack (nuts, fruit, yogurt)",
  "Take a shower or splash cold water on your face",
  "Change your environment – sit somewhere else or get some fresh air",
  "Do something creative and low-effort – doodling, journaling, casual gaming",
  "Talk to a friend or loved one (if you feel up to it)",
  "Lie down and rest without trying to sleep",
  "Close your eyes and breathe deeply for a few minutes",
  "Let go of the guilt of not being productive – rest is productive too",
];

export default function Tired(){
    return (
        <div>
            {tiredSuggestions[Math.floor(Math.random() * 10) + 1]}
        
        </div>
    )
}