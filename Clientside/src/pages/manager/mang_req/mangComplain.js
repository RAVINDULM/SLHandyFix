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

function mangAccreq() {
  return (
    <div> 
      {/* <CRow><CCol xs={4}><h1>mangDashboard</h1></CCol><CCol xs={4}><CButton color="primary">
                  Submit
                </CButton></CCol></CRow> */}
  <div class="container">

    <CCard className="mb-4">
  <CTable bordered striped>
    <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Service Provider Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Service Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Reason</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Anton Perera</CTableDataCell>
                    <CTableDataCell>Nuwan Gamage</CTableDataCell>
                    <CTableDataCell>Electrician</CTableDataCell>
                    <CTableDataCell>Stole the money and left</CTableDataCell>
                    
                    <CTableDataCell>
                    <button type="button" class="btn btn-success">Mark as Resolved</button>
                    
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Kanchana Peries</CTableDataCell>
                    <CTableDataCell>Nimal Kure</CTableDataCell>
                    <CTableDataCell>Electrician</CTableDataCell>
                    <CTableDataCell>Not finished the work within allocated time</CTableDataCell>
                  
                    <CTableDataCell>
                    <button type="button" class="btn btn-success">Mark as Resolved</button>
                
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Ama Perera</CTableDataCell>
                    <CTableDataCell>Pawan Keerthi</CTableDataCell>
                    <CTableDataCell>Plumber</CTableDataCell>
                    <CTableDataCell>Didnt come to work in right time</CTableDataCell>
                  
                    <CTableDataCell>
                    <button type="button" class="btn btn-success">Mark as Resolved</button>
                   
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
              </CCard>
      
  </div>
</div>
  );
}

export default mangAccreq;
