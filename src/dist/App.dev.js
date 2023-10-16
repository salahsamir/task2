"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _Dbconnected = require("../db/Dbconnected.js");

var _authRouter = require("./models/Auth/auth.router.js");

var _handleError = require("./utilits/handleError.js");

var App = function App(express) {
  var app = express();
  app.use(express.json);
  app.get("/", function (req, res) {
    return res.send("Hello World!");
  });
  app.use('/auth', _authRouter.auth);
  app.all("*", function (req, res) {
    return res.send(" router not found !");
  });
  app.use(_handleError.GlobalError);
  (0, _Dbconnected.DbConnect)();
  var port = process.env.PORT;
  app.listen(port, function () {
    return console.log("Example app listening on port ".concat(port, "!"));
  });
};

exports.App = App;