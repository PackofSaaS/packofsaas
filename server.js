const express = require('express');

const app = express();
// ADD THIS
var cors = require('cors');
app.use(cors());


// For Deployment Part 1
// ... other imports 
const path = require("path")
// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

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

const PORT = process.env.PORT || 5000;

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

// For Deployment Part 2
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT);