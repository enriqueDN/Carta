const heartButton = document.getElementById('heartButton');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');
const closeBtn = document.getElementById('closeBtn');
const heartParticles = document.getElementById('heartParticles');
const spotifyEmbed = document.getElementById('spotifyEmbed');
const overlay = document.getElementById('overlay');

const messages = [
  "Cuanto más tiempo estoy contigo, más te amo! 🌹",
  "Eres mi todo, mi razón de sonreír. 💕"
];

let messageIndex = 0;

heartButton.addEventListener('click', () => {
  messageBox.classList.remove('hidden');
  overlay.classList.remove('hidden');
  messageText.textContent = messages[messageIndex];
  spotifyEmbed.classList.add('hidden');

  if (messageIndex === 1) {
    spotifyEmbed.classList.remove('hidden');
    spotifyEmbed.innerHTML = `
      <iframe style="border-radius:12px"
      src="https://open.spotify.com/embed/track/2V9pPYbtIaxI4canNxsDrJ"
      width="100%" height="80"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      loading="lazy">
    </iframe>
`;
  }
});

closeBtn.addEventListener('click', () => {
  messageBox.classList.add('hidden');
  overlay.classList.add('hidden');
  spawnHearts();
  messageIndex = (messageIndex + 1) % messages.length;
});

function spawnHearts() {
  const rect = heartButton.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('particle');
    heart.textContent = '❤️';

    heart.style.left = `${centerX}px`;
    heart.style.top = `${centerY}px`;

    const angle = Math.random() * 2 * Math.PI;
    const distance = 120 + Math.random() * 100;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const rotate = Math.floor(Math.random() * 360);

    heart.style.setProperty('--dx', `${dx}px`);
    heart.style.setProperty('--dy', `${dy}px`);
    heart.style.setProperty('--rotate', `${rotate}deg`);

    heartParticles.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
}
