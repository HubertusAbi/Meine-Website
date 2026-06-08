const audio = new Audio('Riff.mp3'); 
const aliContainer = document.getElementById("Ali-container");
const aliImg = document.getElementById("Ali");

if (aliContainer && aliImg) {
    aliContainer.addEventListener("mouseenter", () => {
        aliImg.src = "Ali.jpeg";
    });
    aliContainer.addEventListener("mouseleave", () => {
        aliImg.src = "Klick-mich!.png";
        audio.pause();
    });
}