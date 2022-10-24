import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidation, setValidation] = useState(true);

  function disableValidation() {
    const NUMBER_MIN = 6;
    const regex = /\S+@\S+\.\S+/;
    const validacion = regex.test(email);
    const condicion = password.length >= NUMBER_MIN;

    const validation = (
      !validacion
      || !condicion
    );
    setValidation(validation);
  }

  function handleEmail({ target: { value } }) {
    setEmail(value);
    disableValidation();
  }

  function handlePassword({ target: { value } }) {
    setPassword(value);
    disableValidation();
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ handleEmail }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ handlePassword }
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ isValidation }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
