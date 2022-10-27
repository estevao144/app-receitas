import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const handleSubmit = () => localStorage.setItem('user', JSON.stringify({ email }));

  return (
    <div>
      <form>
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
        <Link to="/meals">
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ isValidation }
            onClick={ handleSubmit }
          >
            Enter
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
