import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardLink,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CCol,
  CRow,
} from '@coreui/react'

import { 
    cilUser,
    cilPhone,
    cilLocationPin,
   
  } from '@coreui/icons'

// import {
//     cilPhone,
//     cilLocationPin,
//     cilUser,
//     // cilPaperclip,
//     // cilNotes,
//   } from '@coreui/icons'

import ReactImg from 'src/assets/images/avatars/2.jpg'

function cus_viewSPprofile (){
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
              <CCard>
                <CRow>
                    <CCol md={3}>
                        <CCardImage class="img-fluid img-thumbnail img-responsive me-4 " src={ReactImg} width='300'/>
                        {/* <CCard style={{ height: '18rem' }}>calendar</CCard> */}
                    </CCol>
                    
                    <CCol md={5}>
                        <CListGroup flush>
                            <CListGroupItem>
                                <CRow>
                                    <CCol xs={9}><h2> <CCardTitle>Jithru Jayawantha</CCardTitle></h2></CCol>
                                    {/* <CCol xs={3}>
                                        <Link to="/cus_placeJobs">
                                            <CButton color="primary">Place Your Job </CButton>
                                        </Link>
                                    </CCol> */}
                                    <CCardText> Member since 2015</CCardText>
                                </CRow>
                            </CListGroupItem>

                            <CListGroupItem>
                                <CCardTitle>Phone Number</CCardTitle>
                                <CCardText>0778954367</CCardText>
                            </CListGroupItem>

                            <CListGroupItem> 
                                <CCardTitle>Categories</CCardTitle>
                                <CCardText> Plumber, Painter </CCardText>
                            </CListGroupItem>

                             <CListGroupItem> 
                                <CCardTitle>Location</CCardTitle>
                                <CCardText>30,Mahawela Road,Galle</CCardText>
                            </CListGroupItem>

                            <CListGroupItem> 
                                <CCardTitle>Description</CCardTitle>
                                <CCardText>I do all type of plumbing works and fixed them</CCardText>
                            </CListGroupItem>

                        </CListGroup>
                        {/* <CCardBody>
                            <CCardLink href="#">Card link</CCardLink>
                            <CCardLink href="#">Another link</CCardLink>
                        </CCardBody> */}

                        {/* <CRow style={{backgroundColor:'red'}}>
                              <CCol xs={2}>
                                <Link to="#">
                                    <CButton color="primary" style={{width:75.8}}>Rate</CButton>
                                </Link>
                            </CCol>
                            <CCol xs={6}> */}
                                {/* <Link to="#">
                                    <CButton color="success">Review</CButton>
                                </Link> */}


                                     {/* Button trigger modal  */}
                                  {/* <button type="button" class="btn btn-success row-4" data-coreui-toggle="modal" data-coreui-target="#exampleModal">
                                    Review
                                  </button> */}

                                  {/* <!-- Modal --> */}
                                  {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                          <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                          ...
                                        </div>
                                        <div class="modal-footer">
                                          <button type="button" class="btn btn-secondary" data-coreui-dismiss="modal">Close</button>
                                          <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </CCol> */}
                        {/* </CRow> */}

                        
                    </CCol>
                    <CCol  md={3}>
                        <div style={{backgroundColor:'red', marginBottom:10, alignItems:'flex-end'}}>
                            <Link to="/cus_placeJobs">
                                <CButton color="primary" style={{alignItems:'flex-end'}}>Place Your Job</CButton>
                            </Link>
                        </div>
                        <div> 
                          <CCard style={{ height: '20rem' }}>calendar</CCard>
                        </div>
                      
                    </CCol>
                </CRow>
              </CCard>
          </CCardBody>
        </CCard>
      </CCol>
  
    </CRow>
  )
}

export default cus_viewSPprofile
