import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Create() {
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [age,setage]=useState()
    const [Dob,setDob]=useState()
    const [mobile,setmobile]=useState()
    const [course,setcourse]=useState()
    const [city,setcity]=useState()
    const navigate=useNavigate()
    const submit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/user',{name,email,age,Dob,mobile,course,city})
        .then(result=>{console.log(result)
        navigate('/')
    })
    .catch(err=>console.log(err))

}

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
        <form onSubmit={submit}>
            <h2>add user</h2>
            <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="enter the name" className="form-control" required
                onChange={(e)=>setname(e.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="enter the Email" className="form-control" required
                onChange={(e)=>setemail(e.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="">Age</label>
                <input type="text" placeholder="enter the age" className="form-control" required
                onChange={(e)=>setage(e.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="">Dob</label>
                <input type="date" placeholder="enter the Dob" className="form-control" required
                onChange={(e)=>setDob(e.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="">Mobile</label>
                <input type="text" placeholder="enter the Mobile" className="form-control" required
                onChange={(e)=>setmobile(e.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="">Course</label>
                <input type="text" placeholder="enter the Course" className="form-control" required
                onChange={(e)=>setcourse(e.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="">City</label>
                <input type="text" placeholder="enter the City" className="form-control" required
                onChange={(e)=>setcity(e.target.value)}></input>
            </div>
            <button className="btn btn-success">submit</button>
        </form>
        </div>
        </div>
  )
}
