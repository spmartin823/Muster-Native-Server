'use strict'; 

module.exports = function(app) {
  var auth = require('../controllers/authController.js');

  // signup 
  app.post('/auth/signup/google', auth.signupWithGoogle)
  app.post('/auth/signup/email', auth.signupWithEmail)

  // login 
  app.post('/auth/login/google', auth.loginWithGoogle)
  app.post('/auth/login/email', auth.loginWithEmail)

  // reset password
  app.post('/auth/login/email/reset', auth.resetPassword)

}