var dbConn = require("../../config/db.config");
const sequelize = require("sequelize");

var ServiceProvider = function (ServiceProvider) {
  //   this.id = ServiceProvider.id;
  this.img = ServiceProvider.img;
  this.fName = ServiceProvider.fName;
  this.lName = ServiceProvider.lName;
  this.gender = ServiceProvider.gender;
  this.age = ServiceProvider.age;
  this.jobRole = ServiceProvider.jobRole;
  this.mobileNum = ServiceProvider.mobileNum;
  this.dob = ServiceProvider.dob;
  this.district = ServiceProvider.district;
  this.address = ServiceProvider.address;
  this.payment = ServiceProvider.payment;
};

ServiceProvider.createServiceProvider = (userReqData, result) => {
  console.log("Serv pro model called: ", userReqData);
  dbConn.query(
    "INSERT INTO servProvAccountRequests SET ? ",
    userReqData,
    (err, res) => {
      if (err) {
        console.log("Error while inserting data");
        result(null, err);
      } else {
        console.log("serv prov created successfully");
        result(null, res);
      }
    }
  );
};

// ServiceProvider.getJobpostsfromdb = (result) => {
//   dbConn.query("SELECT * FROM jobposts", (err, res) => {
//     if (err) {
//       console.log("Error while fetchinbg data", err);
//       result(null, err);
//     } else {
//       console.log("Job posts fetched successfully");
//       result(null, res);
//     }
//   });
// };

ServiceProvider.getJobpostsfromdb = (result) => {
  dbConn.query("SELECT * FROM jobposts", (err, res) => {
    if (err) {
      console.log("Error while fetching employess", err);
      result(null, err);
    } else {
      console.log("Employees fetched successfully");
      result(null, res);
    }
  });
};

module.exports = ServiceProvider;
