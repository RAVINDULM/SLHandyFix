import React, { useEffect, useState } from "react";
import Axios from "axios";

import '../../../scss/_custom.scss'
import { Link, useParams, useNavigate } from "react-router-dom";
import e from "cors";

function mangAccAdd() {

  const [id, setId] = useState({});
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [nic, setNic] = useState({});
  const [contactNo, setContact] = useState("");
  const [area, setArea] = useState("");
  const [jobCategory, setJob] = useState("");
  const [province, setPro] = useState("");
  const [yearOfExperiance, setYear] = useState("");
  const [email, setMail] = useState("");


  const params = useParams();
  const navigate = useNavigate();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await Axios.get(`http://localhost:5000/api/v1/provider/getProvider/${params.id}`);
        console.log("data", response);
        setId(response[0]);
      } catch (err) {
        console.error(err.message);
      }
    }
    // Axios.get(`http://localhost:5000/api/v1/customer/getCustomer/?id=${params.id}`).then((response) => {
    //   console.log("data",response.data);
    //   setNic(response.data)
    //    })
    fetchData();
    setTheValues();
  }, [params.id]);

  const setTheValues = ()=>{
    setFname(id.firstName);
  }

  const Abc = async () => {
    console.log("aaa")
    try {
      console.log(firstName);
      const req = {
        firstName: firstName,
        lastName: lastName,
        contactNo: contactNo,
        area: area,
        province: province,
        email: email,
        jobCategory: jobCategory,
        yearOfExperiance: yearOfExperiance

      };
      const data = await Axios.put(`http://localhost:5000/api/v1/provider/getProvider/${params.id}`, req);
      console.log(data);
      if (data.status == 200) {
        navigate("/serviceproviders")
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  const hadleChange = event =>{
    setFname(event.target.value)
  }

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
              <input type="text"
                class="form-control"
                placeholder="First name"
                disabled={false}
                defaultValue={id.firstName}
                onChange={hadleChange} />
            </div>
            <div class="col">
              <label for="inputEmail4">Last Name</label>
              <input type="text" 
              disabled={false}
              class="form-control" 
              placeholder="Last name" 
              defaultValue={id.lastName}
             />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="inputEmail4">Service Type</label>
              <input type="text" 
              class="form-control"
              disabled={false} 
              placeholder="First name" 
              defaultValue={id.jobCategory}
              onChange={e => setJob(e.target.value)} />
            </div>
            <div class="col">
              <label for="inputEmail4">NIC</label>
              <input type="text" class="form-control" placeholder="Last name" value={id.nic} />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="inputEmail4">Province</label>
              <input type="text" class="form-control" placeholder="First name"
                defaultValue={id.province} onChange={e => setPro(e.target.value)} />
            </div>
            <div class="col">
              <label for="inputEmail4">Email</label>
              <input type="text" class="form-control" placeholder="Last name" value={id.email} />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="inputEmail4">Address</label>
              <input type="text" class="form-control" placeholder="First name" value={id.area} />
            </div>
            <div class="col">
              <label for="inputEmail4">Phone Number</label>
              <input type="text" class="form-control" placeholder="Last name" value={id.contactNo} />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="inputEmail4">Experiance</label>
              <input type="text" class="form-control" placeholder="Last name" value={id.yearsOfExperience} />
            </div>
            <div class="col">
              <label for="inputEmail4">Qualification</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={id.qualification}></textarea>
            </div>
          </div>

          <button type="button" class="btn btn-success" onClick={Abc}>Update Acount</button>
          <input class="btn btn-warning" type="reset" value="Reset"></input>
          <Link to="/serviceproviders">
            <button type="button" class="btn btn-danger">Back</button></Link>
        </form>
      </div>
    </div>
  );
}

export default mangAccAdd;
