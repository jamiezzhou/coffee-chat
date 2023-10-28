import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Auth from './pages/Auth';
import AdvisorProfile from './pages/advisorRegistration/AdvisorProfile';
import BookAppointment from './pages/appointment/BookAppointment';
import TestFirebaseAuth from './pages/TestFirebaseAuthentication';

function App() {
    return (
        <div className="App">
            <Homepage />
            {/* <Auth /> */}
            {/* <AdvisorProfile />
            <BookAppointment /> */}
            {/* <TestFirebaseAuth /> */}
        </div>
    );
}

export default App;
