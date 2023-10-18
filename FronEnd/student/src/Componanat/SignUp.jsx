import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phoneNo: '',
    student_class: '',
    age: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can access the form data in the formData state and perform actions like registration, sending data to the server, etc.
    
    fetch(`http://localhost:8080/signup`,{
        method:"POST",
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(formData)
    }).then((res)=>{
        res.json()
    }).then((res)=>{
        console.log(res + "hogaya")
    }).catch((err)=>{
        console.log(err)
    })
     
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phoneNo">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Phone Number"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="student_class">
        <Form.Label>Student Class</Form.Label>
        <Form.Control
          type="text"
          placeholder="Student Class"
          name="student_class"
          value={formData.student_class}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UserRegistrationForm;
