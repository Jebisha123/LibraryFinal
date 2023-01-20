
//
import React, { useState, useEffect } from 'react';
import axios from "axios"
const Dashboard = () => {

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

    //inside map have either return or have () 
    //{data.length && data.map((ele) => (<div></div>))} 
    return (
        <div>


            {data.length ? data.map((ele) => (
                <div>
                    <div><h4>Book -----{ele.bookName}------Author----{ele.bookAuthor}</h4></div>
                    
                    
                </div>
            )) : <div>No data...</div>
            }
        </div>
    );
}

export default Dashboard;
