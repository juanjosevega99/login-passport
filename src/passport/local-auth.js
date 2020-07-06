const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/user')

passport.use('local-signup', new LocalStrategy({
  email: 'email',
  password: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await User.findOne({ 'email': email })
}))