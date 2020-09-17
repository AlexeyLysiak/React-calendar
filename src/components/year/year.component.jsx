import React, { Component } from 'react';
import { Month } from '..';
import './year.css'

export default class YearComponent extends Component {
  
  state =  {
    currentYear: new Date().getFullYear(),
  }

  handleDecreaseYear = e => {
    this.setState({
      currentYear: this.state.currentYear - 1
    })
  }
  handleIncreaseYear = e => {
    this.setState({
      currentYear: this.state.currentYear + 1
    })
  }


  render() {

    const months = Array(12).fill(null).map((x, index) => {
      return (
        <Month startDate={new Date(this.state.currentYear, index, 1)} />
      )
    })

    return (
      <div className='calendar'>

        <div className='year-header'>
          <button className='year-switch' onClick={this.handleDecreaseYear}>-</button>
          <span className='current-year'>{this.state.currentYear}</span>
          <button className='year-switch' onClick={this.handleIncreaseYear}>+</button>
        </div>
        
        <div className='year-main'>
          { months }
        </div>

      </div>
    )
  }
}
