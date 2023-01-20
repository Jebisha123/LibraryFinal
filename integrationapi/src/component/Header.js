import React, { useState, useEffect } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {

   
    return (
        <div>

<div className="main">Welcome to Library

<Link  className='btnh' to={`/Logout`}> <button>LogOut</button></Link>
<Link  className='btnh' to={`/Login`}> <button>Login</button></Link>
</div>
<div >
</div>

        </div>
    );
}

export default Header;
