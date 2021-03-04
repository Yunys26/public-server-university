const { client } = require("../../db");
const {
    get_all_studet_dept,
    get_all_students,
    get_student_all_journal,
    add_students,
    get_id_all_students,
    get_all_students_in_group,
    change_students,
    delete_students
} = require("./query_student");


const students = (app) => {

    // Получение информации о студенте в журнале
    app.get('/students/all/journal/', (req, res) => {
        client.query(get_student_all_journal)
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    })

    // // Добавление студента
    // app.post('/students', (req, res) => {
    //     client
    //         .query(add_students, [1, 2, 3])
    //         .then(response => {
    //             res.send(response.rows)
    //         })
    //         .catch((error) => console.error(error.stack))
    // });

    // Просмотр всех студентов
    app.get('/students/all/', (req, res) => {
        client
            .query(get_all_students)
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    })

    // Вывод всех студентов с долгами
    app.get('/students/all-retakes', (req, res) => {
        client
            .query(get_all_studet_dept)
            .then(response => {
                res.send(response.rows)
            })
            .catch((error) => console.error(error.stack))
    })

    // // Просмотр студента по id
    // app.get('/students', (req, res) => {
    //     client
    //         .query(get_id_all_students, [1])
    //         .then(response => {
    //             res.send(response.rows)
    //         })
    //         .catch((error) => console.error(error.stack))
    // })

    // // Просмотр студентов по группе
    // app.get('/students', (req, res) => {
    //     client
    //         .query(get_all_students_in_group, [1])
    //         .then(response => {
    //             res.send(response.rows)
    //         })
    //         .catch((error) => console.error(error.stack))
    // })

    // // Редактирование студента
    // app.get('/students', (req, res) => {
    //     client
    //         .query(change_students, [1, 2, 3, 4, 5])
    //         .then(response => {
    //             res.send(response.rows)
    //         })
    //         .catch((error) => console.error(error.stack))
    // })

    // // Удаление студента
    // app.delete('/students', (req, res) => {
    //     client
    //         .query(delete_students, [1])
    //         .then(response => {
    //             res.send(response.rows)
    //         })
    //         .catch((error) => console.error(error.stack))
    // })

    
}

module.exports = students;