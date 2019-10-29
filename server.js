/**
 *
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * puis node server.js
 * exemple complet à l'adresse https://github.com/Musinux/first-vue-app
 */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'somethingtosay', // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))

const path = require('path')
app.use(express.static(path.join(__dirname, '/dist')))
const users = [
  {
    username: 'admin',
    password: 'bcf4zewin'
  },
  {
    username: 'root',
    password: 'root'
  }]

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  if (!req.session.userId) {
    const user = users.find(u => u.username === req.body.username && u.password === req.body.password)
    if (!user) {
      res.json({
        status: false,
        message: 'username or password invalid'
      })
    } else {
      req.session.userId = Math.floor((Math.random() * 1000) + 1) // connect the user, and change the id
      console.log('UserId: ' + req.session.userId)
      res.json({
        status: true,
        message: 'connected'
      })
    }
  } else {
    res.status(401)
    res.json({
      message: 'you are already connected'
    })
  }
})

app.post('/api/logout', (req, res) => {
  if (!req.session.userId) {
    res.status(401)
    res.json({
      message: 'you are already disconnected'
    })
  } else {
    req.session.userId = 0
    res.json({
      message: 'you are now disconnected'
    })
  }
})

app.get('/api/admin', (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401)
    res.json({ message: 'Unauthorized' })
    return
  }

  res.json({
    message: 'congrats, you are connected'
  })
})

app.post('/api/register', (req, res) => {
  const test = users.find(u => u.username === req.body.username)
  if (!test) {
    res.json({
      status: true
    })
  } else {
    res.json({
      status: false
    })
  }
})

app.post('/api/createuser', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  users.push({
    username: req.body.username,
    password: req.body.password
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
