import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignInWidget from './signinWidget';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Login extends Component {
  

  onSuccess=(res)=> {
    if (res.status === 'SUCCESS') {
      return this.props.authService.redirect({
        sessionToken: res.session.token
      });
   } else {
   
    }
  }

  onError=(err)=> {
    console.log('error logging in', err);
  }

  render() {
    if (this.props.authState.isPending) return null;
    return this.props.authState.isAuthenticated ?
      <Redirect to={{ pathname: '/home' }}/> :
      <SignInWidget
        baseUrl={this.props.baseUrl}
        onSuccess={this.onSuccess}
        onError={this.onError}/>;
  }
});