const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Подключение базы данных
const { client } = require('./db');
// 
const routers = require('./routers');
// Инициализация самого приложения
const app = express();
// Порт
const port = 9999;

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
// Промежуточное ПО
// Использование обертки CORS
app.use(cors());
// Преобразование данных в формат JSON
app.use(bodyParser.json());
// Просматривает только тело запроса
app.use(bodyParser.urlencoded({
    extended: true
}));
// Роутинги
routers(app);

app.use(express.static(__dirname));
// Прописать же путь при сборке в build/index.html
app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname + '/src/main/static/'
    });
});

// Сервер
app.listen(port, (err) => {

    client
        .connect()
        .then(() => console.log('DB connected'))
        .catch((error) => console.error('connection error', error.stack))
    // client
    //     .query(textDB.dbQueryMain)
    //     .then((res) => console.log(res))
    //     .catch((error) => console.error(error.stack))

    if (err) {
        throw Error(err)
    }

    console.log(`Server start, port:${port}`);

})