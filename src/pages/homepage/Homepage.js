// import React from 'react'; 
// // import { Link } from 'react-router-dom'
// import './Homepage.css'; 
//  //import '../../global.css'; 
// function Homepage() {
//     return (
//       <div>
//         <h1>Welcome to CoffeeChat</h1>
//         <p>
//           Thank you for visiting our website. We offer a wide range of products and services to meet your needs.
//         </p>
//         <img src="your-image-url-here" alt="Homepage Image" />
//         <p>
//           To learn more about what we offer, please explore the following sections:
//         </p>
//         <ul>
//           <li>
//             <a href="/products">Products</a>
//           </li>
//           <li>
//             <a href="/services">Services</a>
//           </li>
//           <li>
//             <a href="/about">About Us</a>
//           </li>
//           <li>
//             <a href="/contact">Contact Us</a>
//           </li>
//         </ul>
//       </div>
//     );
//   }
  
//   export default Homepage;


import React from 'react';
import './Homepage.css'; 
import { HashRouter as Router, Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Are you a confused student or an Upperclassman?</h1>
      <p style={styles.paragraph}>
        Welcome to our platform! We understand that school can be challenging.
        Whether you are a newcomer trying to navigate your school life, or an upperclassman
        with vast experience, we have resources tailored just for you. Make a choice below
        to get started.
      </p>
      <div style={styles.buttonContainer}>
        <Router>
          <Link to="/student" style={styles.linkButton}>I'm a Confused Student</Link>
          <Link to="/upperclassman" style={styles.linkButton}>I'm an Upperclassman</Link>
        </Router>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  header: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: '2em',
    marginBottom: '20px',
  },
  paragraph: {
    marginBottom: '40px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  linkButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    transition: 'background-color 0.4s',
    cursor: 'pointer',
    borderRadius: '12px',
    marginBottom: '20px',
  },
};

export default Homepage;
