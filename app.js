const express = require('express');

const app = express();
// ADD THIS
var cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json()) 

// Import Routes
const postRoutes = require('./routes/posts')

const emailRoutes = require('./routes/emails')

// When /posts end point is hit, go to postRoutes
app.use('/posts', postRoutes)

app.use('/email', emailRoutes)

const PORT = process.env.PORT || 8083;

// Middlewares
// are functions which execute when routes are hit
app.use('/', ()=> {
    console.log("This is a middleware")
})


// Routes
app.get('/', (req, res) => {
    res.send("Pack of SaaS Home Found")
})


// Connected to Database
mongoose.connect(process.env.DB_CONNECTION, {useNewURLParser: true},()=>{
    console.log("Connected to database")
})

app.listen(PORT);