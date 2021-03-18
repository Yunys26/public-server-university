const { Pool } = require('pg');

const dbConfig = {
    server: {
        server_port: 5000
    },
    db: {
        host: 'localhost',
        port: 5432,
        database: 'student_book',
        user: 'postgres',
        password: 'qwerty',
        max: 30
    },
    bus: {
        brigade: "25",
        init: {"from":`25`,"to":"150","subject":"INIT_INSTANCE","data":null},
        subscribe: {"from":`25`,"to":"150","subject":"UPDATE_SUBSCRIPTION","data":"{\"25\":\"testuser\",\"entityName\":\"student\",\"type\":\"COMMON\"}"},
        create_post: (id, surname, name, second_name, study_group_id) => {
            console.log({"data":`{\"isBinariesChanged\":false,\"entityName\":\"student\",\"plainData\":{\"id\":${id},\"surname\":\"${surname}\",\"name\":\"${name} \",\"second_name\":\"${second_name} \",\"study_group_id\":${Number(study_group_id)},\"study_group\":null},\"binaryLinks\":{}}`})
            return {
                "from":"25",
                "to":"150",
                "subject":"ADD_ROW",
                "data":`{\"isBinariesChanged\":false,\"entityName\":\"student\",\"plainData\":{\"id\":${id},\"surname\":\"${surname}\",\"name\":\"${name} \",\"second_name\":\"${second_name} \",\"study_group_id\":${Number(study_group_id)},\"study_group\":null},\"binaryLinks\":{}}`
            }
        }
    }
}

module.exports.pool = new Pool(dbConfig.db);

module.exports.dbConfig = dbConfig;