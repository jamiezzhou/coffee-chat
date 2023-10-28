// src/components/Auth.js

import React, { useState } from 'react';
import { auth } from '../firebase';

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            alert('Registration successful!');
        } catch (error) {
            alert(error.message);
        }
    };

    const login = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            alert('Login successful!');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h2>Register / Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Auth;
