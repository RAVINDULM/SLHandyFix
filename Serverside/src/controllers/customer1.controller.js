const customer1Model = require("../models/customer1.model");
// const {Rate} = require('../models/customer1.model');
const { use } = require("../routes/customer1.route");

exports.submitJobRequest = (req, res) => {
  console.log("customer1controller", req.body);
  const {
    title,
    requiredDate,
    description,
    location,
    district,
    category,
    customerId,
    serviceProviderId,
    status,
    image,
  } = new customer1Model(req.body);
  customer1Model.submitJobRequest(
    {
      title: title,
      requiredDate: requiredDate,
      description: description,
      location: location,
      district: district,
      category: category,
      image: image,
      customerId: customerId,
      serviceProviderId: serviceProviderId,
      status: status,
    },
    (err, user) => {
      if (err) {
        res.send(err);
      } else if (!user.length) {
        res.send("Create job request successfully!");
      }
    }
  );
};

exports.getserviceproviderlist = (req, res) => {
  console.log("serviceprovider list");
  customer1Model.getserviceproviderlist((err, user) => {
    if (err) {
      res.send(err);
    } else {
      console.log(user);
      res.send(user);
    }
  });
};

exports.getjoblist = (req, res) => {
  console.log("serviceprovider list");
  console.log("cvbnjkjhbgv bnjmkmjnb ");
  customer1Model.getjoblist(req.params.getcustomerId, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      // console.log(user);
      res.send(user);
    }
  });
};

exports.setRating = (req, res) => {
  console.log("xdcfvgbhjxcghjkjhvgcfgvhjk");
  // const rate = new customer1Model.Rate(req.body)
  // console.log(req.body)
  customer1Model.setRating(req.body, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
};
