import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [formData, setFormData] = useState({
        
        email: '',
        password: '',
    
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
        // You can access the form data in formData state for further processing
        console.log('Form Data:', formData);
      };


  return (
    <div>
      <h1>login</h1>
      <div style={{width:'60%',margin:"auto", boxShadow:"0 0 10px black",padding:"30px"}}>
      <Form  onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
          
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
        <Form.Control type="password" placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

      </div>
     
    </div>
  )
}

export default Login
