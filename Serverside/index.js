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

// image upload library
const multer = require("multer");
// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "src/imgs");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "__" + file.originalname);
//   },
// });
// const upload = multer({ storage: fileStorageEngine });

// const sequelize =  require("sequelize");
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

//import service routes
const serviceRoutes = require("./src/routes/service.route");

const adminroute = require("./src/routes/admin.route");

//import providers route
const providerRoutes = require("./src/routes/provider.route");

// create employee routes
app.use("/api/v1/employee", employeeRoutes);

// import service provider routes
const servProRoutes = require("./src/routes/servProv.route");

// Service provider route
app.use("api/v1/servprov", servProRoutes);

// User routes
const userRoutes = require("./src/routes/user.route");

//create admin routes

app.use("/api/v1/admin", adminroute);

//create service routes
app.use("/api/v1/service", serviceRoutes);

//create provider routes
 app.use('/api/v1/provider',providerRoutes);

 //create customer routes
//  app.use('/api/v1/customer',customerRoutes);


// import user routes 
// const userRoutes = require('./src/routes/user.route');

// Log in route

// payment route
// payment check

// app.post("/create-payment-intent", async (req, res) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: 1099, //lowest denomination of particular currency
//       currency: "usd",
//       payment_method_types: ["card"], //by default
//     });

//     const clientSecret = paymentIntent.client_secret;

//     res.json({
//       clientSecret: clientSecret,
//     });
//   } catch (e) {
//     console.log(e.message);
//     res.json({ error: e.message });
//   }
// });

//payment check

// img upload check

// app.post("/api/v1/single", upload.single("image"), (req, res) => {
//   console.log(req.file);
//   res.send("img upload called");
// });

// app.post("/api/v1/multi", upload.array("images", 4), (req, res) => {
//   console.log(req.file);
//   console.log(req.files);
//   res.send("multiple img upload called");
// });

// listen to the port
app.listen(port, () => {
  console.log(`Express is running at port ${port}`);
});
