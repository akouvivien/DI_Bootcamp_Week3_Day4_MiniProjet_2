// la hauteur de du container dois être celle de l'écran de la fênetre
let contener = document.querySelector('.container');
contener.style.height = window.innerHeight + "px";

// liste des songs

const song = ["boom", "clap", "hihat", "kick", "openhat", "ride", "snare", "tink", "tom"];

// joue la musique a chaque click musique

let boxes = document.querySelectorAll('.box');
for(let i in song) {
    boxes[i].addEventListener('click', () => {
        let audio = document.querySelector('.song');
        audio.setAttribute('src', `sounds/${songList[i]}.wav`);
        audio.play();
    });
}
