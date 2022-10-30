import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <App />
    <Router>
        <Navbar />
        <Routes>
     
          <Route path="/home"  element={<Home/>} />,
          <Route path="/categories"  element={<Categories/>} />,
       
          <Route path="/about"  element={<About/>} />,
         
  
          <Route path="/contact"  element={<Contact/>} />,
        </Routes>
        
        

      <Footer/>
     
      </Router>
  </React.StrictMode>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
