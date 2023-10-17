import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Componanat/Login'
import SignUp from '../Componanat/SignUp'
import Home from '../Componanat/Home'
import CreateDocs from '../Componanat/CreateDocs'
import DataTable from '../Componanat/Student'

function RouterComp() {
  return (
    <div>
        <Routes>
            <Route   path='/login' element={<Login/>}/>
            <Route   path='/signup' element={<SignUp/>}/>
            <Route   path='/' element={<Home/>}/>
            <Route path='/create' element={<CreateDocs/>}/>
            <Route path='/students' element={<DataTable/>} />
        </Routes>
    </div>
  )
}

export default RouterComp
