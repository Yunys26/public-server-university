const { client } = require("../../db");

const groups = (app) => {

    // Просмотр группы
    app.get('/groups', (req, res) => {
        client.query(`SELECT * FROM study_group INNER JOIN student ON study_group.id = student.study_group_id AND study_group.name = $1`, ['ИКБО-11-17'])
        .then(response => {
            res.send(response.rows)
        })
        .catch((error) => console.error(error.stack))
    })

    // Просмотр всех групп
    app.get('/groups', (req, res) => {
        client
            .query('SELECT * FROM study_group')
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    })

    // Редактирование группы
    app.put('/groups', (req, res) => {
        client
            .query('UPDATE study_group SET name=$1 WHERE study_group.name=$2 RETURNING *', [1, 2])
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    });

    // Добавление группы
    app.post('/groups', (req, res) => {
        client
            .query('INSERT INTO study_group (name) VALUES($1) RETURNING *', [1])
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    })

    // Удаление группы
    app.delete('/groups', (req, res) => {
        client
            .query('DELETE FROM study_group WHERE name=$1 RETURNING *', [1])
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    })

};

module.exports = groups;