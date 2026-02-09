const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noCount = 0;

/* GSAP INTRO */
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)"
});

gsap.from("#title, #question", {
  y: 30,
  opacity: 0,
  stagger: 0.2,
  delay: 0.3
});

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  message.classList.remove("hidden");

  // Flower-like confetti
  confetti({
    particleCount: 120,
    spread: 90,
    shapes: ["circle"],
    colors: ["#ff4d6d", "#ffb3c6", "#ffd6e0"],
    scalar: 1.2,
    origin: { y: 0.6 }
  });

  // Hearts
  confetti({
    particleCount: 40,
    spread: 70,
    shapes: ["heart"],
    colors: ["#ff4d6d"],
    origin: { y: 0.5 }
  });

  // Notify YOU
  fetch("https://webhook.site/a8fbe153-1696-4b16-9f37-95d55ad9b3f7", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Chelsea",
      answer: "YES ❤️",
      time: new Date().toISOString()
    })
  });

});

/* NO BUTTON TROLL */
noBtn.addEventListener("touchstart", dodge);
noBtn.addEventListener("mouseover", dodge);

function dodge() {
  noCount++;

  if (noCount > 4) {
    noBtn.innerText = "Yes 😌";
    noBtn.style.background = "#ff4d6d";
    noBtn.style.color = "white";
    noBtn.onclick = () => yesBtn.click();
    return;
  }

  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;

  gsap.to(noBtn, {
    x,
    y,
    duration: 0.3
  });
}
