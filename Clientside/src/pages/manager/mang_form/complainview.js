import React, { useEffect, useState } from "react";
import Axios from "axios";

import '../../../scss/_custom.scss'
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function mangAccAdd() {


  const [id, setId] = useState({});

  const params = useParams();
  const navigate = useNavigate();

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

  const date = new Date(id.complaintDate);
  console.log(date);
  const trimdate = moment(new Date(date)).format('DD-MMM-YYYY');
  console.log(moment(new Date(date)).format('DD-MMM-YYYY'));

  const Abc = async ()=>{
    console.log("aaa")
    try{
      const data = await Axios.put(`http://localhost:5000/api/v1/complaints/getComplain/${params.id}`,1);
      console.log(data);
      if(data.status==200){
        navigate("/complaints")
      }
    }catch(err){
      console.error(err.message);
    }
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
              <input type="text" class="form-control" placeholder="First name" value={trimdate} />
            </div>
            <div class="col">
              <label for="inputEmail4">Description</label>
              <input type="text" class="form-control" placeholder="Last name" value={id.description} />
            </div>
          </div>

          <button type="button" class="btn btn-success" onClick={Abc}>Solve</button>
          <Link to="/complaints">
            <button type="button" class="btn btn-danger">Back</button></Link>
        </form>
      </div>
    </div>
  );
}

export default mangAccAdd;
