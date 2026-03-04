// 🎥 Create Video Element (MUUQDA)
const videoElement = document.createElement("video");
videoElement.style.width = "100%";
videoElement.style.borderRadius = "15px";
videoElement.style.marginBottom = "15px";

// Ku dar gudaha player-ka
const player = document.querySelector(".music-player");
player.prepend(videoElement);

// Select DOM elements
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume');
const speedSelect = document.getElementById('speed');

const songs = [
    {
        title: "Dhool",
        artist: "Artist 1",
        cover: "./10.mp4",
        src: "./10.mp4"
    },
    {
        title: "Dhool Remix",
        artist: "Artist 2",
        cover: "./10.mp4",
        src: "./10.mp4"
    }
];

let songIndex = 0;
let isPlaying = false;

// Load Song
function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    videoElement.src = song.src;
}

loadSong(songs[songIndex]);

// Play
function playSong() {
    playBtn.querySelector("i").classList.remove("fa-play");
    playBtn.querySelector("i").classList.add("fa-pause");
    videoElement.play();
    isPlaying = true;
}

// Pause
function pauseSong() {
    playBtn.querySelector("i").classList.remove("fa-pause");
    playBtn.querySelector("i").classList.add("fa-play");
    videoElement.pause();
    isPlaying = false;
}

// Next
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Prev
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Update Progress
function updateProgress() {
    const duration = videoElement.duration;
    const currentTime = videoElement.currentTime;

    if (!duration) return;

    const percent = (currentTime / duration) * 100;
    progress.style.width = `${percent}%`;

    const durMin = Math.floor(duration / 60);
    const durSec = Math.floor(duration % 60).toString().padStart(2, "0");
    durationEl.textContent = `${durMin}:${durSec}`;

    const curMin = Math.floor(currentTime / 60);
    const curSec = Math.floor(currentTime % 60).toString().padStart(2, "0");
    currentTimeEl.textContent = `${curMin}:${curSec}`;
}

// Seek
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = videoElement.duration;

    if (!duration) return;

    videoElement.currentTime = (clickX / width) * duration;
}

// Events
playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

videoElement.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

volumeSlider.addEventListener("input", (e) => {
    videoElement.volume = e.target.value;
});

speedSelect.addEventListener("change", (e) => {
    videoElement.playbackRate = parseFloat(e.target.value);
});

