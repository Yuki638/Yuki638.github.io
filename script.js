

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
  ],

  milestones: [
    { date: "The Beginning", text: "When we first started talking, I had no idea how much you'd mean to me." },
    { date: "First Laugh", text: "The first time I heard you laugh, My heart did a crazy backflip like frfr." },
    { date: "Now", text: "I'm so lucky to have you in my life." }
  ],

  firebaseConfig: {
    apiKey: "AIzaSyAFL_loyJPoovyNc4gTYFEEhbUNMXnGmAo",
    authDomain: "for-her-d1797.firebaseapp.com",
    projectId: "for-her-d1797",
    storageBucket: "for-her-d1797.firebasestorage.app",
    messagingSenderId: "453301172470",
    appId: "1:453301172470:web:fe99887afb0072cf0c14d7",
    measurementId: "G-E5HYNPHY5J"
  }
};



const STATE = {
  currentScene: 1,
  totalScenes: 0,
  unlockedScenes: new Set([1]),
  heartsClicked: 0,
  noAttempts: 0,
  musicStarted: false,
  isPlayingMusic: false,
  easterEggsFound: new Set(),
  visitedScenes: new Set([1]),
  moonClicks: 0,
  logoClicks: 0,
  replayInProgress: false,
  interludeMusicWasPlaying: false,
  replayResetters: []
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
  replayBtn: document.getElementById('replay-btn'),
  replayTransition: document.getElementById('replay-cosmic-transition'),
  replayBlackHole: document.getElementById('replay-black-hole'),
  replayWarpLines: document.getElementById('replay-warp-lines'),
  replayTransitionStars: document.getElementById('replay-transition-stars'),
  closingOrbit: document.querySelector('.closing-orbit'),
  timelineContainer: document.getElementById('timeline-container'),
  memoriesNextBtn: document.getElementById('memories-next-btn'),
  dragHandle: document.getElementById('drag-handle'),
  dragProgress: document.getElementById('drag-progress'),
  revealContent4951: document.getElementById('reveal-content-49-51'),
  spaceAtmosphere: document.getElementById('space-atmosphere'),
  navWrap4951: document.getElementById('nav-wrap-49-51'),
  commentPanel: document.getElementById('comment-system-panel'),
  toggleCommentBtn: document.getElementById('toggle-comment-panel-btn'),
  commentTrigger: document.getElementById('floating-comment-trigger'),
  commentForm: document.getElementById('global-comment-form'),
  commentList: document.getElementById('global-comment-list'),
  commentStatus: document.getElementById('comment-status'),
  floatingCommentsContainer: document.getElementById('floating-comments-container')
};


document.addEventListener('DOMContentLoaded', () => {
  STATE.totalScenes = document.querySelectorAll('.scene').length;
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
  initMemoriesTimeline();
  initInterludeScene();
  initConversationScene();
  init4951Slider();
  init4951Letter();
  initCommentSystem();
  initCursorCatCompanion();
  initScubaTypingCompanion();
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
  document.getElementById('hug-next-btn')?.addEventListener('click', () => goToScene(Number(document.getElementById('scene-memories')?.dataset.scene)));
  document.getElementById('memories-next-btn')?.addEventListener('click', () => goToScene(Number(document.getElementById('scene-interlude')?.dataset.scene)));

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
    DOM.replayBtn.addEventListener('click', startReplayTransition);
  }
}

function buildReplayTransition() {
  const overlay = DOM.replayTransition;
  const hole = DOM.replayBlackHole;
  const stars = DOM.replayTransitionStars;
  const lines = DOM.replayWarpLines;
  if (!overlay || !hole || !stars || !lines) throw new Error('Replay transition elements are unavailable');

  stars.replaceChildren();
  lines.replaceChildren();
  const source = DOM.closingOrbit?.getBoundingClientRect();
  const button = DOM.replayBtn?.getBoundingClientRect();
  const sourceVisible = source && source.width && source.height && source.bottom > 0 && source.top < window.innerHeight;
  const focus = sourceVisible ? source : button;
  const centerX = Math.max(0, Math.min(window.innerWidth, focus ? focus.left + focus.width / 2 : window.innerWidth / 2));
  const centerY = Math.max(0, Math.min(window.innerHeight, focus ? focus.top + focus.height / 2 : window.innerHeight / 2));
  overlay.style.setProperty('--hole-x', `${centerX}px`);
  overlay.style.setProperty('--hole-y', `${centerY}px`);
  const holeWidth = hole.getBoundingClientRect().width || 128;
  overlay.style.setProperty('--hole-final-scale', String(Math.hypot(window.innerWidth, window.innerHeight) * 2.2 / holeWidth));

  const particleCount = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 12 : 38;
  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const star = document.createElement('span');
    star.className = 'replay-transition-star';
    star.style.setProperty('--star-x', `${x}px`);
    star.style.setProperty('--star-y', `${y}px`);
    star.style.setProperty('--star-dx', `${centerX - x}px`);
    star.style.setProperty('--star-dy', `${centerY - y}px`);
    star.style.setProperty('--star-size', `${Math.random() * 2 + 1}px`);
    star.style.setProperty('--star-delay', `${Math.random() * 0.45}s`);
    stars.appendChild(star);
  }

  const focusX = centerX / Math.max(1, window.innerWidth) * 1000;
  const focusY = centerY / Math.max(1, window.innerHeight) * 1000;
  const anchors = [[0, 0], [500, 0], [1000, 0], [1000, 350], [1000, 1000], [500, 1000], [0, 1000], [0, 350], [0, 650], [1000, 650]];
  anchors.forEach(([x, y], index) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const bend = (index % 2 ? 1 : -1) * 75;
    const controlX = (x + focusX) / 2 + (y - focusY) / 1000 * bend;
    const controlY = (y + focusY) / 2 + (focusX - x) / 1000 * bend;
    path.setAttribute('d', `M ${x} ${y} Q ${controlX} ${controlY} ${focusX} ${focusY}`);
    path.style.animationDelay = `${index * 0.045}s`;
    lines.appendChild(path);
  });
}

function resetTemporarySceneState() {
  STATE.heartsClicked = 0;
  STATE.noAttempts = 0;
  STATE.unlockedScenes = new Set([1]);
  STATE.visitedScenes = new Set([1]);
  STATE.moonClicks = 0;
  STATE.logoClicks = 0;
  hintIndex = 0;

  document.querySelectorAll('.love-heart-card.revealed').forEach(card => card.classList.remove('revealed'));
  const heartsClickedCount = document.getElementById('hearts-clicked-count');
  if (heartsClickedCount) heartsClickedCount.textContent = '0';
  document.getElementById('hearts-completed-banner')?.classList.add('hidden');

  DOM.btnYes?.style.removeProperty('transform');
  if (DOM.btnYes) DOM.btnYes.style.display = '';
  if (DOM.btnNo) {
    DOM.btnNo.classList.remove('hidden');
    DOM.btnNo.textContent = 'NO';
    DOM.btnNo.removeAttribute('style');
  }
  DOM.celebrationBox?.classList.add('hidden');
  DOM.starCard?.classList.add('hidden');
  DOM.whisperBox?.classList.add('hidden');
  document.querySelectorAll('.bucket-card.flipped').forEach(card => card.classList.remove('flipped'));
  document.querySelectorAll('.adore-card.expanded').forEach(card => card.classList.remove('expanded'));
  closeLightbox();

  DOM.secretInput?.classList.remove('shake');
  if (DOM.secretInput) DOM.secretInput.value = '';
  const secretFeedback = document.getElementById('secret-feedback');
  if (secretFeedback && !EasterEggSystem.eggs.find(egg => egg.id === 'secret_vault')?.discovered) secretFeedback.textContent = '';

  document.querySelector('.hug-stage-embracing')?.classList.remove('hug-stage-embracing');
  DOM.letterBody?.replaceChildren();
  letterRevealed = false;
  EasterEggSystem.reset();
  STATE.replayResetters.forEach(reset => {
    try { reset(); } catch (error) { }
  });

  const sceneInner = document.querySelector('.scene-49-51-inner');
  sceneInner?.classList.remove('reunited', 'revealing');
  DOM.spaceAtmosphere?.classList.remove('midpoint');
  DOM.spaceAtmosphere?.style.removeProperty('background');
  DOM.revealContent4951?.classList.add('hidden');
  DOM.navWrap4951?.classList.add('hidden');
  if (DOM.dragHandle) {
    DOM.dragHandle.style.left = '0%';
    DOM.dragHandle.setAttribute('aria-valuenow', '0');
  }
  if (DOM.dragProgress) DOM.dragProgress.style.width = '0%';
  const dragContainer = document.getElementById('drag-unlock-container');
  if (dragContainer) {
    dragContainer.classList.remove('hidden');
    dragContainer.style.removeProperty('opacity');
  }
  const homecoming = document.getElementById('cinematic-homecoming');
  homecoming?.classList.remove('is-visible');
  homecoming?.classList.add('hidden');
  updateTimeGreeting();

  DOM.commentPanel?.classList.remove('open');
  if (DOM.commentTrigger) DOM.commentTrigger.style.transform = 'scale(1)';
  DOM.toast?.classList.add('hidden');
  if (toastTimer) clearTimeout(toastTimer);
  cursorParticles = [];
}

// Preload black hole cosmic sound effect
let blackHoleAudioInstance = null;
try {
  blackHoleAudioInstance = new Audio('assets/music/blackhole.wav');
  blackHoleAudioInstance.preload = 'auto';
  blackHoleAudioInstance.load();
} catch (e) { }

function playBlackHoleSound() {
  try {
    const audio = blackHoleAudioInstance ? blackHoleAudioInstance.cloneNode() : new Audio('assets/music/blackhole.wav');
    audio.volume = 0.95;
    audio.currentTime = 0;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn('Black hole audio playback prevented or error:', err);
      });
    }
    return audio;
  } catch (e) {
    console.warn('Could not play black hole sound:', e);
  }
}

async function startReplayTransition() {
  if (STATE.replayInProgress) return;
  const overlay = DOM.replayTransition;
  if (!overlay || !DOM.replayBtn) {
    resetTemporarySceneState();
    goToScene(1, { replay: true });
    return;
  }

  STATE.replayInProgress = true;
  DOM.replayBtn.disabled = true;
  const wait = duration => new Promise(resolve => setTimeout(resolve, duration));
  let inertStates = [];

  try {
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
    buildReplayTransition();
    overlay.inert = false;
    overlay.setAttribute('aria-hidden', 'false');
    const blockedElements = document.querySelectorAll('#site-header, #scene-viewport, #global-moon, #music-player, #comment-system-panel, #floating-comment-trigger, #scene-nav');
    inertStates = [...blockedElements].map(element => [element, element.inert]);
    inertStates.forEach(([element]) => { element.inert = true; });
    overlay.className = 'replay-cosmic-transition is-active is-collapsing';
    playBlackHoleSound();
    await wait(reducedMotion ? 80 : 2650);
    overlay.classList.add('is-dark');
    await wait(reducedMotion ? 80 : 300);
    resetTemporarySceneState();
    goToScene(1, { replay: true });
    overlay.classList.remove('is-collapsing', 'is-dark');
    overlay.classList.add('is-rebirthing');
    await wait(reducedMotion ? 40 : 160);
    overlay.classList.add('is-revealing');
    await wait(reducedMotion ? 180 : 950);
  } catch (error) {
    try {
      resetTemporarySceneState();
      goToScene(1, { replay: true });
    } catch (resetError) { }
  } finally {
    overlay.className = 'replay-cosmic-transition';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.inert = true;
    overlay.style.removeProperty('--hole-x');
    overlay.style.removeProperty('--hole-y');
    overlay.style.removeProperty('--hole-final-scale');
    DOM.replayWarpLines?.replaceChildren();
    DOM.replayTransitionStars?.replaceChildren();
    inertStates.forEach(([element, wasInert]) => { element.inert = wasInert; });
    STATE.replayInProgress = false;
    if (DOM.replayBtn) DOM.replayBtn.disabled = false;
    document.getElementById('start-experience-btn')?.focus({ preventScroll: true });
  }
}

function goToScene(targetIndex, options = {}) {
  if (STATE.replayInProgress && !options.replay) return;
  if (targetIndex < 1 || targetIndex > STATE.totalScenes) return;
  if (targetIndex === STATE.totalScenes && targetIndex > 1 && !STATE.visitedScenes.has(targetIndex - 1)) {
    showToast("A little more exploring will show you the way there ♡");
    return;
  }

  const currentEl = document.querySelector(`.scene[data-scene="${STATE.currentScene}"]`);
  const targetEl = document.querySelector(`.scene[data-scene="${targetIndex}"]`);

  if (!targetEl) return;
  if (!options.replay && STATE.currentScene !== targetIndex && STATE.visitedScenes.has(targetIndex)) unlockEasterEgg('return_visit');

  if (currentEl) {
    currentEl.classList.remove('active');
  }

  STATE.currentScene = targetIndex;
  STATE.unlockedScenes.add(targetIndex);
  STATE.visitedScenes.add(targetIndex);

  targetEl.classList.add('active');
  if (targetEl.id === 'scene-interlude') {
    STATE.interludeMusicWasPlaying = STATE.isPlayingMusic;
    if (STATE.isPlayingMusic) {
      if (usingSynth) {
        stopAmbientSynthLullaby();
      } else if (DOM.audio) {
        DOM.audio.pause();
      }
      STATE.isPlayingMusic = false;
      updateMusicPlayerUI(false);
    }
  }
  document.dispatchEvent(new CustomEvent('scenechange', { detail: { sceneId: targetEl.id } }));
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
  const secretPath = [4, 2, 5];
  let visitedPath = [];
  STATE.replayResetters.push(() => {
    visitedPath = [];
    DOM.starCard?.classList.add('hidden');
    const context = DOM.constellationCanvas?.getContext('2d');
    if (context && DOM.constellationCanvas) context.clearRect(0, 0, DOM.constellationCanvas.width, DOM.constellationCanvas.height);
  });

  starsList.forEach((star) => {
    const node = document.createElement('div');
    node.className = star.id === 6 ? 'star-node secret-star-node' : 'star-node';
    node.dataset.starId = String(star.id);
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
        showToast("SHINYYYY! Just like you, and your personality will always shine in my life ✨");
        createCelebrationShower();
        unlockEasterEgg('starlight');
      }
      visitedPath.push(star.id);
      visitedPath = visitedPath.slice(-secretPath.length);
      if (visitedPath.length === secretPath.length && visitedPath.every((id, index) => id === secretPath[index])) {
        showToast("Secret constellation aligned! The stars drew a path just for you. ✨");
        createCelebrationShower();
        unlockEasterEgg('star_path');
        if (!STATE.easterEggsFound.has('distance_clue')) {
          unlockEasterEgg('distance_clue');
        }
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

  const clickBindings = [
    { id: 'park-cats-hug', target: '.hotspot-beside' },
    { id: 'park-stars-img', target: '.hotspot-stars' },
    { id: 'park-moon-img', target: '.hotspot-moon' },
    { id: 'park-flower-img', target: '.hotspot-flowers' }
  ];

  clickBindings.forEach(binding => {
    const el = document.getElementById(binding.id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector(binding.target)?.click();
      });
    }
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
        DOM.secretFeedback.innerHTML = replaceEmojisWithCustom("Password accepted! ✨");
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
        DOM.secretFeedback.innerHTML = replaceEmojisWithCustom(randMsg);
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
        DOM.secretFeedback.innerHTML = replaceEmojisWithCustom(currentHint);
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
  const name = CONFIG.girlfriendName || 'Anna';
  if (hour >= 21 || hour < 5) {
    DOM.epilogueGreeting.innerHTML = `Goodnight, <span class="gf-name-slot">${name}</span>. Sleep well tonight <span class="epilogue-heart-inline">♡</span>`;
  } else {
    DOM.epilogueGreeting.innerHTML = `Until next time, <span class="gf-name-slot">${name}</span>. You mean the world to me <span class="epilogue-heart-inline">♡</span>`;
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
  } catch (e) { }
}



const EasterEggSystem = {
  eggs: [
    { id: 'moon', discovered: false, trigger: 'five moon clicks' },
    { id: 'logo', discovered: false },
    { id: 'keyboard', discovered: false, trigger: 'typed sequence' },
    { id: 'starlight', discovered: false, trigger: 'final constellation star' },
    { id: 'secret_vault', discovered: false, trigger: 'password success' },
    { id: 'drag_4951', discovered: false, trigger: 'completed drag or keyboard interaction' },
    { id: 'distance_clue', discovered: false, trigger: 'logo or hidden star route' },
    { id: 'return_visit', discovered: false, trigger: 'return to a visited scene' },
    { id: 'moonkeeper', discovered: false, trigger: 'hold the moon for 1.2 seconds' },
    { id: 'star_path', discovered: false, trigger: 'visit stars in a hidden sequence' }
  ],
  getTotal() { return this.eggs.length; },
  getDiscovered() { return this.eggs.filter(e => e.discovered).length; },
  updateTracker() {
    const count = this.getDiscovered();
    const total = this.getTotal();
    const tracker = document.getElementById('easter-tracker');
    if (tracker) {
      tracker.innerHTML = `<span><img src="emojis/user_sparkle_star.png" class="custom-emoji custom-emoji-pixel" alt="✨"></span> <span id="easter-count">${count}</span>/${total}`;
    }
    const countEl = document.getElementById('easter-count');
    if (countEl) countEl.textContent = count;
  },
  reset() {
    this.eggs.forEach(egg => { egg.discovered = false; });
    STATE.easterEggsFound.clear();
    try {
      localStorage.removeItem('romantic-discoveries');
      localStorage.removeItem('romantic-discoveries-v2');
      localStorage.removeItem('romantic-discoveries-v3');
    } catch (e) { }
    this.updateTracker();
  },
  unlock(id) {
    const egg = this.eggs.find(e => e.id === id);
    if (!egg || egg.discovered) return;
    if (egg.requires?.some(required => !this.eggs.find(item => item.id === required)?.discovered)) return;
    egg.discovered = true;
    STATE.easterEggsFound.add(id);
    try {
      const validIds = new Set(this.eggs.map(e => e.id));
      const rawSaved = JSON.parse(localStorage.getItem('romantic-discoveries-v3') || '[]');
      const saved = Array.isArray(rawSaved) ? rawSaved.filter(x => validIds.has(x)) : [];
      if (!saved.includes(id)) {
        saved.push(id);
      }
      localStorage.setItem('romantic-discoveries-v3', JSON.stringify(saved));
    } catch (error) { }
    this.updateTracker();
  }
};

function initEasterEggs() {
  try {
    // Clear legacy test data so historical testing doesn't jump the counter
    localStorage.removeItem('romantic-discoveries');
    localStorage.removeItem('romantic-discoveries-v2');
    const validIds = new Set(EasterEggSystem.eggs.map(e => e.id));
    const rawSaved = JSON.parse(localStorage.getItem('romantic-discoveries-v3') || '[]');
    const saved = Array.isArray(rawSaved) ? rawSaved.filter(x => validIds.has(x)) : [];
    localStorage.setItem('romantic-discoveries-v3', JSON.stringify(saved));
    EasterEggSystem.eggs.forEach(egg => { egg.discovered = saved.includes(egg.id); });
    EasterEggSystem.eggs.filter(egg => egg.discovered).forEach(egg => STATE.easterEggsFound.add(egg.id));
  } catch (error) { }
  EasterEggSystem.updateTracker();

  const tracker = document.getElementById('easter-tracker');
  if (tracker) {
    tracker.addEventListener('click', () => {
      showToast(`${EasterEggSystem.getDiscovered()} of ${EasterEggSystem.getTotal()} secret easter eggs discovered ✨`);
    });
    tracker.addEventListener('dblclick', () => {
      EasterEggSystem.reset();
      showToast('Easter egg discoveries reset to 0/10 ✨');
    });
  }

  if (DOM.moon) {
    let moonHoldTimer;
    DOM.moon.addEventListener('pointerdown', () => {
      clearTimeout(moonHoldTimer);
      moonHoldTimer = setTimeout(() => {
        showToast('The moon kept a little light for you. ☾');
        createBurstAtElement(DOM.moon);
        unlockEasterEgg('moonkeeper');
      }, 1200);
    });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(type => DOM.moon.addEventListener(type, () => clearTimeout(moonHoldTimer)));
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
        if (!STATE.easterEggsFound.has('distance_clue')) {
          unlockEasterEgg('distance_clue');
          showToast('Two halves. A small clue waits at the end of the memories. ♡');
        }
      }
    });
  }

  let keyBuffer = '';
  window.addEventListener('keydown', (e) => {
    if (STATE.replayInProgress || e.target.id !== 'erin-message-input') return;  // only while writing in the Between Us box
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
  EasterEggSystem.unlock(id);
}



function replaceEmojisWithCustom(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/✨/g, '<img src="emojis/user_sparkle_star.png" class="custom-emoji custom-emoji-pixel" alt="✨">')
    .replace(/💖/g, '<img src="emojis/heart.gif" class="custom-emoji" alt="💖">')
    .replace(/💕|💗|💓|💘/g, '<img src="emojis/heart_pink.png" class="custom-emoji" alt="💖">')
    .replace(/🌙/g, '<img src="emojis/moon.png" class="custom-emoji" alt="🌙">')
    .replace(/💡/g, '<img src="emojis/lamp.png" class="custom-emoji" alt="💡">')
    .replace(/🪑/g, '<img src="emojis/bench.png" class="custom-emoji custom-emoji-pixel" alt="🪑">')
    .replace(/🌸/g, '<img src="emojis/sakura.gif" class="custom-emoji" alt="🌸">')
    .replace(/💌/g, '<img src="emojis/letter.png" class="custom-emoji" alt="💌">')
    .replace(/🔒/g, '<img src="emojis/lock.png" class="custom-emoji" alt="🔒">')
    .replace(/🫂/g, '<img src="emojis/hug.gif" class="custom-emoji" alt="🫂">')
    .replace(/😉/g, '<img src="emojis/wink.gif" class="custom-emoji" alt="😉">')
    .replace(/😭/g, '<img src="emojis/cry.gif" class="custom-emoji" alt="😭">');
}

let toastTimer = null;
function showToast(message) {
  if (!DOM.toast || !DOM.toastMsg) return;
  DOM.toastMsg.innerHTML = replaceEmojisWithCustom(message);
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

/* ==========================================================================
   Memories & 49/51 Logic
   ========================================================================== */
function preloadTimelineMedia() {
  const h1 = new Image();
  h1.src = 'assets/images/hearty.webp';
  const h2 = new Image();
  h2.src = 'assets/images/hug.webp';
  const h3 = new Image();
  h3.src = 'assets/images/catto.webp';
}

function initMemoriesTimeline() {
  if (!DOM.timelineContainer) return;
  preloadTimelineMedia();
  DOM.timelineContainer.innerHTML = '';
  const effects = [];
  (CONFIG.milestones || []).forEach((ms, index) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.dataset.milestone = String(index);
    el.innerHTML = `
      <div class="timeline-date">${ms.date}</div>
      <div class="timeline-content">${ms.text}</div>
    `;
    el.addEventListener('click', () => {
      // No heart bursts on click for the interactive companion animation cards (Card 1, Card 2, Card 3)
    });
    DOM.timelineContainer.appendChild(el);
    const onPointerEnter = event => {
      el.classList.add('is-pointer-active');
      if (index === 0) showTimelineCompanion(el, event, 'assets/images/hearty.webp', 'assets/images/hearty.gif', 'Cute characters with hearts');
      if (index === 1) showTimelineCompanion(el, event, 'assets/images/hug.webp', 'assets/images/hug.gif', 'Cute hugging bears');
      if (index === 2) showTimelineCompanion(el, event, 'assets/images/catto.webp', 'assets/images/catto.gif', 'Cute cat animation', { flipWithDirection: true });
    };
    const onPointerMove = event => {
      moveTimelineCompanion(el, event);
    };
    const onPointerLeave = event => {
      if (event.relatedTarget instanceof Node && el.contains(event.relatedTarget)) return;
      el.classList.remove('is-pointer-active');
      clearTimelineEffect(el);
    };
    el.addEventListener('pointerenter', onPointerEnter);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', onPointerLeave);
    effects.push([el, onPointerEnter, onPointerMove, onPointerLeave]);
  });
  document.addEventListener('scenechange', () => effects.forEach(([el]) => clearTimelineEffect(el)), { once: false });
}

function clearTimelineEffect(card) {
  const state = card._timelineEffect;
  if (state?.frame) cancelAnimationFrame(state.frame);
  if (state?.timer) clearTimeout(state.timer);
  card.querySelectorAll('.timeline-pointer-effect').forEach(node => {
    if (node.classList.contains('timeline-companion-media') || node.classList.contains('timeline-hug-media')) {
      node.classList.remove('is-ready');
      node.classList.add('is-hiding');
      setTimeout(() => node.remove(), 240);
    } else {
      node.remove();
    }
  });
  card._timelineEffect = null;
}

function timelineEffectNode(card, className, text) {
  const node = document.createElement('span');
  node.className = `timeline-pointer-effect ${className}`;
  node.setAttribute('aria-hidden', 'true');
  node.textContent = text;
  card.appendChild(node);
  return node;
}

function showTimelineCompanion(card, event, assetWebp, assetGif, altText, options = {}) {
  clearTimelineEffect(card);

  const rect = card.getBoundingClientRect();
  const initialX = Math.max(16, Math.min(rect.width - 16, event.clientX - rect.left));
  const initialY = Math.max(16, Math.min(rect.height - 16, event.clientY - rect.top));

  const img = document.createElement('img');
  img.className = 'timeline-pointer-effect timeline-companion-media';
  img.alt = altText || 'Companion animation';
  img.src = assetWebp;
  img.onerror = function () {
    this.onerror = null;
    this.src = assetGif;
  };
  img.style.left = `${initialX}px`;
  img.style.top = `${initialY}px`;

  const flipWithDirection = Boolean(options && options.flipWithDirection);
  // Point towards cursor direction: if entering on left half of card, face left (-1), else face right (1)
  const initialFacing = (flipWithDirection && (event.clientX - rect.left < rect.width * 0.5)) ? -1 : 1;
  img.style.setProperty('--facing', String(initialFacing));

  card.appendChild(img);

  const state = {
    node: img,
    currentX: initialX,
    currentY: initialY,
    targetX: initialX,
    targetY: initialY,
    lastClientX: event.clientX,
    facing: initialFacing,
    flipWithDirection: flipWithDirection,
    frame: null
  };
  card._timelineEffect = state;

  requestAnimationFrame(() => {
    img.classList.add('is-ready');
  });

  function followLoop() {
    if (card._timelineEffect !== state) return;

    // Smooth lerp (interpolation) towards cursor target
    state.currentX += (state.targetX - state.currentX) * 0.35;
    state.currentY += (state.targetY - state.currentY) * 0.35;

    img.style.left = `${state.currentX}px`;
    img.style.top = `${state.currentY}px`;

    // Only turn when pointer direction indicates
    if (state.flipWithDirection) {
      const diffX = state.targetX - state.currentX;
      if (diffX > 4 && state.facing !== 1) {
        state.facing = 1;
        img.style.setProperty('--facing', '1');
      } else if (diffX < -4 && state.facing !== -1) {
        state.facing = -1;
        img.style.setProperty('--facing', '-1');
      }
    }

    state.frame = requestAnimationFrame(followLoop);
  }

  state.frame = requestAnimationFrame(followLoop);
}

function moveTimelineCompanion(card, event) {
  const state = card._timelineEffect;
  if (!state || !state.node) return;
  const rect = card.getBoundingClientRect();
  state.targetX = Math.max(16, Math.min(rect.width - 16, event.clientX - rect.left));
  state.targetY = Math.max(16, Math.min(rect.height - 16, event.clientY - rect.top));

  if (state.flipWithDirection && typeof event.clientX === 'number') {
    if (typeof state.lastClientX === 'number') {
      const deltaX = event.clientX - state.lastClientX;
      // When moving/pointing right: face right
      if (deltaX > 0.5) {
        if (state.facing !== 1) {
          state.facing = 1;
          state.node.style.setProperty('--facing', '1');
        }
        // When moving/pointing left: face left
      } else if (deltaX < -0.5) {
        if (state.facing !== -1) {
          state.facing = -1;
          state.node.style.setProperty('--facing', '-1');
        }
      } else {
        // When stationary, turn towards where cursor points relative to companion
        const pointerRelX = event.clientX - rect.left;
        if (pointerRelX > state.currentX + 8 && state.facing !== 1) {
          state.facing = 1;
          state.node.style.setProperty('--facing', '1');
        } else if (pointerRelX < state.currentX - 8 && state.facing !== -1) {
          state.facing = -1;
          state.node.style.setProperty('--facing', '-1');
        }
      }
    }
    state.lastClientX = event.clientX;
  }
}

// Backward-compatible aliases
function showTimelineHug(card, event) {
  showTimelineCompanion(card, event, 'assets/images/hug.webp', 'assets/images/hug.gif', 'Cute hugging bears');
}

function moveTimelineHug(card, event) {
  moveTimelineCompanion(card, event);
}

function startTimelineArrow(card, event) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  clearTimelineEffect(card);
  const arrow = timelineEffectNode(card, 'timeline-arrow', '➤');
  const rect = card.getBoundingClientRect();
  const state = { node: arrow, x: event.clientX - rect.left - 95, y: event.clientY - rect.top - 55, targetX: event.clientX - rect.left, targetY: event.clientY - rect.top };
  card._timelineEffect = state;
  const animate = time => {
    if (card._timelineEffect !== state || !card.isConnected || !card.matches('.is-pointer-active')) return;
    const dx = state.targetX - state.x;
    const dy = state.targetY - state.y;
    const distance = Math.hypot(dx, dy);
    const speed = Math.min(6, 1.2 + distance * .025);
    const step = Math.min(distance, speed);
    if (distance > 0) { state.x += dx / distance * step; state.y += dy / distance * step; }
    arrow.style.left = `${state.x}px`;
    arrow.style.top = `${state.y}px`;
    arrow.style.transform = `translate(-50%, -50%) rotate(${Math.atan2(dy, dx)}rad)`;
    if (distance < 21) {
      for (let i = 0; i < 16; i++) {
        const burst = timelineEffectNode(card, 'timeline-sparkle', i % 2 ? '♡' : '✧');
        burst.style.left = `${state.x}px`; burst.style.top = `${state.y}px`;
        const angle = Math.PI * 2 * i / 16;
        const radius = 32 + Math.random() * 24;
        burst.style.setProperty('--burst-x', `${Math.cos(angle) * radius}px`);
        burst.style.setProperty('--burst-y', `${Math.sin(angle) * radius}px`);
        burst.style.color = ['#efb5dc', '#d7c1f4', '#fff0fa', '#e9a7bd'][i % 4];
        burst.addEventListener('animationend', () => burst.remove(), { once: true });
      }
      cancelAnimationFrame(state.frame);
      card._timelineEffect = null;
      arrow.remove();
      return;
    }
    state.frame = requestAnimationFrame(animate);
  };
  state.frame = requestAnimationFrame(animate);
}

function moveTimelineArrow(card, event) {
  const state = card._timelineEffect;
  if (!state || !('targetX' in state)) return;
  const rect = card.getBoundingClientRect();
  state.targetX = event.clientX - rect.left;
  state.targetY = event.clientY - rect.top;
}

function initInterludeScene() {
  const scene = document.getElementById('scene-interlude');
  const video = document.getElementById('interlude-video');
  const playOverlay = document.getElementById('interlude-play-overlay');
  const endingOverlay = document.getElementById('interlude-ending-overlay');
  const continueBtn = document.getElementById('interlude-continue-btn');
  const replayBtn = document.getElementById('interlude-replay-btn');
  const skipBtn = document.getElementById('interlude-skip-btn');
  const progressTrack = document.getElementById('interlude-progress-track');
  const progressFill = document.getElementById('interlude-progress-fill');
  const progressHandle = document.getElementById('interlude-progress-handle');

  if (!scene || !video) return;

  let videoHasEnded = false;

  const updateProgress = () => {
    if (!video || !progressFill || !progressHandle) return;
    const dur = video.duration;
    if (dur && isFinite(dur) && dur > 0) {
      const pct = videoHasEnded ? 100 : Math.max(0, Math.min(100, (video.currentTime / dur) * 100));
      progressFill.style.width = pct + '%';
      progressHandle.style.left = pct + '%';
      if (progressTrack) {
        progressTrack.setAttribute('aria-valuenow', Math.round(pct).toString());
      }
    } else {
      progressFill.style.width = '0%';
      progressHandle.style.left = '0%';
      if (progressTrack) {
        progressTrack.setAttribute('aria-valuenow', '0');
      }
    }
  };

  const attemptPlay = () => {
    video.muted = false;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        if (playOverlay) playOverlay.classList.add('hidden');
      }).catch(() => {
        if (playOverlay) playOverlay.classList.remove('hidden');
      });
    }
  };

  const showEnding = () => {
    videoHasEnded = true;
    skipBtn?.classList.add('hidden');
    if (endingOverlay) {
      endingOverlay.classList.remove('hidden');
      requestAnimationFrame(() => {
        endingOverlay.classList.add('visible');
      });
    }
  };

  const hideEnding = () => {
    videoHasEnded = false;
    skipBtn?.classList.remove('hidden');
    if (endingOverlay) {
      endingOverlay.classList.remove('visible');
      setTimeout(() => {
        if (!videoHasEnded) {
          endingOverlay.classList.add('hidden');
        }
      }, 500);
    }
  };

  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('loadedmetadata', updateProgress);
  video.addEventListener('seeked', updateProgress);

  if (progressTrack) {
    progressTrack.addEventListener('click', (e) => {
      if (!video || !video.duration || !isFinite(video.duration)) return;
      const rect = progressTrack.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      video.currentTime = ratio * video.duration;
      updateProgress();
    });
  }

  playOverlay?.addEventListener('click', () => {
    attemptPlay();
  });

  video.addEventListener('ended', () => {
    if (progressFill && progressHandle) {
      progressFill.style.width = '100%';
      progressHandle.style.left = '100%';
      if (progressTrack) {
        progressTrack.setAttribute('aria-valuenow', '100');
      }
    }
    showEnding();
  });

  skipBtn?.addEventListener('click', () => {  // straight to the Continue / Replay card
    video.pause();
    if (progressFill && progressHandle) {
      progressFill.style.width = '100%';
      progressHandle.style.left = '100%';
    }
    if (playOverlay) playOverlay.classList.add('hidden');
    showEnding();
  });

  replayBtn?.addEventListener('click', () => {
    hideEnding();
    video.currentTime = 0;
    updateProgress();
    attemptPlay();
  });

  continueBtn?.addEventListener('click', () => {
    video.pause();
    if (STATE.interludeMusicWasPlaying) {
      if (usingSynth) {
        startAmbientSynthLullaby();
      } else if (DOM.audio) {
        DOM.audio.play().catch(() => startAmbientSynthLullaby());
      }
      STATE.isPlayingMusic = true;
      updateMusicPlayerUI(true);
      STATE.interludeMusicWasPlaying = false;
    }
    const nextScene = Number(document.getElementById('scene-conversation')?.dataset.scene);
    if (nextScene) {
      goToScene(nextScene);
    }
  });

  document.addEventListener('scenechange', (e) => {
    const activeId = e.detail?.sceneId;
    if (activeId === 'scene-interlude') {
      if (!videoHasEnded) {
        attemptPlay();
      }
    } else {
      if (!video.paused) {
        video.pause();
      }
      if (STATE.interludeMusicWasPlaying) {
        if (usingSynth) {
          startAmbientSynthLullaby();
        } else if (DOM.audio) {
          DOM.audio.play().catch(() => startAmbientSynthLullaby());
        }
        STATE.isPlayingMusic = true;
        updateMusicPlayerUI(true);
        STATE.interludeMusicWasPlaying = false;
      }
    }
  });

  STATE.replayResetters.push(() => {
    video.pause();
    video.currentTime = 0;
    video.muted = false;
    updateProgress();
    hideEnding();
    STATE.interludeMusicWasPlaying = false;
    if (playOverlay) playOverlay.classList.add('hidden');
  });

  updateProgress();
}

function initConversationScene() {
  const scene = document.getElementById('scene-conversation');
  if (!scene) return;

  const erinInput = document.getElementById('erin-message-input');
  const erinSendBtn = document.getElementById('erin-send-btn');
  const erinCharCount = document.getElementById('erin-char-count');
  const erinLog = document.getElementById('erin-message-log');
  const continueBtn = document.getElementById('conversation-continue-btn');
  const boyPlaceholder = document.getElementById('boy-placeholder-state');
  const boyContent = document.getElementById('boy-message-content');
  const boyStatusText = document.getElementById('boy-status-text');

  const maxLen = 280;

  function updateCharCount() {
    if (!erinInput || !erinCharCount) return;
    const len = erinInput.value.length;
    erinCharCount.textContent = `${len}/${maxLen}`;
    if (len >= maxLen - 20) {
      erinCharCount.classList.add('limit-near');
    } else {
      erinCharCount.classList.remove('limit-near');
    }
  }

  function spawnBubbleHeartBurst(targetEl) {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;
    const emojis = ['♡', '💖', '✨', '🌸', '💕'];

    for (let i = 0; i < 6; i++) {
      const heart = document.createElement('span');
      heart.className = 'bubble-heart-particle';
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      const dx = (Math.random() - 0.5) * 120;
      const dy = -40 - Math.random() * 80;
      const rot = (Math.random() - 0.5) * 60;
      heart.style.setProperty('--dx', `${dx}px`);
      heart.style.setProperty('--dy', `${dy}px`);
      heart.style.setProperty('--rot', `${rot}deg`);
      heart.style.left = `${originX}px`;
      heart.style.top = `${originY}px`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1250);
    }
  }

  /* Yuki answers in the "Me" panel. The chat API runs on Yuki's own computer (persona/README.md); when it is off, the panel keeps saying it is out of reach. */
  const yukiHistory = [];
  let yukiBusy = false;

  async function yukiEndpoint() {
    if (window.PERSONA_ENDPOINT) return String(window.PERSONA_ENDPOINT).replace(/\/$/, '');
    const r = await fetch('persona/endpoint.json', { cache: 'no-store' });
    return String((await r.json()).url || '').replace(/\/$/, '');
  }

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  function yukiDots() {  // three bouncing dots: Yuki is typing
    const d = document.createElement('div');
    d.className = 'yuki-typing';
    d.innerHTML = '<span></span><span></span><span></span>';
    return d;
  }

  async function yukiSay(lines) {  // one small bubble per text, like a real chat; an *action* is a soft italic note
    boyContent.replaceChildren();
    for (let i = 0; i < lines.length; i++) {
      if (i) {
        const dots = yukiDots();
        boyContent.append(dots);
        await wait(450 + Math.min(lines[i].length * 20, 900));
        dots.remove();
      }
      const act = /^\*(.+)\*$/.exec(lines[i]);
      const bubble = document.createElement('p');
      bubble.className = act ? 'yuki-bubble yuki-act' : 'yuki-bubble';
      bubble.textContent = act ? act[1] : lines[i];
      boyContent.append(bubble);
    }
  }

  /* Each message and Yuki's answer to it is saved as one Firestore document in `yukiChats` (fields and rules: PROJECT_MAP.md). Only the owner can read them, in the Firebase console.
     Saving never touches the chat: any failure is only a console warning. */
  let chatSession = crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(36).slice(2);
  let chatTurn = 0;

  async function logChat(turn, input, replies) {
    try {
      const fb = window.FirebaseAPI;
      if (!fb) return;
      const app = fb.getApps().find((a) => a.name === '[DEFAULT]') || fb.initializeApp(CONFIG.firebaseConfig);
      const auth = fb.getAuth(app);
      if (!auth.currentUser) await fb.signInAnonymously(auth);
      await fb.addDoc(fb.collection(fb.getFirestore(app), 'yukiChats'), {
        sessionId: chatSession,
        turn,
        input,
        replies,
        status: replies.length ? 'ok' : 'no_reply',
        createdAt: fb.serverTimestamp()
      });
    } catch (err) {
      console.warn('Chat was not saved.', err?.code || err);
    }
  }

  async function askYuki(text) {
    const turn = ++chatTurn;
    let logged = false;
    yukiHistory.push({ role: 'user', content: text });
    yukiBusy = true;
    if (erinSendBtn) erinSendBtn.disabled = true;
    boyPlaceholder?.classList.add('hidden');
    boyContent?.classList.remove('hidden');
    boyContent?.classList.add('yuki-chat');
    boyContent?.replaceChildren(yukiDots());
    if (boyStatusText) boyStatusText.textContent = 'Typing...';
    try {
      const api = await yukiEndpoint();
      if (!api) throw new Error('away');
      const r = await fetch(api + '/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ persona: 'yuki', messages: yukiHistory.slice(-16) }) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok || !data.lines?.length) throw new Error(data.error || 'away');
      data.lines.forEach((line) => yukiHistory.push({ role: 'assistant', content: line }));
      logged = true;
      logChat(turn, text, data.lines);
      if (boyStatusText) boyStatusText.textContent = 'Whispering back ♡';
      await yukiSay(data.lines);
    } catch (err) {
      if (!logged) logChat(turn, text, []);
      yukiHistory.pop();
      boyContent?.classList.remove('yuki-chat');
      window.setBoyConversationReply('');
      if (boyStatusText) boyStatusText.textContent = err.message === 'away' || err instanceof TypeError ? 'Out of reach right now ♡' : err.message;
    } finally {
      yukiBusy = false;
      if (erinSendBtn) erinSendBtn.disabled = false;
    }
  }

  function handleSend() {
    if (!erinInput || yukiBusy) return;
    const rawText = erinInput.value;
    const trimmed = rawText.trim();
    if (!trimmed) {
      erinInput.focus();
      return;
    }

    const messageEl = document.createElement('div');
    messageEl.className = 'erin-sent-bubble';

    const textSpan = document.createElement('span');
    textSpan.textContent = trimmed;
    messageEl.appendChild(textSpan);

    const timeSpan = document.createElement('span');
    timeSpan.className = 'erin-sent-time';
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timeSpan.textContent = `${timeStr} ♡`;
    messageEl.appendChild(timeSpan);

    erinLog.appendChild(messageEl);
    erinLog.scrollTop = erinLog.scrollHeight;

    erinInput.value = '';
    updateCharCount();
    askYuki(trimmed);
  }

  erinInput?.addEventListener('input', updateCharCount);

  erinInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  erinSendBtn?.addEventListener('click', handleSend);

  continueBtn?.addEventListener('click', () => {
    const nextScene = Number(document.getElementById('scene-49-51')?.dataset.scene);
    if (nextScene) {
      goToScene(nextScene);
    }
  });

  window.setBoyConversationReply = function (text) {
    if (!boyContent || !boyPlaceholder) return;
    if (!text || !text.trim()) {
      boyContent.classList.add('hidden');
      boyContent.textContent = '';
      boyPlaceholder.classList.remove('hidden');
      if (boyStatusText) boyStatusText.textContent = 'Softly listening';
      return;
    }
    boyPlaceholder.classList.add('hidden');
    boyContent.classList.remove('hidden');
    boyContent.textContent = text.trim();
    if (boyStatusText) boyStatusText.textContent = 'Whispering back ♡';
    spawnBubbleHeartBurst(boyContent);
  };

  if (Array.isArray(STATE.replayResetters)) {
    STATE.replayResetters.push(() => {
      if (erinLog) erinLog.innerHTML = '';
      if (erinInput) erinInput.value = '';
      updateCharCount();
      if (boyContent) {
        boyContent.classList.add('hidden');
        boyContent.textContent = '';
      }
      if (boyPlaceholder) boyPlaceholder.classList.remove('hidden');
      if (boyStatusText) boyStatusText.textContent = 'Softly listening';
      yukiHistory.length = 0;
      chatTurn = 0;
      chatSession = crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(36).slice(2);
      boyContent?.classList.remove('yuki-chat');
    });
  }
}

function init4951Slider() {
  const handle = DOM.dragHandle;
  const progress = DOM.dragProgress;
  const container = document.getElementById('drag-track');
  const scene = document.querySelector('.scene-49-51-inner');
  const orbit = scene?.querySelector('.cosmic-orbit');
  const leftFragment = orbit?.querySelector('.cosmic-fragment-49');
  const rightFragment = orbit?.querySelector('.cosmic-fragment-51');
  if (!handle || !container) return;

  let isDragging = false;
  let currentPct = 0;
  let unlocked = false;

  const updateConnection = (value) => {
    if (!scene) return;
    const progressPct = Math.max(0, Math.min(100, value));
    scene.style.setProperty('--connection-strength', String(0.22 + 0.78 * progressPct / 100));
    scene.style.setProperty('--atmosphere-warmth', String(0.025 + 0.085 * progressPct / 100));
    scene.style.setProperty('--orbit-gap', `${20 * (1 - progressPct / 100) + 1}px`);
    if (!orbit || !leftFragment || !rightFragment) return;
    const orbitRect = orbit.getBoundingClientRect();
    const orbitWidth = Number.parseFloat(getComputedStyle(orbit).width);
    if (!orbitRect.width || !Number.isFinite(orbitWidth)) return;
    const scaleX = orbitWidth / orbitRect.width;
    const leftRadius = leftFragment.getBoundingClientRect().width * scaleX / 2;
    const rightRadius = rightFragment.getBoundingClientRect().width * scaleX / 2;
    const progressRatio = progressPct / 100;
    const reunionX = orbitWidth / 2;
    const leftStart = leftRadius;
    const rightStart = orbitWidth - rightRadius;
    const leftCenter = leftStart + (reunionX - leftStart) * progressRatio;
    const rightCenter = rightStart + (reunionX - rightStart) * progressRatio;
    leftFragment.style.left = `${leftCenter}px`;
    rightFragment.style.left = `${rightCenter}px`;
  };

  const updateSliderPos = (clientX) => {
    const rect = container.getBoundingClientRect();
    if (!rect.width) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    currentPct = (x / rect.width) * 100;
    updateConnection(currentPct);

    handle.style.left = `${currentPct}%`;
    progress.style.width = `${currentPct}%`;
    handle.setAttribute('aria-valuenow', String(Math.round(currentPct)));

    DOM.spaceAtmosphere?.classList.toggle('midpoint', currentPct > 50);
  };

  const refreshLayout = () => {
    requestAnimationFrame(() => updateConnection(currentPct));
  };

  refreshLayout();
  window.addEventListener('resize', refreshLayout);
  document.addEventListener('scenechange', (e) => {
    if (e.detail?.sceneId === 'scene-49-51') {
      refreshLayout();
    }
  });

  STATE.replayResetters.push(() => {
    isDragging = false;
    currentPct = 0;
    unlocked = false;
    handle.style.left = '0%';
    handle.style.removeProperty('transition');
    handle.setAttribute('aria-valuenow', '0');
    progress.style.width = '0%';
    progress.style.removeProperty('transition');
    updateConnection(0);
  });

  const onDown = (e) => {
    if (unlocked) return;
    isDragging = true;
    try {
      handle.setPointerCapture(e.pointerId);
    } catch (_) { }
    handle.style.transition = 'none';
    progress.style.transition = 'none';
    updateSliderPos(e.clientX);
    e.preventDefault();
  };

  const onMove = (e) => {
    if (!isDragging || unlocked) return;
    updateSliderPos(e.clientX);
  };

  const onUp = (e) => {
    if (!isDragging || unlocked) return;
    isDragging = false;
    try {
      if (e?.pointerId && handle.hasPointerCapture(e.pointerId)) {
        handle.releasePointerCapture(e.pointerId);
      }
    } catch (_) { }
    handle.style.transition = 'left 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
    progress.style.transition = 'width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';

    // Forgiving threshold: if pulled to 88%+, complete the reunion!
    if (currentPct >= 88) {
      unlocked = true;
      currentPct = 100;
      updateConnection(currentPct);
      handle.style.left = '100%';
      progress.style.width = '100%';
      handle.setAttribute('aria-valuenow', '100');
      trigger4951Reveal();
    } else {
      currentPct = 0;
      updateConnection(currentPct);
      handle.style.left = '0%';
      progress.style.width = '0%';
      handle.setAttribute('aria-valuenow', '0');
      DOM.spaceAtmosphere?.classList.remove('midpoint');
    }
  };

  handle.addEventListener('pointerdown', onDown);
  container.addEventListener('pointerdown', onDown);

  window.addEventListener('pointermove', onMove, { passive: false });
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointercancel', onUp);

  handle.addEventListener('keydown', (e) => {
    if (unlocked) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      currentPct = Math.min(100, currentPct + 10);
      updateConnection(currentPct);
      handle.style.left = `${currentPct}%`;
      progress.style.width = `${currentPct}%`;
      handle.setAttribute('aria-valuenow', String(currentPct));
      DOM.spaceAtmosphere?.classList.toggle('midpoint', currentPct > 50);
      if (currentPct >= 88 && !unlocked) {
        unlocked = true;
        currentPct = 100;
        updateConnection(100);
        handle.style.left = '100%';
        progress.style.width = '100%';
        trigger4951Reveal();
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      currentPct = Math.max(0, currentPct - 10);
      updateConnection(currentPct);
      handle.style.left = `${currentPct}%`;
      progress.style.width = `${currentPct}%`;
      handle.setAttribute('aria-valuenow', String(currentPct));
      DOM.spaceAtmosphere?.classList.toggle('midpoint', currentPct > 50);
    }
  });
}

function init4951Letter() {
  const letter = document.getElementById('cinematic-letter-source');
  const finalMoment = document.getElementById('cinematic-homecoming');
  if (!letter || !finalMoment) return;

  const source = letter.textContent.replace(/\s+/gu, ' ').trim();
  const sectionTitles = [
    '49/51',
    'Beyond the Stars',
    'My Home',
    'Every Piece Finds Its Way Back'
  ];
  const paragraphEnds = [
    ['быть одной, я сделаю это.', 'любить в себе.'],
    ['и только моей.'],
    ['ассоциирую дом с тобой.', 'как мне хочется обнять тебя.'],
    [
      'последнюю частичку этого, чтобы найти дорогу обратно к тебе.',
      'я всё равно отдаю тебе 100% того, что я могу тебе дать.',
      'каждая моя частичка всё равно будет пытаться найти дорогу обратно к тебе.',
      'какой выбор сделало бы моё сердце.',
      'Пока ты рядом со мной, мне нечего бояться.'
    ]
  ];
  const sectionParagraphs = [];
  let sourceCursor = 0;
  for (const endings of paragraphEnds) {
    const paragraphs = [];
    for (const ending of endings) {
      const end = source.indexOf(ending, sourceCursor);
      if (end < 0) return;
      const paragraphEnd = end + ending.length;
      paragraphs.push(source.slice(sourceCursor, paragraphEnd).trim());
      sourceCursor = paragraphEnd;
    }
    sectionParagraphs.push(paragraphs);
  }
  const finalText = source.slice(sourceCursor).trim();
  if (finalText) return;

  letter.classList.add('letter-sections');
  letter.replaceChildren();
  sectionTitles.forEach((title, index) => {
    const article = document.createElement('article');
    article.className = 'letter-section';
    article.dataset.letterSection = String(index);
    const heading = document.createElement('h3');
    heading.className = 'letter-section-heading';
    heading.textContent = title;
    const panel = document.createElement('div');
    panel.className = 'letter-section-content';
    const readingWindow = document.createElement('div');
    readingWindow.className = 'letter-reading-window';
    sectionParagraphs[index].forEach(text => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      readingWindow.appendChild(paragraph);
    });
    panel.appendChild(readingWindow);
    article.append(heading, panel);
    letter.appendChild(article);
  });

  window.addEventListener('4951:letter-revealed', () => {
    finalMoment.classList.remove('hidden');
    requestAnimationFrame(() => finalMoment.classList.add('is-visible'));
  }, { once: true });
}

function create4951ReunionParticles() {
  const reunionColors = ['#e7e5e3', '#c9c4c5', '#b37d87'];
  for (let i = 0; i < 22; i++) {
    cursorParticles.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 220,
      y: window.innerHeight * 0.44 + (Math.random() - 0.5) * 110,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3 - 1,
      size: Math.random() * 2.2 + 1,
      alpha: 0.8,
      color: reunionColors[Math.floor(Math.random() * reunionColors.length)]
    });
  }
}

function trigger4951Reveal() {
  create4951ReunionParticles();
  unlockEasterEgg('drag_4951');
  unlockEasterEgg('distance_clue');
  const inner = document.querySelector('.scene-49-51-inner');
  inner?.classList.add('reunited');
  const dragContainer = document.getElementById('drag-unlock-container');

  if (dragContainer) {
    dragContainer.style.opacity = '0';
    setTimeout(() => dragContainer.classList.add('hidden'), 1000);
  }

  setTimeout(() => {
    if (DOM.spaceAtmosphere) DOM.spaceAtmosphere.style.background = '';
    if (inner) inner.classList.add('revealing');
  }, 1000);

  setTimeout(() => {
    if (DOM.revealContent4951) DOM.revealContent4951.classList.remove('hidden');
    window.dispatchEvent(new Event('4951:letter-revealed'));
    if (DOM.navWrap4951) DOM.navWrap4951.classList.remove('hidden');
  }, 3500);
}

/* ==========================================================================
   Comment System
   ========================================================================== */
const SCENE_NAMES = {
  'scene-landing': 'Landing',
  'scene-constellation': 'Constellation',
  'scene-hearts': 'Reasons I Love You',
  'scene-question': 'Playful Question',
  'scene-park': 'Starry Park',
  'scene-bucket': 'Bucket List',
  'scene-adore': 'Little Things',
  'scene-polaroid': 'Our Memories',
  'scene-secret': 'Secret Starlight',
  'scene-letter': 'Love Letter',
  'scene-hug': 'Virtual Hug',
  'scene-timeline': 'Timeline',
  'scene-memories': 'Timeline',
  'scene-interlude': 'Our Story',
  'scene-conversation': 'A Little Conversation',
  'scene-49-51': '49% & 51%',
  'scene-4951': '49% & 51%',
  'global': 'Global Note'
};

function initCommentSystem() {
  const api = window.FirebaseAPI;
  const appConfig = CONFIG.firebaseConfig;
  const authorInput = document.getElementById('comment-author');
  const contentInput = document.getElementById('comment-content');
  const submitButton = document.getElementById('submit-comment-btn');
  let currentScope = 'all';
  let db;
  let auth;
  let commentSnapshot;
  let lastCommentSentAt = 0;
  let sendingComment = false;
  const setStatus = (message, state = 'info') => {
    if (!DOM.commentStatus) return;
    DOM.commentStatus.textContent = message;
    DOM.commentStatus.dataset.state = state;
  };
  const getCurrentSceneId = () => document.querySelector('.scene.active')?.id || 'scene-landing';
  const ensureAnonymousAuth = async () => {
    if (!auth) throw new Error('Firebase Authentication is unavailable.');
    if (!auth.currentUser) await api.signInAnonymously(auth);
  };

  try {
    if (!api) throw new Error('Firebase modules did not load.');
    const app = api.getApps().find((candidate) => candidate.name === '[DEFAULT]') || api.initializeApp(appConfig);
    auth = api.getAuth(app);
    db = api.getFirestore(app);
  } catch (error) {
    console.error('Firebase comment setup failed.', error);
    if (DOM.commentList) {
      DOM.commentList.textContent = 'Shared notes are temporarily unavailable.';
      DOM.commentList.setAttribute('aria-busy', 'false');
    }
    setStatus('Comments could not connect. Please check the connection and try again.', 'error');
  }

  if (DOM.commentTrigger) {
    DOM.commentTrigger.addEventListener('click', () => {
      DOM.commentPanel.classList.add('open');
      DOM.commentTrigger.style.transform = 'scale(0)';
      updateSceneScopeLabel();
    });
  }

  // Note Destination Selector (All pages vs This scene only)
  let currentDestination = 'global';
  const destPills = DOM.commentPanel?.querySelectorAll('.dest-pill');
  const sceneScopeLabel = DOM.commentPanel?.querySelector('#current-scene-scope-label');

  function updateSceneScopeLabel() {
    const activeScene = document.querySelector('.scene.active');
    const sceneId = activeScene?.id;
    const sceneName = SCENE_NAMES[sceneId] || (sceneId ? sceneId.replace(/^scene-/, '') : 'This scene');
    if (sceneScopeLabel) {
      sceneScopeLabel.innerHTML = replaceEmojisWithCustom(`🌸 ${sceneName} only`);
    }
  }

  destPills?.forEach(pill => {
    pill.addEventListener('click', () => {
      destPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-checked', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-checked', 'true');
      currentDestination = pill.dataset.destination || 'global';
    });
  });

  document.addEventListener('scenechange', () => {
    updateSceneScopeLabel();
    renderFloatingComments(commentSnapshot);
  });

  if (DOM.toggleCommentBtn) {
    DOM.toggleCommentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Precision coordinates from cross button center
      const rect = DOM.toggleCommentBtn.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;

      // Magical romantic explosion revealing hearts
      triggerHeartExplosion(originX, originY);
      playHeartPopChime();

      DOM.toggleCommentBtn.classList.add('bursting');
      setTimeout(() => {
        DOM.commentPanel.classList.remove('open');
        DOM.commentTrigger.style.transform = 'scale(1)';
        DOM.toggleCommentBtn.classList.remove('bursting');
      }, 160);
    });
  }

  if (DOM.commentForm) {
    DOM.commentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const author = authorInput.value.trim();
      const content = contentInput.value.trim();
      // If user selected 'All pages', save as 'global' so it appears across every page!
      // If 'This scene only', save as current scene ID!
      const sceneId = currentDestination === 'global' ? 'global' : getCurrentSceneId();
      if (sendingComment) return;
      if (!author || !content || author.length > 50 || content.length > 200) {
        setStatus('Please enter a name and a note up to 200 characters.', 'error');
        return;
      }
      if (Date.now() - lastCommentSentAt < 15000) {
        setStatus('Please wait a little before sending another note.', 'error');
        return;
      }
      sendingComment = true;
      if (submitButton) submitButton.disabled = true;

      setStatus('Connecting securely…', 'loading');
      try {
        if (!db) {
          const unavailableError = new Error('Firestore is unavailable.');
          unavailableError.code = 'firestore/unavailable';
          throw unavailableError;
        }
        await ensureAnonymousAuth();
        setStatus('Sending…', 'loading');
        await api.addDoc(api.collection(db, 'comments'), {
          content,
          sceneId,
          authorName: author,
          createdAt: api.serverTimestamp()
        });
        lastCommentSentAt = Date.now();
        setStatus('Message sent ♡', 'success');
        DOM.commentForm.reset();
        // Immediately spawn floating note in the sky so the user sees it persist right away!
        spawnFloatingNote(author, content, sceneId, 'local-' + Date.now());
        // Keep selected destination
        if (destPills) {
          const defaultPill = DOM.commentPanel?.querySelector('.dest-pill[data-destination="global"]');
          if (defaultPill) defaultPill.click();
        }
      } catch (error) {
        console.error('Comment submission failed.', error);
        const authFailure = error?.code?.startsWith('auth/');
        const accessFailure = error?.code === 'permission-denied';
        setStatus(authFailure
          ? 'Sign-in failed. Enable anonymous sign-in and check this site’s authorized domain.'
          : accessFailure
            ? 'The database rules did not accept this note. Check the comments rules.'
            : 'Could not send your note. Check the connection and try again.', 'error');
      } finally {
        sendingComment = false;
        if (submitButton) submitButton.disabled = false;
      }
    });
  }

  if (db) {
    if (DOM.commentList) DOM.commentList.textContent = 'Loading shared notes…';
    if (DOM.commentList) DOM.commentList.setAttribute('aria-busy', 'true');
    api.onSnapshot(api.collection(db, 'comments'), (snapshot) => {
      commentSnapshot = snapshot;
      if (DOM.commentList) DOM.commentList.setAttribute('aria-busy', 'false');
      renderComments(snapshot, currentScope);
      renderFloatingComments(snapshot);
    }, (error) => {
      console.error('Comment loading failed.', error);
      DOM.floatingCommentsContainer?.replaceChildren();
      if (DOM.commentList) DOM.commentList.setAttribute('aria-busy', 'false');
      if (DOM.commentList) DOM.commentList.textContent = 'Notes could not be loaded. Check your connection and database access rules.';
    });
  }
}

function getCommentTime(data) {
  const timestamp = data.createdAt || data.timestamp;
  if (!timestamp) return 0;
  if (typeof timestamp.toMillis === 'function') return timestamp.toMillis();
  if (typeof timestamp.seconds === 'number') return timestamp.seconds * 1000;
  return 0;
}

let knownCommentSceneIds = null;
function getCommentSceneId(data) {
  if (!knownCommentSceneIds) {
    knownCommentSceneIds = new Set([...document.querySelectorAll('.scene')].map(scene => scene.id));
  }
  if (!data) return null;
  // If explicitly global, all, or the user's note intended for all scenes
  if (data.sceneId === 'global' || data.sceneId === 'all' || data.scope === 'all' || data.scope === 'global') return 'global';
  if (typeof data.content === 'string' && data.content.toLowerCase().includes('i love youuu')) return 'global';
  if (typeof data.sceneId === 'string') return knownCommentSceneIds.has(data.sceneId) ? data.sceneId : null;
  if (data.sceneId == null && typeof data.scene === 'string' && knownCommentSceneIds.has(data.scene)) return data.scene;
  return null;
}

const IGNORED_COMMENT_IDS = new Set(['bN3XWwzxIScxNfL2VzLR', 'c81LH0IhqXAi6p5UwFxz']);
function isPreviewComment(docId, data) {
  if (!data) return false;
  if (docId && IGNORED_COMMENT_IDS.has(docId)) return true;
  const content = String(data.content || '').toLowerCase().trim();
  if (content.includes('i love you so much lovie') || content.includes('i miss you so muchhh')) return true;
  return false;
}

function renderComments(snapshot, filter) {
  if (!DOM.commentList) return;
  DOM.commentList.replaceChildren();
  if (!snapshot) return;
  let shown = 0;
  const activeSceneId = document.querySelector('.scene.active')?.id;
  const docs = snapshot.docs
    .filter(doc => !isPreviewComment(doc.id, doc.data()))
    .sort((a, b) => getCommentTime(a.data()) - getCommentTime(b.data()));

  // Update count badge in accordion header
  const countEl = document.getElementById('past-notes-count');
  if (countEl) countEl.textContent = String(docs.length);

  docs.forEach((doc) => {
    const data = doc.data();
    const sceneId = getCommentSceneId(data);
    // In 'scene' filter, show notes for this scene as well as global notes that appear everywhere
    if (filter === 'scene' && (sceneId !== 'global' && sceneId !== activeSceneId)) return;
    const el = document.createElement('div');
    el.className = 'comment-item';
    const header = document.createElement('div');
    header.className = 'comment-item-header';
    const author = document.createElement('span');
    author.className = 'comment-item-author';
    author.textContent = String(data.authorName || data.author || 'Anonymous').slice(0, 50);
    const scene = document.createElement('span');
    scene.className = 'comment-item-scene';
    const label = sceneId === 'global' ? '✨ All pages' : (SCENE_NAMES[sceneId] || (sceneId ? sceneId.replace(/^scene-/, '') : 'Global Note'));
    scene.innerHTML = replaceEmojisWithCustom(label);
    const content = document.createElement('div');
    content.className = 'comment-item-content';
    content.textContent = String(data.content || '').slice(0, 200);
    header.append(author, scene);
    el.append(header, content);
    DOM.commentList.appendChild(el);
    shown++;
  });
  if (!shown) {
    const emptyState = document.createElement('div');
    emptyState.className = 'comment-empty-state';
    emptyState.innerHTML = replaceEmojisWithCustom(filter === 'scene'
      ? '<span class="empty-icon">🌸</span><span>No notes for this scene yet.<br><small style="color:var(--text-muted);font-size:0.8rem">Be the first to leave one below ♡</small></span>'
      : '<span class="empty-icon">✨</span><span>No notes yet.<br><small style="color:var(--text-muted);font-size:0.8rem">Leave the first little message ♡</small></span>');
    DOM.commentList.appendChild(emptyState);
  }
}

function renderFloatingComments(snapshot) {
  if (!DOM.floatingCommentsContainer) return;
  DOM.floatingCommentsContainer.replaceChildren();
  if (!snapshot) return;
  const activeSceneId = document.querySelector('.scene.active')?.id;
  if (!activeSceneId) return;
  const floatingNoteLimit = window.matchMedia('(max-width: 600px)').matches ? 2 : 5;
  const visibleDocs = snapshot.docs
    .filter(doc => !isPreviewComment(doc.id, doc.data()))
    .map(doc => ({ id: doc.id, data: doc.data(), sceneId: getCommentSceneId(doc.data()) }))
    .filter(entry => entry.sceneId === 'global' || entry.sceneId === activeSceneId)
    .sort((a, b) => getCommentTime(b.data) - getCommentTime(a.data))
    .slice(0, floatingNoteLimit);
  visibleDocs.forEach(({ id, data, sceneId }) => {
    spawnFloatingNote(data.authorName || data.author, data.content, sceneId, id);
  });
}

function spawnFloatingNote(author, content, sceneId, commentId) {
  if (!DOM.floatingCommentsContainer) return;
  if (commentId && DOM.floatingCommentsContainer.querySelector(`[data-comment-id="${commentId}"]`)) {
    return; // Don't duplicate existing note
  }
  const existingNotes = DOM.floatingCommentsContainer.querySelectorAll('.floating-note');
  if (existingNotes.length >= 8) {
    const oldest = existingNotes[0];
    if (oldest) oldest.remove();
  }

  const note = document.createElement('div');
  note.className = 'floating-note';
  note.dataset.sceneId = sceneId;
  if (commentId) note.dataset.commentId = commentId;
  const signature = document.createElement('strong');
  signature.textContent = String(author || 'Anonymous').slice(0, 50);
  const message = document.createElement('span');
  message.textContent = ': ' + String(content || '').slice(0, 200);
  note.append(signature, message);
  note.style.animationDelay = (Math.random() * 4).toFixed(1) + 's';

  const width = 220;
  const height = 120;
  const maxX = Math.max(0, window.innerWidth - width);
  const maxY = Math.max(0, window.innerHeight - height);
  const protectedRects = [...document.querySelectorAll(
    '.scene.active .scene-heading-wrap, .scene.active button, .scene.active input, .scene.active textarea, .scene.active .park-landscape, .scene.active .constellation-arena, .scene.active .polaroid-gallery, .scene.active .drag-unlock-container, #site-header, .scene-nav, .music-player, .floating-comment-trigger, .comment-system-panel'
  )].map(element => element.getBoundingClientRect()).filter(rect => rect.width && rect.height);
  const occupiedRects = [...protectedRects, ...DOM.floatingCommentsContainer.querySelectorAll('.floating-note')]
    .map(element => element instanceof Element ? element.getBoundingClientRect() : element);
  let position = null;
  for (let attempt = 0; attempt < 25; attempt++) {
    const candidate = { left: Math.random() * maxX, top: Math.random() * maxY, right: 0, bottom: 0 };
    candidate.right = candidate.left + width;
    candidate.bottom = candidate.top + height;
    const overlaps = occupiedRects.some(rect => candidate.left < rect.right && candidate.right > rect.left && candidate.top < rect.bottom && candidate.bottom > rect.top);
    if (!overlaps) {
      position = candidate;
      break;
    }
  }
  if (!position) {
    // Fallback safe position in top-left or top-right area
    position = { left: 40 + Math.random() * 120, top: 120 + Math.random() * 180 };
  }
  note.style.left = position.left + 'px';
  note.style.top = position.top + 'px';
  DOM.floatingCommentsContainer.appendChild(note);
  // Persist permanently in the scene — no setTimeout removal so notes never disappear!
}

/* ==========================================================================
   Romantic Heart Explosion & Fairy Pop Audio
   ========================================================================== */
function playHeartPopChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const now = audioCtx.currentTime;

    // Harmonic love chime (C6: 1046.5Hz, E6: 1318.5Hz, G6: 1568Hz)
    const notes = [1046.5, 1318.5, 1567.98];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.04);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.12, now + i * 0.04 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.04 + 0.38);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now + i * 0.04);
      osc.stop(now + i * 0.04 + 0.4);
    });
  } catch (e) { }
}

function triggerHeartExplosion(originX, originY) {
  // 1. Shockwave glow ring & radial core flash
  const ring = document.createElement('div');
  ring.className = 'heart-explosion-ring';
  ring.style.left = `${originX}px`;
  ring.style.top = `${originY}px`;
  document.body.appendChild(ring);
  setTimeout(() => ring.remove(), 600);

  const flash = document.createElement('div');
  flash.className = 'heart-explosion-flash';
  flash.style.left = `${originX}px`;
  flash.style.top = `${originY}px`;
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 400);

  // 2. Exploding Hearts (20 romantic custom emojis from emoji.gg bursting in 360 degrees)
  const customHearts = [
    'emojis/heart.gif',
    'emojis/heart_pink.png',
    'emojis/hearts_pastel.gif',
    'emojis/user_sparkle_star.png',
    'emojis/user_sparkle_cross.png',
    'emojis/sakura.gif',
    'emojis/letter.png',
    'emojis/heart_bubble.gif',
    'emojis/butterfly.gif'
  ];
  const heartCount = 20;

  for (let i = 0; i < heartCount; i++) {
    const el = document.createElement('div');
    el.className = 'exploding-heart-particle';
    const size = Math.floor(Math.random() * 10 + 18); // 18px to 28px
    const asset = customHearts[i % customHearts.length];
    const img = document.createElement('img');
    img.src = asset;
    img.className = 'custom-emoji';
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.filter = 'drop-shadow(0 2px 8px rgba(244, 114, 182, 0.6))';
    el.appendChild(img);

    el.style.left = `${originX}px`;
    el.style.top = `${originY}px`;
    document.body.appendChild(el);

    // Radial dispersion angle with organic jitter
    const angle = (i / heartCount) * (Math.PI * 2) + (Math.random() - 0.5) * 0.35;
    const distance = Math.random() * 95 + 75; // 75px to 170px radius
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - (Math.random() * 28 + 12); // float upward
    const rot = (Math.random() - 0.5) * 80; // -40deg to +40deg rotation
    const duration = Math.random() * 250 + 850; // 850ms to 1100ms

    if (el.animate) {
      const anim = el.animate([
        {
          transform: 'translate(-50%, -50%) translate(0px, 0px) scale(0) rotate(0deg)',
          opacity: 1
        },
        {
          transform: `translate(-50%, -50%) translate(${dx * 0.42}px, ${dy * 0.42}px) scale(1.35) rotate(${rot * 0.3}deg)`,
          opacity: 1,
          offset: 0.18
        },
        {
          transform: `translate(-50%, -50%) translate(${dx * 0.82}px, ${dy * 0.82 - 8}px) scale(1.05) rotate(${rot * 0.7}deg)`,
          opacity: 0.95,
          offset: 0.65
        },
        {
          transform: `translate(-50%, -50%) translate(${dx}px, ${dy - 30}px) scale(0.7) rotate(${rot}deg)`,
          opacity: 0,
          offset: 1
        }
      ], {
        duration,
        easing: 'cubic-bezier(0.12, 0.82, 0.28, 1)',
        fill: 'forwards'
      });
      anim.onfinish = () => el.remove();
    } else {
      setTimeout(() => el.remove(), duration);
    }
  }

  // 3. Stardust Sparkles (14 glowing specks shooting outwards)
  const sparkleColors = ['#fbcfe8', '#ffe082', '#f472b6', '#ffffff', '#c084fc'];
  const sparkleCount = 14;

  for (let j = 0; j < sparkleCount; j++) {
    const sp = document.createElement('div');
    sp.className = 'exploding-sparkle-particle';
    const spSize = Math.random() * 4 + 3; // 3px to 7px
    sp.style.width = `${spSize}px`;
    sp.style.height = `${spSize}px`;
    sp.style.background = sparkleColors[j % sparkleColors.length];
    sp.style.left = `${originX}px`;
    sp.style.top = `${originY}px`;
    document.body.appendChild(sp);

    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 115 + 65; // 65px to 180px
    const sx = Math.cos(angle) * dist;
    const sy = Math.sin(angle) * dist - Math.random() * 20;
    const duration = Math.random() * 200 + 550; // 550ms to 750ms

    if (sp.animate) {
      const anim = sp.animate([
        {
          transform: 'translate(-50%, -50%) translate(0, 0) scale(0.2)',
          opacity: 1
        },
        {
          transform: `translate(-50%, -50%) translate(${sx * 0.5}px, ${sy * 0.5}px) scale(1.6)`,
          opacity: 1,
          offset: 0.25
        },
        {
          transform: `translate(-50%, -50%) translate(${sx}px, ${sy}px) scale(0)`,
          opacity: 0,
          offset: 1
        }
      ], {
        duration,
        easing: 'cubic-bezier(0.15, 0.85, 0.35, 1)',
        fill: 'forwards'
      });
      anim.onfinish = () => sp.remove();
    } else {
      setTimeout(() => sp.remove(), duration);
    }
  }
}

/* ==========================================================================
   Interactive Pixel Cat Cursor Companion
   ========================================================================== */

// Preload the user's custom meow audio file for instant playback on tap
let meowAudioInstance = null;
try {
  meowAudioInstance = new Audio('assets/music/meow.mp3');
  meowAudioInstance.preload = 'auto';
  meowAudioInstance.load();
} catch (e) {
  // ignore
}

function playKittenMeowSound() {
  try {
    const audio = meowAudioInstance ? meowAudioInstance.cloneNode() : new Audio('assets/music/meow.mp3');
    audio.volume = 0.85;
    audio.currentTime = 0;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Meow audio playback error or prevented:', err);
      });
    }
  } catch (e) {
    console.warn('Could not play meow sound:', e);
  }
}

function spawnCatPoofParticles(cx, cy) {
  // Use 100% custom theme emojis from emojis/ folder (no default OS text emojis)
  const customEmojis = [
    { src: 'emojis/user_sparkle_star.png', size: '22px' },
    { src: 'emojis/heart_pink.png', size: '18px' },
    { src: 'emojis/sakura.gif', size: '20px' },
    { src: 'emojis/user_sparkle_cross.png', size: '18px' },
    { src: 'emojis/hearts_pastel.gif', size: '22px' },
    { src: 'emojis/star_candy.png', size: '20px' },
    { src: 'emojis/heart.gif', size: '18px' },
    { src: 'emojis/user_sparkle_star.png', size: '20px' },
    { src: 'emojis/heart_pink.png', size: '19px' },
    { src: 'emojis/user_sparkle_cross.png', size: '17px' }
  ];
  const count = 20;
  for (let i = 0; i < count; i++) {
    const item = customEmojis[i % customEmojis.length];
    const p = document.createElement('div');
    p.className = 'cat-poof-particle';
    p.style.width = item.size;
    p.style.height = item.size;

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = 'Sparkle';
    img.draggable = false;
    p.appendChild(img);

    const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
    const dist = 50 + Math.random() * 65;
    const mx = cx + Math.cos(angle) * (dist * 0.65);
    const my = cy + Math.sin(angle) * (dist * 0.65) - 10;
    const ex = cx + Math.cos(angle) * dist;
    const ey = cy + Math.sin(angle) * dist - 25;

    p.style.setProperty('--startX', `${cx}px`);
    p.style.setProperty('--startY', `${cy}px`);
    p.style.setProperty('--midX', `${mx}px`);
    p.style.setProperty('--midY', `${my}px`);
    p.style.setProperty('--endX', `${ex}px`);
    p.style.setProperty('--endY', `${ey}px`);
    p.style.animationDelay = `${(i % 3) * 0.03}s`;

    document.body.appendChild(p);
    setTimeout(() => p.remove(), 950);
  }
}

function initCursorCatCompanion() {
  const cat = document.getElementById('cursor-cat-companion');
  if (!cat) return;

  const canvas = document.getElementById('cursor-cat-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;

  // Preload spritesheet
  const sheet = new Image();
  sheet.src = 'assets/images/cursor_cat_sheet.webp';
  let sheetLoaded = false;

  const FRAME_WIDTH = 148;
  const FRAME_HEIGHT = 196;
  const COLS = 11;
  const TOTAL_FRAMES = 88;
  const FRAME_DURATION = 80; // ms per frame

  sheet.onload = () => {
    sheetLoaded = true;
    if (ctx) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(sheet, 0, 0, FRAME_WIDTH, FRAME_HEIGHT, 0, 0, FRAME_WIDTH, FRAME_HEIGHT);
    }
  };

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let catX = mouseX + 22;
  let catY = mouseY + 24;
  let lastX = catX;
  let facingLeft = false;
  let isDisappeared = false;
  let hasMoved = false;

  const onPointerMove = (x, y) => {
    mouseX = x;
    mouseY = y;
    if (!hasMoved) {
      hasMoved = true;
      cat.style.display = 'block';
      catX = mouseX + 22;
      catY = mouseY + 24;
    }
  };

  window.addEventListener('mousemove', (e) => onPointerMove(e.clientX, e.clientY));
  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // Initial reveal after slight delay if user hasn't moved mouse yet
  setTimeout(() => {
    if (!hasMoved && !isDisappeared) {
      cat.style.display = 'block';
      catX = mouseX + 22;
      catY = mouseY + 24;
    }
  }, 1000);

  let startTime = null;

  function followTick(timestamp) {
    if (isDisappeared) return;
    if (!startTime) startTime = timestamp;

    const elapsed = timestamp - startTime;
    const currentFrame = Math.floor((elapsed / FRAME_DURATION) % TOTAL_FRAMES);

    // Frame Analysis:
    // Frames 0 to 36: The cat is lying down / resting flat on the ground with hearts floating up.
    // When laying: it does NOT follow the cursor; it stays exactly where it was,
    // while the user can move the cursor freely.
    // When not laying (frames 37 to 87): it wakes up, jumps, and follows the cursor right after!
    const isLaying = (currentFrame >= 0 && currentFrame <= 36);

    if (isLaying) {
      cat.classList.add('is-laying');
      // Freeze position: catX and catY do NOT move towards mouseX / mouseY!
    } else {
      cat.classList.remove('is-laying');
      const targetX = mouseX + 22;
      const targetY = mouseY + 24;

      catX += (targetX - catX) * 0.12;
      catY += (targetY - catY) * 0.12;

      const vx = catX - lastX;
      if (vx < -0.8) facingLeft = true;
      else if (vx > 0.8) facingLeft = false;
    }
    lastX = catX;

    const scaleStr = facingLeft ? 'scaleX(-1)' : 'scaleX(1)';
    cat.style.transform = `translate3d(${catX}px, ${catY}px, 0) ${scaleStr}`;

    // Render exact frame to canvas
    if (ctx && sheetLoaded) {
      const col = currentFrame % COLS;
      const row = Math.floor(currentFrame / COLS);
      const sx = col * FRAME_WIDTH;
      const sy = row * FRAME_HEIGHT;

      ctx.clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
      ctx.drawImage(sheet, sx, sy, FRAME_WIDTH, FRAME_HEIGHT, 0, 0, FRAME_WIDTH, FRAME_HEIGHT);
    }

    requestAnimationFrame(followTick);
  }
  requestAnimationFrame(followTick);

  // Click / Tap to meow and dissolve gracefully
  function triggerDisappear(e) {
    if (isDisappeared) return;
    isDisappeared = true;
    if (e) e.stopPropagation();

    // 1. Play cute kitten meow sound
    playKittenMeowSound();

    // 2. Lock current position into CSS variable for smooth keyframe hop
    cat.style.setProperty('--cur-x', `${catX}px`);
    cat.style.setProperty('--cur-y', `${catY}px`);
    cat.classList.add('disappearing');

    // 3. Spawn bursting heart & stardust particles
    spawnCatPoofParticles(catX + 37, catY + 45);

    // 4. Remove completely after animation finishes
    setTimeout(() => {
      cat.remove();
    }, 760);
  }

  cat.addEventListener('click', triggerDisappear);
  cat.addEventListener('touchend', (e) => {
    e.preventDefault();
    triggerDisappear(e);
  });
  cat.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerDisappear(e);
    }
  });
}

/* ==========================================================================
   Furious Typing Companion (Scuba Cat)
   ========================================================================== */

function initScubaTypingCompanion() {
  const companion = document.getElementById('scuba-typing-companion');
  const bubbleContainer = document.getElementById('scuba-bubble-burst-container');
  if (!companion) return;

  let hideTimer = null;
  let isTypingActive = false;
  const INACTIVITY_TIMEOUT = 1350; // ms to wait after typing stops before disappearing

  // Particle color palette matching the dreamy pink/purple starry aesthetic
  const BUBBLE_COLORS = [
    { color: '#f472b6', glow: 'rgba(244, 114, 182, 0.85)' },
    { color: '#c084fc', glow: 'rgba(192, 132, 252, 0.85)' },
    { color: '#fb7185', glow: 'rgba(251, 113, 133, 0.85)' },
    { color: '#e879f9', glow: 'rgba(232, 121, 249, 0.85)' },
    { color: '#fbbf24', glow: 'rgba(251, 191, 36, 0.85)' },
    { color: '#ffffff', glow: 'rgba(255, 255, 255, 0.95)' }
  ];

  function updatePosition() {
    const activeEl = document.activeElement;
    const companionWidth = 86;
    const companionHeight = 86;
    let targetTop, targetLeft;

    const commentPanel = document.getElementById('comment-system-panel');
    const isPanelOpen = commentPanel && commentPanel.classList.contains('open');
    const secretCard = document.getElementById('secret-box-card');

    if (isPanelOpen && commentPanel) {
      // Place gracefully to the left of the open note panel, aligned with active input height
      const panelRect = commentPanel.getBoundingClientRect();
      targetLeft = Math.max(16, panelRect.left - companionWidth - 14);
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        const inputRect = activeEl.getBoundingClientRect();
        targetTop = Math.max(16, Math.min(window.innerHeight - companionHeight - 20, inputRect.top - 12));
      } else {
        targetTop = Math.max(16, panelRect.top + 120);
      }
    } else if (secretCard && (STATE && STATE.currentScene === 9)) {
      // Position clearly outside to the right of the secret box card container
      const cardRect = secretCard.getBoundingClientRect();
      if (cardRect.right + companionWidth + 18 <= window.innerWidth) {
        targetLeft = cardRect.right + 18;
        targetTop = Math.max(16, cardRect.top + (cardRect.height - companionHeight) / 2);
      } else {
        targetLeft = Math.max(16, cardRect.right - companionWidth - 10);
        targetTop = Math.max(16, cardRect.top - companionHeight - 12);
      }
    } else if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable)) {
      // Generic input: beside or perched above
      const inputRect = activeEl.getBoundingClientRect();
      if (inputRect.right + companionWidth + 16 <= window.innerWidth) {
        targetLeft = inputRect.right + 14;
        targetTop = Math.max(12, inputRect.top + (inputRect.height - companionHeight) / 2);
      } else if (inputRect.top - companionHeight - 8 >= 10) {
        targetLeft = Math.max(12, inputRect.right - companionWidth);
        targetTop = inputRect.top - companionHeight - 8;
      } else {
        targetLeft = window.innerWidth - companionWidth - 24;
        targetTop = window.innerHeight - companionHeight - 96;
      }
    } else {
      // General page typing: docked comfortably above the floating notes button
      targetLeft = window.innerWidth - companionWidth - 24;
      targetTop = window.innerHeight - companionHeight - 96;
    }

    companion.style.left = `${Math.round(targetLeft)}px`;
    companion.style.top = `${Math.round(targetTop)}px`;
  }

  function spawnDisappearanceEffect() {
    if (!bubbleContainer) return;
    bubbleContainer.innerHTML = '';

    const numBubbles = 10;
    for (let i = 0; i < numBubbles; i++) {
      const angle = (i / numBubbles) * 2 * Math.PI + (Math.random() - 0.5) * 0.5;
      const distance = 36 + Math.random() * 42;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      const scale = 0.8 + Math.random() * 0.6;
      const palette = BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)];

      const bubble = document.createElement('div');
      bubble.className = 'scuba-burst-bubble';
      bubble.style.setProperty('--dx', `${Math.round(dx)}px`);
      bubble.style.setProperty('--dy', `${Math.round(dy)}px`);
      bubble.style.setProperty('--scale', scale.toFixed(2));
      bubble.style.setProperty('--bubble-color', palette.color);
      bubble.style.setProperty('--bubble-glow', palette.glow);
      bubbleContainer.appendChild(bubble);
    }
  }

  function onTypingDetected() {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }

    // Cancel any ongoing disappearance animation
    if (companion.classList.contains('is-disappearing')) {
      companion.classList.remove('is-disappearing');
      if (bubbleContainer) bubbleContainer.innerHTML = '';
    }

    updatePosition();

    if (!isTypingActive) {
      isTypingActive = true;
      companion.classList.add('is-typing');
    }

    // Set debounce timer for disappearance
    hideTimer = setTimeout(() => {
      isTypingActive = false;
      companion.classList.remove('is-typing');
      companion.classList.add('is-disappearing');
      spawnDisappearanceEffect();

      // Clean up after the small disappearance effect finishes
      hideTimer = setTimeout(() => {
        companion.classList.remove('is-disappearing');
        if (bubbleContainer) bubbleContainer.innerHTML = '';
        hideTimer = null;
      }, 430);
    }, INACTIVITY_TIMEOUT);
  }

  // Handle keyboard events globally across all scenes
  const IGNORED_KEYS = new Set([
    'Shift', 'Control', 'Alt', 'Meta', 'CapsLock',
    'Escape', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    'Home', 'End', 'PageUp', 'PageDown', 'Insert', 'F1', 'F2', 'F3',
    'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
  ]);

  window.addEventListener('keydown', (e) => {
    // Ignore pure navigation / modifier key presses unless typing
    if (IGNORED_KEYS.has(e.key)) return;
    if (e.ctrlKey || e.altKey || e.metaKey) {
      // Allow Ctrl+V, Ctrl+Z, etc. if inside an input
      const tag = document.activeElement ? document.activeElement.tagName : '';
      if (tag !== 'INPUT' && tag !== 'TEXTAREA') return;
    }

    onTypingDetected();
  }, { passive: true });

  // Also listen for input event (handles virtual keyboard, mobile, autocorrect, copy-paste)
  document.addEventListener('input', () => {
    onTypingDetected();
  }, { passive: true });

  // Update position on window resize if currently visible
  window.addEventListener('resize', () => {
    if (isTypingActive) updatePosition();
  }, { passive: true });
}


