// src/components/AdvisorProfile.js

import React, { useState } from 'react';
import { db } from '../../firebase';  // Updated import

function AdvisorProfile() {
    const [name, setName] = useState('');
    const [credentials, setCredentials] = useState('');

    const createProfile = async () => {
        try {
            await db.collection('advisors').add({
                name,
                credentials
            });
            alert('Profile created!');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h2>Create Advisor Profile</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                placeholder="Credentials"
                value={credentials}
                onChange={(e) => setCredentials(e.target.value)}
            />
            <button onClick={createProfile}>Create Profile</button>
        </div>
    );
}

export default AdvisorProfile;
