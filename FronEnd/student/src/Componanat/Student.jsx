import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

function DataTable() {
const[data,setState]=useState([])
const navigate=useNavigate()
useEffect(()=>{
  fetchData();
  
},[])
const fetchData= async()=>{
  await fetch("http://localhost:8080/docs",{
    headers:{
      'Content-type':"aplication/json",
      "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
  })
  .then((res) => res.json())
  .then((json) => {
      setState(json);
      console.log(json)
  });
}
  
const AddDocs=()=>{
   navigate('/docs_details')
}
 console.log(data, "datadatadata");

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
          
              <button className="btn btn-success " onClick="AddDocs()">Add Docs</button>
              <button className="btn btn-info">Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataTable;
