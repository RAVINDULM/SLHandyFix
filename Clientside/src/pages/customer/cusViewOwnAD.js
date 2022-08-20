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

import ReactImg1 from 'src/assets/images/avatars/1.jpg'
import ReactImg2 from 'src/assets/images/avatars/10.jpg'

function cus_viewOwnAD (){
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
              <CCard>
                <CRow>
                    <CCol md={4}>
                        <CCardImage orientation="top" src={ReactImg1} style={{width:350}}/>
                        <CCardText className='text-center'><h3>Sachinka Gunasekara</h3></CCardText>
                    </CCol>
                    
                    <CCol md={8}>
                        <CListGroup flush>
                            <CListGroupItem>
                                <CRow>
                                    <CCol xs={9}><h2> <CCardTitle>Plumber</CCardTitle></h2></CCol>
                                </CRow>
                            </CListGroupItem>

                            <CListGroupItem> 
                                <CCardTitle>Categories</CCardTitle>
                                <CCardText> Plumber, Painter </CCardText>
                            </CListGroupItem>

                             <CListGroupItem> 
                                <CCardTitle>Location</CCardTitle>
                                <CCardText>Galle</CCardText>
                            </CListGroupItem>

                            <CListGroupItem> 
                                <CCardTitle>Due Date</CCardTitle>
                                <CCardText>2022/08/30</CCardText>
                            </CListGroupItem>

                            <CListGroupItem> 
                                <CCardTitle>Posted Date</CCardTitle>
                                <CCardText>2022/08/17</CCardText>
                            </CListGroupItem>

                            <CListGroupItem> 
                                <CCardTitle>Description</CCardTitle>
                                <CCardText>I need a plumber</CCardText>
                            </CListGroupItem>

                            <CListGroupItem> 
                                <CCardTitle>Images</CCardTitle>
                                <CCardImage orientation="top" src={ReactImg2} style={{width:300}} />
                            </CListGroupItem>

                        </CListGroup>
                    </CCol>
                </CRow>
              </CCard>
          </CCardBody>
        </CCard>
      </CCol>
  
    </CRow>
  )
}

export default cus_viewOwnAD
