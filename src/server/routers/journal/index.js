const { client } = require("../../db")

const journal = (app) => {

    // Просмотр записей журнала
    app.get('/journal', (req, res) => {
        client
            .query('SELECT * FROM journal')
            .then((response) => res.send(response.rows))
            .catch((error) => console.error(error.stack))
    });

    // Просмотр записей журнала по студенту
    app.get('/journal', (req, res) => {
        client
            .query(`SELECT journal.id, journal.student_id, journal.student_plan_id, journal.in_time, journal.count, journal.mark_id
            FROM journal  INNER JOIN student ON journal.student_id = student.id AND journal.student_id = $1`, [1])
            .then((response) => res.send(response.rows))
            .catch((error) => console.error(error.stack))
    });

    // Просмотр записей журнала по группе
    app.get('/journal', () => {
        client
            .query(`SELECT * FROM journal
            INNER JOIN (SELECT student.id as id, student.name as name, study_group.name as group  FROM student INNER JOIN study_group ON student.study_group_id = study_group.id AND study_group.name=$1) 
            as tmp ON journal.student_id = tmp.id`, [1])
            .then((response) => res.send(response.rows))
            .catch((error) => console.error(error.stack))
    });

    // Редактирование оценок в журнале
    app.put('/journal', () => {
        client
        .query(`UPDATE journal SET mark_id=$1 WHERE journal.id=$2 RETURNING *`, [1, 2])
        .then((response) => res.send(response.rows))
        .catch((error) => console.error(error.stack))
    }) 



}

module.exports = journal