import React, { useState } from 'react';
import './register.css'; 
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Assuming you've set up your Firestore instance in firebase.js
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    role: 'student',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
      alert('Password and confirmation password do not match!');
      return; // Exit the function early
  }

    // Determine the collection based on the role
    const targetCollection = formData.role === 'student' ? 'Advisees' : 'Advisors';

    try {
      // Add the formData to the appropriate collection
      const advisorsCollection = collection(db, targetCollection);
      await addDoc(advisorsCollection, {
        username: formData.username,
        email: formData.email,
        password: formData.password, // Note: Storing passwords in plain text is not secure. Consider using Firebase Authentication.
        // Add any other fields you want to store
      });
      alert('Registration successful!');
      navigate('/mainmenu');
    } catch (error) {
      alert('Error registering: ', error.message);
    }
};

  return (
    <div className="register-container">
      <h2>Register Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="advisor">Advisor</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
         
        <button className="register-button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
