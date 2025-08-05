const happySuggestions = [
  "Write down what made you happy to remember later",
  "Share your joy with someone — spread the good vibes!",
  "Take a photo or video to capture the moment",
  "Dance or listen to your favorite upbeat music",
  "Do something kind for someone else — it doubles the happiness",
  "Go for a walk and enjoy the moment mindfully",
  "Treat yourself to something small you enjoy",
  "Call a friend or loved one just to chat",
  "Channel your happiness into something creative (draw, write, cook)",
  "Practice gratitude — list 3 things you're thankful for",
  "Smile at a stranger — happiness is contagious",
  "Reflect on how far you've come",
  "Celebrate small wins, not just big ones",
];

export default function Happy(){
    return(
        <div>
           {happySuggestions[Math.floor(Math.random() * 10) + 1]}
        </div>
    )
}