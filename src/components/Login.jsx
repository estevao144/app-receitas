import React from 'react';

function Login() {
  return (
    <div>
      <form>
        <input type="text" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button
          type="button"
          data-testid="login-submit-btn"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
