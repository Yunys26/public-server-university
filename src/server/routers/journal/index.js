const { client } = require("../../db");
const {
    get_all_journal,
    get_journal_and_student,
    get_journal_and_group,
    change_rating_in_journal
} = require("./query_journal");

const journal = (app) => {

    // Просмотр записей журнала
    app.get('/journal', (req, res) => {
        client
            .query(get_all_journal)
            .then((response) => res.send(response.rows))
            .catch((error) => console.error(error.stack))
    });

    // Просмотр записей журнала по студенту
    app.get('/journal', (req, res) => {
        client
            .query(get_journal_and_student, [1])
            .then((response) => res.send(response.rows))
            .catch((error) => console.error(error.stack))
    });

    // Просмотр записей журнала по группе
    app.get('/journal', (req, res) => {
        client
            .query(get_journal_and_group, [1])
            .then((response) => res.send(response.rows))
            .catch((error) => console.error(error.stack))
    });

    // Редактирование оценок в журнале
    app.put('/journal', () => {
        client
        .query(change_rating_in_journal, [1, 2])
        .then((response) => res.send(response.rows))
        .catch((error) => console.error(error.stack))
    })

}

module.exports = journal