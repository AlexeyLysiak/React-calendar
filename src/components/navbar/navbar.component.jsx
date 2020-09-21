import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

export default class NavbarComponent extends Component {
  render() {
    return (
      <div className='navbar'>
        <Link to='/currentYear'>
          <div>Current year</div>
        </Link>

        <Link to='/currentMonth'>
          <div>Current month</div>
        </Link>
        
        <Link to='/today'>
          <div>Today</div>
        </Link>
      </div>
    )
  }
}