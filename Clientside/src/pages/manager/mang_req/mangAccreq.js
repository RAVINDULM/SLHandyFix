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
import { CChartBar } from "@coreui/react-chartjs";
import { CButton } from "@coreui/react";
import "../../../scss/_custom.scss";
import { Link } from "react-router-dom";

function mangAccreq() {
  return (
    <div>
      {/* <CRow><CCol xs={4}><h1>mangDashboard</h1></CCol><CCol xs={4}><CButton color="primary">
                  Submit
                </CButton></CCol></CRow> */}
      <div class="container">
        <CCard className="mb-4">
          <CTable bordered striped>
            <CTableHead color="dark">
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Full Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Service Type</CTableHeaderCell>
                <CTableHeaderCell scope="col">Location</CTableHeaderCell>
                <CTableHeaderCell scope="col">Age</CTableHeaderCell>
                <CTableHeaderCell scope="col">Qualification</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Amal Perera</CTableDataCell>
                <CTableDataCell>Electrician</CTableDataCell>
                <CTableDataCell>Matara</CTableDataCell>
                <CTableDataCell>38</CTableDataCell>
                <CTableDataCell>NVQ Level 3</CTableDataCell>
                <CTableDataCell>
                  <Link to="/acc_req/addaccount">
                    <button type="button" class="btn btn-success">
                      Accept
                    </button>
                  </Link>
                  <button type="button" class="btn btn-danger">
                    Reject
                  </button>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Nimal Kure</CTableDataCell>
                <CTableDataCell>Electrician</CTableDataCell>
                <CTableDataCell>Galle</CTableDataCell>
                <CTableDataCell>45</CTableDataCell>
                <CTableDataCell>NVQ Level 2</CTableDataCell>
                <CTableDataCell>
                  <button type="button" class="btn btn-success">
                    Accept
                  </button>
                  <button type="button" class="btn btn-danger">
                    Reject
                  </button>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                <CTableDataCell>Nuwan Gamage</CTableDataCell>
                <CTableDataCell>Plumber</CTableDataCell>
                <CTableDataCell>Pettah</CTableDataCell>
                <CTableDataCell>28</CTableDataCell>
                <CTableDataCell>NVQ Level 2</CTableDataCell>
                <CTableDataCell>
                  <button type="button" class="btn btn-success">
                    Accept
                  </button>
                  <button type="button" class="btn btn-danger">
                    Reject
                  </button>
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
