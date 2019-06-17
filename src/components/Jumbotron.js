import React from 'react';
import '../css/Jumbotron.css';

const Jumbotron = (props) => {
    return(
        <div className="jumbotron">
            <h1 className='title'>WELCOME TO</h1>
            <h1 className='title'>{props.mainText}</h1>
            <p>{props.subText}</p>
            <h3>{props.slogan}</h3>
            <button>
                <a href="https://github.com/eviled23/full-stack-project1-frontend/commits/master"> Learn More </a>
            </button>
        </div>
    )
}

export default Jumbotron;