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
import "../../../scss/_custom.scss";
import { Link } from "react-router-dom";

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

function mangAccreq() {

  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:5000/api/v1/provider/getProvider').then((response) => { setData(response.data) })
  }, [])
  //console.log(data.fName)

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
                <CTableHeaderCell scope="col">Contact Number</CTableHeaderCell>
                <CTableHeaderCell scope="col">Qualification</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data.map((x) =>
                <CTableRow key={x.id}>
                  <CTableDataCell>{x.id}</CTableDataCell>
                  <CTableDataCell>{x.firstName}</CTableDataCell>
                  <CTableDataCell>{x.jobCategory}</CTableDataCell>
                  <CTableDataCell>{x.area}</CTableDataCell>
                  <CTableDataCell>{x.contactNo}</CTableDataCell>
                  <CTableDataCell>{x.qualification}</CTableDataCell>
                  <CTableDataCell>
                    <Link to={`/serviceproviders/viewserviceproviders/${x.nic}`}>
                      <button type="button" class="btn btn-success">View</button>
                    </Link>
                    <Link to={`/serviceproviders/updateserviceproviders/${x.nic}`}>
                      <button type="button" class="btn btn-info">Update</button>
                    </Link>
                    <button type="button" class="btn btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Remove</button>
                  </CTableDataCell>
                </CTableRow>
              )}
            </CTableBody>
          </CTable>
        </CCard>

      </div>
    </div>
  );
}

export default mangAccreq;
