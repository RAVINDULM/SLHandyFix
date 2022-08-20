import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import '../../../scss/_custom.scss'
import { Link } from "react-router-dom";

function mangSerAdd() {
  return (
    <div> 
      {/* <CRow><CCol xs={4}><h1>mangDashboard</h1></CCol><CCol xs={4}><CButton color="primary">
                  Submit
                </CButton></CCol></CRow> */}
                <h3>Add new service</h3>
  <div class="container lightBg">
  <Formik
                  initialValues={{ username: "", email: "" }}
                  // validationSchema={Yup.object({
                  //   username: Yup.string()
                  //     .max(15, "Must be 15 characters or less")
                  //     .required("Required"),
                  //   email: Yup.string()
                  //     .email("Invalid email address")
                  //     .required("Required"),
                  //   newpassword: Yup.string()
                  //     .max(20, "Must be 20 characters or less")
                  //     .required("Required"),
                  //   repeatpassword: Yup.string()
                  //     .max(20, "Must be 20 characters or less")
                  //     .required("Required")
                  //     .oneOf([Yup.ref('newpassword'), null], 'Passwords must match'),
                  // })}
                  onSubmit={(values) => {

                    // console.log(values); 
                    Axios.post("http://localhost:5000/api/v1/service/", {
                      name: values.name,
                      description: values.description, 
                    }).then(() => {
                      alert("successfully added!");
                      navigate("/services") 
                    });
                  }}
                >
                   {(formik) => (
  <form onSubmit={formik.handleSubmit}>
    
  <div class="row">
    <div class="col">
    <label for="inputEmail4">Service Name</label>
      <input type="text" class="form-control" placeholder="service name"
       autoComplete="name"
       name="name"
       {...formik.getFieldProps("name")}/>
    </div>
    <div class="col">
    <label for="inputEmail4">Description</label>
      <input type="text" class="form-control" placeholder="description" 
       autoComplete="description"
       name="description"
       {...formik.getFieldProps("description")}/>
    </div>
  </div>
 <button type="submit" class="btn btn-success">Add Service</button>
 <input class="btn btn-warning" type="reset" value="Reset"></input>
 <Link to="/services">
 <button type="button" class="btn btn-danger">Back</button></Link>
</form>
)}
</Formik>
  </div>
</div>
  );
}

export default mangSerAdd;
