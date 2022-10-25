import React,{useEffect,useState} from "react";
import Axios from "axios";

import '../../../scss/_custom.scss'
import { Link,useParams, useNavigate } from "react-router-dom";

function mangAdvAdd() {

  const [id, setId] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async ()=>{
      try{
        const {data:response}= await  Axios.get(`http://localhost:5000/api/v1/advertisment/getAdvertisment/${params.id}`);
        console.log("data",response);
        setId(response[0]);
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

 const Abc = async ()=>{
  console.log("aaa")
  try{
    const data = await Axios.put(`http://localhost:5000/api/v1/advertisment/getAdvertisment/${params.id}`,1);
    console.log(data);
    if(data.status==200){
      navigate("/advertisments")
    }
  }catch(err){
    console.error(err.message);
  }
 }

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
      <input type="text" class="form-control" placeholder="First name" value={id.firstName}/>
    </div>
    <div class="col">
    <label for="inputEmail4">Last Name</label>
      <input type="text" class="form-control" placeholder="Last name" value={id.lastName}/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <label for="inputEmail4">Date</label>
      <input type="text" class="form-control" placeholder="First name" value={id.postDate}/>
    </div>
    <div class="col">
    <label for="inputEmail4">Title</label>
      <input type="text" class="form-control" placeholder="Last name" value={id.title}/>
    </div>
  </div>
  
  
  <div class="row">
    <div class="col">
    <label for="inputEmail4">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={id.description}></textarea>
    </div>
 </div>
 
 
  <button type="button" class="btn btn-success" onClick={Abc}>Accept Post</button>
  <Link to="/advertisments">
 <button type="button" class="btn btn-danger">Back</button></Link>
</form>
  </div>
</div>
  );
}

export default mangAdvAdd;
