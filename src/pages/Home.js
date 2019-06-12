import React from "react";
import '../css/Home.css';
import logo from  '../images/books.png';

const Home = () => {
  return (
    <div className='welcome-container'>
      <img src={logo} alt="Logo" />
      <h1 className='title'>WELCOME TO</h1>
      <h2 className='second-line'>A Platform for Managing Students and Campuses</h2>
      <p className='welcome-text'>Using Node, Express, React, Redux, PostgreSQL, 
      and Sequelize, build a RESTful full-stack web application to manage students
      and campuses. This will cover all of the CRUD operations such as Creation, 
      Reading, Updating, and Deletion. This will encompass models, querying a database 
      with an ORM, designing routes/endpoints and handler functions to process user 
      requests and generate responses, writing out React Components, managing the state 
      of the application with React-Redux, and much more. </p>
  </div>
  )
};

export default Home;
