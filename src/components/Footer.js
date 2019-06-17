import React, {Component} from 'react';
import '../css/Footer.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString()
    };
  }
  render() {
    return (
      <footer className="footer">
          <div className="footer-text">
               <strong>Platform for Managing Students and Campuses</strong> by
               <a href="https://.com"> Responsify Team</a>. The source code is licensed
               <a href="https://www.lehman.cuny.edu/"> <strong>Lehman College</strong></a>.
             <h4>{`\xA9 ${this.state.date}`}</h4>
          </div>
      </footer>
    );
  }
}