import React, { useState } from 'react';
import './MainMenu.css';
import accountImage from './account.png';


function MainMenu() {
    const [selectedContactId, setSelectedContactId] = useState(null);

    const contacts = [
        { id: 1, name: 'Contact 1', info: 'Advisor Information for Contact 1' },
        { id: 2, name: 'Contact 2', info: 'Advisee Information for Contact 2' },
        { id: 3, name: 'Contact 3', info: 'Advisee Information for Contact 3' },
        // ... add more contacts as needed
    ];

    const handleContactClick = (contactId) => {
        if (selectedContactId === contactId) {
            setSelectedContactId(null); // Toggle off if the same contact is clicked again
        } else {
            setSelectedContactId(contactId);
        }
    };

    const handleAccountClick = () => {
        // Handle the account button click here
        // For example, navigate to the account page or open a dropdown menu
        console.log("Account icon clicked!");
    };


    return (
        <div className="container">
            {/* Header */}
            <header className="header">
                <nav className="menu">
                    {/* Add menu items here */}
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
                <button onClick={handleAccountClick} className="account-button">
                    <img src={accountImage} alt="Account" />
                </button>
            </header>

            {/* Main Body */}
            <main className="main-content">
                {/* Left Panel */}
                <aside className="contacts-panel">
                    {/* Display contacts as individual buttons */}
                    {contacts.map(contact => (
                        <div key={contact.id} className="contact-container">
                            <button 
                                onClick={() => handleContactClick(contact.id)} 
                                className="contact-button"
                            >
                                {contact.name}
                            </button>
                            {selectedContactId === contact.id && (
                                <div className="contact-info">
                                    {contact.info}
                                </div>
                            )}
                        </div>
                    ))}
                </aside>

                {/* Right Panel */}
                <section className="meetings-panel">
                    {/* Display scheduled meetings as cards */}
                    <div className="meeting-card">
                        <h3>Meeting with Advisor A</h3>
                        <p>Date: 01/01/2023</p>
                        <p>Time: 10:00 AM</p>
                    </div>
                    <div className="meeting-card">
                        <h3>Meeting with Advisor B</h3>
                        <p>Date: 01/01/2023</p>
                        <p>Time: 10:00 AM</p>
                    </div>
                    {/* ... Additional meeting cards ... */}
                </section>
            </main>
        </div>
    );
}

export default MainMenu;
