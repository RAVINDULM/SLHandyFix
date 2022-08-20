
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

function cusPlaceJob() {
  return (
    <div> 
        <div><h3>Place Job</h3></div>
    <CRow>
        <CCol xs={12}>
            <CCard className="mb-4">
            <CCardBody>
                <CForm className="row g-3">
                    <CCol md={6}>
                    <CFormLabel htmlFor="title">Title</CFormLabel>
                    <CFormInput type="text" id="title" placeholder="Enter your job title..."/>
                    </CCol>

                    <CCol md={6}>
                    <CFormLabel htmlFor="requiredate">Required Date</CFormLabel>
                    <CFormInput type="date" id="requiredate" />
                    </CCol>

                    <CCol xs={12}>
                    <CFormLabel htmlFor="description">Job Description</CFormLabel>
                    <CFormInput id="description" placeholder="Enter your job details here..." />
                    </CCol>

                    <CCol xs={12}>
                    <CFormLabel htmlFor="location">Location</CFormLabel>
                    <CFormInput id="location" placeholder="Enter the address where you want the job to occur..." />
                    </CCol>
                  
                    <CCol md={6}>
                    <CFormLabel htmlFor="inputDiscript">District</CFormLabel>
                    <CFormSelect id="inputDiscript">
                        <option>Choose...</option>
                        <option>...</option>
                    </CFormSelect>
                    </CCol>

                    <CCol md={6}>
                    <CFormLabel htmlFor="jobcategory">Category</CFormLabel>
                    <CFormSelect id="jobcategory">
                        <option>Choose your job category...</option>
                        <option>Plumber</option>
                        <option>Mason</option>
                        <option>Electrician</option>
                    </CFormSelect> 
                    </CCol>

                    <CCol xs={12}>
                    <CFormLabel htmlFor="image">Choose image</CFormLabel>
                    <CFormInput type="file" class="form-control-file" id="image"  />
                    </CCol>

                    <CCol xs={1}>  <CButton type="cancel" color='secondary'>Cancel</CButton></CCol>
                    <CCol xs={2}> <CButton type="submit" color='success'>Submit</CButton></CCol>

                </CForm>
            </CCardBody>
            </CCard>
        </CCol>
    </CRow>
    </div>
    
  )
}

export default cusPlaceJob