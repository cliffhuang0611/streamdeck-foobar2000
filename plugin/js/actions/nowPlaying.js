class NowPlayingAction extends Action {
  type = "com.cliffhuang0611.foobar2000.nowplaying";

  setCurrentPlayback = (playback, image) => {
    this.foobarCurrentPlayback = playback;
  };

  onWillAppear = async (coordinates) => {
    if (this.foobarCurrentPlayback.playbackState === "stopped") {
      websocketUtils.setTitle(this.context, "Stopped");
    } else {
      intervals[this.context] && clearInterval(intervals[this.context]);
      websocketUtils.setAsyncTitleMultiline(
        this.foobarCurrentPlayback.activeItem.columns[1],
        this.foobarCurrentPlayback.activeItem.columns[0],
        300,
        this.context
      );

      const image = await foobar.getCurrentArtwork(
        this.foobarCurrentPlayback.activeItem.playlistId,
        this.foobarCurrentPlayback.activeItem.index
      );
      websocketUtils.setImage(this.context, image);
    }
  };
}
