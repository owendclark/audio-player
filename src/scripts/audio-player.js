const playIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>
`;
const pauseIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
`;

document.addEventListener("DOMContentLoaded", main);

function main() {
  playButton();
  timeline();
}

function playButton() {
  const playButton = document.querySelector(".play-pause");
  const audio = document.querySelector("audio");

  playButton.addEventListener("click", toggleAudio);

  audio.onended = audioEnded;

  function toggleAudio() {
    if (audio.paused) {
      audio.play();
      playButton.innerHTML = pauseIcon;
    } else {
      audio.pause();
      playButton.innerHTML = playIcon;
    }
  }

  function audioEnded() {
    playButton.innerHTML = playIcon;
  }
}

function timeline() {
  const audio = document.querySelector("audio");
  const timeline = document.querySelector(".timeline");

  audio.ontimeupdate = changeTimelinePosition;

  timeline.addEventListener("change", changeSeek);

  function changeTimelinePosition() {
    const percentagePosition = (audio.currentTime * 100) / audio.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline.value = percentagePosition;
  }

  function changeSeek() {
    const time = (timeline.value * audio.duration) / 100;
    audio.currentTime = time;
  }
}
