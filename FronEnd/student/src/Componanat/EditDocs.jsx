import { useParams } from 'react-router-dom';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function EditDocs() {
    
      const { id } = useParams();
      console.log(id)
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
    

      function EditData(){

        const payload={
            description:formData.description,
            title:formData.description
           }
          const token=localStorage.getItem("token")
    
            console.log(formData);
        fetch(`http://localhost:8080/docs/edit/${id}`, {
            method: 'PUT',
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
            }
      const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data here
       
     EditData()
       
            
        }

       
    
    
      return (
       
        <div className="form-container">
            
          <h2>Document</h2>
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

  


export default EditDocs
