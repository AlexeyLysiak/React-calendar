import React, { Component } from 'react';
import './month.css';
import { Link } from 'react-router-dom';
import { Day } from '..';

export default class MonthComponent extends Component {

  render() {
    const startDate = this.props.startDate;
    const title = startDate.toLocaleString('default', {month: 'long'});

    const tempDate = new Date(startDate);
    const days =[];

    const weekDay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    let day = 1;
    while (tempDate.getMonth() === startDate.getMonth()) {
      days.push(day);
      day = day + 1;
      tempDate.setDate(day);
    }

    for (let i = startDate.getDay(); i > 0; i--) {
      days.unshift('');
    }

    return (
      <div className="month">
        <div className="month-header">
          <Link to={`/year/${startDate.getFullYear()}/month/${startDate.getMonth() + 1}`} >
            { title }
          </Link>
        </div>
        
        <div className="days">
          {weekDay.map((day, index) =>  <div key={'title' + index} className='day day-title'>{ day }</div>)}
          {days.map((day, index) => <div key={index} className='day'>{ day }</div>)}
        </div>
      </div>
    )
  }
}