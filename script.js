const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "Yeieee! Chati ko when heheheheheh";
  gif.src = "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3emNna3kxYTAzZnRtaGllaTVxcjZzcmlyenRqNGd1aXRxcmNxNmp6MCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/KDJyeD3ek5biJLIEpB/giphy.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();

  // Define predefined romantic date ideas
  const dateIdeas = [
    "Cook a romantic dinner together",
    "Go for a moonlit walk on the beach",
    "Have a picnic in the park",
    "Take a dance class together",
    "Stargaze in the backyard",
    "Take a hot air balloon ride",
    "Explore a botanical garden",
    "Attend a live outdoor concert",
    "Visit an art gallery",
    "Go on a weekend getaway to a cozy cabin",
    "Attend a cooking class together",
    "Plan a movie marathon night at home",
    "Take a scenic train ride",
    "Go horseback riding",
    "Visit a local winery for a wine tasting",
    "Go kayaking or canoeing",
    "Attend a comedy show",
    "Take a scenic hike and have a picnic",
    "Go on a sunrise or sunset photo shoot",
    "Attend a local farmers' market",
    "Explore a historic neighborhood",
    "Take a dance lesson together",
    "Have a DIY spa night at home",
    "Go on a bike ride together",
    "Plan a themed dinner night at home",
    "Attend a live theater performance",
    "Go on a scenic drive",
    "Visit a local chocolate or dessert shop",
    "Take a pottery or ceramics class",
    "Attend a local sports game",
    "Plan a day trip to a nearby city",
    "Have a karaoke night at home or at a local venue",
    "Attend a local festival or fair",
    "Go on a scenic boat tour",
    "Visit a local bookstore and pick out books for each other",
    "Have a picnic in a local park",
    "Take a photography workshop together",
    "Explore a new hiking trail",
    "Attend a wine and paint night",
    "Visit a nearby beach or lake",
    "Plan a game night with board games or card games",
    "Take a pottery or ceramics class",
    "Attend a trivia night at a local bar",
    "Go on a hot air balloon ride",
    "Take a scenic train ride",
    "Plan a movie night with your favorite films",
    "Go on a helicopter tour",
    "Attend a live outdoor concert",
    "Visit a local art gallery",
    "Go on a brewery tour",
    "Take a scenic drive through the countryside",
    "Attend a live comedy show",
    "Visit a local botanical garden",
    "Have a picnic in a vineyard",
    "Take a cooking class together",
    "Go on a river cruise",
    "Plan a weekend getaway to a cozy cabin",
    "Attend a dance class together",
    "Take a day trip to a nearby national park",
    "Go on a bike ride along a scenic trail",
    "Visit a local museum",
    "Have a DIY spa day at home",
    "Attend a live theater performance",
    "Go on a scenic hike and have a picnic",
    "Take a painting class together",
    "Attend a local farmers' market",
    "Explore a historic neighborhood",
    "Go horseback riding",
    "Have a themed dinner night at home",
    "Attend a local sports game",
    "Plan a day trip to a nearby city",
    "Have a karaoke night at home or at a local venue",
    "Attend a wine and cheese tasting",
    "Visit a local chocolate or dessert shop",
    "Take a pottery or ceramics class",
    "Attend a live music performance",
    "Go on a boat tour",
    "Visit a local bookstore and pick out books for each other",
    "Take a photography workshop together",
    "Explore a new hiking trail",
    "Attend a wine and paint night",
    "Visit a nearby beach or lake",
    "Plan a game night with board games or card games",
    "Take a pottery or ceramics class",
    "Attend a trivia night at a local bar",
    "Go on a hot air balloon ride",
    "Take a scenic train ride",
    "Plan a movie night with your favorite films",
    "Go on a helicopter tour",
    "Attend a live outdoor concert",
    "Visit a local art gallery",
    "Go on a brewery tour",
    "Take a scenic drive through the countryside",
    "Attend a live comedy show",
    "Visit a local botanical garden",
    "Have a picnic in a vineyard",
    "Take a cooking class together",
    "Go on a river cruise",
    "Plan a weekend getaway to a cozy cabin",
    "Attend a dance class together",

    // Add more date ideas as needed
  ];

  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "fixed";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; // Adjust the width as needed



  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);

  // Play video overlay when Let's Go! is clicked
  letsGoBtn.addEventListener("click", () => {
    // If overlay already exists, just play/show
    let overlay = document.getElementById("video-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "video-overlay";
      overlay.className = "video-overlay";

      const video = document.createElement("video");
      video.src = "assets/vid.mp4";
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.style.maxWidth = "90%";
      video.style.maxHeight = "90%";
      video.style.borderRadius = "8px";

      const close = document.createElement("button");
      close.className = "video-close";
      close.textContent = "✕";

      // Close handlers
      close.addEventListener("click", () => {
        video.pause();
        overlay.remove();
      });
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          video.pause();
          overlay.remove();
        }
      });

      const inner = document.createElement("div");
      inner.className = "video-inner";
      inner.appendChild(video);
      inner.appendChild(close);
      overlay.appendChild(inner);
      document.body.appendChild(overlay);
      // ensure video plays after appended
      video.play().catch(() => {});
    } else {
      const vid = overlay.querySelector("video");
      if (vid) vid.play().catch(() => {});
      overlay.style.display = "flex";
    }
  });
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);

// --- Patterned rain generation (PNGs 1-5) ---
function createRain(count = 30, sizeScale = 1) {
  const container = document.querySelector(".pattern-bg");
  if (!container) return;
  const assets = ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png", "assets/5.png"];

  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.className = "raindrop";
    img.src = assets[Math.floor(Math.random() * assets.length)];
    img.alt = "pattern";

    // Random horizontal start
    img.style.left = `${Math.random() * 100}%`;

    // Random size scaled by `sizeScale`
    const size = (30 + Math.random() * 110) * sizeScale; // px
    img.style.width = `${size}px`;

    // Random animation duration and delay
    const dur = 6 + Math.random() * 8; // seconds
    img.style.animationDuration = `${dur}s`;
    img.style.animationDelay = `${-Math.random() * 10}s`;

    // Slight rotation
    img.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg)`;

    container.appendChild(img);
  }
}

// Add keyframes via JS to keep related behaviour together (fallback if CSS not present)
(function injectRainKeyframes() {
  const style = document.createElement("style");
  style.textContent = `
  @keyframes rain-fall {
    0% { transform: translate3d(0,-120vh,0) translateX(0); opacity: 0.9; }
    50% { transform: translate3d(20px,20vh,0) translateX(10px); opacity: 0.85; }
    100% { transform: translate3d(-10px,140vh,0) translateX(-5px); opacity: 0.8; }
  }
  `;
  document.head.appendChild(style);
})();

// Reduce raindrop count and sizes on small screens
const isMobile = window.innerWidth <= 600;
const rainCount = isMobile ? 10 : 36;
const sizeScale = isMobile ? 1 : 3;
createRain(rainCount, sizeScale);
