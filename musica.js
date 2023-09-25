const audioPlayer = document.getElementById('audio-player');
const playlist = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3', '9.mp3', '10.mp3' ];
let currentTrackIndex = 0;

function playPauseTrack() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    audioPlayer.src = playlist[currentTrackIndex];
    audioPlayer.play();
}

function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    audioPlayer.src = playlist[currentTrackIndex];
    audioPlayer.play();
}
