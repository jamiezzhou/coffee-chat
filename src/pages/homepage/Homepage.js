import './Homepage.css'; 

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

// import React from 'react';
// import './Homepage.css'; 
// import { HashRouter as Router, Link } from 'react-router-dom';

// const Homepage = () => {
//   return (
//     <div className="container">
//       <h1 className="header">Are you a confused student or an Upperclassman?</h1>
//       <p className="paragraph">
//         Welcome to our platform! We understand that school can be challenging.
//         Whether you are a newcomer trying to navigate your school life, or an upperclassman
//         with vast experience, we have resources tailored just for you. Make a choice below
//         to get started.
//       </p>
//       <div className="buttonContainer">
//         <Router>
//           <Link to="/student" className="linkButton">I'm a Confused Student</Link>
//           <Link to="/upperclassman" className="linkButton">I'm an Upperclassman</Link>
//         </Router>
//       </div>
//     </div>
//   );
// };

// export default Homepage;




import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="container">
      <h1 className="header">Are you a confused student or an Upperclassman?</h1>
      <p className="paragraph">
        Welcome to our platform! We understand that school can be challenging.
        Whether you are a newcomer trying to navigate your school life, or an upperclassman
        with vast experience, we have resources tailored just for you. Make a choice below
        to get started.
      </p>
      <div className="buttonContainer">
        
          <Link to="/Login" className="linkButton">Login</Link>
          <Link to="/Register" className="linkButton">Register</Link>
      </div>
    </div>
  );
};

export default Homepage;
