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
    <div class="col">Service Type</div>
    <div class="col">From </div>
    <div class="col">To</div>
    <div class="col"></div>
    <div class="w-100"></div>
    <div class="col">
                <CDropdown>
                    <CDropdownToggle color="secondary" style={{width:250}}>Job Category</CDropdownToggle>
                    <CDropdownMenu style={{width:250}}>
                      <CDropdownItem href="#">Painter</CDropdownItem>
                      <CDropdownItem href="#">Electrician</CDropdownItem>
                      <CDropdownItem href="#">Plumber</CDropdownItem>
                      <CDropdownItem href="#">Mason</CDropdownItem>
                      <CDropdownItem href="#">Plumber</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
    </div>
    <div class="col">
    <input type="date" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
    <input type="date" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
    <button type="button" class="btn btn-primary">Select</button>
    </div>
    </div>

    <div class="row abcd">
    <div class="col-sm">
          <div class="card text-center ">
            <div class="card-body bg-primary text-white">
              <h5 class="card-title">Total Service Providers</h5>
              <p class="card-text">100</p>
            </div>
          </div>
    </div>

    <div class="col-sm">
          <div class="card text-center">
           <div class="card-body bg-info text-white">
              <h5 class="card-title">Total Job Requests</h5>
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
  </div>

  <div class="row lightBg abcd">
    <h3>Job Request Details</h3>
  <CTable bordered striped>
    <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">SP Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Service Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Location</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Customer Number</CTableHeaderCell>
      
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Amal Perera</CTableDataCell>
                    <CTableDataCell>Electrician</CTableDataCell>
                    <CTableDataCell>Ann Meri</CTableDataCell>
                    <CTableDataCell>Matara</CTableDataCell>
                    <CTableDataCell>0752525963</CTableDataCell>
                    <CTableDataCell>
                      
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Nimal Kure</CTableDataCell>
                    <CTableDataCell>Electrician</CTableDataCell>
                    <CTableDataCell>Piyal Peries</CTableDataCell>
                    <CTableDataCell>Galle</CTableDataCell>
                    <CTableDataCell>0758996355</CTableDataCell>
                    <CTableDataCell>
                    
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Nuwan Gamage</CTableDataCell>
                    <CTableDataCell>Plumber</CTableDataCell>
                    <CTableDataCell>Nuwan Dias</CTableDataCell>
                    <CTableDataCell>Pettah</CTableDataCell>
                    <CTableDataCell>0715858936</CTableDataCell>
                    <CTableDataCell>
                  </CTableDataCell>
                  </CTableRow>

                  <CTableRow>
                    <CTableHeaderCell scope="row">4</CTableHeaderCell>
                    <CTableDataCell>Nuwan Gamage</CTableDataCell>
                    <CTableDataCell>Plumber</CTableDataCell>
                    <CTableDataCell>Nuwan Dias</CTableDataCell>
                    <CTableDataCell>Pettah</CTableDataCell>
                    <CTableDataCell>0715858936</CTableDataCell>
                    <CTableDataCell>
                  </CTableDataCell>
                  </CTableRow>

                  <CTableRow>
                    <CTableHeaderCell scope="row">5</CTableHeaderCell>
                    <CTableDataCell>Nuwan Gamage</CTableDataCell>
                    <CTableDataCell>Plumber</CTableDataCell>
                    <CTableDataCell>Nuwan Dias</CTableDataCell>
                    <CTableDataCell>Pettah</CTableDataCell>
                    <CTableDataCell>0715858936</CTableDataCell>
                    <CTableDataCell>
                  </CTableDataCell>
                  </CTableRow>

                  <CTableRow>
                    <CTableHeaderCell scope="row">6</CTableHeaderCell>
                    <CTableDataCell>Nuwan Gamage</CTableDataCell>
                    <CTableDataCell>Plumber</CTableDataCell>
                    <CTableDataCell>Nuwan Dias</CTableDataCell>
                    <CTableDataCell>Pettah</CTableDataCell>
                    <CTableDataCell>0715858936</CTableDataCell>
                    <CTableDataCell>
                  </CTableDataCell>
                  </CTableRow>


                </CTableBody>
              </CTable>
  </div>

  </div>

</div>
  );
}

export default mangAccreq;
