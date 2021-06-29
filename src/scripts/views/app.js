import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, drawer, content, header,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._header = header;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      header: this._header,
    });
  }
}

export default App;
