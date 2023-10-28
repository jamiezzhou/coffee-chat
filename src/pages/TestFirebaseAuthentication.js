// TestFirebaseAuth.js

import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function TestFirebaseAuth() {
    const handleTestAuth = () => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, '123456@gmail.com', '123456')
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("Successfully signed in:", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error signing in:", errorCode, errorMessage);
            });
    };

    return (
        <div>
            <button onClick={handleTestAuth}>Test Firebase Auth</button>
        </div>
    );
}

export default TestFirebaseAuth;

