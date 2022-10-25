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

 
// import customerjobad routes
const customerJobADRoutes = require('./src/routes/customerJobAD.route');
// create customerjobad routes
app.use('/api/v1/customerJobAD', customerJobADRoutes); 

// import employee routes
const employeeRoutes = require('./src/routes/employee.route');


//import service routes
const serviceRoutes = require('./src/routes/service.route');

//import service routes
// const customerRoutes = require('./src/routes/customer.route');

//import providers route
const providerRoutes = require('./src/routes/provider.route');

//import customer route
const customerRoutes = require('./src/routes/customer.route');
//import advertisment route
const advertismentRoutes = require('./src/routes/advertisment.route');

//import complaints route
const complaintRoute = require('./src/routes/complaints.route');

//import request route
const requestRoute = require('./src/routes/request.route');

// create employee routes
app.use('/api/v1/employee', employeeRoutes);

//create service routes
app.use('/api/v1/service',serviceRoutes);

//create customer routes
app.use('/api/v1/customer',customerRoutes);

//create provider routes
 app.use('/api/v1/provider',providerRoutes);

 app.use('/api/v1/customer',customerRoutes);
//create advertisment routes
app.use('/api/v1/advertisment',advertismentRoutes);


//create compliants routes
app.use('/api/v1/complaints',complaintRoute);

//create request routes
app.use('/api/v1/request',requestRoute);

// import user routes 
const userRoutes = require('./src/routes/user.route');

// Log in route
app.use('/api/v1/user', userRoutes);


// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
}); 

const customer1Routes = require("./src/routes/customer1.route")

app.use("/api/v1/customer1",customer1Routes)