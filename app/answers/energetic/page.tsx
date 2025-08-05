const energeticSuggestions = [
  "Tackle a task you've been putting off",
  "Do a quick workout or dance session",
  "Clean or reorganize a part of your room or workspace",
  "Start a creative project — drawing, writing, coding, etc.",
  "Go for a run, bike ride, or walk to burn off the extra energy",
  "Make a to-do list and power through it",
  "Listen to upbeat music and sing along",
  "Record a voice note or journal while your thoughts are flowing",
  "Reach out to someone and start a conversation",
  "Cook or bake something fun and new",
  "Brainstorm ideas for a project or goal",
  "Do something spontaneous — try something new!",
  "Learn a new skill or explore a tutorial",
];

export default function energy(){
    return(
        <div>
           {energeticSuggestions[Math.floor(Math.random() * 10) + 1]}
        </div>
    )
}