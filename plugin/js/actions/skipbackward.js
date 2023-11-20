class SkipBackwardAction extends Action {
  type = "com.cliffhuang0611.foobar2000.skipbackward";

  onKeyDown = (coordinates, state) => {
    foobar.skipBackward((success, message) => {
      if (!success) {
        websocketUtils.showAlert(this.context);
        websocketUtils.log(
          "Error to skip backward, check if foobar is running!"
        );
      }
    });
  };
}
