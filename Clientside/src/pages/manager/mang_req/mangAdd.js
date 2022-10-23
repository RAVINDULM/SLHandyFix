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

function mangAdd() {
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
                <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                <CTableHeaderCell scope="col">Description</CTableHeaderCell>

                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Amal Perera</CTableDataCell>
                <CTableDataCell>2022-05-10</CTableDataCell>
                <CTableDataCell>
                  I want to hire a mechanic aroung kandy city
                </CTableDataCell>

                <CTableDataCell>
                  <Link to="/advertisments/addAdvertisement">
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
                <CTableDataCell>2022-05-10</CTableDataCell>
                <CTableDataCell>
                  I want to have a plumber for an emergency work around colombo
                </CTableDataCell>

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
                <CTableDataCell>2022-05-10</CTableDataCell>
                <CTableDataCell>
                  Want a AC repairer around pettah
                </CTableDataCell>

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

export default mangAdd;
