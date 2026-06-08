const audio = new Audio('Riff2.mov'); 
const aliContainer = document.getElementById("Ali-container");
const aliImg = document.getElementById("Ali");
document.addEventListener('click', () => {
    audio.play().then(() => {
        audio.pause(); 
    }).catch(e => {});
}, { once: true }); 

if (aliContainer && aliImg) {
    aliContainer.addEventListener("mouseenter", () => {
        aliImg.src = "Ali2.png"; 
        audio.currentTime = 0; 
        
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {});
        }
    });
    aliContainer.addEventListener("mouseleave", () => {
        aliImg.src = "Ali1.png";
        audio.pause();
    });
}
const formular = document.querySelector('.Formular');
formular.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Vielen Dank! Sie werden in Kürze kontaktiert.');
    formular.reset();
});