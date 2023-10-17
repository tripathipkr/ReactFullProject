import React, { useState } from 'react';

function CreateDocs() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    short_description: '',
    
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
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label>Short Description:</label>
              <input
                type="text"
                name="short_description"
                value={formData.short_description}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateDocs;
