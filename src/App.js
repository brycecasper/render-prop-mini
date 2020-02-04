import React from 'react';
import './App.css';
import LoginForm from './components/loginForm';
import RegistrationForm from './components/registrationForm';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <RegistrationForm />
    </div>
  );
}

export default App;
