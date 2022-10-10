import React, {Component} from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register';

class App extends Component {
  
  state = {
    visible: true
  };

render() {
  const buttonText = this.state.visible? "Register" : "Login";
  const form = this.state.visible? (
    <Login /> 
  ) : (
    <Register />
  );
  
  return (
    <div className='App'>
      {form}
      <button className='renderbttn' onClick={() => {
        this.setState({ visible: !this.state.visible});
      }}
      >
      {buttonText}
      </button>
  </div>
  );
}
}
export default App;
