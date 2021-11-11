import AudioPlayer from "./AudioPlayer";

const audioPlayerSelectors = {
  audio: ".audio-source",
  playButton: ".play-pause",
  timeline: ".timeline",
};

const main = () => {
  const audioPlayer = new AudioPlayer(audioPlayerSelectors);
};

main();
