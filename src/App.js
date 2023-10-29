import React from 'react';
import './App.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';

import Auth from './pages/Auth';
import BookAppointment from './pages/appointment/BookAppointment';
import TestFirebaseAuth from './pages/TestFirebaseAuthentication';
import Register from './pages/register/register';
import Login from './pages/login/login';
import MainMenu from './pages/main/MainMenu';
function App() {
    // return (
        // <div className="App">
        //     <Homepage />
        //     {/* <Auth /> */}
        //      {/* <AdvisorProfile /> */}
        //     {/* <BookAppointment /> */}
        //     {/* <TestFirebaseAuth /> */}
        //     <Register />
        // </div>

        return (
          <Router>
            <Routes>
              <Route index element={<Homepage />} path="/" />
              <Route element={<Register />} path="/register" />
              <Route element={<Login />} path="/login" />
              <Route element={<MainMenu />} path="/main" />
            </Routes>




            
            {/* <Route element={<Login />} path="/login" /> */}
            
            
            {/* <Routes>
              <Route index element={<Homepage />} path="/" />
              <Route element={<Login />} path="/login" />
            </Routes> */}

          </Router>
        );


    // );
}




export default App;
