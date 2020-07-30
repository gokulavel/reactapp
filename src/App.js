import React from 'react';
// import LoginPage from './pages/LoginPage';
import Restaurant from './pages/Restaurant';
import LoginPage from './pages/LoginPage';
import Oderpage from './pages/Oderpage';
import {browser,router, BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
      <Route exact path={"/"}component ={LoginPage}/>
      <Route exact path={"/Restaurant"}component ={Restaurant}/>
      </BrowserRouter>
    )
  }
}

export default App;