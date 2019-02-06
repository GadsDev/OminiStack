import React, { Component } from 'react';
import twitterLogo from '../twitter.svg';
import './Login.css'

// import { Container } from './styles';

export default class Login extends Component {
  state = {
      username: '',
  };  

  handleSubmit = event =>{
      event.preventDefault();//Evitar comportamento padrão do form

      const { username } = this.state;
      if(!username.length) return;

      localStorage.setItem('@GoTwitter:username', username);//Salvar informação no navegador

      this.props.history.push('/timeline')
  };

  handleInputChange = (event) => {
      this.setState({ username: event.target.value})
  };
  
  render() {
    return (
        <div className="login-wrapper">
            <img src={twitterLogo} alt='GoTwitter'/>
            <form onSubmit={this.handleSubmit}> 
                <input
                value={this.state.username}
                onChange={this.handleInputChange}
                placeholder='Nome de usuário'
                />
                <button type='submit'>Entrar</button>
            </form>
        </div>
    );
  }
}
