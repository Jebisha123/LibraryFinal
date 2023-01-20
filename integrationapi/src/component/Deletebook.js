import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Deletebook = () => {
    const navigate = useNavigate();
 const  del=()=>{ navigate(`/DashBoard`)}
    return (
        <div>

<div>Book Deleted</div>
         <button onClick={del}>Home</button>
        </div>
    );
}

export default Deletebook;