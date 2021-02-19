const { client } = require("../../db");

const students = (app) => {
    // Добавление студента
    app.post('/students', (req, res) => {
        client
            .query(`INSERT INTO student (surname, name, second_name, study_group_id) VALUES
            ($1, $2, $3, (SELECT study_group.id FROM study_group WHERE study_group.name = $4))
            RETURNING *`, [1, 2, 3])
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    });

    // Просмотр всех студентов
    app.get('/students', (req, res) => {
        client
            .query('SELECT * FROM student')
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    })

    // Просмотр студента по id
    app.get('/students', (req, res) => {
        client
            .query('SELECT * FROM student WHERE id = $1', [1])
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    })

    // Просмотр студентов по группе
    app.get('/students', (req, res) => {
        client
            .query(`SELECT * FROM student
            INNER JOIN study_group
            ON student.study_group_id = study_group.id AND study_group.name = $1`, [1])
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    })

    // Редактирование студента
    app.get('/students', (req, res) => {
        client
            .query(`UPDATE student SET surname=$1, name=$2, second_name=$3, study_group_id = (SELECT id FROM study_group WHERE study_group.name = $4)
            WHERE student.id=$5
            RETURNING *`)
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    })

    // Удаление студента
    app.delete('/students', (req, res) => {
        client
            .query('DELETE FROM student WHERE id = $1 RETURNING *', [1])
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    })
}

module.exports = students;