"use strict";

var _require = require("../../db"),
    client = _require.client;

var students = function students(app) {
  // Получение информации о студенте в журнале
  app.get('/student/all/jouranl', function (req, res) {
    client.query("SELECT DISTINCT\n        t3.student_id,\n        student.surname,\n        student.name,\n        student.second_name,\n        t3.short_name,\n        t3.value,\n        t3.name,\n        study_group.name FROM student\n        INNER JOIN journal\n        ON student.id = journal.student_id\n        INNER JOIN\n        (SELECT mark.value, t2.short_name, t2.student_id, mark.name FROM mark INNER JOIN (SELECT subject.short_name, t1.student_id, t1.mark_id FROM subject INNER JOIN\n        (SELECT study_plan.subject_id, journal.student_id, journal.mark_id FROM study_plan INNER JOIN journal\n        ON study_plan.id = journal.study_plan_id) as t1 ON subject.id = t1.subject_id) as t2 ON t2.mark_id = mark.id) as t3\n        ON t3.student_id = student.id\n        INNER JOIN study_group ON student.study_group_id = study_group.id").then(function (response) {
      res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  }); // Добавление студента

  app.post('/students', function (req, res) {
    client.query("INSERT INTO student (surname, name, second_name, study_group_id) VALUES\n            ($1, $2, $3, (SELECT study_group.id FROM study_group WHERE study_group.name = $4))\n            RETURNING *", [1, 2, 3]).then(function (response) {
      res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  }); // Просмотр всех студентов
  // app.get('/students/all', (req, res) => {
  //     client
  //         .query('SELECT * FROM student')
  //         .then(response => {
  //             res.send(response.rows)
  //         })
  //         .catch((error) => console.error(error.stack))
  // })
  // Просмотр студента по id

  app.get('/students', function (req, res) {
    client.query('SELECT * FROM student WHERE id = $1', [1]).then(function (response) {
      res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  }); // Просмотр студентов по группе

  app.get('/students', function (req, res) {
    client.query("SELECT * FROM student\n            INNER JOIN study_group\n            ON student.study_group_id = study_group.id AND study_group.name = $1", [1]).then(function (response) {
      res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  }); // Редактирование студента

  app.get('/students', function (req, res) {
    client.query("UPDATE student SET surname=$1, name=$2, second_name=$3, study_group_id = (SELECT id FROM study_group WHERE study_group.name = $4)\n            WHERE student.id=$5\n            RETURNING *").then(function (response) {
      res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  }); // Удаление студента

  app["delete"]('/students', function (req, res) {
    client.query('DELETE FROM student WHERE id = $1 RETURNING *', [1]).then(function (response) {
      res.send(response.rows);
    })["catch"](function (error) {
      return console.error(error.stack);
    });
  });
};

module.exports = students;