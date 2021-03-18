const express = require('express');
const axios = require('axios').default;
const cors = require('cors');
const colors = require('colors');
const { pool: db, dbConfig } = require('./src/db');

const app = express();
app.use(cors());
app.use(express.json());


async function get_students() {

    const result = await db.query(`SELECT * FROM student`);
    let obj = result.rows;

    return obj.map(elem => {
        elem['secondName'] = elem['second_name'];
        elem['studyGroupId'] = elem['study_group_id'];

        delete elem['second_name'];
        delete elem['study_group_id'];

        return elem;
    })
}

app.listen(dbConfig.server.server_port, () => {
    console.log(`Server has been started on ` + colors.green(`http://localhost:${dbConfig.server.server_port}`));
    
    let elem = get_students();

    elem.then((res) => {

        axios.post('https://up-lab1.mirea.ru/bus', dbConfig.bus.init);
        axios.post('https://up-lab1.mirea.ru/bus', dbConfig.bus.subscribe);
        
        for(let index = 0; index < res.length; ++index){
            axios.post('https://up-lab1.mirea.ru/bus', dbConfig.bus.create_post(res[index].id, res[index].surname, res[index].name, res[index].secondName, res[index].studyGroupId));
        }

    }).catch((error) => {
        console.log(error)
    })
    ;
    setInterval(() => {

        axios.get(`https://up-lab1.mirea.ru/bus?to=150&after=1`).then((response) => {
            console.log(`Запрос успешно прошел. Результат:`)

            for(let elem of response.data){
                elem = elem
            }

            console.log(elem)

        }).catch((error) => {
            console.log(`Ошибка! ${error.message}`);
        })
    }, 3000);
});