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
  dbConn.query("SELECT * FROM jobadvertisements", (err, res) => {
    if (err) {
      console.log("Error while fetching employess", err);
      result(null, err);
    } else {
      console.log("Employees fetched successfully");
      result(null, res);
    }
  });
};

ServiceProvider.getJobRequests = (result) => {
  dbConn.query("SELECT * FROM `placedjob` WHERE status = 1", (err, res) => {
    if (err) {
      console.log("Error while fetching employess", err);
      result(null, err);
    } else {
      console.log("Employees fetched successfully");
      result(null, res);
    }
  });
};

// get ongoing jobs
ServiceProvider.getServiceProviderJobs = (result) => {
  dbConn.query(
    "SELECT * FROM `placedjob` WHERE (status = 2 OR status = 3 OR status = 4)",
    (err, res) => {
      if (err) {
        console.log("Error while fetching employess", err);
        result(null, err);
      } else {
        console.log("Employees fetched successfully");
        result(null, res);
      }
    }
  );
};

// accept job reuests
ServiceProvider.acceptJobRequest = (id, result) => {
  console.log("job id", id);
  dbConn.query(
    "UPDATE placedjob SET status = 2 WHERE jobID = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while updating status", err);
        result(null, err);
      } else {
        console.log("Job accepted successfully");
        result(null, res);
      }
    }
  );
};

// reject job reuests
ServiceProvider.rejectJobRequest = (id, result) => {
  console.log(id);
  dbConn.query(
    "UPDATE placedjob SET status = 0 WHERE jobID ?",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while updating status", err);
        result(null, err);
      } else {
        console.log("Job rejected successfully");
        result(null, res);
      }
    }
  );
};

// reject job reuests
ServiceProvider.startJob = (id, result) => {
  console.log("job id model", id);
  dbConn.query(
    "UPDATE placedjob SET status = 3 WHERE jobID = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while updating status", err);
        result(null, err);
      } else {
        console.log("Job started successfully");
        result(null, res);
      }
    }
  );
};

module.exports = ServiceProvider;

// statuses
// rejected = 0
// pending = 1
// accepted = 2
// started = 3
// completed = 4
