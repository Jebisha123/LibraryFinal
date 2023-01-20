
import logo from './logo.svg';
import './App.css';
import Signup from './component/Signup'
import Up from './component/Up'
import Update from './component/Update';
import Signin from './component/Signin';
import Addbook from './component/Addbook';
import Header from './component/Header';
import Deletebook from './component/Deletebook';
import {
 
  Routes,
  Route,

} from "react-router-dom";
import Dashboard from './component/DashBoard';

import Login from './component/Login';
function App() {
  return (
    <>
    <Header></Header>
    <Routes>
 
   <Route path='/' element={<Login/>}></Route>
   
   <Route path='/DashBoard' element={<Dashboard/>}></Route>
   <Route path='/Signup' element={<Signup/>}></Route>
   <Route path='/Signin' element={<Signin/>}></Route>
   <Route path='/Login' element={<Login/>}></Route>
   <Route path='/Addbook' element={<Addbook/>}></Route>
   <Route path='/Up/:id' element={<Up/>}></Route> 
   <Route path='/Deletebook' element={<Deletebook/>}></Route>
   </Routes>
   </>
  );
}

export default App;