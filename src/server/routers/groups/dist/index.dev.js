"use strict";

var _require = require("../../db"),
    client = _require.client;

var groups = function groups(app) {
  // Просмотр группы
  app.get('/groups', function (req, res) {
    client.query("SELECT * FROM study_group INNER JOIN student ON study_group.id = student.study_group_id AND study_group.name = $1", ['ИКБО-11-17']).then(function (response) {
      res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  }); // Просмотр всех групп

  app.get('/groups', function (req, res) {
    client.query('SELECT * FROM study_group').then(function (response) {
      res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  }); // Редактирование группы

  app.put('/groups', function (req, res) {
    client.query('UPDATE study_group SET name=$1 WHERE study_group.name=$2 RETURNING *', [1, 2]).then(function (response) {
      res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  }); // Добавление группы

  app.post('/groups', function (req, res) {
    client.query('INSERT INTO study_group (name) VALUES($1) RETURNING *', [1]).then(function (response) {
      res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  }); // Удаление группы

  app["delete"]('/groups', function (req, res) {
    client.query('DELETE FROM study_group WHERE name=$1 RETURNING *', [1]).then(function (response) {
      res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  });
};

module.exports = groups;