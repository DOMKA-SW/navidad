const music = document.getElementById("music");
let startedMusic = false;

// 🎵 Activar música al primer click
document.body.addEventListener("click", () => {
  if (!startedMusic) {
    music.play();
    startedMusic = true;
  }
});

// ⏳ Conteo corto (10 segundos)
let timeLeft = 10;
const countdown = document.getElementById("countdown");
const btn = document.getElementById("continueBtn");
const hint = document.getElementById("hint");

const timer = setInterval(() => {
  timeLeft--;
  countdown.innerText = `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`;

  if (timeLeft <= 0) {
    clearInterval(timer);
    countdown.innerText = "00:00";
    btn.disabled = false;
    btn.classList.add("active");
    hint.innerText = "Ya es momento… haz clic 💝";
  }
}, 1000);

// ➡️ Continuar a regalo
btn.addEventListener("click", () => {
  document.getElementById("countdownSection").classList.remove("active");
  document.getElementById("giftSection").classList.add("active");
});

// 🎁 Abrir regalo
const gift = document.getElementById("giftBox");
gift.addEventListener("click", () => {
  gift.classList.add("open");

  setTimeout(() => {
    document.getElementById("giftSection").classList.remove("active");
    document.getElementById("letterSection").classList.add("active");
    writeLetter();
  }, 1000);
});

// ✍️ Carta typewriter
const message = `
Ana Maria Vr,

Gracias por llegar a mi vida y hacerla más bonita.
Cada momento contigo es un regalo que valoro más
de lo que las palabras pueden decir.

Que esta Navidad esté llena de amor,
sonrisas y nuevos recuerdos juntos.

Feliz Navidad ❤️
`;

function writeLetter() {
  const letter = document.getElementById("letter");
  let i = 0;

  const writer = setInterval(() => {
    letter.innerHTML += message.charAt(i);
    i++;
    if (i >= message.length) clearInterval(writer);
  }, 40);
}
