const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

// payment gateway
const PUBLISHABLE_KEY =
  "pk_test_51LfmAvKXajDBx48NAj6J5h5jPX6aY7tEX7ODAEkwWzsylk209JJe7Fxmh3xKQBI6LqapfHq2r7Amc3CJJN4a4zu700WWl1CqgQ";
const SECRET_KEY =
  "sk_test_51LfmAvKXajDBx48NGDEDyuVBo1ssAXhN8bpzeF8YaYSR4tippnrQ3lk4v2Rbj3MdyEkTY5IMkxJOJ5tr52WAHS8H00g5TwH9dE";
const Stripe = require("stripe");
//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: "2022-08-01" });

// const sequelize =  require("sequelize");
const sequelize = require("sequelize");
const cookieParser = require("cookie-parser");
const { sign } = require("jsonwebtoken");
// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// parse request data content type application/json
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// define root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// import customerjobad routes
const customerJobADRoutes = require("./src/routes/customerJobAD.route");
// create customerjobad routes
app.use("/api/v1/customerJobAD", customerJobADRoutes);

// import employee routes
const employeeRoutes = require("./src/routes/employee.route");

//import customer route
// const customerRoutes = require("./src/routes/customer.route");

//import service routes
const serviceRoutes = require("./src/routes/service.route");

//import providers route
const providerRoutes = require("./src/routes/provider.route");

//import customer route
const customerRoutes = require("./src/routes/customer.route");
//import advertisment route
const advertismentRoutes = require("./src/routes/advertisment.route");

//import complaints route
const complaintRoute = require("./src/routes/complaints.route");

//import request route
const requestRoute = require("./src/routes/request.route");

// create employee routes
app.use("/api/v1/employee", employeeRoutes);

// import service provider routes
const servProRoutes = require("./src/routes/servProv.route");

// Service provider route
app.use("/api/v1/servprov", servProRoutes);

// User routes
const userRoutes = require("./src/routes/user.route");

//create service routes
app.use("/api/v1/service", serviceRoutes);

//create customer routes
// app.use('/api/v1/customer',customerRoutes);

//create provider routes
app.use("/api/v1/provider", providerRoutes);

app.use("/api/v1/customer", customerRoutes);
//create advertisment routes
app.use("/api/v1/advertisment", advertismentRoutes);

//create compliants routes
app.use("/api/v1/complaints", complaintRoute);

//create request routes
app.use("/api/v1/request", requestRoute);

// Log in route
app.use("/api/v1/user", userRoutes);

const adminRoutes = require("./src/routes/admin.route");
app.use("/api/v1/admin", adminRoutes);

const customer1Routes = require("./src/routes/customer1.route");
app.use("/api/v1/customer1", customer1Routes);

// listen to the port
app.listen(port, () => {
  console.log(`Express is running at port ${port}`);
});
