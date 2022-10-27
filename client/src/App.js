import Home from "./pages/home/home"
import Profile from "./pages/profile/profile"
import Login from "./pages/login/login"
import Register from "./pages/register/register"

import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from 'react-router-dom'



function App(){
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/profile/:username' element={<Profile />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;