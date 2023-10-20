import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Componanat/Login'
import SignUp from '../Componanat/SignUp'
import Home from '../Componanat/Home'
import CreateDocs from '../Componanat/CreateDocs'
import DataTable from '../Componanat/Student'
import DocsDetails from '../Componanat/DocsDetails'
import AddDocs from '../Componanat/AddDocs'
import EditDocs from '../Componanat/EditDocs'

function RouterComp() {
  return (
    <div>
        <Routes>
            <Route   path='/login' element={<Login/>}/>
            <Route   path='/signup' element={<SignUp/>}/>
            <Route   path='/' element={<Home/>}/>
            <Route path='/create' element={<CreateDocs/>}/>
            <Route path='/students' element={<DataTable/>} />
            <Route path='/docs_details/:id' element={<DocsDetails/>} />
            <Route path='/add_docs' element={<AddDocs/>} />
            <Route path='/edit/:id' element={<EditDocs/>} />
        </Routes>
    </div>
  )
}

export default RouterComp
