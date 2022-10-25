
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
import { DocsExample } from 'src/components'

function cusEditProfile() {
  return (
    <div> 
        <div><h3>Edit Profile</h3></div>
    <CRow>
        <CCol xs={12}>
            <CCard className="mb-4">
            <CCardBody>
                <CForm className="row g-3">
                    <CCol md={6}>
                    <CFormLabel htmlFor="firstname">First name</CFormLabel>
                    <CFormInput type="text" id="firstname" />
                    </CCol>

                    <CCol md={6}>
                    <CFormLabel htmlFor="lastname">Last name</CFormLabel>
                    <CFormInput type="text" id="lastname" />
                    </CCol>

                    <CCol md={6}>
                    <CFormLabel htmlFor="phonenumber">Phone Number</CFormLabel>
                    <CFormInput type="number" id="phonenumber" />
                    </CCol>
                    <CCol md={6}>
                    <CFormLabel htmlFor="birthday">Date of Birth</CFormLabel>
                    <CFormInput type="date" id="birthday" />
                    </CCol>
                    <CCol xs={12}>
                    <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
                    <CFormInput id="inputAddress" placeholder="1234 Main St" />
                    </CCol>
                  
                    <CCol md={6}>
                    <CFormLabel htmlFor="inputDiscript">District</CFormLabel>
                    <CFormSelect id="inputDiscript">
                        <option>Choose...</option>
                        <option>...</option>
                    </CFormSelect>
                    </CCol>

                    <CCol md={6}>
                    <CFormLabel htmlFor="inputCity">City</CFormLabel>
                    <CFormSelect id="inputCity">
                        <option>Choose...</option>
                        <option>...</option>
                    </CFormSelect>
                    </CCol>

                    <CCol xs={6}>(For 5 jobs)</CCol><CCol xs={6}>(0 Reviews)</CCol>

                    <CCol xs={12}>
                    <CButton type="submit">Update Details</CButton>
                    </CCol>
                    
                </CForm>
            </CCardBody>
            </CCard>
        </CCol>
    </CRow>
    </div>
    
  )
}

export default cusEditProfile