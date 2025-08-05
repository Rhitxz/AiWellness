const peacefulSuggestions = [
  "Sit quietly and enjoy the stillness — no need to do anything",
  "Listen to gentle music or nature sounds",
  "Do some slow, mindful breathing",
  "Take a walk and observe your surroundings with gratitude",
  "Journal about how you’re feeling and why",
  "Light a candle or incense and enjoy the aroma",
  "Read a calming or inspiring book",
  "Sip tea or a warm drink mindfully",
  "Lie down and listen to your breath or heartbeat",
  "Look out a window and watch the world move gently",
  "Express appreciation to someone — even just a message",
  "Gently stretch your body and enjoy the movement",
  "Spend time in nature — even if it’s just your balcony or garden",
];

export default function Peace(){
    return(
        <div>
           {peacefulSuggestions[Math.floor(Math.random() * 10) + 1]}
        </div>
    )
}