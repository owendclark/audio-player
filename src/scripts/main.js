const audioPlayerSelectors = {
  audio: ".audio-source",
  playButton: ".play-pause",
  timeline: ".timeline",
};

const main = () => {
  const audioPlayer = new AudioPlayer(audioPlayerSelectors);
  audioPlayer.getElementObjects();
  audioPlayer.run();
};

main();
