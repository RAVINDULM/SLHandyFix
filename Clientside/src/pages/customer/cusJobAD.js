import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CHeader,
  CRow,
} from '@coreui/react'

// import {
//     cilUser,
//   } from '@coreui/icons'
import ReactImg1 from 'src/assets/images/avatars/1.jpg'
import ReactImg2 from 'src/assets/images/avatars/8.jpg'
import ReactImg3 from 'src/assets/images/avatars/6.jpg'
import ReactImg4 from 'src/assets/images/avatars/7.jpg'

function cusJobAD() {
  return (
    <CCol xs> <CRow>
            <CCol  md={7} className="mb-3"><CCardText><h3>Job Advertisement</h3></CCardText></CCol>
            <CCol>
                <CCardText> 
                <Link to="/cus_postAD">
                    <CButton color="primary" className="d-grid gap-2 col-5 mx-auto">Post</CButton>
                </Link>
                </CCardText>
            </CCol>
        </CRow>

    <CCard>
       
        
      {/* <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}> */}
      <CCol xs>
        <CCard>
            <CRow className="g-xxl-0">
              <CCol md={3}>
              <CCardImage class="img-fluid img-thumbnail me-4" src={ReactImg1}  />
              <CCardText>Sachinka Gunasekara</CCardText>
              </CCol>
              <CCol md={8}>
                <CCardBody>

                <CRow>
                    <CCol xs={2}><h2> <CCardTitle>Plumbing</CCardTitle></h2></CCol>
                    <CCol xs={8}><CCardText>(New)</CCardText></CCol>
                        
                    <CCol xs={2}> 
                            <Link to="/cus_viewOwnAD">
                                <CButton color="primary">View more </CButton>
                            </Link>
                    </CCol>
                </CRow>
                  <CCardText color="primary">Posted 1 day ago</CCardText>
                  <CCardText>Galle</CCardText>
                  <CCardText>I need a plumber</CCardText>
                  {/* <CHeader></CHeader> */}
                  <CRow>
                    <CCol><CCardText>3 requests from service providers</CCardText></CCol>
                </CRow>
                </CCardBody>
              </CCol>
            </CRow>
        </CCard>
      </CCol>

      <CCol xs>
        <CCard>
            <CRow className="g-xxl-0">
              <CCol md={3}>
              <CCardImage class="img-fluid img-thumbnail me-4" src={ReactImg2}  />
              <CCardText>Pansilu Gunaratna</CCardText>
              </CCol>
              <CCol md={8}>
                <CCardBody>

                <CRow>
                    <CCol xs={2}><h2> <CCardTitle>Painting</CCardTitle></h2></CCol>
                    <CCol xs={8}><CCardText>(Completed)</CCardText></CCol>
                        
                    <CCol xs={2}> 
                            <Link to="/cus_viewOwnAD">
                                <CButton color="primary">View more </CButton>
                            </Link>
                    </CCol>
                </CRow>
                  <CCardText color="primary">Posted 2 days ago</CCardText>
                  <CCardText>Matara</CCardText>
                  <CCardText>I need a painter</CCardText>
                  {/* <CHeader></CHeader> */}
                  <CRow>
                    <CCol><CCardText>3 requests from service providers</CCardText></CCol>
                </CRow>
                </CCardBody>
              </CCol>
            </CRow>
        </CCard>
      </CCol>

      <CCol xs>
        <CCard>
            <CRow className="g-xxl-0">
              <CCol md={3}>
                <CCardImage class="img-fluid img-thumbnail me-4" src={ReactImg3}  />
                <CCardText>Jonny Perera</CCardText>
              </CCol>
              <CCol md={8}>
                <CCardBody>

                <CRow>
                    <CCol xs={2}><h2> <CCardTitle>Electrician</CCardTitle></h2></CCol>
                    <CCol xs={8}><CCardText>(Completed)</CCardText></CCol>
                        
                    <CCol xs={2}> 
                            <Link to="/cus_viewOwnAD">
                                <CButton color="primary">View more </CButton>
                            </Link>
                    </CCol>
                </CRow>
                  <CCardText color="primary">Posted 2 days ago</CCardText>
                  <CCardText>Galle</CCardText>
                  <CCardText>I need a electrician</CCardText>
                  {/* <CHeader></CHeader> */}
                  <CRow>
                    <CCol><CCardText>3 requests from service providers</CCardText></CCol>
                </CRow>
                </CCardBody>
              </CCol>
            </CRow>
        </CCard>
      </CCol>

      <CCol xs>
        <CCard>
            <CRow className="g-xxl-0">
              <CCol md={3}>
              <CCardImage class="img-fluid img-thumbnail me-4" src={ReactImg4}  />
              <CCardText>Hiruni Gallage</CCardText>
              </CCol>
              <CCol md={8}>
                <CCardBody>

                <CRow>
                    <CCol xs={2}><h2> <CCardTitle>Mason</CCardTitle></h2></CCol>
                    <CCol xs={8}><CCardText>(Completed)</CCardText></CCol>
                        
                    <CCol xs={2}> 
                            <Link to="/cus_viewOwnAD">
                                <CButton color="primary">View more </CButton>
                            </Link>
                    </CCol>
                </CRow>
                  <CCardText color="primary">Posted 3 days ago</CCardText>
                  <CCardText>Galle</CCardText>
                  <CCardText>I need a mason</CCardText>
                  {/* <CHeader></CHeader> */}
                  <CRow>
                    <CCol><CCardText>3 requests from service providers</CCardText></CCol>
                </CRow>
                </CCardBody>
              </CCol>
            </CRow>
        </CCard>
      </CCol>
  {/* </CRow> */}
  </CCard>
</CCol>
  )
}

export default cusJobAD
