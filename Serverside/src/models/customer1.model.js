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

// var Rate= function(rate){
//   console.log("rate  ",rate)
//   this.rate=rate.rate;
//   this.customerId=rate.customerId;
//   this.serviceProviderId=rate.serviceProviderId;
// }

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

  JobRequest.getserviceproviderlist=(result)=>{
    dbConn.query('SELECT * FROM serviceprovider', (err, res)=>{
        if(err){
            console.log('Error while fetching data', err);
            result(null,err);
        }else{
            console.log(typeof(result.contact_no))
            console.log('service provider fetched successfully');
            result(null,res);
        }
    })

}

JobRequest.getjoblist=(id,result)=>{
console.log("this is "+id);
dbConn.query('SELECT placedjob.serviceProviderId, placedjob.title ,placedjob.status , serviceprovider.firstName , serviceprovider.lastName  from  placedjob inner join serviceprovider on serviceprovider.serviceProviderId  = placedjob.serviceProviderId where serviceprovider.serviceProviderId =?  ;',id, (err, res)=>{
    if(err){
        console.log('Error while fetching data', err);
        result(null,err);
    }else{
        console.log(typeof(result.contact_no))
        console.log('service provider fetched successfully');
        result(null,res);
    }
})

}


JobRequest.setRating=(dat,result)=>{
 
  dbConn.query('INSERT INTO rate (rate,serviceProviderId,customerId) values (?,?,?)',[dat.rate,dat.serviceProviderId,dat.customerId],(err,res)=>{
    if(err){
      console.log("Error while inserting data ",err)
      result(true,{"message":"error"})
    }else{
      console.log("rate update successfully");
      result(false, {message:"data added"});
    }

  })
  
}
  module.exports =JobRequest;
  // module.exports = Rate;
  