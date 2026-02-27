const PLACES = [
  {
    id: "prague",
    label: "P",
    name: "Prague",
    lon: 14.4378,
    lat: 50.0755,
    clues: [
      "This city has a famous medieval astronomical clock.",
      "The Vltava River flows through it.",
      "Charles Bridge and Prague Castle are key landmarks here."
    ],
    facts: [
      "Prague Castle is one of the largest ancient castle complexes in the world.",
      "The historic center of Prague is a UNESCO World Heritage Site."
    ]
  },
  {
    id: "brno",
    label: "B",
    name: "Brno",
    lon: 16.6068,
    lat: 49.1951,
    clues: [
      "It is the largest city in Moravia.",
      "This city hosts the MotoGP race circuit nearby in Masaryk Circuit.",
      "The Cathedral of St. Peter and Paul overlooks its old center."
    ],
    facts: [
      "Brno is home to Villa Tugendhat, a UNESCO-listed modernist building.",
      "The city has a quirky local tradition of a dragon in the Old Town Hall."
    ]
  },
  {
    id: "ostrava",
    label: "O",
    name: "Ostrava",
    lon: 18.2625,
    lat: 49.8209,
    clues: [
      "Historically, this city was strongly connected to coal and steel.",
      "The Lower Vitkovice industrial area has been transformed into a culture space.",
      "It is close to the Polish border in the northeast of the country."
    ],
    facts: [
      "Colours of Ostrava is one of Central Europe's largest music festivals.",
      "Its industrial heritage is a major part of modern Czech identity."
    ]
  },
  {
    id: "plzen",
    label: "PL",
    name: "Plzen",
    lon: 13.3776,
    lat: 49.7384,
    clues: [
      "This city gave the world a globally famous style of pale lager.",
      "The Pilsner Urquell brewery is located here.",
      "It lies in western Bohemia."
    ],
    facts: [
      "The term 'pilsner' comes from this city.",
      "Plzen has one of the largest synagogue buildings in Europe."
    ]
  },
  {
    id: "liberec",
    label: "L",
    name: "Liberec",
    lon: 15.0543,
    lat: 50.7671,
    clues: [
      "It sits near the Jizera Mountains.",
      "A distinctive TV tower and hotel stand on Jested mountain nearby.",
      "This city is in the north, close to Germany and Poland."
    ],
    facts: [
      "Jested is one of the most iconic pieces of Czech modern architecture.",
      "Liberec has long been an important textile and industrial center."
    ]
  },
  {
    id: "ceske_budejovice",
    label: "CB",
    name: "Ceske Budejovice",
    lon: 14.4747,
    lat: 48.974,
    clues: [
      "Its German name historically inspired a famous beer brand name abroad.",
      "It lies near the Vltava and Malse rivers.",
      "You can reach Cesky Krumlov from here as a popular day trip."
    ],
    facts: [
      "The city's main square is one of the largest in Czechia.",
      "South Bohemia around this city is known for ponds and fish farming traditions."
    ]
  },
  {
    id: "olomouc",
    label: "OL",
    name: "Olomouc",
    lon: 17.2518,
    lat: 49.5938,
    clues: [
      "A monumental Holy Trinity Column here is UNESCO-listed.",
      "It is a historic university city in Moravia.",
      "Its famous local cheese is called Olomoucke tvaruzky."
    ],
    facts: [
      "Olomouc has one of the oldest universities in Central Europe.",
      "The astronomical clock in Olomouc has a unique socialist-realist redesign."
    ]
  },
  {
    id: "karlovy_vary",
    label: "KV",
    name: "Karlovy Vary",
    lon: 12.8712,
    lat: 50.2319,
    clues: [
      "This spa city is famous for thermal springs.",
      "An annual international film festival is held here.",
      "It is in western Bohemia and known for elegant colonnades."
    ],
    facts: [
      "Karlovy Vary has been a wellness destination for centuries.",
      "Its mineral water tradition is one of the country's best-known cultural exports."
    ]
  },
  {
    id: "hradec_kralove",
    label: "HK",
    name: "Hradec Kralove",
    lon: 15.8328,
    lat: 50.2092,
    clues: [
      "This city is at the confluence of the Elbe and Orlice rivers.",
      "It is known for early 20th-century modern architecture.",
      "It lies east of Prague in Bohemia."
    ],
    facts: [
      "Hradec Kralove is often called a 'salon of the republic' for its urban planning.",
      "Its nearby region offers easy access to the Krkonose Mountains."
    ]
  },
  {
    id: "zlin",
    label: "Z",
    name: "Zlin",
    lon: 17.6671,
    lat: 49.2244,
    clues: [
      "This city is strongly tied to the Bata shoe company.",
      "Its urban layout reflects functionalist architecture.",
      "It is in southeastern Moravia."
    ],
    facts: [
      "Zlin became a model industrial city in the 20th century.",
      "The city is still known for design and architecture inspired by Bata principles."
    ]
  }
];

const LEARN_CARDS = [
  {
    title: "Castles and Heritage",
    text: "Czechia has over 2,000 castles, chateaux, and ruins. Prague Castle is one of the largest castle complexes in the world.",
    image: "assets/learn/castle.png",
    alt: "Simple castle illustration"
  },
  {
    title: "Beer Culture",
    text: "The pilsner style was born in Plzen. Czech beer culture is strong and deeply tied to local identity.",
    image: "assets/learn/beer.png",
    alt: "Simple beer mug illustration"
  },
  {
    title: "Spa Traditions",
    text: "Towns like Karlovy Vary are known for thermal springs and spa traditions that date back centuries.",
    image: "assets/learn/spa.png",
    alt: "Simple spa spring illustration"
  },
  {
    title: "Industry and Innovation",
    text: "Cities such as Ostrava and Zlin helped shape modern Czech industry through steel, coal, and manufacturing.",
    image: "assets/learn/industry.png",
    alt: "Simple factory illustration"
  },
  {
    title: "Nature and Mountains",
    text: "From Krkonose to Sumava, Czechia has rich mountain landscapes, forests, and protected natural areas.",
    image: "assets/learn/mountains.png",
    alt: "Simple mountains illustration"
  },
  {
    title: "Modern Architecture",
    text: "From functionalism in Brno and Zlin to landmarks like Jested, Czech architecture blends tradition and modern design.",
    image: "assets/learn/architecture.png",
    alt: "Simple modern building illustration"
  }
];

const CZECH_BORDER_COORDS = [
  [14.570718214586066, 51.002339382524276],
  [14.307013380600637, 51.117267767941414],
  [14.056227654688314, 50.9269176295943],
  [13.338131951560285, 50.73323436136428],
  [12.966836785543194, 50.484076443069085],
  [12.240111118222671, 50.266337795607285],
  [12.415190870827473, 49.96912079528057],
  [12.521024204161193, 49.547415269562734],
  [13.031328973043431, 49.30706818297324],
  [13.595945672264437, 48.87717194273715],
  [14.338897739324722, 48.5553052842072],
  [14.901447381254057, 48.964401760445824],
  [15.253415561593982, 49.03907420510758],
  [16.02964725105022, 48.73389903420793],
  [16.499282667718774, 48.78580801044511],
  [16.960288120194576, 48.5969823268506],
  [17.101984897538898, 48.816968899117114],
  [17.545006951577108, 48.80001902932537],
  [17.88648481616181, 48.90347524677371],
  [17.913511590250465, 48.996492824899086],
  [18.104972771891852, 49.04398346617531],
  [18.170498488037964, 49.271514797556435],
  [18.399993523846177, 49.31500051533004],
  [18.554971144289482, 49.49501536721878],
  [18.853144158613617, 49.49622976337764],
  [18.392913852622172, 49.98862864847075],
  [18.17042469691688, 50.049038397819956],
  [17.64944502123899, 50.049038397819956],
  [17.55456709155112, 50.36214590107641],
  [16.868769158605655, 50.47397370055603],
  [16.719475945714436, 50.21574656839354],
  [16.176253289462267, 50.42260732685791],
  [16.23862674323857, 50.69773265237984],
  [15.490972120839729, 50.78472992614321],
  [15.01699588385867, 51.10667409932158],
  [14.570718214586066, 51.002339382524276]
];

const MAP_VIEWBOX_WIDTH = 620;
const MAP_VIEWBOX_HEIGHT = 420;
const MAP_PADDING = 24;

const MAX_ROUNDS = 6;
const POINTS_CORRECT = 30;
const PENALTY_REVEAL = 5;
const PENALTY_WRONG = 4;

let score = 0;
let round = 1;
let usedPlaces = [];
let currentPlace = null;
let revealedCount = 0;
let isRoundLocked = false;
let currentPhase = "learn";
let learnIndex = 0;

let soundEnabled = true;
let audioContext = null;
let lastScore = 0;

const scoreEl = document.getElementById("score");
const roundEl = document.getElementById("round");
const roundTotalEl = document.getElementById("roundTotal");
const panelTitleEl = document.getElementById("panelTitle");
const introTextEl = document.getElementById("introText");
const clueCardsEl = document.getElementById("clueCards");
const statusBoxEl = document.getElementById("statusBox");
const factsBoxEl = document.getElementById("factsBox");
const factsListEl = document.getElementById("factsList");
const revealBtnEl = document.getElementById("revealBtn");
const nextBtnEl = document.getElementById("nextBtn");
const markerLayerEl = document.getElementById("markerLayer");
const soundToggleEl = document.getElementById("soundToggle");
const mapWrapEl = document.getElementById("mapWrap");
const fxLayerEl = document.getElementById("fxLayer");
const countryShapeEl = document.getElementById("countryShape");

let projectPoint = null;

function buildProjection(points, width, height, padding) {
  const meanLat = points.reduce((sum, point) => sum + point[1], 0) / points.length;
  const xScale = Math.cos((meanLat * Math.PI) / 180);
  const projected = points.map(([lon, lat]) => [lon * xScale, lat]);
  const xs = projected.map((point) => point[0]);
  const ys = projected.map((point) => point[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const drawWidth = width - padding * 2;
  const drawHeight = height - padding * 2;
  const scale = Math.min(drawWidth / (maxX - minX), drawHeight / (maxY - minY));
  const offsetX = (width - (maxX - minX) * scale) / 2;
  const offsetY = (height - (maxY - minY) * scale) / 2;

  return (lon, lat) => {
    const x = offsetX + (lon * xScale - minX) * scale;
    const y = offsetY + (maxY - lat) * scale;
    return [x, y];
  };
}

function drawCountryShape() {
  projectPoint = buildProjection(CZECH_BORDER_COORDS, MAP_VIEWBOX_WIDTH, MAP_VIEWBOX_HEIGHT, MAP_PADDING);
  const pathD = CZECH_BORDER_COORDS.map(([lon, lat], index) => {
    const [x, y] = projectPoint(lon, lat);
    return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(" ");

  countryShapeEl.setAttribute("d", `${pathD} Z`);
}

function getProjectedCityPosition(place) {
  if (!projectPoint) {
    return [0, 0];
  }
  return projectPoint(place.lon, place.lat);
}

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

  if (effect === "roundStart") {
    playTone(330, 0.08, "sine", 0.045);
    playTone(415, 0.1, "sine", 0.04, 0.07);
    return;
  }

  if (effect === "reveal") {
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

function updateSoundButton() {
  soundToggleEl.textContent = soundEnabled ? "Sound: On" : "Sound: Off";
  soundToggleEl.setAttribute("aria-pressed", String(soundEnabled));
}

function runMapFeedback(type) {
  mapWrapEl.classList.remove("flash-correct", "flash-wrong");
  void mapWrapEl.offsetWidth;
  mapWrapEl.classList.add(type === "correct" ? "flash-correct" : "flash-wrong");
}

function spawnBurst(x, y) {
  const colors = ["#f28627", "#ffd166", "#3ea86e", "#2d709c", "#d7422a"];
  for (let i = 0; i < 18; i += 1) {
    const piece = document.createElement("span");
    piece.className = "fx-burst";
    piece.style.left = `${(x / MAP_VIEWBOX_WIDTH) * 100}%`;
    piece.style.top = `${(y / MAP_VIEWBOX_HEIGHT) * 100}%`;
    piece.style.setProperty("--piece-color", colors[i % colors.length]);
    piece.style.setProperty("--dx", `${(Math.random() * 100 - 50).toFixed(1)}px`);
    piece.style.setProperty("--dy", `${(Math.random() * 100 - 50).toFixed(1)}px`);
    fxLayerEl.appendChild(piece);
    window.setTimeout(() => piece.remove(), 720);
  }
}

function animateRoundEntry() {
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.remove("panel-enter");
    void panel.offsetWidth;
    panel.classList.add("panel-enter");
  });
}

function pickUnusedPlace() {
  const pool = PLACES.filter((place) => !usedPlaces.includes(place.id));
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

function updateScoreboard() {
  const scoreChanged = lastScore !== score;
  scoreEl.textContent = String(score);

  if (currentPhase === "quiz") {
    roundEl.textContent = String(round);
    roundTotalEl.textContent = String(MAX_ROUNDS);
  } else {
    roundEl.textContent = "-";
    roundTotalEl.textContent = "-";
  }

  if (scoreChanged) {
    pulseElement(scoreEl, "score-pop");
  }
  lastScore = score;
}

function setStatus(message, variant = "") {
  statusBoxEl.textContent = message;
  statusBoxEl.className = `status${variant ? ` ${variant}` : ""}`;
  pulseElement(statusBoxEl, "pulse");
}

function resetFacts() {
  factsListEl.innerHTML = "";
  factsBoxEl.classList.add("hidden");
}

function setLearningMode(enabled) {
  mapWrapEl.classList.toggle("learning-mode", enabled);
  revealBtnEl.classList.toggle("hidden", enabled || currentPhase !== "quiz");
}

function renderLearningCard() {
  const card = LEARN_CARDS[learnIndex];
  clueCardsEl.innerHTML = `
    <article class="learn-card panel-enter">
      <img src="${card.image}" alt="${card.alt}" loading="eager" />
      <h3>${card.title}</h3>
      <p>${card.text}</p>
    </article>
  `;

  nextBtnEl.disabled = false;
  nextBtnEl.textContent = learnIndex === LEARN_CARDS.length - 1 ? "Start Quiz" : "Next Fact";
}

function startLearningPhase() {
  currentPhase = "learn";
  learnIndex = 0;
  round = 1;
  score = 0;
  usedPlaces = [];
  isRoundLocked = true;

  panelTitleEl.textContent = "Learn About Czechia";
  introTextEl.textContent = "Quick facts first. When you are ready, continue to the map quiz.";

  setLearningMode(true);
  resetFacts();
  clearMarkerStates();
  renderLearningCard();
  setStatus("Learning mode: read a fact and continue.");
  updateScoreboard();
  playSound("roundStart");
}

function advanceLearning() {
  if (currentPhase !== "learn") {
    return;
  }

  playSound("reveal");
  learnIndex += 1;
  if (learnIndex >= LEARN_CARDS.length) {
    startQuizPhase();
    return;
  }

  renderLearningCard();
  setStatus(`Fact ${learnIndex + 1} of ${LEARN_CARDS.length}.`);
}

function renderClues() {
  clueCardsEl.innerHTML = "";

  currentPlace.clues.forEach((clue, index) => {
    const card = document.createElement("div");
    const classes = ["clue-card", index < revealedCount ? "revealed" : "locked"];
    if (index === revealedCount - 1) {
      classes.push("new-reveal");
    }
    card.className = classes.join(" ");
    card.textContent = index < revealedCount ? clue : `Clue ${index + 1} is locked.`;
    clueCardsEl.appendChild(card);
  });
}

function renderMarkers() {
  markerLayerEl.innerHTML = "";

  PLACES.forEach((place) => {
    const [x, y] = getProjectedCityPosition(place);
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "g");
    marker.classList.add("marker");
    marker.dataset.id = place.id;
    marker.setAttribute("transform", `translate(${x}, ${y})`);

    const halo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    halo.classList.add("marker-halo");
    halo.setAttribute("r", "13");

    const core = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    core.classList.add("marker-core");
    core.setAttribute("r", "8.5");

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.classList.add("marker-label");
    label.textContent = place.label;

    marker.appendChild(halo);
    marker.appendChild(core);
    marker.appendChild(label);

    marker.addEventListener("click", () => handleGuess(place.id));
    markerLayerEl.appendChild(marker);
  });
}

function clearMarkerStates() {
  markerLayerEl.querySelectorAll(".marker").forEach((marker) => {
    marker.classList.remove("active", "correct", "wrong");
  });
}

function revealNextClue() {
  if (currentPhase !== "quiz" || isRoundLocked) {
    return;
  }

  if (revealedCount >= currentPlace.clues.length) {
    setStatus("All clues are revealed. Pick your answer on the map.");
    return;
  }

  revealedCount += 1;
  playSound("reveal");
  score = Math.max(0, score - PENALTY_REVEAL);
  updateScoreboard();
  renderClues();

  if (revealedCount === currentPlace.clues.length) {
    setStatus("All clues unlocked. Click the correct marker.");
  } else {
    setStatus(`Clue ${revealedCount} unlocked. Keep going or make a guess.`);
  }
}

function showFacts(place) {
  factsListEl.innerHTML = "";
  place.facts.forEach((fact) => {
    const item = document.createElement("li");
    item.textContent = fact;
    factsListEl.appendChild(item);
  });
  factsBoxEl.classList.remove("hidden");
}

function finishRound() {
  isRoundLocked = true;
  revealBtnEl.disabled = true;
  nextBtnEl.disabled = false;

  if (round >= MAX_ROUNDS) {
    nextBtnEl.textContent = "See Final Result";
  } else {
    nextBtnEl.textContent = "Next Round";
  }
}

function handleGuess(placeId) {
  if (currentPhase !== "quiz" || isRoundLocked) {
    return;
  }

  if (revealedCount === 0) {
    playSound("wrong");
    setStatus("Reveal at least one clue before your first guess.", "error");
    return;
  }

  clearMarkerStates();
  const selectedMarker = markerLayerEl.querySelector(`[data-id='${placeId}']`);
  selectedMarker?.classList.add("active");

  if (placeId === currentPlace.id) {
    selectedMarker?.classList.add("correct");

    const bonus = POINTS_CORRECT + Math.max(0, (3 - revealedCount) * 4);
    score += bonus;
    updateScoreboard();

    playSound("correct");
    runMapFeedback("correct");
    const [burstX, burstY] = getProjectedCityPosition(currentPlace);
    spawnBurst(burstX, burstY);
    setStatus(`Correct! It was ${currentPlace.name}. +${bonus} points.`, "success");
    showFacts(currentPlace);
    finishRound();
    return;
  }

  selectedMarker?.classList.add("wrong");
  score = Math.max(0, score - PENALTY_WRONG);
  updateScoreboard();
  playSound("wrong");
  runMapFeedback("wrong");
  setStatus("Not this one. Reveal another clue or try a different marker.", "error");
}

function startRound() {
  if (currentPhase !== "quiz") {
    return;
  }

  if (round > MAX_ROUNDS) {
    showFinalScreen();
    return;
  }

  currentPlace = pickUnusedPlace();
  usedPlaces.push(currentPlace.id);

  revealedCount = 0;
  isRoundLocked = false;
  revealBtnEl.disabled = false;
  nextBtnEl.disabled = true;

  resetFacts();
  clearMarkerStates();
  animateRoundEntry();
  renderClues();
  playSound("roundStart");
  setStatus("Quiz started. Reveal a clue to begin.");
  updateScoreboard();
}

function startQuizPhase() {
  currentPhase = "quiz";
  round = 1;
  usedPlaces = [];

  panelTitleEl.textContent = "Guess the Place";
  introTextEl.textContent = "Reveal clues one by one, then click the correct marker on the map.";

  setLearningMode(false);
  nextBtnEl.disabled = true;
  nextBtnEl.textContent = "Next Round";
  revealBtnEl.disabled = false;
  animateRoundEntry();
  startRound();
}

function showFinalScreen() {
  currentPhase = "finished";

  clueCardsEl.innerHTML = `
    <div class="clue-card revealed">
      Quiz finished! You explored ${MAX_ROUNDS} Czech locations.
    </div>
    <div class="clue-card revealed">
      Final score: ${score}
    </div>
    <div class="clue-card revealed">
      Press "Play Again" to restart learning + quiz.
    </div>
  `;

  panelTitleEl.textContent = "Quiz Complete";
  introTextEl.textContent = "You can replay from the learning cards anytime.";

  revealBtnEl.disabled = true;
  revealBtnEl.classList.add("hidden");
  nextBtnEl.disabled = false;
  nextBtnEl.textContent = "Play Again";
  playSound("final");
  setStatus("Great run. Ready for another Czechia challenge?", "success");
  resetFacts();
  clearMarkerStates();
  updateScoreboard();
}

function resetGame() {
  startLearningPhase();
}

revealBtnEl.addEventListener("click", revealNextClue);

nextBtnEl.addEventListener("click", () => {
  if (currentPhase === "learn") {
    advanceLearning();
    return;
  }

  if (currentPhase === "quiz") {
    if (!isRoundLocked) {
      return;
    }

    if (round >= MAX_ROUNDS) {
      showFinalScreen();
      return;
    }

    round += 1;
    startRound();
    return;
  }

  if (currentPhase === "finished") {
    resetGame();
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
drawCountryShape();
renderMarkers();
startLearningPhase();
