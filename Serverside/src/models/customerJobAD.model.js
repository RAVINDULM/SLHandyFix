const utils = require("util");
var dbConn = require("../../config/db.config");
const runQuery = utils.promisify(dbConn.query).bind(dbConn);
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

var CustomerJobAD = function (customerJobAD) {
  this.adId = customerJobAD.adId;
  this.title = customerJobAD.title;
  this.description = customerJobAD.description;
  this.requiredDate = customerJobAD.requiredDate;
  // this.postDate = customerJobAD.postDate;
  // this.postTime = customerJobAD.postTime;
  // this.image = customerJobAD.image;
  // this.customerId = customerJobAD.customerId;
  // this.serviceProviderId = customerJobAD.serviceProviderId;
  // this.area = customerJobAD.area;
  // this.province = customerJobAD.province;
  this.district = customerJobAD.district;
  this.category = customerJobAD.category;
};

// get all employees
CustomerJobAD.getAllcustomerJobAD = (result) => {
  dbConn.query("SELECT * FROM jobadvertisement", (err, res) => {
    if (err) {
      console.log("Error while fetching job advertisement", err);
      result(null, err);
    } else {
      console.log("job advertisement fetched successfully");
      result(null, res);
    }
  });
};

// get employee by id
CustomerJobAD.getAllcustomerJobADByID = (adId, result) => {
  dbConn.query(
    "SELECT * FROM jobadvertisement WHERE adId=?",
    adId,
    (err, res) => {
      if (err) {
        console.log("Error while fetching job advertisement", err);
        result(null, err);
      } else {
        console.log("job advertisement fetched successfully");
        result(null, res);
      }
    }
  );
};

//create employee
CustomerJobAD.createcustomerJobAD = (customerJobADReqData, result) => {
  // console.log("model create add: ",customerJobADReqData);
  dbConn.query(
    "INSERT INTO jobadvertisement SET ? ",
    customerJobADReqData,
    (err, res) => {
      if (err) {
        console.log("Error while inserting data");
        result(null, err);
      } else {
        console.log("job advertisement posted successfully");
        result(null, res);
      }
    }
  );
};

// update employee
// CustomerJobAD.updateEmployee = (id, employeeReqData, result)=>{
//     dbConn.query("UPDATE employees SET name=?,type=?,status=? WHERE id = ?", [employeeReqData.name,employeeReqData.type,employeeReqData.status, id], (err, res)=>{
//         if(err){
//             console.log('Error while updating the employee');
//             result(null, err);
//         }else{
//             console.log("Employee updated successfully");
//             result(null, res);
//         }
//     });
// }

// delete employee
CustomerJobAD.deletecustomerJobAD = (adId, result) => {
  dbConn.query(
    "DELETE FROM jobadvertisement WHERE adId=?",
    [adId],
    (err, res) => {
      if (err) {
        console.log("Error while deleting the job advertisement");
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
  // dbConn.query("UPDATE jobadvertisement SET status=? WHERE id = ?", [0, adId], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the job advertisement');
  //         result(null, err);
  //     }else{
  //         console.log("job advertisement deleted successfully");
  //         result(null, res);
  //     }
  // });
};

CustomerJobAD.RegisterCustomer = async (customerReqData, result) => {
  console.log("model registeredcustomer add: ", customerReqData.password);

  try {
    await runQuery("begin");

    const hashedPassword = await bcrypt.hash(customerReqData.password, 10);

    const response = await runQuery(
      `INSERT INTO users(name, email, password, usertype, contact_no) VALUES (?, ?, ?, ?, ?)`,
      [
        customerReqData.fName,
        customerReqData.email,
        hashedPassword,
        "customer",
        customerReqData.mobileNum,
      ]
    );

    console.log("=====================================");
    console.log(response);
    // console.log(customerReqData.nic);

    //     const insertUsers = await bcrypt

    // const hashed = await bcrypt.hash(customerReqData.mobileNum, 10)

    //       .hash(customerReqData.mobileNum, 10)
    //       .then((hash) => {
    //         runQuery(
    //           `INSERT INTO users(name, email, password, usertype, contact_no) VALUES (?, ?, ?, ?, ?)`,
    //           [
    //             customerReqData.fName,
    //             customerReqData.email,
    //             customerReqData.mobileNum,
    //             "customer",
    //             hash,
    //           ]
    //         );
    //       });
    // console.log(insertUsers);
    const userID = response.insertId;
    await runQuery(
      `INSERT INTO user
      (
        userId,
        contactNo,
        firstName,
        lastName,
        nic,
        area,
        province,
        district,
        gender,
        email
        ) VALUES (?,?,?,?,?,?,?,?,?,?);`,
      [
        userID,
        customerReqData.mobileNum,
        customerReqData.fName,
        customerReqData.lName,
        // "981351420V",
        customerReqData.nic,
        // "nuegoda",
        customerReqData.area,
        customerReqData.province,
        customerReqData.district,
        customerReqData.gender,
        customerReqData.email,
      ]
    );

    await runQuery(
      `INSERT INTO registeredcustomer 
      (
        userId,
        contactNo,
        firstName,
        lastName,
        nic,
        area,
        province,
        district,
        email,
        gender
        ) VALUES (?,?,?,?,?,?,?,?,?,?);`,
      [
        userID,
        customerReqData.mobileNum,
        customerReqData.fName,
        customerReqData.lName,
        // "981351420V",
        customerReqData.nic,
        // "nuegoda",
        customerReqData.area,
        customerReqData.province,
        customerReqData.district,
        customerReqData.email,
        customerReqData.gender,
      ]
    );

    await runQuery("commit");
    return true;
  } catch (e) {
    console.log(e);
    await runQuery("rollback");
    return false;
  }

  //   dbConn.query("begin",(err,res) =>{
  //     if(err){
  //         console.error(err)
  //         return [];
  //     }else{
  //         dbConn.query(
  //             "INSERT INTO registeredcustomer SET userId = ?, contactNo=?, firstName=?, lastName=?,nic=? ,area=?,province=?,district=?,email=?,gender=? ",
  //             [customerReqData.fName,customerReqData.lName,customerReqData.gender, customerReqData.mobileNum,customerReqData.dob,customerReqData.district,customerReqData.address,customerReqData.province,customerReqData.email],
  //             (err, res) => {
  //               if (err) {
  //                 console.log("Error while inserting data");
  //                 result(null, err);
  //               } else {
  //                 console.log("job customer registered successfully");
  //                 result(null, res);
  //               }
  //             }
  //           );
  //     }
  //   })
};
module.exports = CustomerJobAD;
