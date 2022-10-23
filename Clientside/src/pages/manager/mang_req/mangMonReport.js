

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
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import {
  CChartBar,
} from '@coreui/react-chartjs'
import { CButton } from "@coreui/react";
import '../../../scss/_custom.scss'
import { Link } from "react-router-dom";

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


function mangAccreq() {
  return (
    <div> 
      {/* <CRow><CCol xs={4}><h1>mangDashboard</h1></CCol><CCol xs={4}><CButton color="primary">
                  Submit
                </CButton></CCol></CRow> */}
  <div class="container">

    <div class="row abcd">

    <div class="col-sm">
          <div class="card text-center ">
            <div class="card-body bg-primary text-white">
              <h5 class="card-title">Total Job Requests</h5>
              <p class="card-text">100</p>
            </div>
          </div>
    </div>

    <div class="col-sm">
          <div class="card text-center">
           <div class="card-body bg-info text-white">
              <h5 class="card-title">Total Services</h5>
              <p class="card-text">100</p>
            </div>
        </div>
    </div>

    <div class="col-sm">
          <div class="card text-center">
            <div class="card-body bg-success text-white">
              <h5 class="card-title">Total Completed Services</h5>
              <p class="card-text">75</p>
            </div>
          </div>
    </div>

 

  <div class="col-sm">
          <div class="card text-center">
            <div class="card-body bg-warning text-white">
              <h5 class="card-title">Total Service Providers</h5>
              <p class="card-text">75</p>
            </div>
          </div>
    </div>
  </div>

  
  <div class="row abcd">
  <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Monthly Income</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Income',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Monthly Requests</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Requests',
                    backgroundColor: '#7620FF',
                    data: [30, 20, 16, 45, 18, 45, 38, 75, 55],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      
     </div>
  

     <div class="row">
  <div class="col">
  <CTable caption="top" striped>
                <CTableCaption>Top Service Providers</CTableCaption>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Location</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Galle</CTableDataCell>
                    <CTableDataCell>Electrician</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Matara</CTableDataCell>
                    <CTableDataCell>Plumber</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Larry</CTableDataCell>
                    <CTableDataCell>Kandy</CTableDataCell>
                    <CTableDataCell>Painter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
  </div>
  <div class="col">
  <CTable caption="top" striped>
                <CTableCaption>Top Customers</CTableCaption>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Location</CTableHeaderCell>
                    
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Galle</CTableDataCell>
                    
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Matara</CTableDataCell>
                    
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Larry</CTableDataCell>
                    <CTableDataCell>Kandy</CTableDataCell>
                    
                  </CTableRow>
                </CTableBody>
              </CTable>
  </div>
</div>
  </div>

</div>
  );
}

export default mangAccreq;

