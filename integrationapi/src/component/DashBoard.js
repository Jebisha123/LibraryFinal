import React, { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from "axios"
const Dashboard = () => {
    const navigate = useNavigate();
    
    let [data, setData] = useState([]);
   

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("/book");
            console.log(res.data);
            setData(res.data)

    
        }
        
        fetchData()
    }, [])
    console.log(data);
   
    const deleteData = (id) =>{
        
        axios.delete(`/book/${id}`);
        navigate(`/Deletebook`)
            
        
      }
      const updateData = (id) =>{
        
        navigate(`/Up/${id}`)
            
        
      }
      const addData = () =>{
        
        navigate(`/Addbook`)
            
        console.log("yes")
      }

     
      

    
    return (
        <div className='container'>
            
            {data.length && data.map ((ele)=> (<div>

<diV><h1>Book:{ele.bookName}</h1><h1>Author:{ele.bookAuthor}</h1><h4>Quantity:{ele.bookQuantity}</h4></diV>
<button className='btn' onClick={()=>updateData(ele.id)}>Edit</button>

<button className='btn' onClick={()=>deleteData(ele.id)}>delete</button>

<div></div>
{/* <button className='btn'  onClick={()=>addData()}>Add</button> */}
<Link className='btnh' to={`/Addbook`}> <button>Add Book</button></Link>
</div>

            ))}

        

           
        </div>
    );
}

export default Dashboard;