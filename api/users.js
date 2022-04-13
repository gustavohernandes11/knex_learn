const knex = require('../config/db')

module.exports = app => {
    const save = async (req, res) => {
        const user = { ...req.body } 
        if (req.params.id) user.id = req.params.id

        if (user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send("put"))
                .catch(e => res.status(500).send(e))
        } else {
            app.db('users')
                .insert(user)
                .then(res.status(204).send('save'))
                .catch(e => res.status(400).send(e))
        }
    }


    const get = async (req, res) => {
        const users = await app.db('users')
        res.json({ users })
            .then(res.status(201).send())
            .catch(e => res.status(400).send(e))

    }

    const remove = async (req, res) => {
        const user = { ...req.body }
        if (user.id) {
            app.db('users')
                .where({ id: user.id })
                .del()
                .then(res.status(201).send('Deletado'))
                .catch(e => res.status(400).send(e))
        }

    }

    return { save, get, remove }

}

