const heartButton = document.getElementById('heartButton');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');
const closeBtn = document.getElementById('closeBtn');
const heartParticles = document.getElementById('heartParticles');
const spotifyEmbed = document.getElementById('spotifyEmbed');
const mediaEmbed = document.getElementById('mediaEmbed');
const overlay = document.getElementById('overlay');

const messages = [
  { text: "Cuanto más tiempo estoy contigo, más te amo! 🌹" },
  {
    text: "Eres mi sueño guajiro. 💕",
    spotify: true
  },
  {
    text: "No importa cúanto tardes, tomate el tiempo que necesites para volver a sentirte completa ❤️",
  },
  {
    text: "Por mirar tus ojos he perdido el sueño ahora tus ojos son mi noche tus ojos son estrellas ✨",
  },
  {
    text: "Tengo miedo de que un dia dejes de mirarme ccon esos ojos llenos de amor y comiences a verme de la forma en la que yo me veo 😔",
  },
  {
    text: "Y si vivimos mil vidas, en mil vidas te vuelvo a amar ❤️",
  },
  {
    text: "Todas mis dudas encontraron sus respuestas contigo. 🥰",
  },
  {
    text: "Solia tenerle miedo a desbordarme de amor. Tal vez porque pensaba que no habria nadie que lo valorar. Pero cuando te conocí, descubrí que no había otra forma de amarte que desbordándome de amor 🫶",
  },
  {
    text: "Quizas es tan facíl amarte porque ya te había amado en todas nuestras vidas pasadas 💞",
  },
  {
    text: "Tengo que confesarte algo: No soy perfecto y no estoy dispuesto a intentar serlo. A lo que sí estoy dispuesti es a entregarte lo mejor de mí, día a día. Y a intentar mejorar en las cosas que haga mal, porque se trata de ser real, no perfecto ❤️‍🔥",
  },
  {
    text: "Tan pocos planetas para el universo que me haces sentir 🪐",
  },
  {
    text: "Nunca entendí el significadp de soledad hasta que estuve rodeado de gente y tan solo quise que estuvieras tu 👩🏻",
  },
  {
    text: "Amor mío, hoy quiero decirte algo: Se que a veces es dificil entenderlo, pero puedo decirte con absoluta certeza que no hay nada ni nadie que logre cambiar el amor que te tengo ❤️",
  },
  {
    text: "Un día de café ❤️",
    image: 'imagenes/cafe.jpg'
  },
  {
    text: "Un día mas estando contigo ❤️",
    image: 'imagenes/imagen1.jpg'
  },
  {
    text: "Un buen beso en un buen lugar 💏",
    image: 'imagenes/Imagen2.jpg'
  },
  {
    text: "Una primera y buena foto ❤️",
    image: 'imagenes/Imagen3.jpg'
  },
  {
    text: "Así quisiese estar pero no mas no quieres 😔",
    image: 'imagenes/Imagen4.jpg'
  },
  {
    text: "Bueno amor solamente espero desearte una excelente tarde o noche, no se en que momento andes viendo esto pero eso si solamente espero que te guste mucho. Al igual espero que te andes cuidando y sobre todo que si andes comiendo a tus horas y sobre todo que andes tomando agua..... bueno amor mas que nada siento que a lo mejor ya no hacia algo asi pero no es porque no quiera, pero solamente quiero que sepas que te sigo queriendo como aquel primer dia que estuvimos juntos, te sigo amando demasiado y sobre todo me siguen entrando los nervios al verte como aquella vez que te pedi que fueras mi novia🥰. Siempre engo la necesidad de verte pero eso si sabemos que no se puede todos los dias, pero lo que si se es que lo que siento por ti no cambia, solamente espero seguir cumpliendo tus expectativas pero ademas de eso que me sigas quriendo y amando como yo a ti lo hago, sabes que mi unica intención es poder hacerte feliz aunque aveces fallo en eso, es algo que día a día trato de mejorar. Mas que otra cosa quiero que te sientas libre y sobre todo que te sientas a gusta contigo misma, yo no quiero ser una persona a la cual le tengas miedo o sientas que soy muy controlador, solo quiero que seas feliz. Bueno amor es algo pequeño pero espero te haya gustado y eso si NO OLVIDES LO MUCHO QUE TE AMO ❤️‍🔥 no se si mañana andas muy ocupada si no es asi para que yo vaya y pueda estar aunque sea un rato contigo si estas ocupada o tienes cosas que hacer dime y no pasa nada, BONITA TARDE MI VIDA ❤️🥰 ",
  }
];

let messageIndex = 0;

heartButton.addEventListener('click', () => {
  messageBox.classList.remove('hidden');
  overlay.classList.remove('hidden');

  const currentMessage = messages[messageIndex];

  if (messageIndex === 18) {
    // Último mensaje (muy largo)
    messageBox.style.top = '-130px';
  } else if (currentMessage.image) {
    // Si tiene imagen
    messageBox.style.top = '-240px';
  } else {
    // Mensaje normal
    messageBox.style.top = '200px';
  }

  messageText.textContent = currentMessage.text;
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

  if (currentMessage.image) {
    spotifyEmbed.classList.remove('hidden');
    spotifyEmbed.innerHTML = `<img src="${currentMessage.image}" style="max-width: 100%; border-radius: 12px; margin-top: 10px;" alt="Imagen del mensaje" />`;
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
