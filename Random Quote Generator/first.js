const quotes = [
  "Believe you can and you're halfway there. — Unknown",
  "Small steps every day lead to big changes. — Unknown",
  "Do what you can, with what you have, where you are. — Unknown",
  "Progress, not perfection. — Unknown",
  "Turn your wounds into wisdom. — Unknown",
  "Don't wait for opportunity. Create it. — Unknown",
  "Focus on the journey, not the destination. — Unknown",
  "Be curious, not judgmental. — Unknown",
  "Work hard in silence; let success make the noise. — Unknown",
  "If it matters to you, make time for it. — Unknown",
  "Start where you are. Use what you have. Do what you can. — Unknown",
  "Consistency compounds. — Unknown",
  "Fail fast, learn faster. — Unknown",
  "Choose progress over comfort. — Unknown",
  "Simplicity is the ultimate sophistication. — Unknown",
  "Your only limit is your beliefs. — Unknown",
  "Action cures fear. — Unknown",
  "Create something people want. — Unknown",
  "Keep learning, keep growing. — Unknown",
  "Celebrate small wins. — Unknown"
];

const button=document.querySelector("button")
const quote=document.querySelector("h1")

button.addEventListener('click', ()=>{
    const index=Math.floor(Math.random()*20);

    quote.textContent=quotes[index];
})