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
import { CButton } from "@coreui/react";
function mangDashboard() {
  return (
    <div> 
      <CRow><CCol xs={4}><h1>mangDashboard</h1></CCol><CCol xs={4}><CButton color="primary">
                  Submit
                </CButton></CCol></CRow>
    </div>
  );
}

export default mangDashboard;