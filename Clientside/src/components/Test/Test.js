import React from 'react'
import { Link } from 'react-router-dom'
// import home from '../../customer/myjobs'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { CButton } from "@coreui/react";



const Test = (props) => {
    const colors =  props.colors;
    const title =  props.title;
    console.log(colors)
  return (
    <div>
        <CRow>
        <CCol xs={4}>
          <h1>{title}</h1>
        </CCol>
        {/* <CCol xs={4}>
         {colors.map((colors) => ( <CButton color={colors} >Submit</CButton>))}
        </CCol> */}
        <CCol xs={4}>
         <CButton color={colors} >Submit</CButton>
        </CCol>
      </CRow>
    </div>
  )
}

export default Test