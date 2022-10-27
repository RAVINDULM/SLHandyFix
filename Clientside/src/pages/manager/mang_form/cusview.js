import React, { useEffect, useState } from "react";
import Axios from "axios";

import '../../../scss/_custom.scss'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function mangAccAdd() {

  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [nic, setNic] = useState({});
  const [contactNo, setContact] = useState("");
  const [area, setArea] = useState("");
  const [province, setProv] = useState("");
  const [district, setDis] = useState("");
  const [gender, setGen] = useState("");
  const [email, setMail] = useState("");
  const params = useParams();


  useEffect(() => {
  console.log(params.id);

    const fetchData = async ()=>{
      try{
        const {data:response}= await  Axios.get(`http://localhost:5000/api/v1/customer/getCustomer/${params.id}`);
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

  //  const getCusDetails = async ()=>{
  //     console.warn(params)
  //     let result = await fetch (`http://localhost:5000/api/v1/customer/getCustomer/${params.id}`);
  //     result = await result.json();
  //     setFname=result.firstName;
  //  } 

  return (
    <div>
      <div class="container lightBg">
        <form>
          <h3>Customer Detail</h3>
          <div class="row">
            <div class="col">
              <label for="inputEmail4">First Name</label>
              <input type="text" class="form-control" placeholder="First name" value={nic.firstName} />
            </div>
            <div class="col">
              <label for="inputEmail4">Last Name</label>
              <input type="text" class="form-control" placeholder="Last name" value={nic.lastName} />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="inputEmail4">NIC</label>
              <input type="text" class="form-control" placeholder="First name" value={nic.nic} />
            </div>
            <div class="col">
              <label for="inputEmail4">Contact Number</label>
              <input type="text" class="form-control" placeholder="Last name" value={nic.contactNo} />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="inputEmail4">Gender</label>
              <input type="text" class="form-control" placeholder="First name" value={nic.gender} />
            </div>
            <div class="col">
              <label for="inputEmail4">Email</label>
              <input type="text" class="form-control" placeholder="Last name" value={nic.email} />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="inputEmail4">Area</label>
              <input type="text" class="form-control" placeholder="First name" value={nic.area} />
            </div>
            <div class="col">
              <label for="inputEmail4">Province</label>
              <input type="text" class="form-control" placeholder="Last name" value={nic.province} />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="inputEmail4">District</label>
              <input type="text" class="form-control" placeholder="Last name" value={nic.district} />
            </div>
          </div>
          <Link to="/customers">
            <button type="button" class="btn btn-danger">Back</button></Link>
        </form>
      </div>
    </div>
  );
}

export default mangAccAdd;
