

const CONFIG = {
  
  girlfriendName: "Anna",
  myName: "YUKI", 

  
  
  
  
  music: "assets/music/Feist - My Moon My Man.mp3",
  musicTitle: "Her Fav Song ♡",

  
  secretPassword: "lovie",
  secretHints: [
    "Hint 1: It's a sweet little nickname... ♡",
    "Hint 2: Starts with 'l' and ends with 'e'...",
    "Hint 3: It has 5 letters: l-o-v-i-e 😉"
  ],

  
  
  
  photos: [
    {
      src: "assets/images/photo1.png",
      caption: "my favorite person ♡"
    },
    {
      src: "assets/images/photo2.png",
      caption: "under the stars with you..."
    },
    {
      src: "assets/images/photo3.png",
      caption: "holding you close ♡"
    },
    {
      src: "assets/images/photo4.png",
      caption: "I love spending time with you so much. ♡"
    }
  ],

  
  loveReasons: [
    { icon: "assets/icons/heart.png", prompt: "How much I love you?", message: "More than I know how to explain." },
    { icon: "assets/icons/sparkles.png", prompt: "Every single day", message: "You make every moment with you feel like magic." },
    { icon: "assets/icons/headphones.png", prompt: "My favorite sound", message: "I love hearing your voice so much, especially when you laugh." },
    { icon: "assets/icons/flower.png", prompt: "The sweetest sight", message: "I love your smile so much, it gives me butterflies everytime." },
    { icon: "assets/icons/coffee.png", prompt: "Just existing", message: "I love being around you, even if we dont say anything." },
    { icon: "assets/icons/star.png", prompt: "The little things", message: "I love all the little things you do without even realizing." },
    { icon: "assets/icons/house.png", prompt: "My sanctuary", message: "I love the way you make me feel.i feel so warm and fuzzy whenever I'm with you" },
    { icon: "assets/icons/ring.png", prompt: "In every lifetime", message: "I'd still choose you. Every single time." }
  ],

  
  skyMessages: [
    { id: 1, title: "One of the many things I love about you", text: "The genuine warmth in your heart and the gentle way you care about me so much. It melts me beyond anything else.", x: 20, y: 35 },
    { id: 2, title: "One of the many memories I want to make", text: "Stargazing together wrapped up in a warm blanket until sunrise. Even tho I'm sure I'll gaze at you rather than the stars.", x: 42, y: 25 },
    { id: 3, title: "One of the many things I want to tell you", text: "My Lovie is doing so well, and I am proud of everything you are.You are my perfect person", x: 65, y: 40 },
    { id: 4, title: "One of the many reasons I'm grateful", text: "You make my entire world softer and a hundred times brighter just by existing. You are the Sun in my life.", x: 35, y: 70 },
    { id: 5, title: "One of the many hopes for us", text: "A date with you while we're walking in the park, holding hands as the wind blows gently and your hair sways in the air. And I'll hug you tightly from behind.", x: 80, y: 65 },
    { id: 6, title: "Secret Constellation Star", text: "Out of billions of stars in the cosmos, you are my once in a lifetime.", x: 55, y: 60 }
  ],

  
  parkHotspots: {
    bench: {
      title: "Our Park Bench",
      text: "I'd sit beside you and just enjoy the time we spend together."
    },
    flowers: {
      title: "Night Flowers",
      text: "I'd pick flowers for you because you deserve pretty things."
    },
    stars: {
      title: "The Starry Sky",
      text: "I want to stare at the sky with you but I'll just end up staring at you instead hehe."
    },
    moon: {
      title: "The Moonlight",
      text: "I'd look at you and I will tell you how gorgeous you look under the moon. ♡"
    },
    beside: {
      title: "Right Beside Me",
      text: "I'd want you right here, your head resting on my shoulder, or me lying on your lap, or you lying on my lap"
    },
    lamp: {
      title: "The Warm Lamppost",
      text: "Even in the darkest night, with you on my side will make everything feel warm and safe."
    }
  },

  
  bucketList: [
    { icon: '<img src="assets/icons/date-candle.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Go on a cozy date together", detail: "I want to have a perfect date with you, where we can enjoy with each other without being interrupted, just you and me together." },
    { icon: '<img src="assets/icons/night-stars.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Watch the stars", detail: "We lying side by side together and laughing at funny shapes, maybe we'll find shapes that remind us of weird stuff lol, but that would be so much fun ngl." },
    { icon: '<img src="assets/icons/couple-camera.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Take silly pictures together", detail: "Always my wish that we take cute couple pics together, which are cute and silly at the same time. I'm sure we're gonna laugh so much when we're trying to take pics together." },
    { icon: '<img src="assets/icons/teddy-heart.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Get matching things", detail: "Even if it's like a bit cheesy, I still want matching hoodies, keychains, bracelets. Even like matching ornaments, I think that'd be pretty cool :3" },
    { icon: '<img src="assets/icons/crescent-moon.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Walk around at night", detail: "Yeah, this is the one thing I want so bad, like holding hands and just taking a stroll together in the cold night breeze, where we don't have to worry about rushing off to somewhere." },
    { icon: '<img src="assets/icons/ramen.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Eat something delicious", detail: "Hehe, so whenever you feel hungry at night or have cravings, I'll make sure to cook smt really nice for you. I hope someday I can cook for you and spoil you with all your favorite foods. I'd love nothing more than seeing you happily enjoy something I made just for you. :3" },
    { icon: '<img src="assets/icons/music-heart.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Listen to music together", detail: "I love your music taste. I want to listen to music with you together, like sharing the same pair of headphones, with you wearing one side and me wearing the other. It's gonna be pretty romantic too." },
    { icon: '<img src="assets/icons/sleepy.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Fall asleep while talking", detail: "I wanna have those late-night conversations with you while we drift off to sleep, hugging each other :3" },
    { icon: '<img src="assets/icons/cozy-couch.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Do absolutely nothing together", detail: "Because honestly, doing absolutely nothing and just sitting together with you would be so much more enjoyable than doing anything else XD" },
    { icon: '<img src="assets/icons/memory-book.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Make memories to laugh about", detail: "We'll continue to make hilarious jokes together and make cute little memories that belong only to us." }
  ],

  
  favoriteThings: [
    { icon: '<img src="assets/icons/smile.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Your smile", text: "Your smile just makes my heart go kaboom, and it instantly brightens up my whole day hehe :3" },
    { icon: '<img src="assets/icons/voice.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Your voice", text: "My favorite and comfort sound. I could listen to it for hours, and I actually want to hear it 24/7, as I said before AAAAAAAA" },
    { icon: '<img src="assets/icons/eyes.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Your eyes", text: "Can I please just gaze into your eyes when we meet, pleaseee? I'm sure I'll completely lose my train of thought just looking into your pretty eyes hehe." },
    { icon: '<img src="assets/icons/laugh.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Your laugh", text: "It makes my heart go absolutely crazy, like it just starts doing the cutest little backflips. Whenever I hear you laugh on a voice call, my heart just goes AAAAAA and I get so much cute aggression that I end up hugging my pillow really tight, imagining it's you." },
    { icon: '<img src="assets/icons/personality1.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "Your personality", text: "I just love you, every little part of your personality. Everything about you gives me so much warmth and hope, and somehow, being with you just feels like coming home. <3" },
    { icon: '<img src="assets/icons/talk.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "The way you talk", text: "I love how you talk, from being flirty to romantic, to being goofy and needy. The way you talk just hits me so hard, like literally, I'm on my knees" },
    { icon: '<img src="assets/icons/little-things.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "The little things you do", text: "Every little thing you do, whether it's sending me random memes or just going bebebebe I love it so, so muchhh. You genuinely have no idea how much those tiny little things make me happy and make my heart go all soft and mushy <3" },
    { icon: '<img src="assets/icons/feel.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "The way you make me feel", text: "I can be myself with you because you won't ever judge me, and I want to be that person for you too, my lovie, who can hear you rant about your day and comfort you in general, like u do to me." },
    { icon: '<img src="assets/icons/exist.png" alt="" aria-hidden="true" style="width:3.2rem;height:3.2rem;object-fit:contain;display:inline-block;vertical-align:middle;">', title: "The way you exist", text: "You existing in this world is like the best thing ever, like, this world, I'm so grateful for your presence <3" }
  ],

  
  loveLetter: [
    "My dearest Anna,",
    "I wanted to build you something that belonged only to us a quiet little corner in the vast digital universe where time slows down, just for a moment.",
    "From the day you came into my life, simple moments started feeling special to me.just staying with you makes everything so better. Everytime I look at you I just picture my whole life with you. I want it , I want everything yk the stupid fights, endless laughs and us being clueless so many times. You're my whole world <3 ",
    "I will stay right here, no matter how much the wind blows,no matter what, nothing will change how i feel for you, nothing will change this love i have for you. I promise I'll never let you go, so hold on to me, keep yourself close to me, us together is my dream and my hope..",
    "I want you. Not for like 10 or 20 years. I want you, i really care about you. I want you to feel loved, valued and safe with me Not just sometimes But every single day, For the rest of forever",
    "Born to Love you like a poem, forced to yearn for you like a miserable poet. I MISS YOUR PHYSICAL PRESENCE SO MUCH"
  ]
};



const STATE = {
  currentScene: 1,
  totalScenes: 12,
  unlockedScenes: new Set([1]),
  heartsClicked: 0,
  noAttempts: 0,
  musicStarted: false,
  isPlayingMusic: false,
  easterEggsFound: new Set(),
  moonClicks: 0,
  logoClicks: 0
};


const DOM = {
  canvas: document.getElementById('universe-canvas'),
  constellationCanvas: document.getElementById('constellation-canvas'),
  moon: document.getElementById('global-moon'),
  headerLogo: document.getElementById('header-logo'),
  prevSceneBtn: document.getElementById('prev-scene-btn'),
  easterCount: document.getElementById('easter-count'),
  toast: document.getElementById('toast-notification'),
  toastMsg: document.getElementById('toast-message'),
  navTrack: document.getElementById('nav-track'),
  audio: document.getElementById('bg-audio'),
  musicPlayer: document.getElementById('music-player'),
  musicToggleBtn: document.getElementById('music-toggle-btn'),
  volumeSlider: document.getElementById('volume-slider'),
  songTitle: document.getElementById('song-title'),
  btnYes: document.getElementById('btn-yes'),
  btnNo: document.getElementById('btn-no'),
  celebrationBox: document.getElementById('celebration-box'),
  starCard: document.getElementById('star-message-card'),
  starCardType: document.getElementById('star-card-type'),
  starCardText: document.getElementById('star-card-text'),
  starCardClose: document.getElementById('star-card-close'),
  whisperBox: document.getElementById('whisper-box'),
  whisperTitle: document.getElementById('whisper-title'),
  whisperText: document.getElementById('whisper-text'),
  secretInput: document.getElementById('secret-password-input'),
  secretSubmit: document.getElementById('secret-submit-btn'),
  secretHintBtn: document.getElementById('secret-hint-btn'),
  secretFeedback: document.getElementById('secret-feedback'),
  secretFormContainer: document.getElementById('secret-form-container'),
  secretRevealedContent: document.getElementById('secret-revealed-content'),
  lightbox: document.getElementById('lightbox-modal'),
  lightboxImg: document.getElementById('lightbox-img'),
  lightboxCaption: document.getElementById('lightbox-caption'),
  lightboxClose: document.getElementById('lightbox-close-btn'),
  lightboxBackdrop: document.getElementById('lightbox-backdrop'),
  letterBody: document.getElementById('letter-body'),
  hugStage: document.getElementById('hug-stage'),
  epilogueGreeting: document.getElementById('epilogue-greeting'),
  replayBtn: document.getElementById('replay-btn')
};


document.addEventListener('DOMContentLoaded', () => {
  applyPersonalization();
  initUniverseCanvas();
  initConstellationScene();
  initSceneNavigation();
  initHeartsScene();
  initPlayfulQuestion();
  initParkHotspots();
  initBucketList();
  initAdoreCards();
  initPolaroidGallery();
  initSecretSection();
  initLoveLetter();
  initVirtualHug();
  initAudioSystem();
  initEasterEggs();
  updateTimeGreeting();
});



function applyPersonalization() {
  
  document.querySelectorAll('.gf-name-slot').forEach(el => {
    el.textContent = CONFIG.girlfriendName;
  });

  
  document.querySelectorAll('.my-name-slot').forEach(el => {
    el.textContent = CONFIG.myName;
  });

  
  document.title = `For ${CONFIG.girlfriendName} ♡`;

  if (DOM.songTitle && CONFIG.musicTitle) {
    DOM.songTitle.textContent = CONFIG.musicTitle;
  }
}



let ctx, width, height;
let stars = [];
let meteors = [];
let cursorParticles = [];
let mouseX = -100, mouseY = -100;

function initUniverseCanvas() {
  if (!DOM.canvas) return;
  ctx = DOM.canvas.getContext('2d');

  function resize() {
    width = DOM.canvas.width = window.innerWidth;
    height = DOM.canvas.height = window.innerHeight;
    generateStars();
  }

  window.addEventListener('resize', resize);
  resize();

  
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (Math.random() < 0.25) {
      cursorParticles.push({
        x: mouseX,
        y: mouseY,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5 - 0.5,
        size: Math.random() * 2.5 + 1,
        alpha: 1,
        color: Math.random() > 0.5 ? '#f472b6' : '#c084fc'
      });
    }
  });

  
  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
      cursorParticles.push({
        x: mouseX,
        y: mouseY,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -1,
        size: Math.random() * 2 + 1,
        alpha: 1,
        color: '#f472b6'
      });
    }
  }, { passive: true });

  
  setInterval(() => {
    if (Math.random() < 0.6) {
      meteors.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.3,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        alpha: 1
      });
    }
  }, 3500);

  requestAnimationFrame(renderUniverse);
}

function generateStars() {
  stars = [];
  const starCount = Math.floor((width * height) / 3200); 
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      baseAlpha: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      color: Math.random() > 0.8 ? '#fbcfe8' : (Math.random() > 0.6 ? '#ddd6fe' : '#ffffff')
    });
  }
}

function renderUniverse() {
  ctx.clearRect(0, 0, width, height);

  
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    s.alpha += Math.sin(Date.now() * s.twinkleSpeed) * 0.01;
    s.alpha = Math.max(0.1, Math.min(1, s.alpha));

    ctx.fillStyle = s.color;
    ctx.globalAlpha = s.alpha;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
  }

  
  for (let i = meteors.length - 1; i >= 0; i--) {
    const m = meteors[i];
    ctx.globalAlpha = m.alpha;
    const endX = m.x - Math.cos(m.angle) * m.length;
    const endY = m.y - Math.sin(m.angle) * m.length;

    const grad = ctx.createLinearGradient(m.x, m.y, endX, endY);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.4, '#f472b6');
    grad.addColorStop(1, 'rgba(244, 114, 182, 0)');

    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    m.x += Math.cos(m.angle) * m.speed;
    m.y += Math.sin(m.angle) * m.speed;
    m.alpha -= 0.018;

    if (m.alpha <= 0) {
      meteors.splice(i, 1);
    }
  }

  
  for (let i = cursorParticles.length - 1; i >= 0; i--) {
    const p = cursorParticles[i];
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.025;

    if (p.alpha <= 0) {
      cursorParticles.splice(i, 1);
    }
  }

  ctx.globalAlpha = 1;
  requestAnimationFrame(renderUniverse);
}



function initSceneNavigation() {
  
  if (DOM.navTrack) {
    DOM.navTrack.innerHTML = '';
    for (let i = 1; i <= STATE.totalScenes; i++) {
      const dot = document.createElement('button');
      dot.className = `nav-dot ${i === 1 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to scene ${i}`);
      dot.title = `Scene ${i}`;
      dot.addEventListener('click', () => {
        if (STATE.unlockedScenes.has(i)) {
          goToScene(i);
        } else {
          showToast("Keep going to unlock this part of the universe ♡");
        }
      });
      DOM.navTrack.appendChild(dot);
    }
  }

  
  const startBtn = document.getElementById('start-experience-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      startMusicPlayback();
      goToScene(2);
      createBurstAtElement(startBtn);
    });
  }

  
  document.getElementById('hearts-next-btn')?.addEventListener('click', () => goToScene(3));
  document.getElementById('question-next-btn')?.addEventListener('click', () => goToScene(4));
  document.getElementById('sky-next-btn')?.addEventListener('click', () => goToScene(5));
  document.getElementById('together-next-btn')?.addEventListener('click', () => goToScene(6));
  document.getElementById('bucket-next-btn')?.addEventListener('click', () => goToScene(7));
  document.getElementById('adore-next-btn')?.addEventListener('click', () => goToScene(8));
  document.getElementById('gallery-next-btn')?.addEventListener('click', () => goToScene(9));
  document.getElementById('secret-next-btn')?.addEventListener('click', () => goToScene(10));
  document.getElementById('hug-next-btn')?.addEventListener('click', () => goToScene(12));

  
  if (DOM.prevSceneBtn) {
    DOM.prevSceneBtn.addEventListener('click', () => {
      if (STATE.currentScene > 1) {
        goToScene(STATE.currentScene - 1);
      }
    });
  }

  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && STATE.unlockedScenes.has(STATE.currentScene + 1)) {
      goToScene(STATE.currentScene + 1);
    } else if (e.key === 'ArrowLeft' && STATE.currentScene > 1) {
      goToScene(STATE.currentScene - 1);
    } else if (e.key === 'Escape') {
      closeLightbox();
      DOM.starCard?.classList.add('hidden');
    }
  });

  
  if (DOM.replayBtn) {
    DOM.replayBtn.addEventListener('click', () => {
      goToScene(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function goToScene(targetIndex) {
  if (targetIndex < 1 || targetIndex > STATE.totalScenes) return;

  const currentEl = document.querySelector(`.scene[data-scene="${STATE.currentScene}"]`);
  const targetEl = document.querySelector(`.scene[data-scene="${targetIndex}"]`);

  if (!targetEl) return;

  if (currentEl) {
    currentEl.classList.remove('active');
  }

  STATE.currentScene = targetIndex;
  STATE.unlockedScenes.add(targetIndex);

  targetEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  
  if (DOM.prevSceneBtn) {
    if (targetIndex === 1) {
      DOM.prevSceneBtn.classList.add('hidden');
    } else {
      DOM.prevSceneBtn.classList.remove('hidden');
    }
  }

  
  const dots = document.querySelectorAll('.nav-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx + 1 === targetIndex);
  });

  
  if (targetIndex === 4) {
    drawConstellationLines();
  } else if (targetIndex === 10) {
    revealLoveLetter();
  }
}



function initHeartsScene() {
  const container = document.getElementById('floating-hearts-grid');
  const countEl = document.getElementById('hearts-clicked-count');
  const totalEl = document.getElementById('hearts-total-count');
  const banner = document.getElementById('hearts-completed-banner');

  if (!container) return;

  const reasons = CONFIG.loveReasons || [];
  if (totalEl) totalEl.textContent = reasons.length;

  container.innerHTML = '';
  reasons.forEach((reason, index) => {
    const card = document.createElement('div');
    card.className = 'love-heart-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Reveal love note ${index + 1}`);

    card.innerHTML = `
      <span class="heart-icon-slot"><img src="${reason.icon}" alt="" aria-hidden="true" style="width:2.8rem;height:2.8rem;object-fit:contain;display:block;"></span>
      <span class="heart-unclicked-prompt">${reason.prompt}</span>
      <p class="heart-revealed-msg">${reason.message}</p>
    `;

    function reveal() {
      if (!card.classList.contains('revealed')) {
        card.classList.add('revealed');
        STATE.heartsClicked++;
        if (countEl) countEl.textContent = STATE.heartsClicked;
        createBurstAtElement(card);

        const totalCards = container.querySelectorAll('.love-heart-card').length;
        const revealedCards = container.querySelectorAll('.love-heart-card.revealed').length;
        if (totalCards > 0 && revealedCards === totalCards && banner) {
          banner.classList.remove('hidden');
        }
      }
    }

    card.addEventListener('click', reveal);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        reveal();
      }
    });

    container.appendChild(card);
  });
}



function initPlayfulQuestion() {
  if (!DOM.btnNo || !DOM.btnYes) return;

  const noPhrases = [
    "DUMBASS YOU DID NOT JUST WANT TO",
    "WHY ARE U STILL TRYING??",
    "FUCK NO",
    "ISTG IF U TRY AGAIN",
    "I'LL CRY!",
    "OKAY IM CRYING",
    "Error 404: great u broke the button",
    "STOOPIT! CLICK YES"
  ];

  function runAway() {
    STATE.noAttempts++;
    const phrase = noPhrases[(STATE.noAttempts - 1) % noPhrases.length];
    DOM.btnNo.textContent = phrase;

    
    const yesScale = Math.min(1.65, 1 + STATE.noAttempts * 0.08);
    DOM.btnYes.style.transform = `scale(${yesScale})`;

    
    const noScale = Math.max(0.65, 1 - STATE.noAttempts * 0.05);
    const rotation = (Math.random() - 0.5) * 24;

    
    const arena = document.getElementById('buttons-arena');
    const bounds = arena ? arena.getBoundingClientRect() : { width: 300, height: 160 };

    const maxMoveX = Math.min(180, (window.innerWidth - 120) / 2);
    const maxMoveY = 70;

    const randX = (Math.random() - 0.5) * (maxMoveX * 2);
    const randY = (Math.random() - 0.5) * (maxMoveY * 2);

    DOM.btnNo.style.position = 'relative';
    DOM.btnNo.style.transform = `translate(${randX}px, ${randY}px) scale(${noScale}) rotate(${rotation}deg)`;

    
    if (STATE.noAttempts >= 8) {
      createBurstAtElement(DOM.btnNo);
      DOM.btnNo.style.transition = 'opacity 0.4s, transform 0.4s';
      DOM.btnNo.style.opacity = '0';
      DOM.btnNo.style.pointerEvents = 'none';
      setTimeout(() => DOM.btnNo.classList.add('hidden'), 400);
      showToast("ITS OBV YES HEHE! ♡");
    }
  }

  
  DOM.btnNo.addEventListener('mouseenter', runAway);
  DOM.btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    runAway();
  }, { passive: false });
  DOM.btnNo.addEventListener('click', runAway);

  
  DOM.btnYes.addEventListener('click', () => {
    createCelebrationShower();
    if (DOM.celebrationBox) {
      DOM.celebrationBox.classList.remove('hidden');
    }
    DOM.btnYes.style.display = 'none';
    if (DOM.btnNo) DOM.btnNo.style.display = 'none';
  });
}

function createCelebrationShower() {
  for (let i = 0; i < 40; i++) {
    cursorParticles.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 300,
      y: window.innerHeight / 2 + (Math.random() - 0.5) * 200,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10 - 3,
      size: Math.random() * 5 + 3,
      alpha: 1,
      color: ['#f43f5e', '#ec4899', '#fef08a', '#c084fc', '#ffffff'][Math.floor(Math.random() * 5)]
    });
  }
}



function initConstellationScene() {
  const container = document.getElementById('star-nodes-container');
  if (!container) return;

  container.innerHTML = '';
  const starsList = CONFIG.skyMessages || [];

  starsList.forEach((star) => {
    const node = document.createElement('div');
    node.className = 'star-node';
    node.style.left = `${star.x}%`;
    node.style.top = `${star.y}%`;
    node.setAttribute('role', 'button');
    node.setAttribute('tabindex', '0');
    node.setAttribute('aria-label', star.title);

    node.innerHTML = `
      <div class="star-halo"></div>
      <div class="star-core"></div>
    `;

    function openStarMsg() {
      createBurstAtElement(node);
      if (DOM.starCard && DOM.starCardType && DOM.starCardText) {
        DOM.starCardType.textContent = star.title;
        DOM.starCardText.textContent = `"${star.text}"`;
        DOM.starCard.classList.remove('hidden');
      }

      if (star.id === 6) {
        unlockEasterEgg('starlight');
      }
    }

    node.addEventListener('click', openStarMsg);
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openStarMsg();
      }
    });

    container.appendChild(node);
  });

  if (DOM.starCardClose) {
    DOM.starCardClose.addEventListener('click', () => {
      DOM.starCard?.classList.add('hidden');
    });
  }
}

function drawConstellationLines() {
  if (!DOM.constellationCanvas) return;
  const c = DOM.constellationCanvas;
  const parent = c.parentElement;
  if (!parent) return;

  const w = c.width = parent.clientWidth;
  const h = c.height = parent.clientHeight;
  const ctxConst = c.getContext('2d');
  ctxConst.clearRect(0, 0, w, h);

  const starsList = CONFIG.skyMessages || [];
  if (starsList.length < 2) return;

  ctxConst.strokeStyle = 'rgba(244, 114, 182, 0.28)';
  ctxConst.lineWidth = 1.5;
  ctxConst.setLineDash([4, 4]);

  ctxConst.beginPath();
  for (let i = 0; i < starsList.length; i++) {
    const s1 = starsList[i];
    const x1 = (s1.x / 100) * w;
    const y1 = (s1.y / 100) * h;

    for (let j = i + 1; j < starsList.length; j++) {
      const s2 = starsList[j];
      const x2 = (s2.x / 100) * w;
      const y2 = (s2.y / 100) * h;

      const dist = Math.hypot(x2 - x1, y2 - y1);
      if (dist < w * 0.45) {
        ctxConst.moveTo(x1, y1);
        ctxConst.lineTo(x2, y2);
      }
    }
  }
  ctxConst.stroke();
}



function initParkHotspots() {
  const hotspots = document.querySelectorAll('.park-hotspot');
  hotspots.forEach(spot => {
    const targetKey = spot.getAttribute('data-target');
    const info = CONFIG.parkHotspots[targetKey];
    if (!info) return;

    function activate() {
      createBurstAtElement(spot);
      if (DOM.whisperBox && DOM.whisperTitle && DOM.whisperText) {
        DOM.whisperTitle.textContent = info.title;
        DOM.whisperText.textContent = info.text;
        DOM.whisperBox.classList.remove('hidden');
      }
    }

    spot.addEventListener('click', activate);
    spot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate();
      }
    });
  });
}



function initBucketList() {
  const container = document.getElementById('bucket-list-grid');
  if (!container) return;

  container.innerHTML = '';
  (CONFIG.bucketList || []).forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'bucket-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', item.title);

    card.innerHTML = `
      <div class="bucket-card-inner">
        <div class="bucket-card-front">
          <div class="bucket-icon">${item.icon}</div>
          <h3 class="bucket-title">${item.title}</h3>
          <span class="bucket-hint">Click to flip ♡</span>
        </div>
        <div class="bucket-card-back">
          <p class="bucket-detail">"${item.detail}"</p>
          <span class="bucket-badge">Our Promise ♡</span>
        </div>
      </div>
    `;

    function flip() {
      card.classList.toggle('flipped');
      createBurstAtElement(card);
    }

    card.addEventListener('click', flip);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flip();
      }
    });

    container.appendChild(card);
  });
}



function initAdoreCards() {
  const container = document.getElementById('adore-grid');
  if (!container) return;

  container.innerHTML = '';
  (CONFIG.favoriteThings || []).forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'adore-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', item.title);

    card.innerHTML = `
      <div class="adore-card-header">
        <h3 class="adore-card-title">${item.title}</h3>
        <span class="adore-card-icon">${item.icon}</span>
      </div>
      <span class="adore-card-prompt">Click to open my thoughts...</span>
      <div class="adore-card-body">
        <p>${item.text}</p>
      </div>
    `;

    function toggle() {
      card.classList.toggle('expanded');
      createBurstAtElement(card);
    }

    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });

    container.appendChild(card);
  });
}



function initPolaroidGallery() {
  const container = document.getElementById('polaroid-gallery');
  if (!container) return;

  container.innerHTML = '';
  const photos = CONFIG.photos || [];

  photos.forEach((photo, idx) => {
    const item = document.createElement('div');
    item.className = 'polaroid-item';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `View photo: ${photo.caption}`);

    item.innerHTML = `
      <div class="polaroid-tape"></div>
      <div class="polaroid-img-wrap">
        <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
      </div>
      <p class="polaroid-caption">${photo.caption}</p>
    `;

    
    const imgEl = item.querySelector('img');
    if (imgEl) {
      imgEl.addEventListener('error', () => {
        imgEl.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><rect width='100%' height='100%' fill='%23191530'/><text x='50%' y='48%' dominant-baseline='middle' text-anchor='middle' font-size='42'>💖</text><text x='50%' y='68%' dominant-baseline='middle' text-anchor='middle' fill='%23fbcfe8' font-family='sans-serif' font-size='16'>Our Sweet Memory</text></svg>`;
      });
    }

    function openPhoto() {
      if (DOM.lightbox && DOM.lightboxImg && DOM.lightboxCaption) {
        DOM.lightboxImg.src = imgEl.src;
        DOM.lightboxCaption.textContent = photo.caption;
        DOM.lightbox.classList.remove('hidden');
      }
    }

    item.addEventListener('click', openPhoto);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPhoto();
      }
    });

    container.appendChild(item);
  });

  if (DOM.lightboxClose) DOM.lightboxClose.addEventListener('click', closeLightbox);
  if (DOM.lightboxBackdrop) DOM.lightboxBackdrop.addEventListener('click', closeLightbox);
}

function closeLightbox() {
  if (DOM.lightbox) DOM.lightbox.classList.add('hidden');
}



let hintIndex = 0;

function initSecretSection() {
  if (!DOM.secretSubmit || !DOM.secretInput) return;

  function attemptUnlock() {
    const entered = DOM.secretInput.value.trim().toLowerCase();
    const target = (CONFIG.secretPassword || 'lovey').trim().toLowerCase();

    if (entered === target) {
      
      createCelebrationShower();
      if (DOM.secretFeedback) {
        DOM.secretFeedback.textContent = "Password accepted! ✨";
        DOM.secretFeedback.style.color = "#a7f3d0";
      }
      setTimeout(() => {
        if (DOM.secretFormContainer) DOM.secretFormContainer.classList.add('hidden');
        if (DOM.secretRevealedContent) DOM.secretRevealedContent.classList.remove('hidden');
        document.getElementById('secret-lock-icon')?.remove();
      }, 500);

      unlockEasterEgg('secret_vault');
    } else {
      
      const wrongResponses = [
        "Nope 😭",
        "Try again.",
        "That ain't it.",
        "You're getting warmer...",
        "Ask me for a hint 😉"
      ];
      const randMsg = wrongResponses[Math.floor(Math.random() * wrongResponses.length)];
      if (DOM.secretFeedback) {
        DOM.secretFeedback.textContent = randMsg;
        DOM.secretFeedback.style.color = "#f472b6";
      }

      DOM.secretInput.classList.add('shake');
      setTimeout(() => DOM.secretInput.classList.remove('shake'), 400);
    }
  }

  DOM.secretSubmit.addEventListener('click', attemptUnlock);
  DOM.secretInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') attemptUnlock();
  });

  if (DOM.secretHintBtn) {
    DOM.secretHintBtn.addEventListener('click', () => {
      const hints = CONFIG.secretHints || ["It's our special word ♡"];
      const currentHint = hints[hintIndex % hints.length];
      hintIndex++;
      if (DOM.secretFeedback) {
        DOM.secretFeedback.textContent = currentHint;
        DOM.secretFeedback.style.color = "#fef08a";
      }
    });
  }
}



function initLoveLetter() {
  
  const hugBtn = document.getElementById('letter-next-btn');
  if (hugBtn) {
    hugBtn.addEventListener('click', () => {
      goToScene(11);
      triggerHugAnimation();
    });
  }
}

let letterRevealed = false;
function revealLoveLetter() {
  if (letterRevealed || !DOM.letterBody) return;
  letterRevealed = true;

  DOM.letterBody.innerHTML = '';
  const paragraphs = CONFIG.loveLetter || [];

  paragraphs.forEach((pText, i) => {
    const p = document.createElement('p');
    
    p.textContent = pText
      .replace(/Anna/g, CONFIG.girlfriendName)
      .replace(/YOUR_NAME/g, CONFIG.myName);
    p.style.opacity = '0';
    p.style.transform = 'translateY(10px)';
    p.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    DOM.letterBody.appendChild(p);

    setTimeout(() => {
      p.style.opacity = '1';
      p.style.transform = 'translateY(0)';
    }, (i + 1) * 350);
  });
}



function initVirtualHug() {
  
}

function triggerHugAnimation() {
  if (!DOM.hugStage) return;

  
  DOM.hugStage.classList.remove('hug-stage-embracing');

  setTimeout(() => {
    DOM.hugStage.classList.add('hug-stage-embracing');
    createCelebrationShower();

    
    playHeartbeatChime();
  }, 400);
}



function updateTimeGreeting() {
  if (!DOM.epilogueGreeting) return;

  const hour = new Date().getHours();
  if (hour >= 21 || hour < 5) {
    DOM.epilogueGreeting.textContent = `Goodnight, ${CONFIG.girlfriendName}. Sleep well tonight ♡`;
  } else {
    DOM.epilogueGreeting.textContent = `Until next time, ${CONFIG.girlfriendName}. You mean the world to me ♡`;
  }
}



let audioCtx = null;
let lullabyTimer = null;
let usingSynth = false;

function initAudioSystem() {
  if (!DOM.musicToggleBtn) return;

  DOM.musicToggleBtn.addEventListener('click', toggleMusic);
  DOM.musicToggleBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMusic();
    }
  });

  if (DOM.volumeSlider) {
    DOM.volumeSlider.addEventListener('input', (e) => {
      const vol = parseFloat(e.target.value);
      if (DOM.audio) DOM.audio.volume = vol;
      if (audioCtx && audioCtx.masterGain) {
        audioCtx.masterGain.gain.setValueAtTime(vol * 0.25, audioCtx.currentTime);
      }
    });
  }
}

function startMusicPlayback() {
  if (STATE.musicStarted) return;
  STATE.musicStarted = true;

  if (DOM.audio && CONFIG.music) {
    DOM.audio.src = CONFIG.music;
    DOM.audio.volume = DOM.volumeSlider ? parseFloat(DOM.volumeSlider.value) : 0.6;

    DOM.audio.play().then(() => {
      STATE.isPlayingMusic = true;
      updateMusicPlayerUI(true);
    }).catch(() => {
      
      startAmbientSynthLullaby();
    });
  } else {
    startAmbientSynthLullaby();
  }
}

function toggleMusic() {
  if (!STATE.musicStarted) {
    startMusicPlayback();
    return;
  }

  if (STATE.isPlayingMusic) {
    if (usingSynth) {
      stopAmbientSynthLullaby();
    } else if (DOM.audio) {
      DOM.audio.pause();
    }
    STATE.isPlayingMusic = false;
    updateMusicPlayerUI(false);
  } else {
    if (usingSynth) {
      startAmbientSynthLullaby();
    } else if (DOM.audio) {
      DOM.audio.play().catch(() => startAmbientSynthLullaby());
    }
    STATE.isPlayingMusic = true;
    updateMusicPlayerUI(true);
  }
}

function updateMusicPlayerUI(isPlaying) {
  if (!DOM.musicPlayer) return;
  DOM.musicPlayer.classList.toggle('playing', isPlaying);
}



function startAmbientSynthLullaby() {
  usingSynth = true;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContext();
      audioCtx.masterGain = audioCtx.createGain();
      const vol = DOM.volumeSlider ? parseFloat(DOM.volumeSlider.value) : 0.6;
      audioCtx.masterGain.gain.setValueAtTime(vol * 0.2, audioCtx.currentTime);
      audioCtx.masterGain.connect(audioCtx.destination);
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 659.25];
    let noteIndex = 0;

    function playNextNote() {
      if (!usingSynth || !STATE.isPlayingMusic) return;

      const osc = audioCtx.createOscillator();
      const noteGain = audioCtx.createGain();

      osc.type = 'sine';
      const freq = notes[noteIndex % notes.length];
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      const now = audioCtx.currentTime;
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.2, now + 0.1);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

      osc.connect(noteGain);
      noteGain.connect(audioCtx.masterGain);

      osc.start(now);
      osc.stop(now + 2.3);

      noteIndex = (noteIndex + Math.floor(Math.random() * 3 + 1)) % notes.length;
      lullabyTimer = setTimeout(playNextNote, (Math.random() * 800 + 700));
    }

    STATE.isPlayingMusic = true;
    updateMusicPlayerUI(true);
    playNextNote();
  } catch (e) {
    console.warn("Ambient synthesizer unavailable.", e);
  }
}

function stopAmbientSynthLullaby() {
  if (lullabyTimer) clearTimeout(lullabyTimer);
}

function playHeartbeatChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.5);

    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.7);
  } catch (e) {}
}



function initEasterEggs() {
  
  if (DOM.moon) {
    DOM.moon.addEventListener('click', () => {
      STATE.moonClicks++;
      createBurstAtElement(DOM.moon);

      if (STATE.moonClicks === 1) {
        showToast("If I could, I'd sit beside you under this moon. ♡");
      } else if (STATE.moonClicks >= 5) {
        showToast("Damn she found the secret message: 'Even if the moon forgot how to shine, you'd still light up my world.'");
        unlockEasterEgg('moon');
      }
    });
  }

  
  if (DOM.headerLogo) {
    DOM.headerLogo.addEventListener('click', () => {
      STATE.logoClicks++;
      createBurstAtElement(DOM.headerLogo);

      if (STATE.logoClicks >= 5) {
        showToast("I love your name so muchhhhhh ♡");
        createCelebrationShower();
        unlockEasterEgg('logo');
      }
    });
  }

  
  let keyBuffer = '';
  window.addEventListener('keydown', (e) => {
    keyBuffer += e.key.toLowerCase();
    if (keyBuffer.length > 10) keyBuffer = keyBuffer.slice(-10);

    if (keyBuffer.includes('love') || keyBuffer.includes(CONFIG.girlfriendName.toLowerCase())) {
      showToast(`Lovie you're the best thing that ever happened to me.`);
      createCelebrationShower();
      unlockEasterEgg('keyboard');
      keyBuffer = '';
    }
  });
}

function unlockEasterEgg(id) {
  if (STATE.easterEggsFound.has(id)) return;
  STATE.easterEggsFound.add(id);
  if (DOM.easterCount) {
    DOM.easterCount.textContent = STATE.easterEggsFound.size;
  }
}



let toastTimer = null;
function showToast(message) {
  if (!DOM.toast || !DOM.toastMsg) return;
  DOM.toastMsg.textContent = message;
  DOM.toast.classList.remove('hidden');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    DOM.toast.classList.add('hidden');
  }, 4200);
}

function createBurstAtElement(element) {
  if (!element) return;
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 15; i++) {
    cursorParticles.push({
      x: centerX,
      y: centerY,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6 - 1,
      size: Math.random() * 3 + 2,
      alpha: 1,
      color: Math.random() > 0.5 ? '#f472b6' : '#fef08a'
    });
  }
}
