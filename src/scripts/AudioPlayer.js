class AudioPlayer {
  constructor(elements, icons) {
    Object.assign(this, { ...elements, icons, timelineClicked: false });
  }

  init() {
    this.initPlayButton();
    this.initTimeline();
  }

  initPlayButton() {
    const { audio, playButton, icons } = this;
    playButton.addEventListener("click", playPause);
    audio.onended = () => (playButton.innerHTML = icons.play);

    function playPause() {
      playButton.innerHTML = audio.paused ? icons.pause : icons.play;
      audio.paused ? audio.play() : audio.pause();
    }
  }

  initTimeline() {
    const { audio, timeline } = this;
    let isClicked = false;
    timeline.addEventListener("change", changeSeek);
    audio.ontimeupdate = refreshTimelinePosition;
    monitorIsClicked();

    function changeSeek() {
      audio.currentTime = (timeline.value * audio.duration) / 100;
    }

    function refreshTimelinePosition() {
      const percentComplete = (audio.currentTime * 100) / audio.duration;
      timeline.style.backgroundSize = `${percentComplete}% 100%`;
      if (!isClicked) timeline.value = percentComplete;
    }

    function monitorIsClicked() {
      timeline.addEventListener("mousedown", () => (isClicked = true));
      timeline.addEventListener("mouseup", () => (isClicked = false));
    }
  }
}
