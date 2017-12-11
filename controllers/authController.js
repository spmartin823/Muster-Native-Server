'use strict'; // ?
let firebaseProvider = require('../keys/firebaseAuthCredentials')
let firebase = require('firebase')
// post '/auth/signup/google' 
exports.signupWithGoogle = async function(req, res) {

};

// post '/auth/signup/email' //working. 
exports.signupWithEmail = function(req, res) {
  let username = req.body.username
  let password = req.body.password

  firebase.auth().createUserdWithEmailAndPassword(username, password)
    .then(() => res.send({currentUser : firebase.auth().currentUser}))
    .catch(error => res.send({error : error.toString()}))
}; 


// post '/auth/login/google'
exports.loginWithGoogle = async function(req, res) {

}

// post '/auth/login/email'
exports.loginWithEmail = async function(req, res) {
  let username = req.body.username
  let password = req.body.password

  firebase.auth().signInWithEmailAndPassword(username, password)
    .then((currentUser) => res.send( {currentUser} ))
    .catch(error => res.send({error : error.toString()}))
}

// post /auth/login/email/reset
exports.resetPassword = async function(req, res) {

}





