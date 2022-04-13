module.exports = app => {

  app.route('/user')
  .get(app.api.users.get)
  .post(app.api.users.save)
  .delete(app.api.users.remove)
  
  app.route('/user/:id')
  .put(app.api.users.save)
}
