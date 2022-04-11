const bodyParser = require('body-parser')
const cors = require('cors')

// Funções facilitadoras para a manipulação do body
module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}