import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link ,useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Up()
{
    let [data,setData] = useState({})
   const {id} = useParams()
    const navigate = useNavigate();
    const handlechange=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })

    }
    async function updateData()
    {
        let res = await axios.put(`/book/${id}`,data)
        console.log(res.data)
        
        
    }

    return(
        <>
        <input type="text" placeholder='bookName' name='bookName' onChange={handlechange} />
            <input type="text" placeholder='bookAuthor' name='bookAuthor' onChange={handlechange}/>
            <input type="text" placeholder='bookQuantity' name='bookQuantity' onChange={handlechange} />
            <input type="submit" onClick={updateData}/>
          <Link to={`/DashBoard`}> <button>Home</button></Link>
        </>
    )
}
export default Up;