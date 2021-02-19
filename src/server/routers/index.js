const { client } = require("../db");
const groups = require("./groups");
const journal = require("./journal");
const students = require("./students");

const routers = (app) => {
    // API Журнал
    journal(app);
    // API Группы
    groups(app);
    // API Студентов
    students(app);
};

module.exports = routers;