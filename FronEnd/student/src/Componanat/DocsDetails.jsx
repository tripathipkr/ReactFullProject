import React, { useEffect ,useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom';

function DocsDetails() {
    const [data, setData] = useState([]);
    const{id}=useParams()
    useEffect(() => {
        AllDocs()
      }, []);
      const AllDocs=()=>{
          
        const apiUrl = 'http://localhost:8080/docs/all_docs'; 
    
    
        const authToken = localStorage.getItem("token");
    
        
        axios.get(apiUrl, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        })
        .then((response) => {
          setData(response.data.AllDocs);
          console.log(response.data.AllDocs)
        })
        .catch((error) => {
          console.error(error);
    
        });
      }
    
     function DeleteBtn(id){
        const apiUrl = `http://localhost:8080/docs/delete/${id}`; 
    
        console.log(id)
        const authToken = localStorage.getItem("token");
    
        
        axios.delete(apiUrl, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        })
        .then((response) => {
          setData(response.data.AllDocs);
          window.location.reload()
          console.log(response.data.AllDocs)
        })
        .catch((error) => {
          console.error(error);
          
    
        });
        // AllDocs();
     }
    


  return (
     <div style={{marginTop:"25px,"}}>{data?.filter((e,i)=>{
        return e.student_email===id;
     }).map((e,i)=>{
        return <>
    <div className="blog-page mb-5">
      <h1>Blog Post: {e.title}</h1>   
      <div className="post-info">
        <div className="info-item">
          <strong>Created At:</strong> {e.createdAt}
        </div>
      
        <div className="info-item">
          <strong>Student:</strong> {e.student}
        </div>
        <div className="info-item">
          <strong>Student Email:</strong> {e.student_email}
        </div>
        <div className="info-item">
          <strong>Updated At:</strong> {e.updatedAt}
        </div>
        <div className="info-item">
          <strong>ID:</strong> {e._id}
        </div>
        <div className="info-item">
          <strong>Description:</strong> {e.description}
        </div>
        <div className="d-flex justify-content-around">
            <button className='btn btn-danger ' onClick={()=>{DeleteBtn(e._id)}}>DELETE</button>
            <Link to={`/edit/${e._id}`}><button className='btn btn-primary'>EDIT</button></Link>
          
        </div>
      </div>
    </div>
    </>
 })
     }
    </div>





  )
}

export default DocsDetails
