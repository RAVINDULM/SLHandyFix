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
import { CForm, CFormInput, CFormLabel, CFormTextarea } from "@coreui/react";
import { DocsCallout, DocsExample } from "src/components";
import { CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell } from "@coreui/icons";
import Table from "src/components/Tables/table1";

const Employees = () => {
  // export default function Employees() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [employeeList, setEmployeeDetails] = useState("");

  const column =  [
    {Heading : "ID", value:"id"},
    {Heading : "Name", value:"name"},
    {Heading : "Type", value:"type"},
    {Heading : "Status", value:"status"},
    {Heading : "Actions", value:"actions"}
  ]
  useEffect(() => {
    Axios.get("http://localhost:5000/api/v1/employee").then((response) => {
      // console.log(response.data);
      setEmployeeDetails(response.data);
    });
  }, []);

  const submitData = () => {
    Axios.post("http://localhost:5000/api/v1/employee/", {
      name: name,
      type: type,
      status: status,
    }).then(() => {
      alert("successfully added!");
    });
  };
  return (
    <div>
      <h1>Employees</h1>
      <Table data={employeeList} column={column}/>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardBody>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Name
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    id="exampleFormControlInput1"
                    placeholder="Type your name here"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Type
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    id="exampleFormControlInput1"
                    placeholder="Type your name here"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Status
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                    id="exampleFormControlInput1"
                    placeholder="Type your name here"
                  />
                </div>
                <CButton onClick={submitData} color="primary">
                  Submit
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default Employees;
