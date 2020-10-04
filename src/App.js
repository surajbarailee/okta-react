import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react'
function onAuthRequired({history}){

}
function App() {
  return (
    <Router>
      <Security issuer='https://dev-446795.okta.com/oauth2/default'
                  clientId='0oa6e93kMnZjmgDmV5d5'
                  redirectUri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired}>
    <div className="App">
    <SecureRoute path='/home' exact={true} component={Home}/>
      <Route path='/login' exact={true} render={() => <Login baseUrl='https://dev-446795.okta.com' />} />
      <Route path='/implicit/callback'  exact={true} component={LoginCallback} />
    </div>
    </Security>

    </Router>
  );
}

export default App;
