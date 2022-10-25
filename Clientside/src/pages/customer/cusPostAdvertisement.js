import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function cusPostAD() {
    const navigate = useNavigate() 
  return (
    <div> 
        <div><h3>Post Job Advertisement</h3></div>
   
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                <CCardBody>  
                <Formik
                initialValues={{ username: "", email: "" }}
                    onSubmit={(values) => {
                        console.log(values); 
                        Axios.post("http://localhost:5000/api/v1/customerJobAD/", {
                        title: values.title,
                        requiredDate: values.requiredDate, 
                        description: values.description, 
                        district: values.district, 
                        category: values.category, 
                        }).then(() => {
                        alert("successfully added!");
                        navigate("/cus_postAD") 
                        });
                    }}
                >
                {(formik) => (
                    <CForm className="row g-3" onSubmit={formik.handleSubmit}>
                        
                        <CCol md={6}>
                        <CFormLabel htmlFor="title">Title</CFormLabel>
                        <CFormInput type="text" id="title" placeholder="Enter your job title..." name="title"
                        {...formik.getFieldProps("title")}/>
                        </CCol>

                        <CCol md={6}>
                        <CFormLabel htmlFor="requiredDate">Required Date</CFormLabel>
                        <CFormInput type="date" id="requiredDate"  autoComplete="requiredDate" name="requiredDate"
                         {...formik.getFieldProps("requiredDate")}/>
                        </CCol>

                        <CCol xs={12}>
                        <CFormLabel htmlFor="description">Job Description</CFormLabel>
                        <CFormTextarea id="description" placeholder="Enter your job details here..."  autoComplete="description" name="description"
                        {...formik.getFieldProps("description")}/>
                        </CCol>

                        {/* <CCol xs={12}>
                        <CFormLabel htmlFor="location">Location</CFormLabel>
                        <CFormInput id="location" placeholder="Enter the address where you want the job to occur..." />
                        </CCol> */}
                    
                        <CCol md={6}>
                        <CFormLabel htmlFor="district">District</CFormLabel>
                        <CFormSelect id="district"  autoComplete="district"  name="district"
                        {...formik.getFieldProps("district")}>
                            <option>Choose...</option>
                            <option>Matara</option>
                            <option>Galle</option>
                            <option>Hmabantota</option>
                        </CFormSelect>
                        </CCol>

                        <CCol md={6}>
                        <CFormLabel htmlFor="category">Category</CFormLabel>
                        <CFormSelect id="category"  autoComplete="category" name="category"
                        {...formik.getFieldProps("category")}>
                            <option>Choose your job category...</option>
                            <option>Plumber</option>
                            <option>Mason</option>
                            <option>Electrician</option>
                        </CFormSelect>
                        </CCol>
                        
                        <CCol xs={1}>  <CButton type="reset" color='secondary'>Cancel</CButton></CCol>
                        <CCol xs={2}> <CButton type="submit" color='success' style={{width:80}}>Post</CButton></CCol>

                    </CForm>
                    )} 
                 </Formik>
                </CCardBody>
                </CCard>
            </CCol>
        </CRow> 
    </div>
    
  )
}

export default cusPostAD;