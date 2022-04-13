const db = require('./config/db')
const app = require('express')()
const consign = require('consign')

app.db = db

consign()
    .include('./api')
    .then('./config')
    .into(app)

app.listen(3003, () => {
    console.log('Backend executando...')
})
