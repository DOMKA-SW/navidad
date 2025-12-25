const music = document.getElementById("music");
let startedMusic = false;

document.body.addEventListener("click", () => {
  if (!startedMusic) {
    music.play();
    startedMusic = true;
  }
});

const countdown = document.getElementById("countdown");
const btn = document.getElementById("continueBtn");
const hint = document.getElementById("hint");

//const targetDate = new Date("2025-12-24T00:00:00-05:00");
const targetDate = new Date(Date.now() + 15000); // +15 segundos

function checkBogotaTime() {
  const now = new Date();
  const bogotaNow = new Date(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Bogota",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(now).replace(",", "")
  );

  if (bogotaNow >= targetDate) {
    btn.disabled = false;
    btn.classList.add("active");
    countdown.innerText = "¡Feliz Navidad! 🎄✨";
    hint.innerText = "Ya es momento… haz clic 💝";
    clearInterval(timer);
  } else {
    const diff = targetDate - bogotaNow;
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    countdown.innerText = `${h}h ${m}m ${s}s`;
  }
}

const timer = setInterval(checkBogotaTime, 1000);
checkBogotaTime();

/* ➡️ Continuar */
btn.addEventListener("click", () => {
  document.getElementById("countdownSection").classList.remove("active");
  document.getElementById("giftSection").classList.add("active");
});

/* 🎁 Abrir regalo */
const gift = document.getElementById("giftBox");
gift.addEventListener("click", () => {
  gift.classList.add("open");

  setTimeout(() => {
    document.getElementById("giftSection").classList.remove("active");
    document.getElementById("letterSection").classList.add("active");
    writeLetter();
  }, 1000);
});

/* ✍️ Carta */
const message = `
Ana Maria Vr,

Gracias por llegar a mi vida y hacerla más bonita.
Cada momento contigo es un regalo que valoro
más de lo que las palabras pueden decir.

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
