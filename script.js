const heartButton = document.getElementById('heartButton');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');
const closeBtn = document.getElementById('closeBtn');
const heartParticles = document.getElementById('heartParticles');
const spotifyEmbed = document.getElementById('spotifyEmbed');

const messages = [
  "Cuanto más tiempo estoy contigo, más te amo! 🌹",
  "Eres mi todo, mi razón de sonreír. 💕"
];

let messageIndex = 0;

heartButton.addEventListener('click', () => {
  messageBox.classList.remove('hidden');
  messageText.textContent = messages[messageIndex];
  spotifyEmbed.classList.add('hidden');

  if (messageIndex === 1) {
    spotifyEmbed.classList.remove('hidden');
    spotifyEmbed.innerHTML = `
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5w9c2J52mkdntKOmRLeM2m?utm_source=generator" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" loading="lazy"></iframe>
    `;
  }
});

closeBtn.addEventListener('click', () => {
  messageBox.classList.add('hidden');
  spawnHearts();

  // Avanza al siguiente mensaje para el siguiente click
  messageIndex = (messageIndex + 1) % messages.length;
});

function spawnHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('particle');
    heart.textContent = '❤️';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${50 + Math.random() * 50}px`;
    heartParticles.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}
