const COURSE = {
  title: "Life in the Czech Republic",
  language: "English",
  target_audience: "Foreign workers",
  modules: [
    {
      id: "geography",
      title: "Geography",
      illustration: "images/czech_map.png",
      facts: [
        "The Czech Republic is located in Central Europe.",
        "It borders Germany, Austria, Slovakia and Poland.",
        "The country has forests, rivers, hills and mountains.",
        "The highest mountain is Snezka (1603 m).",
        "Major rivers include the Vltava, Elbe and Morava."
      ],
      quiz: {
        question: "Where is the Czech Republic located?",
        options: ["Central Europe", "South America", "Asia"],
        answer: 0
      }
    },
    {
      id: "cities",
      title: "Major Cities",
      illustration: "images/prague_city.png",
      facts: [
        "Prague is the capital and largest city.",
        "Brno is the second largest city and an important university center.",
        "Ostrava is known for industry.",
        "Plzen is famous for Pilsner beer."
      ],
      quiz: {
        question: "What is the capital of the Czech Republic?",
        options: ["Brno", "Prague", "Ostrava"],
        answer: 1
      }
    },
    {
      id: "architecture",
      title: "Architecture",
      illustration: "images/czech_architecture.png",
      facts: [
        "The Czech Republic has many castles and chateaux.",
        "Historic towns often have colorful houses.",
        "Baroque churches are common.",
        "Many buildings are hundreds of years old."
      ],
      quiz: {
        question: "What historic buildings are common in the Czech Republic?",
        options: ["Castles and chateaux", "Pyramids", "Skyscrapers only"],
        answer: 0
      }
    },
    {
      id: "nature",
      title: "Nature",
      illustration: "images/czech_mountains.png",
      facts: [
        "Popular mountain regions include Krkonose and Sumava.",
        "Many people enjoy hiking and cycling.",
        "Winter sports like skiing are popular.",
        "Forests cover a large part of the country."
      ],
      quiz: {
        question: "Which activity is popular in Czech mountains?",
        options: ["Surfing", "Skiing", "Desert safari"],
        answer: 1
      }
    },
    {
      id: "beer",
      title: "Beer and Food",
      illustration: "images/czech_beer.png",
      facts: [
        "The Czech Republic is famous for beer.",
        "Czech people drink the most beer per person in the world.",
        "Popular dishes include svickova, goulash and dumplings.",
        "Beer is an important part of Czech culture."
      ],
      quiz: {
        question: "What drink is the Czech Republic famous for?",
        options: ["Beer", "Coffee", "Wine"],
        answer: 0
      }
    },
    {
      id: "industry",
      title: "Industry",
      illustration: "images/czech_factory.png",
      facts: [
        "Manufacturing is an important part of the Czech economy.",
        "Automotive production is a major industry.",
        "Engineering and machinery are also strong sectors.",
        "Many international companies operate factories in the country."
      ],
      quiz: {
        question: "Which industry is strong in the Czech Republic?",
        options: ["Automotive production", "Space rockets", "Oil drilling"],
        answer: 0
      }
    },
    {
      id: "spa",
      title: "Spa Towns",
      illustration: "images/czech_spa.png",
      facts: [
        "The Czech Republic has famous spa towns.",
        "Karlovy Vary is the most famous spa city.",
        "People visit for mineral water and health treatments.",
        "Spa towns have beautiful historic architecture."
      ],
      quiz: {
        question: "Which spa town is famous in the Czech Republic?",
        options: ["Karlovy Vary", "Berlin", "Vienna"],
        answer: 0
      }
    },
    {
      id: "daily_life",
      title: "Daily Life",
      illustration: "images/czech_daily_life.png",
      facts: [
        "Public transport is reliable and widely used.",
        "People commonly use trains, buses and trams.",
        "Most shops open around 8:00.",
        "The Czech Republic is considered a safe country."
      ],
      quiz: {
        question: "What transport is common in Czech cities?",
        options: ["Trams", "Camels", "Gondolas"],
        answer: 0
      }
    }
  ]
};

const QUIZ_POINTS = 10;
const LEARN_IMAGE_BY_KEY = {
  architecture: "assets/learn/architecture.png",
  beer: "assets/learn/beer.png",
  castle: "assets/learn/castle.png",
  industry: "assets/learn/industry.png",
  mountains: "assets/learn/mountains.png",
  spa: "assets/learn/spa.png"
};

let phase = "learn";
let moduleIndex = 0;
let score = 0;
let answered = false;
let soundEnabled = true;
let audioContext = null;
let lastScore = 0;

const panelTitleEl = document.getElementById("panelTitle");
const introTextEl = document.getElementById("introText");
const clueCardsEl = document.getElementById("clueCards");
const statusBoxEl = document.getElementById("statusBox");
const revealBtnEl = document.getElementById("revealBtn");
const nextBtnEl = document.getElementById("nextBtn");
const factsBoxEl = document.getElementById("factsBox");
const scoreEl = document.getElementById("score");
const roundEl = document.getElementById("round");
const roundTotalEl = document.getElementById("roundTotal");
const soundToggleEl = document.getElementById("soundToggle");

function getAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      return null;
    }
    audioContext = new AudioCtx();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  return audioContext;
}

function playTone(frequency, duration, waveform = "sine", volume = 0.06, delay = 0) {
  if (!soundEnabled) {
    return;
  }

  const ctx = getAudioContext();
  if (!ctx) {
    return;
  }

  const now = ctx.currentTime + delay;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = waveform;
  oscillator.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
}

function playSound(effect) {
  if (!soundEnabled) {
    return;
  }

  if (effect === "next") {
    playTone(500, 0.06, "triangle", 0.035);
    playTone(640, 0.06, "triangle", 0.03, 0.06);
    return;
  }

  if (effect === "wrong") {
    playTone(290, 0.09, "sawtooth", 0.045);
    playTone(190, 0.14, "sawtooth", 0.04, 0.09);
    return;
  }

  if (effect === "correct") {
    playTone(440, 0.12, "triangle", 0.05);
    playTone(550, 0.14, "triangle", 0.05, 0.08);
    playTone(660, 0.18, "triangle", 0.05, 0.15);
    return;
  }

  if (effect === "final") {
    playTone(392, 0.12, "sine", 0.05);
    playTone(523, 0.16, "sine", 0.045, 0.1);
    playTone(784, 0.22, "sine", 0.04, 0.2);
  }
}

function pulseElement(element, className) {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

function setStatus(message, variant = "") {
  statusBoxEl.textContent = message;
  statusBoxEl.className = `status${variant ? ` ${variant}` : ""}`;
  pulseElement(statusBoxEl, "pulse");
}

function updateSoundButton() {
  soundToggleEl.textContent = soundEnabled ? "Sound: On" : "Sound: Off";
  soundToggleEl.setAttribute("aria-pressed", String(soundEnabled));
}

function updateScoreboard() {
  scoreEl.textContent = String(score);
  if (phase === "done") {
    roundEl.textContent = "-";
    roundTotalEl.textContent = "-";
  } else {
    roundEl.textContent = String(moduleIndex + 1);
    roundTotalEl.textContent = String(COURSE.modules.length);
  }

  if (lastScore !== score) {
    pulseElement(scoreEl, "score-pop");
  }
  lastScore = score;
}

function resolveModuleIllustration(module) {
  const haystack = `${module.id} ${module.title} ${module.illustration}`.toLowerCase();

  if (haystack.includes("architecture")) {
    return LEARN_IMAGE_BY_KEY.architecture;
  }

  if (haystack.includes("beer") || haystack.includes("food")) {
    return LEARN_IMAGE_BY_KEY.beer;
  }

  if (haystack.includes("industry") || haystack.includes("factory")) {
    return LEARN_IMAGE_BY_KEY.industry;
  }

  if (
    haystack.includes("nature") ||
    haystack.includes("mountain") ||
    haystack.includes("geography") ||
    haystack.includes("map")
  ) {
    return LEARN_IMAGE_BY_KEY.mountains;
  }

  if (haystack.includes("spa")) {
    return LEARN_IMAGE_BY_KEY.spa;
  }

  if (haystack.includes("city") || haystack.includes("daily")) {
    return LEARN_IMAGE_BY_KEY.castle;
  }

  return LEARN_IMAGE_BY_KEY.castle;
}

function renderLearningModule() {
  const module = COURSE.modules[moduleIndex];
  const illustration = resolveModuleIllustration(module);
  panelTitleEl.textContent = `${module.title} - Learn`;
  introTextEl.textContent = `${COURSE.title} for ${COURSE.target_audience}.`;

  const factsHtml = module.facts.map((fact) => `<li>${fact}</li>`).join("");
  clueCardsEl.innerHTML = `
    <article class="learn-card panel-enter">
      <img src="${illustration}" alt="${module.title} illustration" loading="eager" />
      <h3>${module.title}</h3>
      <p>Read these key facts before the test:</p>
      <ul>${factsHtml}</ul>
    </article>
  `;

  nextBtnEl.textContent = moduleIndex === COURSE.modules.length - 1 ? "Start Quiz" : "Next Topic";
  nextBtnEl.disabled = false;
  revealBtnEl.classList.add("hidden");
  factsBoxEl.classList.add("hidden");
  setStatus(`Learning module ${moduleIndex + 1} of ${COURSE.modules.length}.`);
  updateScoreboard();
}

function renderQuizModule() {
  const module = COURSE.modules[moduleIndex];
  const illustration = resolveModuleIllustration(module);
  answered = false;

  panelTitleEl.textContent = `${module.title} - Quiz`;
  introTextEl.textContent = "Choose one correct answer.";

  const optionsHtml = module.quiz.options
    .map((option, index) => `<button class="quiz-option" data-index="${index}">${option}</button>`)
    .join("");

  clueCardsEl.innerHTML = `
    <article class="learn-card panel-enter">
      <img src="${illustration}" alt="${module.title} illustration" loading="eager" />
      <h3 class="quiz-question">${module.quiz.question}</h3>
      <div class="quiz-options">${optionsHtml}</div>
    </article>
  `;

  clueCardsEl.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      if (answered) {
        return;
      }

      answered = true;
      const selectedIndex = Number(button.dataset.index);
      const correctIndex = module.quiz.answer;
      const optionButtons = clueCardsEl.querySelectorAll(".quiz-option");

      optionButtons.forEach((optionButton, idx) => {
        optionButton.disabled = true;
        if (idx === correctIndex) {
          optionButton.classList.add("correct");
        }
      });

      if (selectedIndex === correctIndex) {
        score += QUIZ_POINTS;
        updateScoreboard();
        playSound("correct");
        setStatus("Correct answer.", "success");
      } else {
        button.classList.add("wrong");
        playSound("wrong");
        setStatus("Incorrect. The highlighted answer is correct.", "error");
      }

      nextBtnEl.disabled = false;
    });
  });

  nextBtnEl.textContent = moduleIndex === COURSE.modules.length - 1 ? "Finish Course" : "Next Module";
  nextBtnEl.disabled = true;
  revealBtnEl.classList.add("hidden");
  factsBoxEl.classList.add("hidden");
  setStatus("Select your answer to continue.");
  updateScoreboard();
}

function renderFinal() {
  phase = "done";
  panelTitleEl.textContent = "Course Complete";
  introTextEl.textContent = `Language: ${COURSE.language}. Audience: ${COURSE.target_audience}.`;
  clueCardsEl.innerHTML = `
    <div class="clue-card revealed">You completed all ${COURSE.modules.length} modules.</div>
    <div class="clue-card revealed">Final score: ${score}</div>
    <div class="clue-card revealed">Press \"Restart Course\" to run it again.</div>
  `;

  nextBtnEl.textContent = "Restart Course";
  nextBtnEl.disabled = false;
  revealBtnEl.classList.add("hidden");
  playSound("final");
  setStatus("Great work. Course completed.", "success");
  updateScoreboard();
}

function startLearning() {
  phase = "learn";
  moduleIndex = 0;
  score = 0;
  renderLearningModule();
}

function startQuiz() {
  phase = "quiz";
  moduleIndex = 0;
  renderQuizModule();
}

nextBtnEl.addEventListener("click", () => {
  playSound("next");

  if (phase === "learn") {
    if (moduleIndex < COURSE.modules.length - 1) {
      moduleIndex += 1;
      renderLearningModule();
      return;
    }

    startQuiz();
    return;
  }

  if (phase === "quiz") {
    if (!answered) {
      return;
    }

    if (moduleIndex < COURSE.modules.length - 1) {
      moduleIndex += 1;
      renderQuizModule();
      return;
    }

    renderFinal();
    return;
  }

  if (phase === "done") {
    startLearning();
  }
});

soundToggleEl.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  updateSoundButton();
  if (soundEnabled) {
    playTone(740, 0.06, "sine", 0.04);
  }
});

updateSoundButton();
startLearning();
