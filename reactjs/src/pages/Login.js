import React, { Component } from 'react';
import twitterLogo from '../twitter.svg';
import './Login.css'

// import { Container } from './styles';

export default class Login extends Component {
  state = {
      
  }  

  render() {
    return (
        <div className="login-wrapper">
            <img src={twitterLogo} alt='GoTwitter'/>
            <form>
                <input placeholder='Nome de usuário'/>
                <button type='submit'>Entrar</button>
            </form>
        </div>
    );
  }
}
