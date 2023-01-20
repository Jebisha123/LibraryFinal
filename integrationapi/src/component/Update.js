import React, { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from "axios"
const Update = () => {
    const navigate = useNavigate();
    // useEffect ,dependency array should be empty
    //axios 
    // store the data in state and than we will map it inside our react component
    let [data, setData] = useState([]);
   

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("/book");
            console.log(res.data);
            setData(res.data)

            // arryay of objects
        }
        
        fetchData()
    }, [])
    console.log(data);
   
    const deleteData = (id) =>{
        
        axios.delete(`/book/${id}`);
            
        
      }
    //   const updateData = (id) =>{
        
    //     navigate(`/Update/${id}`)
            
        
    //   }
        // setData(res.data)

        // arryay of objects
    
    

    
     
      

    
    return (
        <div>
            
            {data.length && data.map ((ele)=> (<div>

<diV>{ele.bookName}---------{ele.bookAuthor}</diV>
<Link to={`Up/${ele.id}`}><button>edit</button></Link>
{/* <button onClick={()=>updateData(ele.id)}>edit</button> */}
<button onClick={()=>deleteData(ele.id)}>delete</button>
<div></div>
</div>

            ))}

            
             {/* <Searchbox
 setinputValue={setinputValue} /> */}

           
        </div>
    );
}

export default Update;