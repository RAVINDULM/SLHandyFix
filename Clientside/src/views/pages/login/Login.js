import React, { useEffect, useState,Component }  from 'react'
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
// import OTPInput, { ResendOTP } from "otp-input-react";
// import { values } from 'core-js/core/array';
Axios.defaults.withCredentials = true;

function Forgotpassword() {

    const [OTP, setOTP] = useState("");
    const [userNamepass,setUserName]=useState("");

    const renderButton = (buttonProps) => {
        return <button style={{backgroundColor:'white',color:'blue',border:'none',width:100,height:40,borderRadius:3}} {...buttonProps}>Resend</button>;
      };
      const renderTime = (remainingTime) => {
        return <span>{remainingTime} seconds remaining</span>;
      };
      
      // const verifyOTP=()=>{
      //   if(OTP.length==4){
      //       Axios.post("http://localhost:5000/api/v1/user/forgotpassword",{
      //         sendotp:OTP
      //       })
      //       .then((response)=>{
      //           alert(response.data)
      //       })
      //       // alert(OTP.length)
      //   }else{
      //       alert("Your OTP is Incorrect")
            
      //   }
        
      // }
    //   <ResendOTP renderButton={renderButton} renderTime={renderTime} />;


    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md={8}>
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                    <Formik
                      initialValues={{ userNamepass: "" }}
                      validationSchema={Yup.object({
                        userNamepass: Yup.string()
                          .email("Invalid email address")
                          .required("Required"),
                       
                      })}
                      onSubmit={(values) => {
                        console.log("onsubmit");
                        // Axios.post("http://localhost:5000/api/v1/user/callOTP",{
                        //   sendcontact:values.userNamepass
                        // })

                      }}
                    > 
                    {(formik) => ( 
                      <CForm onSubmit={formik.handleSubmit}>
                        <h2>Password Recovery</h2>                      
                        <p className="text-medium-emphasis">Enter Your username</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput  placeholder="Username"
                              // autoComplete="email"
                              // type="email"
                              // id='userNamepass'
                              name="userNamepass"
                              {...formik.getFieldProps("userNamepass")}
                            
                          />
                               {/* {formik.touched.email && formik.errors.email ? (
                              <small>{formik.errors.email}</small>
                            ) : null} */}
                        </CInputGroup>
                        {/* <CInputGroup className="mb-4">
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
                        </CInputGroup> */}
                        <CRow>
                          <CCol xs={6}>
                            <CButton type='submit' color="primary" className="px-4" >
                              submit
                            </CButton>
                          </CCol>
                          <CCol xs={6} className="text-right">
                            {/* <CButton color="link" className="px-0">
                              Forgot password?
                            </CButton> */}
                          </CCol>
                        </CRow>
                      </CForm>
                       )} 
                       </Formik>
                    </CCardBody>
                  </CCard>
                  <CCard  style={{ width: '94%' }}>
                     {/* <CCardBody style={{width:'100%',height:'100%',flexDirection:'coloumn',backgroundColor:'blue'}}>
                        <div style={{width:'100%',height:'100%',flexDirection:'row'}}>
                            <div style={{width:'100%',height:'50%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <OTPInput value={OTP} onChange={setOTP}  OTPLength={4} otpType="number" disabled={false} secure />
                            </div>
                            <div style={{width:'100%',height:'25%' ,display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                                <button style={{backgroundColor:'white',color:'blue',border:'none',width:100,height:40,borderRadius:3}} onClick={verifyOTP}> Verify</button>
                            </div>
                            <div style={{width:'100%',height:'25%', display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                                <ResendOTP renderButton={renderButton} renderTime={renderTime} style={{ width:'90%',display:'flex',alignItems:'center'}}  onResendClick={() => console.log("Resend clicked")} 
                                />
                            </div>  */}
                        {/* <h2>Sign up</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Link to="/register">
                          <CButton color="primary" className="mt-3" active tabIndex={-1}>
                            Register Now!
                          </CButton>
                        </Link> */}
                      {/* </div> */}
                      
                    {/* </CCardBody>  */}
                    {/* <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure />
                    <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>


      )
}

export default Forgotpassword