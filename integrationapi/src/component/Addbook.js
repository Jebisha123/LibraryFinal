import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Addbook()
{
    let [data,setData] = useState({})
    const navigate = useNavigate();
    const handlechange=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })

    }
    async function addData()
    {
        let res = await axios.post("/book",data)
        console.log(res.data)
        
        navigate('/DashBoard')
    }

    return(
        <div>
            <input type="text" placeholder='bookName' name='bookName' onChange={handlechange} />
            <input type="text" placeholder='bookAuthor' name='bookAuthor' onChange={handlechange}/>
            <input type="text" placeholder='bookQuantity' name='bookQuantity' onChange={handlechange} />
            <input type="submit" onClick={addData}/>
            <Link to={`/DashBoard`}> <button>Home</button></Link>
            
        </div>
    )
}
export default Addbook;