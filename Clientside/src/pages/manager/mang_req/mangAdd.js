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

function mangAdd() {

  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:5000/api/v1/advertisment/getAdvertisment').then((response) => { setData(response.data) })
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
                <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                <CTableHeaderCell scope="col">Description</CTableHeaderCell>

                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data.map((x) =>
                <CTableRow key={x.adId}>
                  <CTableHeaderCell scope="row">{x.adId}</CTableHeaderCell>
                  <CTableDataCell>{x.firstName}</CTableDataCell>
                  <CTableDataCell>{x.postDate}</CTableDataCell>
                  <CTableDataCell>{x.description}</CTableDataCell>

                  <CTableDataCell>
                    <Link to={`/advertisments/addAdvertisement/${x.adId}`}>

                      <button type="button" class="btn btn-success">Accept</button>
                    </Link>
                    <button type="button" class="btn btn-danger">Reject</button>
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

export default mangAdd;
