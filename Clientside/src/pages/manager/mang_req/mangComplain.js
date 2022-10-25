import React,{ useEffect, useState } from "react";
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
import '../../../scss/_custom.scss'
import { Link } from "react-router-dom";

function mangAccreq() {

  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:5000/api/v1/complaints/getComplain').then((response)=>{setData(response.data)})
  }, [])

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
                    <CTableHeaderCell scope="col">Service Provider Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Service Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Reason</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                {data.map((x) => 
                  <CTableRow key={x.id}>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>{x.reg_firstName}</CTableDataCell>
                    <CTableDataCell>{x.ser_firstName}</CTableDataCell>
                    <CTableDataCell>{x.jobCategory}</CTableDataCell>
                    <CTableDataCell>{x.description}</CTableDataCell>
                    
                    <CTableDataCell>
                      <Link to={`/complaints/viewcomplains/${x.complaintId}`}>
                    <button type="button" class="btn btn-success">Mark as Resolved</button>
                    </Link>
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
