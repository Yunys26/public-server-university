"use strict";

var _require = require("../../db"),
    client = _require.client;

var journal = function journal(app) {
  // Просмотр записей журнала
  app.get('/journal', function (req, res) {
    client.query('SELECT * FROM journal').then(function (response) {
      return res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  }); // Просмотр записей журнала по студенту

  app.get('/journal', function (req, res) {
    client.query("SELECT journal.id, journal.student_id, journal.student_plan_id, journal.in_time, journal.count, journal.mark_id\n            FROM journal  INNER JOIN student ON journal.student_id = student.id AND journal.student_id = $1", [1]).then(function (response) {
      return res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  }); // Просмотр записей журнала по группе

  app.get('/journal', function () {
    client.query("SELECT * FROM journal\n            INNER JOIN (SELECT student.id as id, student.name as name, study_group.name as group  FROM student INNER JOIN study_group ON student.study_group_id = study_group.id AND study_group.name=$1) \n            as tmp ON journal.student_id = tmp.id", [1]).then(function (response) {
      return res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  }); // Редактирование оценок в журнале

  app.put('/journal', function () {
    client.query("UPDATE journal SET mark_id=$1 WHERE journal.id=$2 RETURNING *", [1, 2]).then(function (response) {
      return res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  });
};

module.exports = journal;