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

function mangAccreq() {
  return (
    <div> 
     <CCol xs={12}>
      <CCard className="mb-4"> 
               
                <div class="abc">
                  <Link to="/services/addservice">
                <button type="button" class="btn btn-primary">Add New Job Role</button></Link>
                </div>
               
  <div class="container">

    <CCard className="mb-4">
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
              </CCard>
      
  </div>
  </CCard>    
</CCol>
</div>
  );
}

export default mangAccreq;
