import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import  React ,{ useEffect, useState } from "react";

export default function Update() {
    const {id}= useParams()
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [age,setage]=useState()
    const [Dob,setDob]=useState()
    const [mobile,setmobile]=useState() 
    const [course,setcourse]=useState()
    const [city,setcity]=useState()
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3002/getaUser/'+id)
        .then(result=>{ console.log(result)
            setname(result.data.name)
            setemail(result.data.email)
            setage(result.data.age)
            setDob(result.data.Dob)
            setmobile(result.data.mobile)
            setcourse(result.data.course)
            setcity(result.data.city)
         } )
        .catch(error=> console.log(error));
    },[])
    const submit=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3002/user/'+id,{name,email,age,Dob,mobile,course,city})
        .then(result=>{console.log(result)
            navigate('/')
        })
        .catch(error=>console.log(error))
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
        <form onSubmit={submit}>
            <h2>Update user</h2>
            <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="enter the name" className="form-control" 
                 value={name}  onChange={(e)=>setname(e.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="enter the Email" className="form-control" 
                value={email}  onChange={(e)=>setemail(e.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="">Age</label>
                <input type="text" placeholder="enter the age" className="form-control" 
                value={age} onChange={(e)=>setage(e.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="">Dob</label>
                <input type="date" placeholder="enter the Dob" className="form-control" 
                value={Dob} onChange={(e)=>setDob(e.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="">Mobile</label>
                <input type="text" placeholder="enter the Mobile" className="form-control" 
                value={mobile} onChange={(e)=>setmobile(e.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="">Course</label>
                <input type="text" placeholder="enter the Course" className="form-control" 
                value={course} onChange={(e)=>setcourse(e.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="">City</label>
                <input type="text" placeholder="enter the City" className="form-control" 
               value={city}  onChange={(e)=>setcity(e.target.value)}></input>
            </div>
            <button className="btn btn-success">submit</button>
        </form>
        </div>
        </div>
  )
}
