setTimeout(() => {
    document.getElementById("intro").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("content").style.opacity = 1;
    }, 2000);
}, 2500);

/* --- CURSOR-FOLLOWING BEE --- */
document.addEventListener("mousemove", e => {
    const bee = document.getElementById("cursorBee");
    bee.style.left = e.pageX + "px";
    bee.style.top  = e.pageY + "px";
});

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

/* --- BEE MODE --- */
document.getElementById("beeModeBtn").onclick = () => {
    document.body.classList.toggle("bee-mode");
};

/* --- JAZZ MODE (press J) --- */
let jazzPlaying = false;
let jazzAudio = new Audio("https://www.dropbox.com/s/vxpl4y2x8hd8wo0/jazz.mp3?raw=1");

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "j") {
        if (!jazzPlaying) jazzAudio.play();
        else jazzAudio.pause();
        jazzPlaying = !jazzPlaying;
    }
});