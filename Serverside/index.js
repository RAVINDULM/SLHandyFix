const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require("bcrypt");
const sequelize =  require("sequelize");
const cookieParser =  require("cookie-parser");
const {sign} = require("jsonwebtoken")
// create express app
const app = express();
   
// setup the server port
const port = process.env.PORT || 5000;
 
// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// parse request data content type application/json
app.use(bodyParser.json()); 
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
// define root route
app.get('/', (req, res)=>{ 
    res.send('Hello World');
}); 

 
   

// import employee routes
const employeeRoutes = require('./src/routes/employee.route');


//import service routes
const serviceRoutes = require('./src/routes/service.route');

// create employee routes
app.use('/api/v1/employee', employeeRoutes);

//create service routes
app.use('/api/v1/service',serviceRoutes);

// import user routes 
const userRoutes = require('./src/routes/user.route');

// Log in route
app.use('/api/v1/user', userRoutes);


// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
}); 