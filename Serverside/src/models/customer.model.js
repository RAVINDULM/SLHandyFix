var dbConn = require("../../config/db.config");

var CustomerEditProfile = function (customerEditProfile) {
  //this.customerId = customer.customerId;
  this.id = customerEditProfile.id;
  this.firstName = customerEditProfile.firstName;
  this.lastName = customerEditProfile.lastName;
  this.contactNo = customerEditProfile.contactNo;
  // this.address = customerEditProfile.address;
  this.email = customerEditProfile.email;
};

// var Customer = function(customer){
//     //this.customerId = customer.customerId;
//     this.id = customer.id;
//     this.name = customer.name;
//     this.contactNo = customer.contactNo;
//     this.address = customer.address;
//     this.email = customer.email;
// };

CustomerEditProfile.createEditProfile = (
  customerEditProfileReqData,
  result
) => {
  console.log(customerEditProfileReqData);
  console.log("model create add: ", customerEditProfileReqData);
  dbConn.query(
    "UPDATE registeredcustomer SET firstName=?, lastName=?, contactNo=?, email=? WHERE customerId = ?",
    [
      customerEditProfileReqData.firstName,
      customerEditProfileReqData.lastName,
      customerEditProfileReqData.contactNo,
      customerEditProfileReqData.email,
      customerEditProfileReqData.id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while inserting data");
        result(null, err);
      } else {
        console.log("Customer updated successfully");
        result(null, res);
      }
    }
  );
};

// get all employees
CustomerEditProfile.getCustomer = (result) => {
  console.log("getCustomer");
  dbConn.query("SELECT * FROM registeredcustomer ", (err, res) => {
    if (err) {
      console.log("Error while fetching data ", err);
      result(null, err);
    } else {
      console.log("dbservices");
      console.log("Customers fetched successfully");
      result(null, res);
    }
  });
};

// get customer by id

CustomerEditProfile.getCustomerByID = (id, result) => {
  dbConn.query(
    "SELECT * FROM registeredcustomer WHERE customerId=?",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching data", err);
        result(null, err);
      } else {
        console.log("Customers fetched successfully");
        result(null, res);
      }
    }
  );
};

module.exports = CustomerEditProfile;
