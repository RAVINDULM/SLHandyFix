import React from "react";
import Axios from "axios";

import '../../../scss/_custom.scss'
import { Link } from "react-router-dom";

function mangAdvAdd() {
  return (
    <div> 
      {/* <CRow><CCol xs={4}><h1>mangDashboard</h1></CCol><CCol xs={4}><CButton color="primary">
                  Submit
                </CButton></CCol></CRow> */}
                <h3>Verify Post</h3>
  <div class="container lightBg">
  
  <form>
   
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
    <label for="inputEmail4">Date</label>
      <input type="text" class="form-control" placeholder="Last name" value="2022-08-10"/>
    </div>
  </div>
  
  
  <div class="row">
    <div class="col">
    <label for="inputEmail4">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">I want to hire a mechanic aroung kandy city</textarea>
    </div>
 </div>
 
 
  <button type="button" class="btn btn-success">Accept Post</button>
  <Link to="/advertisments">
 <button type="button" class="btn btn-danger">Back</button></Link>
</form>
  </div>
</div>
  );
}

export default mangAdvAdd;
