import React,{useEffect,useState} from "react";
import Axios from "axios";

import '../../../scss/_custom.scss'
import { Link, useParams  } from "react-router-dom";

function mangAccAdd() {
  const [nic, setNic] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchData = async ()=>{
      try{
        const {data:response}= await  Axios.get(`http://localhost:5000/api/v1/provider/getProvider/?id=${params.id}`);
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
  <div class="container lightBg">
  <form>
    <h3>Create an account for service provider</h3>
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
    <label for="inputEmail4">Address</label>
      <input type="text" class="form-control" placeholder="First name" value={nic.area}/>
    </div>
    <div class="col">
    <label for="inputEmail4">Phone Number</label>
      <input type="text" class="form-control" placeholder="Last name" value={nic.contactNo}/>
    </div>
  </div>
  <div class="row">
  <div class="col">
    <label for="inputEmail4">Experiance</label>
      <input type="text" class="form-control" placeholder="Last name" value={nic.yearsOfExperience}/>
    </div>
    <div class="col">
    <label for="inputEmail4">Qualification</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={nic.qualification}></textarea>
    </div>
 </div>
<Link to="/serviceproviders">
 <button type="button" class="btn btn-danger">Back</button></Link>
</form>
  </div>
</div>
  );
}

export default mangAccAdd;
