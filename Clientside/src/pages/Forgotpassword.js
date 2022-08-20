import React, { useEffect, useState,Component }  from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "yup-phone";
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
import { cibElsevier, cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";
// import { values } from 'core-js/core/array';
import validator from 'validator' ;
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

      const validatePhoneNumber = (number) => {
        if(validator.isMobilePhone(number) && number.length==10){
          return (true)
        }else{
          return(false)
        }
       }
      
      const verifyOTP=()=>{
        navigate("/ResetPassword")
        // if(OTP.length==4){
        //     Axios.post("http://localhost:5000/api/v1/user/forgotpassword",{
        //       sendotp:OTP
        //     })
        //     .then((response)=>{
        //         alert(response.data)
                
        //         window.location.reload(true)
        //     })
        //     // alert(OTP.length)
        // }else{
        //     alert("Your OTP is Incorrect")
            
        // }
        
      }
    //   <ResendOTP renderButton={renderButton} renderTime={renderTime} />;
    const navigate = useNavigate()
    const movetoBaack=()=>{
      navigate("/login")

    }


    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center" >
          <CContainer style={{width:700,height:300,display:'flex',justifyContent:'center'}}>
            {/* <CRow style={{width:700,height:300,backgroundColor:'pink'}}> */}
              <CCol style={{width:700,height:300,backgroundColor:'white',display:'flex',flexDirection:'row',}}>            
                  <CCard style={{width:400,border:'none'}}>
                    <CCardBody style={{width:400,height:298}} >
                    <div className="form-div" style={{flex:1}}>
                    <Formik style={{width:403,height:298}}
                      initialValues={{ userNamepass: "" }}
                      validationSchema={Yup.object({
                        userNamepass: Yup.string()
                          .required("Required"),
                       
                      })}
                      onSubmit={(values) => {
                        console.log("onsubmit");
                        if(validatePhoneNumber(values.userNamepass)){
                          Axios.post("http://localhost:5000/api/v1/user/callOTP",{
                          sendcontact:values.userNamepass
                        }).then((response)=>{
                          if(response.data.error){
                            alert(response.data.error)
                          }else{
                            alert("sent OTP to your phone")
                          }
                        })
                        }else{
                          alert("Invalid Phone Number")
                        }


                      }}
                    > 
                    {(formik) => ( 
                      <CForm onSubmit={formik.handleSubmit} style={{flex:1}}>
                        <h2 style={{marginBottom:10}}>Password Recovery</h2>                      
                        <p className="text-medium-emphasis" style={{marginBottom:12}}>Enter Your username</p>
                        <CInputGroup style={{marginBottom:50}}>
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput  placeholder="Username"
                              name="userNamepass"
                              {...formik.getFieldProps("userNamepass")}
                            
                          />
                        </CInputGroup>
                        <CRow style={{marginTop:20,paddingLeft:17}}>
                          <CCol style={{paddingLeft:17,paddingRight:17,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                          <CButton onClick={movetoBaack} color="primary" className="px-4" >
                              Back
                            </CButton>
                            <CButton type='submit' color="primary" className="px-4" >
                              Submit
                            </CButton>
                          </CCol>
                       
                            {/* <CButton color="link" className="px-0">
                              Forgot password?
                            </CButton> */}
                       
                        </CRow>
                      </CForm>
                       )} 
                    </Formik>
                    </div>
                </CCardBody>
                  </CCard>
                  <CCard style={{width:300 ,borderRadius:0,backgroundColor:'blue',border:'none',display:'flex',justifyContent:'center'}}>
                     <CCardBody style={{width:'100%',height:'100%',flexDirection:'coloumn',border:'none'}}>
                            <h2 >
                              Enter Your OTP
                            </h2>
                        <div style={{width:'100%',height:'100%',flexDirection:'row'}}>
                            <div style={{width:'100%',height:'50%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <OTPInput value={OTP} onChange={setOTP}  OTPLength={4} otpType="number" disabled={false} secure />
                            </div>
                            <div style={{width:236.8,height:38 ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <CButton className="px-4" style={{backgroundColor:'white',color:'black'}} disabled={OTP.length!=4} onClick={verifyOTP}> Verify</CButton>
                            </div>
                      </div>
                      
                    </CCardBody> 
                  </CCard>
              </CCol>
            {/* </CRow> */}
          </CContainer>
        </div>


      )
}

export default Forgotpassword