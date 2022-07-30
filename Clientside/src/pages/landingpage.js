import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import Axios from "axios";
import { Link } from "react-router-dom";
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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useNavigate } from "react-router-dom";

// check cokkie
import axios from 'axios'
axios.defaults.withCredentials = true

function landingpage() {

  const navigate = useNavigate() 
  console.log(loggeduserid)
  const logoutUser = ()=>{
    
     window.location.reload(false);
     navigate("/");
     }
   
         {if (loggeduserid==null){
          return (
          <>
         <Link to="/register">
            <CButton color="primary" className="mt-3" active tabIndex={-1}>
              Register Now!
            </CButton>
          </Link>
          <Link to="/login">
            <CButton color="primary" className="mt-3" active tabIndex={-1}>
              Sign In
            </CButton>
          </Link> 
          </> )}
       
            else {
              
             if (logggedusertype=="admin"){

             }
             else if (logggedusertype=="manager"){

             }

             else if (logggedusertype=="sp"){

             }
             else {

             }


            return(
           <>
           <CButton onClick={logoutUser} color="primary" className="mt-3" active tabIndex={-1}>
              Log out
            </CButton>
          <Link to= '/mang_dashboard'>
            <CButton color="primary" className="mt-3" active tabIndex={-1}>
             Dashboard
            </CButton> 
          </Link>
          
        </>
        )}}

            }
export default landingpage;
 