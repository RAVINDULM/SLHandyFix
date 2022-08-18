import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
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
import signup from "./Login";
import { Navigate, useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <Formik
                  initialValues={{ newpassword: "", confirmnewpassword: "" }}
                  validationSchema={Yup.object({
                    newpassword: Yup.string()
                      .max(20, "Must be 20 characters or less")
                      .required("Required"),
                      confirmnewpassword: Yup.string()
                      .max(20, "Must be 20 characters or less")
                      .required("Required")
                      .oneOf([Yup.ref('newpassword'), null], 'Passwords must match'),
                  })}
                  onSubmit={(values) => {

                    // console.log(values.newpassword); 
                    // console.log(values.confirmnewpassword); 
                    Axios.post("http://localhost:5000/api/v1/user/ResetPassword", {
                        password:values.confirmnewpassword
                  }).then((response)=>{
                    if(response.data.error){
                        alert("Password Not Updated")
                    }else{
                        alert("password Succesfully Updated")
                        navigate("/login");
                    }
                  });
                  }}
                >
                  {(formik) => (
                    <CForm onSubmit={formik.handleSubmit}>
                      <h1>Reset Password</h1>
                      <p className="text-medium-emphasis">
                        Reset your password
                      </p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="New Password"
                          autoComplete="new-password"
                          name="newpassword"
                          {...formik.getFieldProps("newpassword")}
                        />
                        {formik.touched.newpassword &&
                        formik.errors.newpassword ? (
                          <small>{formik.errors.newpassword}</small>
                        ) : null}
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Confirm new password"
                          autoComplete="new-password"
                          name="confirmnewpassword"
                          {...formik.getFieldProps("confirmnewpassword")}
                        />
                        {formik.touched.confirmnewpassword &&
                        formik.errors.confirmnewpassword ? (
                          <small>{formik.errors.confirmnewpassword}</small>
                        ) : null}
                      </CInputGroup>
                      <div className="d-grid">
                        <CButton color="success" type="submit">
                          Reset password
                        </CButton>
                      </div>
                    </CForm>
                  )}
                </Formik>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ResetPassword;
