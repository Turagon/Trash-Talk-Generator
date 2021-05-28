const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const trashTalk = require('./ttgenerator').trashTalk
const roles = require('./roles.json').roles
const app = express()
const port = 3000

app.engine('handlebars', exphbs({defaultLayout: 'main',
  helpers: {
    checkStatus: function (a, b) {
      if (a === b) {
        return 'checked'
      }
    }
  }
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {roles})
})

app.post('/', (req, res)=> {
  let checkValue = req.body.ghg
  let ghwords = trashTalk(checkValue)
  res.render('index', { roles, ghwords, checkValue })
})

app.listen(port, () => {
  console.log('server on')
})