import React from 'react'
import {
  CCard,
  CButton,
  CCol,
  CRow,
} from '@coreui/react'
import { Link } from 'react-router-dom'

function cusRecentlyPlacedJob() {
  return (
    <CRow>
      <CCol xs={12}>
   
        <CCard >
          <div style={{padding:20}}>
            <div style={{padding:5, backgroundColor:'lightblue'}}><h4>Recently placed jobs</h4></div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Job Title</th>
                  <th scope="col">Service Provider</th>
                  <th scope="col">Date of placed</th>
<<<<<<< HEAD
                  <th scope="col">Job Status</th>
                  <th scope="col">Change Status</th>
=======
                  <th scope="col">Change Status</th>
                  <th scope="col">Job Status</th>
>>>>>>> 5222fff369b51f2c6d72e043d41cf5c045629ded
                </tr>
              </thead>
              <tbody>
             
                <tr>
                  <th scope="row">1</th>
                  <td>Plumbing</td>
                  <td>Jithru Jayawantha</td>
                  <td>2022/08/12</td>
<<<<<<< HEAD
                  <td> <div>  <CButton type="cancel" color='secondary' style={{width:100}}>Pending</CButton></div></td>
                  <td><CCol lg><Link to="#features">Change</Link> </CCol></td>
=======
                  <td><CCol lg><Link to="#features">Change</Link> </CCol></td>
                  <td> <div>  <CButton type="cancel" color='secondary' style={{width:100}}>Pending</CButton></div></td>
>>>>>>> 5222fff369b51f2c6d72e043d41cf5c045629ded
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Painting</td>
                  <td>Namal Guruge</td>
                  <td>2022/07/23</td>
<<<<<<< HEAD
                  <td> <div> <CButton type="submit" color='warning' style={{width:100}}>Ongoing</CButton></div> </td>
                  <td><CCol lg><Link to="#features">Change</Link> </CCol></td>
=======
                  <td><CCol lg><Link to="#features">Change</Link> </CCol></td>
                  <td> <div> <CButton type="submit" color='warning' style={{width:100}}>Ongoing</CButton></div> </td>
                  
>>>>>>> 5222fff369b51f2c6d72e043d41cf5c045629ded
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Plumbing</td>
                  <td>Larry Jone</td>
                  <td>2022/07/12</td>
<<<<<<< HEAD
                  <td>  <div> <CButton type="submit" color='success' style={{width:100}}>Complete</CButton></div></td>
                  <td><CCol lg><Link to="#features">Change</Link> </CCol></td>
=======
                  <td><CCol lg><Link to="#features">Change</Link> </CCol></td>
                  <td>  <div> <CButton type="submit" color='success' style={{width:100}}>Complete</CButton></div></td>
                  
>>>>>>> 5222fff369b51f2c6d72e043d41cf5c045629ded
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Electrical</td>
                  <td>Sugath Perera</td>
                  <td>2022/07/02</td>
<<<<<<< HEAD
                  <td> <div> <CButton type="submit" color='warning' style={{width:100}}>Ongoing</CButton></div> </td>
                  <td><CCol lg><Link to="#features">Change</Link> </CCol></td>
=======
                  <td><CCol lg><Link to="#features">Change</Link> </CCol></td>
                  <td> <div> <CButton type="submit" color='warning' style={{width:100}}>Ongoing</CButton></div> </td>
                  
>>>>>>> 5222fff369b51f2c6d72e043d41cf5c045629ded
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Masonary</td>
                  <td>Larry Jone</td>
                  <td>2022/07/12</td>
<<<<<<< HEAD
                  <td>  <div> <CButton type="submit" color='success' style={{width:100}}>Complete</CButton></div> </td>
                  <td><CCol lg><Link to="#features">Change</Link> </CCol></td>
=======
                  <td><CCol lg><Link to="#features">Change</Link> </CCol></td>
                  <td>  <div> <CButton type="submit" color='success' style={{width:100}}>Complete</CButton></div> </td>
                  
>>>>>>> 5222fff369b51f2c6d72e043d41cf5c045629ded
                </tr>
              </tbody>
            </table>
          </div>
        </CCard>
      </CCol>
     
    </CRow>
  )
}

<<<<<<< HEAD
export default cusRecentlyPlacedJob
=======
export default cusRecentlyPlacedJob
>>>>>>> 5222fff369b51f2c6d72e043d41cf5c045629ded
