// src/components/BookAppointment.js
import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';  // Updated import

function BookAppointment() {
    const [advisors, setAdvisors] = useState([]);
    const [selectedAdvisor, setSelectedAdvisor] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const q = query(collection(db, 'Advisors'));
        onSnapshot(q, (snapshot) => {
            const advisorData = [];
            snapshot.docs.forEach((doc) => advisorData.push({ ...doc.data(), id: doc.id }));
            // this.setState({ advisors: advisorData });
        });
    }, []);

    const book = async () => {
        try {
            alert('Appointment booked!');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h2>Book an Appointment</h2>
            <select value={selectedAdvisor} onChange={(e) => setSelectedAdvisor(e.target.value)}>
                {advisors.map((advisor) => (
                    <option key={advisor.id} value={advisor.id}>
                        {advisor.name}
                    </option>
                ))}
            </select>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button onClick={book}>Book</button>
        </div>
    );
}

export default BookAppointment;
