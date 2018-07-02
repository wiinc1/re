const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/enroll',
    AuthenticationControllerPolicy.enroll,
    AuthenticationController.enroll)
}
