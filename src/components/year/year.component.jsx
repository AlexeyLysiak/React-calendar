import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Month } from '..';
import './year.css'

export default class YearComponent extends Component {
  
  render() {

    const months = Array(12).fill(null).map((x, index) => new Date(this.props.year, index, 1));

    return (
      <div className='calendar'>

        <div className='year-header'>
          <Link className='link-btn' to={`/year/${this.props.year - 1}`}>
            <button className='year-switch'>-</button>
          </Link>
          
          <span className='current-year'>{this.props.year}</span>
          
          <Link className='link-btn' to={`/year/${Number(this.props.year) + 1}`}>
            <button className='year-switch'>+</button>
          </Link>
        </div>
        
        <div className='year-main'>
          { months.map(startDate => (
            <Month key={startDate.toISOString()} startDate={startDate} />
          )) }
        </div>

      </div>
    )
  }
}
