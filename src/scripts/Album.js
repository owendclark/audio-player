class Album {
  constructor({ path, fileFormat, songNames }) {
    this.songs = Array.from(songNames, (el) => ({
      title: el,
      path: `${path}${el}${fileFormat}`,
    }));
  }
}
