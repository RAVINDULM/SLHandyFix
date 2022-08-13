import React, { useEffect, useState }  from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
// import { Toast } from '@coreui/coreui';
import Toast from '../components/Toast/Toast'
Axios.defaults.withCredentials = true;

const Login = () => {  
  const navigate = useNavigate() 

  const forgotpawd=()=>{
    navigate("/forgotpassword");
  }
  
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                <Formik
                  initialValues={{ username: "", email: "" }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Required"),
                    password: Yup.string()
                      .max(20, "Must be 20 characters or less")
                      .required("Required"),
                  })}
                  onSubmit={(values) => {

                    // console.log(values); 
                    Axios.post("http://localhost:5000/api/v1/user/login", {
                      email: values.email, 
                      password: values.password,
                    }).then((response) => {
                      if(response.data.error) {
                        alert(response.data.error);}
                      else{
                       if(logggedusertype=="manager"){
                        console.log("Mang dashboard called", logggedusertype)
                        navigate("/mang_dashboard")
                       }
                       else if(logggedusertype=="admin"){
                        navigate("/sysAdmin_Dashboard")
                       }
                       else if (logggedusertype=="serviceProvider"){
                        navigate("/servPro_Dashboard")
                       }
                       else {
                        console.log("customer dashboard called", logggedusertype)
                        navigate("/cus_dashboard")
                       }
                        // navigate("/")
                        window.location.reload(false);
                        alert("successfully Logged in!");
                      }
                    });
                  }}
                > 
                {(formik) => ( 
                  <CForm onSubmit={formik.handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput  placeholder="Email"
                          autoComplete="email"
                          type="email"
                          name="email"
                          {...formik.getFieldProps("email")} />
                           {formik.touched.email && formik.errors.email ? (
                          <small>{formik.errors.email}</small>
                        ) : null}
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput type="password"
                          placeholder="Password"
                          autoComplete="new-password"
                          name="password"
                          {...formik.getFieldProps("password")}
                      />
                       {formik.touched.password &&
                        formik.errors.password ? (
                          <small>{formik.errors.password}</small>
                        ) : null}
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type='submit' color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0" onClick={forgotpawd}>
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                   )} 
                   </Formik>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
