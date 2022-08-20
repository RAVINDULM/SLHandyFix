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
  CRow,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import ReactImg1 from 'src/assets/images/avatars/2.jpg'
import ReactImg2 from 'src/assets/images/avatars/3.jpg'
import ReactImg3 from 'src/assets/images/avatars/9.jpg'
import ReactImg4 from 'src/assets/images/avatars/5.jpg'

function cusServices() {
  return (
    <CCol style={{flex:'none'}} >
          <CRow >
              <CCol  md={7} className="mb-3"><CCardText><h3>Service Providers</h3></CCardText></CCol>
              <CCol xs={2}>
                <CDropdown>
                    <CDropdownToggle color="secondary">Job Category</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Painter</CDropdownItem>
                      <CDropdownItem href="#">Electrician</CDropdownItem>
                      <CDropdownItem href="#">Plumber</CDropdownItem>
                      <CDropdownItem href="#">Mason</CDropdownItem>
                      <CDropdownItem href="#">Plumber</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
                </CCol>
                <CCol xs={3}>
                <CDropdown>
                    <CDropdownToggle color="secondary" style={{width:140}}>Location</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Matara</CDropdownItem>
                      <CDropdownItem href="#">Galle</CDropdownItem>
                      <CDropdownItem href="#">Hambantota</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
                </CCol>
          </CRow>
      <CCard>
        
          <CCol xs>
            <CCard>
                <CRow className="g-xxl-0">
                  <CCol md={3}>
                    <CCardImage class="img-fluid img-thumbnail me-4" src={ReactImg1}  />
                  </CCol>
                  <CCol md={8}>
                    <CCardBody>

                    <CRow>
                        <CCol xs={7}><h2> <CCardTitle>Jithru Jayawantha</CCardTitle></h2></CCol>
                        <CCol xs={2}>
                          <Link to="/cus_viewSPprofile">
                              <CButton color="primary">View more </CButton>
                          </Link>
                        </CCol>
                        <CCol xs={3}>
                          <Link to="/cus_placeJobs">
                              <CButton color="primary">Place your job </CButton>
                          </Link>
                        </CCol>
                    </CRow>
                      <CCardText>Plumber | Member since 2015 </CCardText>
                      <CCardText>No:30, Mahawela Road, Galle</CCardText>
                      {/* <CCardText>0768934567</CCardText> */}
                      <CRow>
                        <CCol xs={4}><h2> <CCardTitle>* * * * *</CCardTitle></h2></CCol>
                        <CCol xs={4}>Job count (4)</CCol>
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
                    <CCardImage class="img-fluid img-thumbnail" src={ReactImg2} />
                  </CCol>
                  <CCol md={8}>
                    <CCardBody>

                    <CRow>
                        <CCol xs={7}><h2> <CCardTitle>Ravindu Madushan</CCardTitle></h2></CCol>
                        <CCol xs={2}>
                          <Link to="/cus_viewSPprofile">
                              <CButton color="primary">View more </CButton>
                          </Link>
                        </CCol>
                        <CCol xs={3}>
                          <Link to="/cus_viewSPprofile">
                              <CButton color="primary">Place your job </CButton>
                          </Link>
                        </CCol>
                    </CRow>
                      <CCardText>Electrician | Member since 2015 </CCardText>
                      <CCardText>No:40, Flower Road, Hambantota</CCardText>
                      {/* <CCardText>0767453457</CCardText> */}
                      <CRow>
                        <CCol xs={4}><h2> <CCardTitle>* * * * *</CCardTitle></h2></CCol>
                        <CCol xs={4}>Job count (4)</CCol>
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
                    <CCardImage class="img-fluid img-thumbnail" src={ReactImg3} />
                  </CCol>
                  <CCol md={8}>
                    <CCardBody>

                    <CRow>
                        <CCol xs={7}><h2> <CCardTitle>Namal Perera</CCardTitle></h2></CCol>
                        <CCol xs={2}>
                          <Link to="/cus_viewSPprofile">
                              <CButton color="primary">View more </CButton>
                          </Link>
                        </CCol>
                        <CCol xs={3}>
                          <Link to="/cus_viewSPprofile">
                              <CButton color="primary">Place your job </CButton>
                          </Link>
                        </CCol>
                    </CRow>
                      <CCardText>Mason | Member since 2020 </CCardText>
                      <CCardText>No:54, Galle Road, Colombo</CCardText>
                      {/* <CCardText>0708934567</CCardText> */}
                      <CRow>
                        <CCol xs={4}><h2> <CCardTitle>* * * * *</CCardTitle></h2></CCol>
                        <CCol xs={4}>Job count (4)</CCol>
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
                    <CCardImage class="img-fluid img-thumbnail" src={ReactImg4} />
                  </CCol>
                  <CCol md={8}>
                    <CCardBody>

                    <CRow>
                        <CCol xs={7}><h2> <CCardTitle>Anjela Mary</CCardTitle></h2></CCol>
                        <CCol xs={2}>
                          <Link to="/cus_viewSPprofile">
                              <CButton color="primary">View more </CButton>
                          </Link>
                        </CCol>
                        <CCol xs={3}>
                          <Link to="/cus_viewSPprofile">
                              <CButton color="primary">Place your job </CButton>
                          </Link>
                        </CCol>
                    </CRow>
                      <CCardText>Painter | Member since 2018 </CCardText>
                      <CCardText>No:33, Highlevel Road, Colombo</CCardText>
                      {/* <CCardText>0709876567</CCardText> */}
                      <CRow>
                        <CCol xs={4}><h2> <CCardTitle>* * * * *</CCardTitle></h2></CCol>
                        <CCol xs={4}>Job count (4)</CCol>
                    </CRow>
                    </CCardBody>
                  </CCol>
                </CRow>
            </CCard>
          </CCol>
</CCard>
</CCol>
  )
}

export default cusServices
