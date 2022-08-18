import React from "react";
import Axios from "axios";

import '../../../scss/_custom.scss';
import { Link } from "react-router-dom";

function mangAccAdd() {
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
      <input type="text" class="form-control" placeholder="First name" value="Amal"/>
    </div>
    <div class="col">
    <label for="inputEmail4">Last Name</label>
      <input type="text" class="form-control" placeholder="Last name" value="Perera"/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <label for="inputEmail4">Service Type</label>
      <input type="text" class="form-control" placeholder="First name" value="Electrician"/>
    </div>
    <div class="col">
    <label for="inputEmail4">Age</label>
      <input type="text" class="form-control" placeholder="Last name" value="38"/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <label for="inputEmail4">Gender</label>
      <input type="text" class="form-control" placeholder="First name" value="Male"/>
    </div>
    <div class="col">
    <label for="inputEmail4">Email</label>
      <input type="text" class="form-control" placeholder="Last name" value="amalperara@gmail.com"/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <label for="inputEmail4">Address</label>
      <input type="text" class="form-control" placeholder="First name" value="No 22, Araliya Road, Matara"/>
    </div>
    <div class="col">
    <label for="inputEmail4">Phone Number</label>
      <input type="text" class="form-control" placeholder="Last name" value="0702582589"/>
    </div>
  </div>
  <div class="row">
  <div class="col">
    <label for="inputEmail4">Experiance</label>
      <input type="text" class="form-control" placeholder="Last name" value="10 years"/>
    </div>
    <div class="col">
    <label for="inputEmail4">Qualification</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">NVQ Level 4</textarea>
    </div>
 </div>

 <button type="button" class="btn btn-danger">Cancel</button>
</form>
  </div>
</div>
  );
}

export default mangAccAdd;
