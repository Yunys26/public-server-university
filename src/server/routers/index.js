const routers = (app) => {
    
    app.get('/', (req, res) => {
        res.send({
            message: 'Node.js and Express REST API'
        });
    })

    app.get('/users', (req, res) => {
        res.send({
            message: 'Node.js and Express REST'
        });
    })
}

module.exports = routers