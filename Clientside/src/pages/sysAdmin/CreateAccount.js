import Axios from "axios";
import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from "@coreui/react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Table from "src/pages/sysAdmin/Adminassets/table1";


function CreateAccount(){

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const [phoneVal,setphone]=useState("");
    const [gendervalue, setRadioValue] = useState("");
    const onChange = (ev) => {
      //save your value here with state variable
      console.log(ev.target.value);
      setRadioValue(ev.target.value);
    };

    //for display manger table
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const [managerList, setManagerDetails] = useState("");
  
    const column =  [
        {Heading : "ID", value:"id"},
        {Heading : "Name", value:"name"},
        {Heading : "Gender", value:"gender"},
        {Heading : "Contact No", value:"contact_no"},
        {Heading : "Email", value:"email"},
        {Heading : "DOB", value:"dob"},
        {Heading:"Address",value:"address"},
        {Heading : "Actions", value:"actions"}
      ]

      useEffect(() => {
        console.log('use effect run')
        Axios.get("http://localhost:5000/api/v1/admin/getManager").then((response) => {
          console.log(response.data);
          setManagerDetails(response.data);
        });
      }, []);

    return(
        <div>
            <div class="container lightBg">
            <Formik
            initialValues={{firstName:"",LastName:"",address:"",email:"",startDate:""}}
            validationSchema={Yup.object({
                firstName:Yup.string()
                .required("Required"),
                LastName:Yup.string()
                .required("Required"),
                address:Yup.string()
                .required("Required"),
                // phone:Yup.string()
                // .required("Required"),
                email:Yup.string()
                .required("Required"),
                startDate:Yup.date()
                .default(function () { return new Date();})
            })}

            onSubmit={(values)=>{
                console.log(values,"values")
                console.log(phoneVal)
                console.log(gendervalue)

                Axios.post("http://localhost:5000/api/v1/user/createManger",{
                    name:values.firstName+" "+values.LastName,
                    // last:values.LastName,
                    // address:values.address,
                    email:values.email,
                    phone:phoneVal,
                    // gender:gendervalue
                }).then((response)=>{
                    if(response.data.error) {
                        alert(response.data.error);}
                      else{
                        Axios.post("http://localhost:5000/api/v1/admin/CreateAccount",{
                            name:values.firstName+" "+values.LastName,
                            address:values.address,
                            email:values.email,
                            phone:phoneVal,
                            gender:gendervalue,
                            dob:values.startDate
                        })
                        alert("Succesfully Added")
                        window.location.reload(false);
                      }
                })
            }}
            >
            
            {(formik)=>(
                <form onSubmit={formik.handleSubmit}>
                    <h3>Create an account for Manger</h3>
                <div class="row">
                    <div class="col">
                    <label for="inputEmail4">First Name</label>
                    <input type="text" class="form-control" placeholder="First name" name="firstName" {...formik.getFieldProps("firstName")} />
                    {formik.touched.firstName &&
                        formik.errors.firstName ? (
                          <small>{formik.errors.firstName}</small>
                        ) : null}
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Last Name</label>
                    <input type="text" class="form-control" placeholder="Last name" name="LastName" {...formik.getFieldProps("LastName")}/>
                    {formik.touched.LastName &&
                        formik.errors.LastName ? (
                          <small>{formik.errors.LastName}</small>
                        ) : null}
                    </div>
                </div>
                <div class="row">
                <div class="col">
                    <label for="inputEmail4">Address</label>
                    <input type="text" class="form-control" placeholder="Address" name="address" {...formik.getFieldProps("address")}/>
                    {formik.touched.address &&
                        formik.errors.address ? (
                          <small>{formik.errors.address}</small>
                        ) : null}
                    </div>
  
                    <div class="col">
                    <label for="inputEmail4">Date of birth</label>
                    <input type="Date" class="form-control" name="startDate" {...formik.getFieldProps("startDate")}/>
                    </div>
                </div>
                <div class="row">
                <div class="col">
                    <label for="inputEmail4">Phone Number</label>
                    <PhoneInput class="form-control" country={'lk'} value={phoneVal} onChange={setphone} required/>
                </div>
                <div class="col">
                    <label for="inputEmail4">Email</label>
                    <input type="text" class="form-control" placeholder="sample@gmail.com" name="email" {...formik.getFieldProps("email")} />
                    {formik.touched.email &&
                        formik.errors.email ? (
                          <small>{formik.errors.email}</small>
                        ) : null}
                </div>
                </div>

                <div class="row">
                    <div class="col">
                    <label for="inputEmail4">Gender</label>
                    <div>
                        <input
                        type="radio"
                        value="male"
                        name="gender"
                        onChange={onChange}

                     /> Male
                     </div>
                     <div>
                        <input
                        type="radio"
                        value="female"
                        name="gender"
                        onChange={onChange}
    
                        /> Female
                    </div>
                </div>
                </div>
 

                <button type="submit" class="btn btn-success" style={{width:75.8}}>Add</button>
                <button type="button" class="btn btn-danger">Cancel</button>
                </form>
            )}

            </Formik>

            </div>

            <div>
      <h3>Manager List</h3>
      <Table data={managerList} column={column}/>
      {/* <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardBody>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Name
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    id="exampleFormControlInput1"
                    placeholder="Type your name here"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Type
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    id="exampleFormControlInput1"
                    placeholder="Type your name here"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Status
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                    id="exampleFormControlInput1"
                    placeholder="Type your name here"
                  />
                </div>
                <CButton onClick={submitData} color="primary">
                  Submit
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
    </div>
        </div>
    )
}
export default CreateAccount;