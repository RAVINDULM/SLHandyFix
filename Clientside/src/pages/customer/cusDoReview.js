
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
  CRow,
} from '@coreui/react'

function cusDOreview() {
  return (
    <div> 
        <div><h3>Review</h3></div>
    <CRow>
        <CCol xs={12}>
            <CCard className="mb-4">
            <CCardBody>
                <CForm className="row g-3">
                  

                    <CCol xs={12}>
                    {/* <CFormLabel htmlFor="description">Review</CFormLabel> */}
                    <CFormInput type="textarea" id="description" placeholder="Enter your thoughts here..." />
                    </CCol>

                    <CCol xs={1}>  <CButton type="cancel" color='secondary'>Cancel</CButton></CCol>
                    <CCol xs={1}> <CButton type="submit" color='success'>Submit</CButton></CCol>
                    <CCol xs={2}>  <CButton type="reset" color='secondary' style={{width:80}}>Back</CButton></CCol>

                </CForm>
            </CCardBody>
            </CCard>
        </CCol>
    </CRow>
    </div>
    
  )
}

export default cusDOreview