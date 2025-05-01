import React from 'react';
import loginImg from '../images/login.png';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const userLogin = (e) => {
    e.preventDefault();
    console.log('login function');
    setAuthenticate(true);
    navigate('/');
  };
  return (
    <div className='main-content-centered'>
      <div class='signin-section'>
        <div class='signin-form-area'>
          <h2>Sign in</h2>
          <form onSubmit={userLogin}>
            <div class='form-group'>
              <label for='email'>Email</label>
              <input type='email' id='email' placeholder='이메일 주소를 입력해주세요' />
            </div>
            <div class='form-group'>
              <label for='password'>Password</label>
              <input type='password' id='password' placeholder='비밀번호를 입력해주세요' />
            </div>
            <button type='submit' class='signin-button'>
              Sign In
            </button>
          </form>
          <div class='options'>
            <div class='remember-me'>
              <input type='checkbox' id='remember' />
              <label for='remember'>Remember me</label>
            </div>
            <a href='#' class='need-help'>
              Need help?
            </a>
          </div>
          <div class='signup-link'>
            Don't have an account? <a href='#'>Sign up</a>
          </div>
          <div class='recaptcha-text'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
            <a href='#'>Learn more.</a>
          </div>
        </div>
        <div class='signin-image-area'>
          <img src={loginImg} alt='로그인 이미지' />
        </div>
      </div>
    </div>
  );
};

export default Login;
