"use strict";

var _require = require("../db"),
    client = _require.client;

var groups = require("./groups");

var journal = require("./journal");

var students = require("./students");

var routers = function routers(app) {
  // API Журнал
  journal(app); // API Группы

  groups(app); // API Студентов

  students(app);
};

module.exports = routers;