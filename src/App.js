import react, {useState} from'react';
import AdminLoginForm from './components/AdminLoginForm';
import NavBar from './components/NavBar';
import OpenSeats from './components/OpenSeats';
import ClosedSeats from './components/ClosedSeats';
import BookSeats from './components/BookSeats';
import {Reset} from './components/Reset';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

const App = () =>{
  
  return (
    <div className="App">
      <NavBar/>
        <Router>
          <Route path='/OpenSeats' exact component={OpenSeats}/>
          <Route path='/ClosedSeats' exact component={ClosedSeats}/>
          <Route path='/BookSeats' exact component={BookSeats}/>
          <Route path='/AdminLogin' exact component={AdminLoginForm}/>
          <Route path='/Reset' exact component={Reset}/>
        </Router>
    </div>
  );
}

export default App;
