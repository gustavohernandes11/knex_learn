const knex = require('../config/db')

module.exports = app => {
    // Implementar funções de save, get, update e delete com validações e tratamento de erros.
    const save = async (req, res) => {
        const user = { ...req.body }
        app.db('users')
            .insert({
                "name":"gustavo",
                "email":"g@gmail.com"
            })
            .then(res.status(201).send('ok'))
            .catch(e => res.status(400).send(e))

    }


    const get = async (req, res) => {
        const users = await app.db('users')
            res.json({ users })
            .then(users => res.json(users))
            .then(res.status(201).send('ok'))
            .catch(e => res.status(400).send(e))
            
    }

    return { save, get }

}

