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
import { Link, useParams } from "react-router-dom";



const Table = ({data, setServiceDetails, column}) => {

  const [id, setId] = useState({});
  const params = useParams();
 

  const Abc = async (itemId) =>{
    try{
      console.log(itemId)
;      const data = await Axios.delete(`http://localhost:5000/api/v1/service/deleteService/${itemId}`);
      if(data.status === 200){
        setServiceDetails( data => data.filter( (item) => item.id !== itemId ))
      }
      
    }catch(err){
      console.error(err.message);
    }
   }

  return (
    <div>   

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            {/* <strong>React Table</strong> <small>Table foot</small> */}
          </CCardHeader>
          <CCardBody>
              <CTable bordered striped>
                <CTableHead color="dark">
                  <CTableRow>
                        {column.map((item,index) => <TableHead item = {item}/>)}
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {Object.values(data).map((item,index) => <TableRow item = {item} column ={column} Abc = {Abc}/>)}                 
                </CTableBody>
              </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  );
};

const TableHead =({ item }) => <CTableHeaderCell scope="col">{item.Heading}</CTableHeaderCell>

const TableRow = ({ item , column, Abc }) => (
    
    <CTableRow key={item[`id`]} >
        {console.log(item.id)}
        {/* {column.map((columnItem, index)=>{ return <CTableDataCell key={item[`id`]}>{item[`${columnItem.value}`]}</CTableDataCell>})} */}
        {column.map((columnItem, index)=>{ {if(columnItem.value != "actions") {return  (<CTableDataCell>{item[`${columnItem.value}`]}</CTableDataCell>)}
        else{
           return (
            <CTableDataCell> 
              <CCol>{item.numofemployeess!=0?<></>:<CButton color="warning" key={index} onClick={ () => Abc(item.id)}>Remove</CButton>}

                
                {/* <CButton color="danger" key={index}>Check</CButton> */}
              </CCol>
              </CTableDataCell>)}
    }})}
       
    </CTableRow>
)

  
  export default Table;