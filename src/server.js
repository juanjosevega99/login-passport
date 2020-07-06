const express = require('express')
const engine = require('ejs-mate')
const path = require('path')
const morgan = require('morgan')

// initializations
const app = express()

// settings
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine)
app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(morgan('dev'));

// routes
app.use('/', require('./routes/index'))

app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'))
})
