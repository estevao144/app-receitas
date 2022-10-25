import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Login({ history }) {
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
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
  }

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
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ isValidation }
          onClick={ handleSubmit }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
