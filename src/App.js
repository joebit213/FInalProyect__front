import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import {NavLink, withRouter} from 'react-router-dom'


class App extends Component {

  logOut = ()=>{
    localStorage.removeItem('user')
    this.props.history.push('/login')
  }


  render() {
    return (
      <div className="App">
      <nav>
        <NavLink  exact to='/'>Home</NavLink>|
        <NavLink  to='/login'>Login</NavLink>|
        <NavLink  to='/signup'>Registrate</NavLink>|
        <NavLink  to='/anuncios'>Noticias</NavLink>|
        <button onClick={this.logOut}>Cerrrar sesion</button>

        </nav>
        <Routes/>
      </div>
    );
  }
}

export default withRouter(App);
