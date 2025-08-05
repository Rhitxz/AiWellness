const stressSuggestions = [
  "Take 5 deep, slow breaths — inhale deeply, hold, exhale fully",
  "Go for a short walk, preferably in nature or fresh air",
  "Listen to calming or instrumental music",
  "Write down what's stressing you out — get it out of your head",
  "Do a quick body stretch or some light yoga",
  "Drink a glass of water and take a mindful break",
  "Disconnect from screens for 10–20 minutes",
  "Try a 5-minute guided meditation or breathing app",
  "Focus on one small task you can complete — reduce overwhelm",
  "Light a candle or use a calming scent like lavender",
  "Do something repetitive and soothing (coloring, folding clothes, etc.)",
  "Take a warm shower or bath to relax your body",
  "Talk it out with someone you trust",
  "Remind yourself: 'This feeling is temporary — I will get through it'",
];

export default function Stress(){
    return(
        <div>
           {stressSuggestions[Math.floor(Math.random() * 10) + 1]}
        </div>
    )
}