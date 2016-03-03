const appState = new class AppState {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      appState.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}();