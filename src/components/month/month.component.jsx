import React, { Component } from 'react';
import './month.css';

export default class MonthComponent extends Component {

  render() {
    const month = this.props.startDate;
    const title = month.toLocaleString('default', {month: 'long'});

    const tempDate = new Date(month);
    const days =[];

    const weekDay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    let day = 1;
    while (tempDate.getMonth() === month.getMonth()) {
      days.push(day);
      day = day + 1;
      tempDate.setDate(day);
    }

    for (let i = month.getDay(); i > 0; i--) {
      days.unshift('');
    }

    return (
      <div className="month">
        <div className="month-header">
          { title }
        </div>
        
        <div className="days">
          {weekDay.map(day =>  <div className='day day-title'>{ day }</div>)}
          {days.map(day => <div className='day'>{ day }</div>)}
        </div>
      </div>
    )
  }
}