const MuteState = Object.freeze({
  unmuted: 0,
  muted: 1,
});

class ToggleMuteAction extends Action {
  type = "com.cliffhuang0611.foobar2000.togglemute";

  setMuteStatus = (muted) => {
    this.foobarMuteState = muted;
  };

  onKeyDown = (coordinates, state) => {
    foobar.setMuteStatus(state !== MuteState.muted, (success, message) => {
      websocketUtils.setState(this.context, state);
      if (!success) {
        websocketUtils.showAlert(this.context);
        websocketUtils.log("Error to toggle mute, check if foobar is running!");
      }
    });
  };

  onKeyUp = (coordinates, state) => {
    websocketUtils.setState(this.context, state);
  };

  onWillAppear = (coordinates) => {
    if (this.foobarMuteState !== undefined) {
      websocketUtils.setState(
        this.context,
        this.foobarMuteState ? MuteState.muted : MuteState.unmuted
      );
    } else {
      websocketUtils.showAlert(this.context);
    }
  };
}
