var dbConn  = require('../../config/db.config');


var JobRequest = function(job){
    console.log(job,"--->")
    this.jobId = job.jobId;
    this.title = job.title;
    this.requiredDate=job.requiredDate;
    this.district = job.district;
    this.category = job.category; 
    this.location=job.location;
    this.image = job.image;
    this.description = job.description;
    this.customerId = job.customerId;
    this.serviceProviderId = job.serviceProviderId;
    this.status = job.status;
}

//create employee
JobRequest.submitJobRequest = (jobReqData, result) => {
    console.log(jobReqData)
    dbConn.query("INSERT INTO placedjob SET ? ", jobReqData, (err, res) => {
      if (err) {
        console.log("Error while inserting data",err);
        result(null, err);
      } else {
        console.log("job request successfully");
        result(null, res);
      }
    });
  };
  module.exports = JobRequest;