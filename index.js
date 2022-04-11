const knex = require('./config/db')
const app = require('express')()
const consign = require('consign')
knex('users')

consign()
    .include('./api')
    .into(app)

app.listen(3003, () => {
    console.log('Backend executando...')
})
