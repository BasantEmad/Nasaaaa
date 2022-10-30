import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";


function Home() {
  return (
   
      <div className="headerContainer">
        <h1> WELCOME TO NASA WEBSITE</h1>
        
        <Link to="/categories">
          <button> HAVE A LOOK</button>
        </Link>

        <div className="rightSide">
        <h1> SIGN IN </h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter name " type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email " type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message"
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
      </div>

      
    
  );
}



export default Home;
