// console.log('user controller connected ');
const ServProvModel = require("../models/servPro.model");
// payment gateway
const PUBLISHABLE_KEY =
  "pk_test_51LfmAvKXajDBx48NAj6J5h5jPX6aY7tEX7ODAEkwWzsylk209JJe7Fxmh3xKQBI6LqapfHq2r7Amc3CJJN4a4zu700WWl1CqgQ";
const SECRET_KEY =
  "sk_test_51LfmAvKXajDBx48NGDEDyuVBo1ssAXhN8bpzeF8YaYSR4tippnrQ3lk4v2Rbj3MdyEkTY5IMkxJOJ5tr52WAHS8H00g5TwH9dE";
const Stripe = require("stripe");
//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: "2022-08-01" });

// image Upload
const multer = require("multer");
const path = require("path");

exports.careateAccountRequest = (req, res) => {
  const {
    fName,
    lName,
    gender,
    age,
    jobRole,
    mobileNum,
    dob,
    district,
    address,
    payment,
    image,
  } = new ServProvModel(req.body);
  console.log("account request controler called", req.body);

  console.log("account request controler called", req.file.path);
  ServProvModel.createServiceProvider(
    {
      fName: fName,
      lName: lName,
      gender: gender,
      age: age,
      jobRole: jobRole,
      mobileNum: mobileNum,
      dob: dob,
      district: district,
      address: address,
      payment: 10.99,
      img: "image",
    },
    (err, user) => {
      if (err) {
        res.send(err);
      } else if (!user.length) {
        res.send("Employee registered successfully!");
      }
    }
  );
};

exports.PayRegisterPayment = async (req, res) => {
  try {
    console.log("payment backend called");
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: "usd",
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;
    console.log(clientSecret);
    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
};

exports.getJobposts = (req, res) => {
  // console.log('here all employees list');

  ServProvModel.getJobpostsfromdb((err, employees) => {
    console.log("We are here");
    if (err) res.send(err);
    console.log("jobposts", employees);
    res.send(employees);
  });
};

// Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/imgs");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

exports.upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

// get accepted jobs
exports.getJobRequests = (req, res) => {
  console.log("getJobRequests controller called");
  ServProvModel.getJobRequests((err, jobRequests) => {
    console.log("We are here");
    if (err) res.send(err);
    console.log("jobposts", jobRequests);
    res.send(jobRequests);
  });
};

// get ongoing and completed jobs
exports.getServiceProviderJobs = (req, res) => {
  console.log("getJobRequests controller called");
  ServProvModel.getServiceProviderJobs((err, jobs) => {
    console.log("We are here");
    if (err) res.send(err);
    console.log("jobposts", jobs);
    res.send(jobs);
  });
};

exports.startJob = (req, res) => {
  console.log("startJobs controller called");
  ServProvModel.startJob(req.params.id, (err, startJobs) => {
    console.log("startJob");
    if (err) res.send(err);
    console.log("", startJobs);
    res.send(startJobs);
  });
};

exports.acceptJobRequest = (req, res) => {
  console.log("getJobRequests controller called");
  ServProvModel.acceptJobRequest(req.params.id, (err, jobRequests) => {
    console.log("Employee are here");
    if (err) res.send(err);
    console.log("Single jobRequests", jobRequests);
    res.send(jobRequests);
  });
};
