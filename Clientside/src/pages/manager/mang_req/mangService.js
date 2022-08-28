import React from "react";
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
import {
  CChartBar,
} from '@coreui/react-chartjs'
import { CButton } from "@coreui/react";
import '../../../scss/_custom.scss'
import { Link } from "react-router-dom";
import  { useState,useEffect } from "react";
import Table from "src/pages/manager/mang_assets/managertable"

function mangAccreq() {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [serviceList, setServiceDetails] = useState("");

  const column =  [
      {Heading : "ID", value:"id"},
      {Heading : "Name", value:"name"},
      {Heading : "Description", value:"description"},
      //{Heading : "Number of Employees", value:"numofemployeess"},
      // {Heading : "Email", value:"email"},
      // {Heading : "DOB", value:"dob"},
      // {Heading:"Address",value:"address"},
      {Heading : "Actions", value:"actions"}
    ]

    useEffect(() => {
      console.log('use effect run')
      Axios.get("http://localhost:5000/api/v1/service/getService").then((response) => {
        console.log(response.data);
        setServiceDetails(response.data);
      });
    }, []);



  return (
    <div> 
     <CCol xs={12}>
      <CCard className="mb-4"> 
               
                <div class="abc">
                  <Link to="/services/addservice">
                <button type="button" class="btn btn-primary">Add New Job Role</button></Link>
                </div>
               
  <div class="container">
  <Table data={serviceList} column={column}/>

    {/* <CCard className="mb-4">
  <CTable bordered striped>
    <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Service Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Number of Service Providers</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Electrician</CTableDataCell>
                    <CTableDataCell>25</CTableDataCell>
                    <CTableDataCell>Ongoing</CTableDataCell>
                   
                    
                    <CTableDataCell>
                    <button type="button" class="btn btn-danger">Remove</button>
                    
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    
                    <CTableDataCell>Plumber</CTableDataCell>
                    <CTableDataCell>30</CTableDataCell>
                    <CTableDataCell>Ongoing</CTableDataCell>
                   
                  
                    <CTableDataCell>
                    <button type="button" class="btn btn-danger">Remove</button>
                
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    
                    <CTableDataCell>Painter</CTableDataCell>
                    <CTableDataCell>40</CTableDataCell>
                    <CTableDataCell>Ongoing</CTableDataCell>
                  
                    <CTableDataCell>
                    <button type="button" class="btn btn-danger">Remove</button>
                   
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
              </CCard> */}
      
  </div>
  </CCard>    
</CCol>
</div>
  );
}

export default mangAccreq;
