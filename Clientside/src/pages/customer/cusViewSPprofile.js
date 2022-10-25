import React from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'sassy-datepicker';
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
import DatePicker from 'sassy-datepicker';
import { 
    cilUser,
    cilPhone,
    cilLocationPin,
    cilChatBubble,
    cilNotes,
    cilPin,
   
  } from '@coreui/icons'

// import {
//     cilPhone,
//     cilLocationPin,
//     cilUser,
//     // cilPaperclip,
//     // cilNotes,
//   } from '@coreui/icons'

import ReactImg from 'src/assets/images/avatars/2.jpg'
import CIcon from '@coreui/icons-react'

function cus_viewSPprofile (){
  const onChange = (date) => {
    console.log(date.toString());
  };
<<<<<<< HEAD

=======
>>>>>>> 5222fff369b51f2c6d72e043d41cf5c045629ded
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
                                    <CCol xs={9}><h2> <CCardTitle><CIcon icon={cilUser} size="xl" style={{marginRight: 10}}/>Jithru Jayawantha</CCardTitle></h2></CCol>
                                    {/* <CCol xs={3}>
                                        <Link to="/cus_placeJobs">
                                            <CButton color="primary">Place Your Job </CButton>
                                        </Link>
                                    </CCol> */}
                                    <CCardText> Member since 2015</CCardText>
                                </CRow>
                            </CListGroupItem>

                            <CListGroupItem>
                                <CCardTitle><CIcon icon={cilPhone} size="xl" style={{marginRight: 10}}/>Phone Number</CCardTitle>
                                <CCardText>0778954367</CCardText>
                            </CListGroupItem>

                            <CListGroupItem> 
                                <CCardTitle><CIcon icon={cilPin} size="xl" style={{marginRight: 10}}/>Categories</CCardTitle>
                                <CCardText> Plumber, Painter </CCardText>
                            </CListGroupItem>

                             <CListGroupItem> 
                                <CCardTitle><CIcon icon={cilLocationPin} size="xl" style={{marginRight: 10}}/>Location</CCardTitle>
                                <CCardText>30,Mahawela Road,Galle</CCardText>
                            </CListGroupItem>

                            <CListGroupItem> 
                                <CCardTitle><CIcon icon={cilNotes} size="xl" style={{marginRight: 10}}/>Description</CCardTitle>
                                <CCardText>I do all type of plumbing works and fixed them</CCardText>
                            </CListGroupItem>

                        </CListGroup>
                       
                    </CCol>
                    <CCol  md={3}>
                        <div style={{ marginBottom:10, alignItems:'flex-end'}}>
                            <Link to="/cus_placeJobs">
                                <CButton color="primary" style={{alignItems:'flex-end'}}>Place Your Job</CButton>
                            </Link>

                            <Link to="/cus_placeJobs">
                                <CButton color="primary" style={{alignItems:'flex-end', width:120 }}><CIcon icon={cilChatBubble} size="lg" style={{marginRight: 10}}/>Chat</CButton>
                            </Link>
                        </div>
                        <div> 
<<<<<<< HEAD
                          {/* <CCard style={{ height: '15rem' }}> */}
                            <DatePicker onChange={onChange} />
                          {/* </CCard> */}
=======
                          {/* <CCard style={{ height: '20rem' }}>calendar</CCard> */}
                          <DatePicker onChange={onChange} />
>>>>>>> 5222fff369b51f2c6d72e043d41cf5c045629ded
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