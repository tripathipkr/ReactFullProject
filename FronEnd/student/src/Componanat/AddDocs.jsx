
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddDocs() {

    
      const navigete=useNavigate()
      const [formData, setFormData] = useState({
    
        description: '',
    
    
        title: '',
        
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data here
       const payload={
        description:formData.description,
        title:formData.description
       }
      const token=localStorage.getItem("token")

        console.log(formData);


        fetch('http://localhost:8080/docs/create', {
            method: 'POST',
            body: JSON.stringify(
              payload
            ),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization': `Bearer ${token}`
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                navigete('/docs_details')
             })
             .catch((err) => {
                console.log(err.message);
             });

      };
    
      return (
        <div className="form-container">
          <h2>Responsive Form</h2>
          <form onSubmit={handleSubmit}>
           
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
           
            
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
         
      
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    
    
  
}

export default AddDocs
