module.exports = app => {

  app.route('/user')
  .get(app.api.users.get)
  .post(app.api.users.save)
  .put()
  .delete()
}

