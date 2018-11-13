class FirebaseAccounts {
  constructor() {
    this._app = null;
  }

  get app() {
    return this._app;
  }

  set app(app) {
    this._app = app;
  }

  get auth() {
    return this._app.auth();
  }

  get database() {
    return this._app.database();
  }
}

export default new FirebaseAccounts();