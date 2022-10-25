import React, { useEffect, useState } from "react";
import Axios from "axios";

import '../../../scss/_custom.scss'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function mangAccAdd() {


  const [id, setId] = useState({});

  const params = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(params.id)
        const { data: response } = await Axios.get(`http://localhost:5000/api/v1/complaints/getComplain/${params.id}`);
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
  }, [params.complaintId]);
  console.log(id);

  const clearDate = () => {
     
    var d = "2/8/2022,12:00:00 AM";
    console.log(d.split('')[0]);
    // return d.toDateString;
  }

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
          <h3>Complain Details</h3>
          <div class="row">
            <div class="col">
              <label for="inputEmail4">Customer Name</label>
              <input type="text" class="form-control" placeholder="First name" value={id.reg_firstName} />
            </div>
            <div class="col">
              <label for="inputEmail4">Service Provider Name</label>
              <input type="text" class="form-control" placeholder="Last name" value={id.ser_firstName} />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="inputEmail4">Complaint Date</label>
              <input type="text" class="form-control" placeholder="First name" value={id.complaintDate} />
            </div>
            <div class="col">
              <label for="inputEmail4">Description</label>
              <input type="text" class="form-control" placeholder="Last name" value={id.description} />
            </div>
          </div>

          <button type="button" class="btn btn-success">Solve</button>
          <Link to="/complaints">
            <button type="button" class="btn btn-danger">Back</button></Link>
        </form>
      </div>
    </div>
  );
}

export default mangAccAdd;
