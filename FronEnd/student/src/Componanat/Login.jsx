import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const[token,settoken]=useState()
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
      const handleSubmit = async(e) => {
        e.preventDefault();
        const payload ={
          email:formData?.email,
          password:formData?.password
        }
       fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(
          payload
        ),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setFormData(data.response)
            console.log(token)
            localStorage.setItem("token",data.token)
         })
         .catch((err) => {
            console.log(err.message);
         });

         if(localStorage.getItem("token")!=null){
          navigate ("/students")
          alert("Login Succes-full")
         }else{
          alert("Please Registor")
          navigate("/signup")
         }
         
           setFormData("");
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
          value={formData?.email}
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
          value={formData?.password}
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
