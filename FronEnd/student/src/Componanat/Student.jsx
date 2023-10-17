import React from 'react';
import Table from 'react-bootstrap/Table';

function DataTable() {
  const data = [
    { id: 1, name: 'John', age: 30, city: 'New York' },
    { id: 2, name: 'Alice', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob', age: 28, city: 'Chicago' },
    { id: 4, name: 'Eve', age: 22, city: 'San Francisco' },
  ];

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
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
            <td>
          
              <button className="btn btn-success ">Add Docs</button>
              <button className="btn btn-info">Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataTable;
