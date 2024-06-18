import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function User() {
const [user,setuser]=useState([])
useEffect(()=>{
axios.get('http://localhost:3002')
.then(result=>setuser(result.data))
.catch(err=>console.log(err))
},[])

const deletevalue = (id)=>{
    axios.delete('http://localhost:3002/delete/'+id)
    .then(res=>{console.log(res)
     window.location.reload()})
    .catch(err=>console.log(err))
 }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-300 bg-white rounded p-3">
      <Link to ='/Create' className="btn btn-success">Add +</Link>
      <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>age</th>
                <th>Dob</th>
                <th>Mobile</th>
                <th>Course</th>
                <th>City</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
{
    user.map((user)=>{
        return <tr>
               <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.Dob}</td>
                <td>{user.mobile}</td>
                <td>{user.course}</td>
                <td>{user.city}</td>
                
                <td>  <Link to ={`/Update/${user._id}`} className='btn btn-success'>Update</Link>
                <button   className="btn btn-danger" onClick={(e)=>deletevalue(user._id)}>delete</button></td>

        </tr>
    })
}
        </tbody>
      </table>

        </div>
        </div>
  )
}
