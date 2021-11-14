const elements = {
  audio: document.querySelector(audioPlayerSelectors.audio),
  playButton: document.querySelector(audioPlayerSelectors.playButton),
  timeline: document.querySelector(audioPlayerSelectors.timeline),
};

const main = () => {
  const album = new Album(albumInfo);
  console.log(album);
  const audioPlayer = new AudioPlayer(elements, icons);
  console.log(audioPlayer);
  console.log(audioPlayer.icons);
  audioPlayer.init();
};

main();
