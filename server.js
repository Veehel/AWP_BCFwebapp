const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
const app = express()

app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))

app.use(session({
  secret: 'something',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(morgan('dev'))
app.use(bodyParser.json())
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist/')))
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

const user = [
  {
    username: 'root',
    password: 'root'
  },
  {
    username: 'chef',
    password: 'BrochetteCanardFromage'
  }
]

app.post('/api/logout', (req, res) => {
  req.session.destroy()
  if (!req.session) {
    console.log('You have been disconnected')
  }
})

app.post('/api/register', (req, res) => {
  const available = user.find(u => u.username === req.body.username)
  if (!available) {
    res.json({
      status: true
    })
  } else {
    res.json({
      status: false
    })
  }
})

app.post('/api/creatuser', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  user.push({
    username: req.body.username,
    password: req.body.password
  })
})

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  if (!req.session.userId) {
    const isLoginCorrect = user.find(u => u.username === req.body.username && u.password === req.body.password)
    if (!isLoginCorrect) {
      res.json({
        status: false,
        message: 'username or password invalid'
      })
      req.session.userId = 1
      console.log('UserID: ' + req.session.userId)
      res.json({
        status: true,
        message: 'Connected'
      })
    }
  } else {
    res.status(401)
    res.json({
      message: 'You are already connected'
    })
  }
})
