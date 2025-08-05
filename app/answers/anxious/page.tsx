const anxietySuggestions = [
  "Practice deep breathing exercises (inhale slowly, hold, exhale)",
  "Try mindfulness meditation or grounding techniques",
  "Go for a walk outside and focus on your surroundings",
  "Write down your thoughts to clear your mind",
  "Talk to a trusted friend or family member",
  "Limit caffeine and sugar intake",
  "Listen to calming music or nature sounds",
  "Engage in light physical exercise like stretching or yoga",
  "Take breaks from screens and social media",
  "Use positive affirmations or calming mantras",
  "Focus on what you can control right now",
  "Try progressive muscle relaxation",
  "Get enough sleep and rest",
  "If anxiety is severe, consider seeking professional help",
];


export default function Anxious(){
    return (
        <div>
            {anxietySuggestions[Math.floor(Math.random() * 10) + 1]}
        
        </div>
    )
}