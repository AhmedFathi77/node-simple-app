
var express = require('express');
const Connect = require('./controllers/connect');
var cors = require('cors');
var bodyParser = require('body-parser')



const app = express()
const port = process.env.PORT || 2026


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) =>  {
    console.log('data' , req.body)
    res.send(`data ==> ${req.body}`)})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


// var app = express();
Connect();




// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });




// import routes
const usersRouter = require('./routes/users');



// set routes
app.use('/api/users', usersRouter)



