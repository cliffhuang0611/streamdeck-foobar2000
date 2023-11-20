class SkipForwardAction extends Action {
  type = "com.cliffhuang0611.foobar2000.skipforward";

  onKeyDown = (coordinates, state) => {
    foobar.skipForward((success, message) => {
      if (!success) {
        websocketUtils.showAlert(this.context);
        websocketUtils.log(
          "Error to skip forward, check if foobar is running!"
        );
      }
    });
  };
}
