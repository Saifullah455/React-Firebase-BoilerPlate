import React,{Component} from 'react';
import {connect} from 'react-redux';
import { facebookLogin } from './store/action';
import './App.css';

class App extends Component {
  render() {
    return(
      <button onClick={() => this.props.facebookLogin()}>Facebook Login</button>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  facebookLogin: () => dispatch(facebookLogin())
})

export default connect(null, mapDispatchToProps)(App);
