import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, Route, withRouter } from 'react-router'
// my components
import Alerts from './containers/Alerts/Alerts'
import Header from './containers/Header/Header'
import SecretData from './SecretData'
import RegisterForm from './containers/RegisterForm/registerForm'
import Signin from './containers/SigninForm/SigninComponent'

class App extends Component {
  // constructor() {
  //   super()
  // }
  render() {
    return (
      <div id="App">
      <Alerts></Alerts>
        <Header></Header>
        <br />
        {/*  ROUTES */}
        <Route exact path='/' component={SecretData} />
        <Route exact path='/register' component={RegisterForm}/>
        <Route exact path='/signin' component={Signin}/>
        
      </div>
    )
  }
}

/*  ===== PropTypes  =========
* 
*/
// React compnents have a property of propTypes (lower case p!)
App.propTypes = {
  user: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  // flashMsg: PropTypes.object.isRequired,
}

/*  ===== connect to redux store  =========
* - mapStateToProps function passes redux store as a prop into app component
*/
const mapStateToProps = function (store) {
  return {
    user: store.authenticate.user,
    loggedIn: store.authenticate.loggedIn,
    flashMsg: store.authenticate.flashMsg
  }
}

export default withRouter(connect(mapStateToProps)(App))