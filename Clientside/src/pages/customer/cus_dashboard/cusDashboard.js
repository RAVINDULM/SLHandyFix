import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

function cusDashboard() {
  return (
    <CRow>
      <CRow> <CCol xs={10}><h3>Hello Jithru !</h3></CCol></CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          
          <CCardBody>
              <CRow>
                <CCol lg={4}>
                  <CCard color='primary' textColor='white' className="mb-3">
                    <CCardHeader><h3>Placed Jobs</h3></CCardHeader>
                    <CCardBody>
                      <CCardText  class="text-center"><h3>30</h3></CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>

                <CCol lg={4}>
                  <CCard color='secondary' textColor='white' className="mb-3">
                    <CCardHeader><h3>Accepted Jobs</h3></CCardHeader>
                    <CCardBody>
                      <CCardText  class="text-center"><h3>30</h3></CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>

                <CCol lg={4}>
                  <CCard color='success' textColor='white' className="mb-3">
                    <CCardHeader><h3>Completed Jobs</h3></CCardHeader>
                    <CCardBody>
                      <CCardText  class="text-center"><h3>30</h3></CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>

              </CRow>
          </CCardBody>
        </CCard>

        <CCard style={{ height: '20rem' }}>
          <div style={{padding:20}}>
            <div style={{padding:5, backgroundColor:'lightblue'}}><h4>Recently placed jobs</h4></div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Job Title</th>
                  <th scope="col">Service Provider</th>
                  <th scope="col">Date of job done</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Plumbing</td>
                  <td>Jithru Jayawantha</td>
                  <td>2022/08/12</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Painting</td>
                  <td>Namal Guruge</td>
                  <td>2022/07/23</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Plumbing</td>
                  <td>Larry Jone</td>
                  <td>2022/07/12</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Electrical</td>
                  <td>Sugath Perera</td>
                  <td>2022/07/02</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Masonary</td>
                  <td>Larry Jone</td>
                  <td>2022/07/12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CCard>
      </CCol>
     
    </CRow>
  )
}

export default cusDashboard
