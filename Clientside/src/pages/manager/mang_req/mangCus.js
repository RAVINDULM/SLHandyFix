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
import {
  CChartBar,
} from '@coreui/react-chartjs'
import { CButton } from "@coreui/react";
import '../../../scss/_custom.scss'
import Table from "src/pages/manager/mang_assets/customertable"
import { Link } from "react-router-dom";

function customer() {
  // const [customerList, setCustomerDetails] = useState("");


  // const [firstName, setFname] = useState("");
  // const [lastName, setLname] = useState("");
  // const [nic, setNic] = useState("");
  // const [contactNo, setContact] = useState("");
  // const [area, setArea] = useState("");
  // const [province, setProv] = useState("");
  // const [district, setDis] = useState("");
  // const [gender, setGen] = useState("");
  // const [email,setMail] = useState("");

  // const column =  [
  //   //{Heading : "ID", value:"id"},
  //   {Heading : "Name", value:"firstName"},
  //   {Heading : "Contact Num", value:"contactNo"},
  //   {Heading : "NIC", value:"nic"},
  //   {Heading : "Area", value:"area"},
  //   {Heading : "Province", value:"province"},
  //   {Heading : "Actions", value:"actions"},
  // ]

  // useEffect(() => {
  //   console.log('use effect run')
  //   Axios.get("http://localhost:5000/api/v1/customer/getCustomer").then((response) => {
  //     console.log(response.data);
  //     setCustomerDetails(response.data);
  //   });
  // }, []);

  
  const [data, setCustomerDetails] = useState([]);

  

  const storedate = (a) =>{
    setCustomerDetails(a)
    
  }

  const fetchData = () => {
    fetch(`http://localhost:5000/api/v1/customer/getCustomer`)
      .then((response) => response.json())
      .then((actualData) => {
        //data = actualData;
        storedate(actualData)
        // console.log(actualData)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
  <div> 
  <div class="container">
  {/* <Table data={customerList} column={column}/> */}
  <CCard className="mb-4">
  <CTable bordered striped>
    <CTableHead color="dark">
                  <CTableRow>
                   
                    <CTableHeaderCell scope="col">Full Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Contact No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">NIC</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Area</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Province</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  { 
                   data && data.map((item,index)=>{
                    return(
                      // <div>sdd</div>
                    <CTableRow key={index}>
                    
                    <CTableDataCell>{item.firstName}</CTableDataCell>
                    <CTableDataCell>{item.contactNo}</CTableDataCell>
                    <CTableDataCell>{item.nic}</CTableDataCell>
                    <CTableDataCell>{item.area}</CTableDataCell>
                    <CTableDataCell>{item.province}</CTableDataCell>
                    <CTableDataCell>
                    <Link to={`/customers/viewcustomers/${item.nic}`}>
                    <button type="button" class="btn btn-success">View</button>
                    </Link>

                   
                    </CTableDataCell>
                  </CTableRow>
                  )
                   })
                
                  }
                </CTableBody>
              </CTable>
              </CCard>

 </div>
 </div>
  );
}

export default customer;
