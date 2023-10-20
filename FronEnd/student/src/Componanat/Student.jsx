import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate ,Link} from 'react-router-dom';

function DataTable() {

  const [data, setData] = useState([]);

useEffect(() => {
        
  const apiUrl = 'http://localhost:8080/docs'; 


  const authToken = localStorage.getItem("token");

  
  axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
  .then((response) => {
    setData(response.data);
    console.log(response)
  })
  .catch((error) => {
    console.error(error);

  });
}, []);


 

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.blog?.map((item,i) => (
          <tr key={i+1}>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
            <td>
          
               <Link to={`/docs_details/${item.email}`}><button className="btn btn-success " >Details</button></Link>
               <Link to='/add_docs'> <button className="btn btn-info" >Add Docs</button></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataTable;
