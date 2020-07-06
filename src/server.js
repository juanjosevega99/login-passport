const express = require('express')
const engine = require('ejs-mate')
const path = require('path')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')

// initializations
const app = express()
require('./database')
require('./passport/local-auth')

// settings
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine)
app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(session({
  secret: 'mysecretsession',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize)
app.use(passport.session())

// routes
app.use('/', require('./routes/index'))

app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'))
})
