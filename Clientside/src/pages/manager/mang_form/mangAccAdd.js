import React,{useEffect,useState} from "react";
import Axios from "axios";
import {
  CCardImage,
} from "@coreui/react";

import '../../../scss/_custom.scss'
import { Link, useParams } from "react-router-dom";
import image from "src/assets/images/avatars/2.jpg"

function mangAccAdd() {
  const [nic, setNic] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchData = async ()=>{
      try{
        const {data:response}= await  Axios.get(`http://localhost:5000/api/v1/request/getRequest/?id=${params.id}`);
        console.log("data",response);
        setNic(response[0]);
      }catch(err){
        console.error(err.message);
      }
    }
    // Axios.get(`http://localhost:5000/api/v1/customer/getCustomer/?id=${params.id}`).then((response) => {
    //   console.log("data",response.data);
    //   setNic(response.data)
    //    })
       fetchData();
  }, [params.id]);


  return (
    <div> 
      {/* <CRow><CCol xs={4}><h1>mangDashboard</h1></CCol><CCol xs={4}><CButton color="primary">
                  Submit
                </CButton></CCol></CRow> */}
  <h3>Create an account for service provider</h3>
  <div class="container lightBg">
  <form>
    <div class="row">
      <div class="col">
  <CCardImage class="img-fluid img-thumbnail img-responsive rounded-circle me-4" src={image} width='150' />
  </div>
  
  </div>
   <div class="row">
    <div class="col">
    <label for="inputEmail4">First Name</label>
      <input type="text" class="form-control" placeholder="First name" value={nic.firstName}/>
    </div>
    <div class="col">
    <label for="inputEmail4">Last Name</label>
      <input type="text" class="form-control" placeholder="Last name" value={nic.lastName}/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <label for="inputEmail4">Service Type</label>
      <input type="text" class="form-control" placeholder="First name" value={nic.jobCategory}/>
    </div>
    <div class="col">
    <label for="inputEmail4">NIC</label>
      <input type="text" class="form-control" placeholder="Last name" value={nic.nic}/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <label for="inputEmail4">Gender</label>
      <input type="text" class="form-control" placeholder="First name" value={nic.gender}/>
    </div>
    <div class="col">
    <label for="inputEmail4">Email</label>
      <input type="text" class="form-control" placeholder="Last name" value={nic.email}/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <label for="inputEmail4">Phone Number</label>
      <input type="text" class="form-control" placeholder="First name" value={nic.contactNo}/>
    </div>
    <div class="col">
    <label for="inputEmail4">Province</label>
      <input type="text" class="form-control" placeholder="Last name" value={nic.province}/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <label for="inputEmail4">District</label>
      <input type="text" class="form-control" placeholder="First name" value={nic.district}/>
    </div>
    <div class="col">
    <label for="inputEmail4">Area</label>
      <input type="text" class="form-control" placeholder="Last name" value={nic.area}/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <label for="inputEmail4">Experiance</label>
      <input type="text" class="form-control" placeholder="First name" value={nic.yearsOfExperience}/>
    </div>
    <div class="col">
    <label for="inputEmail4">Qualification</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={nic.qualification}></textarea>
    </div>
  </div>
  {/* <div class="row">
  <div class="col">
    <label for="inputEmail4">Experiance</label>
      <input type="text" class="form-control" placeholder="Last name" value={nic.yearsOfExperience}/>
    </div>
    <div class="col">
    <label for="inputEmail4">Qualification</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={nic.qualification}></textarea>
    </div>
 </div> */}
 {/* <div class="row">
    <div class="col">
    <label for="inputEmail4">Password</label>
      <input type="text" class="form-control" placeholder="Password" value=""/>
    </div>
    <div class="col">
    <label for="inputEmail4">Retype Password</label>
      <input type="text" class="form-control" placeholder="Retype Password" value=""/>
    </div>
  </div> */}
 
  <button type="button" class="btn btn-success">Create Acount</button>
  <Link to="/acc_req">
 <button type="button" class="btn btn-danger">Back</button></Link>
</form>
  </div>
</div>
  );
}

export default mangAccAdd;
