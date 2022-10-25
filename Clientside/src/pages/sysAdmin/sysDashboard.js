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
import { CChartBar } from "@coreui/react-chartjs";
import { CButton } from "@coreui/react";
import "src/scss/_custom.scss";
import Table from "src/components/Tables/table1";

function mangDashboard() {
  const manager = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const [employeeList, setEmployeeDetails] = useState("");
  };

  return (
    <div>
      {/* <CRow><CCol xs={4}><h1>mangDashboard</h1></CCol><CCol xs={4}><CButton color="primary">
                  Submit
                </CButton></CCol></CRow> */}
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="card text-center ">
              <div class="card-body bg-primary text-white">
                <h5 class="card-title">Total Service Providers</h5>
                <p class="card-text">100</p>
              </div>
              <div class="card-footer text-muted bg-light text-dark">
                2 days ago
              </div>
            </div>
          </div>

          <div class="col-sm">
            <div class="card text-center">
              <div class="card-body bg-info text-white">
                <h5 class="card-title">Total Customers</h5>
                <p class="card-text">125</p>
              </div>
              <div class="card-footer text-muted bg-light text-dark">
                2 days ago
              </div>
            </div>
          </div>

          <div class="col-sm">
            <div class="card text-center">
              <div class="card-body bg-success text-white">
                <h5 class="card-title">Total Completed Services</h5>
                <p class="card-text">35</p>
              </div>
              <div class="card-footer text-muted bg-light text-dark">
                2 days ago
              </div>
            </div>
          </div>
        </div>
        <div class="row"></div>
        <div class="row">
          <CCol xs={15}>
            <CCard className="mb-4">
              <CCardHeader>Monthly Income</CCardHeader>
              <CCardBody>
                <CChartBar
                  data={{
                    labels: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                    ],
                    datasets: [
                      {
                        label: "Income",
                        backgroundColor: "#00fa9a",
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
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

export default mangDashboard;
