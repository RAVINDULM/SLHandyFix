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
import { CButton } from "@coreui/react";
import { Link } from "react-router-dom";

const Table = ({data,column}) => {
  return (
    <div>  
    <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
              <CTable bordered striped>
                <CTableHead color="dark">
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
              <Link to={"/customers/viewcustomers/"+item._id}>
              {console.log(item[`id`])}
                <CButton color="primary" key={index}>View</CButton></Link>
                {/* <CButton color="danger" key={index}>Check</CButton> */}
              </CCol>
              </CTableDataCell>)}
    }})}
       
    </CTableRow>
)
export default Table;