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

const Register = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <Formik
                  initialValues={{ username: "", email: "" }}
                  validationSchema={Yup.object({
                    username: Yup.string()
                      .max(15, "Must be 15 characters or less")
                      .required("Required"),
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Required"),
                    newpassword: Yup.string()
                      .max(20, "Must be 20 characters or less")
                      .required("Required"),
                    repeatpassword: Yup.string()
                      .max(20, "Must be 20 characters or less")
                      .required("Required")
                      .oneOf([Yup.ref('newpassword'), null], 'Passwords must match'),
                  })}
                  onSubmit={(values) => {

                    // console.log(values); 
                    Axios.post("http://localhost:5000/api/v1/user/", {
                      username: values.username,
                      email: values.email, 
                      newpassword: values.newpassword,
                    }).then(() => {
                      alert("successfully added!");
                    });
                  }}
                >
                  {(formik) => (
                    <CForm onSubmit={formik.handleSubmit}>
                      <h1>Sign up</h1>
                      <p className="text-medium-emphasis">
                        Create your account
                      </p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          name="username"
                          {...formik.getFieldProps("username")}
                        />
                        {formik.touched.username && formik.errors.username ? (
                          <small>{formik.errors.username}</small>
                        ) : null}
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>@</CInputGroupText>
                        <CFormInput
                          placeholder="Email"
                          autoComplete="email"
                          type="email"
                          name="email"
                          {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <small>{formik.errors.email}</small>
                        ) : null}
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
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
                          placeholder="Repeat password"
                          autoComplete="new-password"
                          name="repeatpassword"
                          {...formik.getFieldProps("repeatpassword")}
                        />
                        {formik.touched.repeatpassword &&
                        formik.errors.repeatpassword ? (
                          <small>{formik.errors.repeatpassword}</small>
                        ) : null}
                      </CInputGroup>
                      <div className="d-grid">
                        <CButton color="success" type="submit">
                          Create Account
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

export default Register;
