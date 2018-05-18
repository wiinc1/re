const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  app.post('/enroll',
    AuthenticationController.enroll)
}
