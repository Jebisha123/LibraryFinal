import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'
function Login()
{
    let [data,setData] = useState({})
    const navigate = useNavigate();
    const handlechange=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })

    }
    async function sendData()
    {
        let res = await axios.post("/login",data)
        console.log(res.data)
        if(res.data =="success")
        navigate('/DashBoard')
    
       
    }

    return(
        <>
        <div className='main'>
          <div> <label>Email:</label>
            <input required type="text" placeholder='email' name='email' onChange={handlechange}/></div>
          <div><label>Password:</label>  <input required type="text" placeholder='password' name='password' onChange={handlechange} /></div>
         <div>  <input className='btn' type="submit" onClick={sendData}/>
            <Link to={`/Signin`}>Register here</Link></div>
        </div>
        </>
    )
}
export default Login;