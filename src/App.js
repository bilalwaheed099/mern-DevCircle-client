import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Landing from './Components/Layout/Landing';
import Register from './Components/Layout/Register';
import Login from './Components/Layout/Login';
import Dashboard from './Components/Layout/Dashboard';
import CreateProfile from './Components/Layout/CreateProfile';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authAction';
import store from './store';
import { logoutUser} from './actions/authAction'


if(localStorage.jwtToken) {
  
  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);

  store.dispatch(setCurrentUser(decoded));

          //check for expired token
          const currentTime = Date.now() / 1000;
          if(decoded.exp < currentTime) {
          //logout user
              store.dispatch(logoutUser)
          //clear current profile
  
          // redirect to login page
          window.location.href = '/login';
          }
}



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/register' exact>
          <Navbar />
          <Register />
        </Route>
        <Route path='/' exact>
          <Navbar />
          <h1>home page</h1>
        </Route>        
        <Route path='/login' exact>
          <Navbar />
          <Login />
        </Route>
        <Route path='/dashboard' exact>
          <Navbar />
          <Dashboard />
        </Route>
        <Route path='/create-profile' exact>
          <Navbar />
          <CreateProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
