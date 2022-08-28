import React, { useEffect, useState } from "react";
import Axios from "axios";
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
import { CForm, CFormInput, CFormLabel, CFormTextarea } from "@coreui/react";
import { DocsCallout, DocsExample } from "src/components";
import { CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell } from "@coreui/icons";

const Table = ({data,column}) => {
  return (
    <div>  

{/* <DocsExample href="components/buttons">
              {['normal', 'active', 'disabled'].map((state, index) => (
                <CRow className="align-items-center mb-3" key={index}>
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </CCol>
                  <CCol xs>
                    {[
                      'primary',
                      'secondary',
                      'success',
                      'danger',
                      'warning',
                      'info',
                      'light',
                      'dark',
                    ].map((color, index) => (
                      <CButton
                        color={color}
                        key={index}
                        active={state === 'active'}
                        disabled={state === 'disabled'}
                      >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </CButton>
                    ))}
                    <CButton color="link">Link</CButton>
                  </CCol>
                </CRow>
              ))}
            </DocsExample> */}
         

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            {/* <strong>React Table</strong> <small>Table foot</small> */}
          </CCardHeader>
          <CCardBody>
              <CTable>
                <CTableHead color="light">
                  <CTableRow>
                        {column.map((item,index) => <TableHead item = {item}/>)}
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {Object.values(data).map((item,index) => <TableRow item = {item} column ={column}/>)}                 
                </CTableBody>
              </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  );
};

const TableHead =({ item }) => <CTableHeaderCell scope="col">{item.Heading}</CTableHeaderCell>

const TableRow = ({ item , column }) => (
    
    <CTableRow key={item[`id`]} >
        {console.log(item[`id`])}
        {/* {column.map((columnItem, index)=>{ return <CTableDataCell key={item[`id`]}>{item[`${columnItem.value}`]}</CTableDataCell>})} */}
        {column.map((columnItem, index)=>{ {if(columnItem.value != "actions") {return  (<CTableDataCell>{item[`${columnItem.value}`]}</CTableDataCell>)}
        else{
           return (
            <CTableDataCell> 
              <CCol>
                <CButton color="warning" key={index}>Delete</CButton>
                {/* <CButton color="danger" key={index}>Check</CButton> */}
              </CCol>
              </CTableDataCell>)}
    }})}
       
    </CTableRow>
)
export default Table;
