import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Signin()
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
        let res = await axios.post("/user",data)
        console.log(res.data)
        
        navigate('/Login')
    }

    return(
        <div>
            <input type="text" placeholder='name' name='name' onChange={handlechange} />
            <input type="text" placeholder='email' name='email' onChange={handlechange}/>
            <input type="text" placeholder='password' name='password' onChange={handlechange} />
            <input type="submit" onClick={sendData}/>
            
        </div>
    )
}
export default Signin;