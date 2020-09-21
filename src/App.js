import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { YearPage, Navbar, Month } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <Route
          path='/currentYear'
          exact
          render={() => {
            const today = new Date();
            const redirectPath = `/year/${today.getFullYear()}`;
            return <Redirect to={redirectPath} />;
          }}
        />

        <Route
          path='/currentMonth'
          exact
          render={() => {
            const today = new Date();
            const redirectPath = `/year/${today.getFullYear()}/month/${
              today.getMonth() + 1
            }`;
            return <Redirect to={redirectPath} />;
          }}
        />

        <Route
          path="/today"
          exact
          render={() => {
            return (
              <div className='/today'>
                {new Date().toLocaleString('default', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            );
          }}
        />

        <Route
          path='/year/:year'
          exact
          render={({ match }) => {
            return <YearPage year={match.params.year} />;
          }}
        />

        <Route
          path='/year/:year/month/:month'
          render={({ match }) => {
            return (
              <Month
                startDate={
                  new Date(
                    Number(match.params.year),
                    Number(match.params.month) - 1
                  )}
              />
            );
          }}
        />
      </div>
    </Router>
  );
}

export default App;
