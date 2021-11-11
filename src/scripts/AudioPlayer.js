class AudioPlayer {
  constructor(audioPlayerSelectors) {
    this.selectors = audioPlayerSelectors;
    this.playIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
    </svg>
    `;
    this.pauseIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    `;
  }


  getElementObjects() {
    const { audio, playButton, timeline } = this.selectors;
    this.audio = document.querySelector(audio);
    this.playButton = document.querySelector(playButton);
    this.timeline = document.querySelector(timeline);
  }

  run() {
    const { audio, playButton, timeline, playIcon, pauseIcon } = this;
    let mouseDown = false;
    playButton.addEventListener("click", playPause);
    audio.onended = () => (playButton.innerHTML = playIcon);
    audio.ontimeupdate = refreshTimelinePosition;
    timeline.addEventListener("change", changeSeek);
    timeline.addEventListener("mousedown", () => (mouseDown = true));
    timeline.addEventListener("mouseup", () => (mouseDown = false));


    function playPause() {
      playButton.innerHTML = audio.paused ? pauseIcon : playIcon;
      audio.paused ? audio.play() : audio.pause();
    }

    function refreshTimelinePosition() {
      const percentComplete = audio.currentTime * 100 / audio.duration;
      timeline.style.backgroundSize = `${percentComplete}% 100%`;
      if (!mouseDown) timeline.value = percentComplete;
    }

    function changeSeek() {
      audio.currentTime = timeline.value * audio.duration / 100;
    }
  }
}
