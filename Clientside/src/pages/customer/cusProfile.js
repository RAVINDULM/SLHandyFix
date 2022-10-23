import React from 'react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import {
    cilPhone,
    cilLocationPin,
    cilUser,
    cilStar,
  } from '@coreui/icons'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

import ReactImg from 'src/assets/images/avatars/2.jpg'

function cusProfile() {
  return (
    <div> 
      <CRow>
            <CCol xs={10}><h3>My Profile</h3></CCol>
         
            <CCol xs={2}>
            <Link to="/cus_editprofile">
                    <CButton color="primary">Edit Profile </CButton>
            </Link>
            </CCol>
        </CRow>  
    <CRow>
        <CCol xs={4}>
            <CCard style={{display:'flex',justifyCOntent:'center',alignItems:'center'}}>
            <CCardImage class="img-fluid img-thumbnail img-responsive rounded-circle me-4 " src={ReactImg} width='250' />
            <CCardBody >
                <CCardTitle><CIcon icon={cilUser} size="lg" style={{marginRight: 10}}/>Jithru Jayawantha</CCardTitle>
                <CCardTitle><CIcon icon={cilLocationPin} size="lg" style={{marginRight: 10}}/>50,Flower Garden,Akuressa,Matara</CCardTitle>
                <CCardTitle><CIcon icon={cilPhone} size="lg" style={{marginRight: 10}}/>0774566632</CCardTitle> 
            </CCardBody>
            <CCardFooter>
                <small className="text-medium-emphasis"><CIcon icon={cilStar}/> <CIcon icon={cilStar}/> <CIcon icon={cilStar}/> <CIcon icon={cilStar} />(For 5 jobs)</small>
            </CCardFooter>
            </CCard>
        </CCol>
        <CCol xs={8}>
            <CCard>
           
            <CCardBody>
                <CCardTitle>3 Reviews</CCardTitle>
            
        <CCol xs={12}>
        <CCard className="mb-4">
          
          <CCardBody>
              <CRow>
                <CCol lg={12}>
                  <CCard className="mb-3 border-primary">
                    <CCardHeader >
                        <p class="fs-5">Pansilu Gunaratna (Plumber)</p>
                        <CCardText>posted on 2022/08/20</CCardText>
                    </CCardHeader>
                    <CCardBody>
                      <CCardText class="fs-6">A kind customer, his hospitality was admirable. I highly recommended this customer.</CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>

                <CCol lg={12}>
                  <CCard className="mb-3 border-secondary" >
                    <CCardHeader >
                        <p class="fs-5">Kamal Seneviratna (Electrcian)</p>
                        <CCardText>posted on 2022/08/15</CCardText>
                    </CCardHeader>
                    <CCardBody>
                      <CCardText class="fs-6">A kind customer, his hospitality was admirable.Don't be hesitate to accept jobs from this customer.</CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>

                <CCol lg={12}>
                  <CCard className="mb-3 border-primary">
                    <CCardHeader >
                        <p class="fs-5">Sahan De Silva (Painter)</p>
                        <CCardText>posted on 2022/08/10</CCardText>
                    </CCardHeader>
                    <CCardBody>
                      <CCardText class="fs-6">A supportive customer, his hospitality was admirable.Don't be hesitate to accept jobs from this customer.</CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>
                  
              </CRow>
          </CCardBody>
        </CCard>
      </CCol>
     
            </CCardBody>
         
            </CCard>
        </CCol>
        
    </CRow>
    </div>
    
  )
}

export default cusProfile