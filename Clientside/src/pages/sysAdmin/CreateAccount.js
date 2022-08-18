import Axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup"



function CreateAccount(){
    const [firstName,setFirst]=useState("");
    const [LastName,setLast]=useState("");
    const [address,setAdress]=useState("");
    const[Phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [gender, setGender] = React.useState('male');

    const handleChange = (event) => {
      setGender(event.target.value)
    }

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
                email:Yup.string()
                .required("Required"),
                startDate:Yup.date()
                .default(function () { return new Date();})
            })}

            onSubmit={(values)=>{
                console.log(values,"values")
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
                    <label for="inputEmail4">Birth of date</label>
                    <input type="Date" class="form-control" name="startDate" {...formik.getFieldProps("startDate")}/>
                    {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                    </div>
                </div>
                <div class="row">
                {/* <div class="col">
                    <label for="inputEmail4">Phone Number</label>
                    <PhoneInput  class="form-control" country={'lk'} name="phone" {...formik.getFieldProps("phone")}/>
                    {formik.touched.phone &&
                        formik.errors.phone ? (
                          <small>{formik.errors.phone}</small>
                        ) : null}
                </div> */}
                <div class="col">
                    <label for="inputEmail4">Email</label>
                    <input type="text" class="form-control" placeholder="sample@gmail.com" name="email" {...formik.getFieldProps("email")} />
                    {formik.touched.email &&
                        formik.errors.addemailess ? (
                          <small>{formik.errors.email}</small>
                        ) : null}
                </div>
                </div>

                {/* <div class="row">
                    <div class="col">
                    <label for="inputEmail4">Gender</label>
                    <div>
                        <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleChange}
                        /> Male
                     </div>
                     <div>
                        <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleChange}
                        /> Female
                    </div>
                </div>

                </div> */}
                <div class="row">
 
                </div>


                <button type="submit" class="btn btn-success" style={{width:75.8}}>Add</button>
                <button type="button" class="btn btn-danger">Cancel</button>
                </form>
            )}

            </Formik>

            </div>
        </div>
    )
}
export default CreateAccount;