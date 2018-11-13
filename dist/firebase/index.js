"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FirebaseAccounts = function () {
  function FirebaseAccounts() {
    _classCallCheck(this, FirebaseAccounts);

    this._app = null;
  }

  _createClass(FirebaseAccounts, [{
    key: "app",
    get: function get() {
      return this._app;
    },
    set: function set(app) {
      this._app = app;
    }
  }, {
    key: "auth",
    get: function get() {
      return this._app.auth();
    }
  }, {
    key: "database",
    get: function get() {
      return this._app.database();
    }
  }]);

  return FirebaseAccounts;
}();

exports.default = new FirebaseAccounts();