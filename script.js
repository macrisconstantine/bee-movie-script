setTimeout(() => {
    document.getElementById("intro").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("content").style.opacity = 1;
    }, 2000);
}, 2500);

// Smooth bee following using velocity + easing
const bee = document.getElementById("cursorBee");

let beeX = window.innerWidth / 2;
let beeY = window.innerHeight / 2;
let velX = 0;
let velY = 0;

let targetX = beeX;
let targetY = beeY;

// Track cursor position only
document.addEventListener("mousemove", e => {
    targetX = e.pageX;
    targetY = e.pageY;
});

// Animate the bee toward cursor
function animateBee() {
    const accel = 0.15;  // acceleration toward cursor
    const damp  = 0.85;  // friction / smoothing

    // accelerate toward target
    velX += (targetX - beeX) * accel;
    velY += (targetY - beeY) * accel;

    // apply damping
    velX *= damp;
    velY *= damp;

    // update position
    beeX += velX * 0.05;  
    beeY += velY * 0.05;

    bee.style.left = beeX + "px";
    bee.style.top  = beeY + "px";

    requestAnimationFrame(animateBee);
}
animateBee();
/* --- HONEY SCROLL GAUGE --- */
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;
    document.getElementById("honeyFill").style.width = percent + "%";
});

/* --- RANDOM BEE FACTS --- */
const facts = [
    "Bees can recognize human faces.",
    "Bees flap their wings 230 times per second.",
    "A bee colony can contain up to 60,000 bees.",
    "Bees communicate using dances.",
    "Honey never spoils — ever."
];
function showRandomFact() {
    const factBox = document.getElementById("beeFact");
    factBox.innerHTML = facts[Math.floor(Math.random() * facts.length)];
    factBox.style.opacity = 1;
    setTimeout(() => factBox.style.opacity = 0, 4000);
}
setInterval(showRandomFact, 12000);

/* --- JAZZ MODE (press J) --- */
let jazzPlaying = false;
let jazzAudio = new Audio("./audio/ya-like-jazz.mp3");
let jazzAudio1 = new Audio("./audio/Naima-jazz.mp3");

/* --- BEE MODE --- */
document.getElementById("beeModeBtn").onclick = () => {
    document.body.classList.toggle("bee-mode");
    if (!jazzPlaying) {
        jazzAudio.play();
        jazzAudio1.play();
    }
    else {
        jazzAudio.pause();
        jazzAudio1.pause();
    }
    jazzPlaying = !jazzPlaying;
};


