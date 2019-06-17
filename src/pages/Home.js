import React from "react";
import '../css/Home.css';
import logo from  '../images/books.png';

import Jumbotron from "../components/Jumbotron";

const Home = () => {
  return (
    <div className='welcome-container'>
      {/* <img src={logo} alt="Logo" /> */}
      <Jumbotron 
        mainText='A Platform for Managing Students and Campuses'
        subText="a RESTful full-stack web application to manage students
                and campuses."
        slogan="Simple Solutions to Complicated Problems"
      />  
  </div>
  )
};

export default Home;
