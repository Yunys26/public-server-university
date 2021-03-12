module.exports ={
    server: {
        server_port: 5000
    },
    db: {
        host: '127.0.0.1',
        port: 5432,
        database: 'student_book',
        user: 'postgres',
        password: '12345678',
        max: 30
    },
    bus:{
        brigade: "25",
        init: {"from":`25`,"to":"dean","subject":"INIT_INSTANCE","data":null},
        subscribe: {"from":`25`,"to":"dean","subject":"UPDATE_SUBSCRIPTION","data":"{\"25\":\"testuser\",\"entityName\":\"student\",\"type\":\"COMMON\"}"},
        create_post: function(id, surname, name, second_name, study_group_id){
            return {"from":"25","to":"dean","subject":"ADD_ROW",
            "data":`{\"isBinariesChanged\":false,\"entityName\":\"student\",\"plainData\":{\"id\":${id},\"surname\":\"${surname}\",\"name\":\"${name} \",\"second_name\":\"${second_name} \",\"study_group_id\":${Number(study_group_id)},\"study_group\":null},\"binaryLinks\":{}}`}}
    }
}