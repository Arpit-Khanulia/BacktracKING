import React from 'react'
import {Routes,Route,Link} from 'react-router-dom';

import Login from './Routes/Login';
import Signup from './Routes/Signup';
import Problems from './Routes/Problems';
import Submissions from './Routes/Submissions';
import About from './Routes/About';
import Solve from './Routes/Solve';
import axios from 'axios';
import Logout from './Routes/Logout';


axios.defaults.baseURL = '/';
// axios.defaults.baseURL = '/';
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}   />
        <Route path='/signup' element={<Signup/>}   />
        <Route path='/problems' element={<Problems/>}   />
        <Route path='/submissions' element={<Submissions/>}   />
        <Route path='/solve' element={<Solve/>}   />
        <Route path='/about' element={<About/>}   />
        <Route path='/logout' element={<Logout/>}   />
      </Routes>
    </div>
  )
}

export default App
