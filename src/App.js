import React from 'react';
import './App.css';
import Auth from './pages/Auth';
import AdvisorProfile from './pages/advisorRegistration/AdvisorProfile';
import BookAppointment from './pages/appointment/BookAppointment';
import TestFirebaseAuth from './pages/TestFirebaseAuthentication';

function App() {
    return (
        <div className="App">
            <Auth />
            <AdvisorProfile />
            <BookAppointment />
            {/* <TestFirebaseAuth /> */}
        </div>
    );
}

export default App;
