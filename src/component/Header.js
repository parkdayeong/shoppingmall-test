import React from 'react';
import iconLogin from '../images/icon_login.svg';
import iconSearch from '../images/icon_search.svg';
import logo from '../images/logo.svg';
import { useNavigate } from 'react-router-dom';

function Header({ authenticate, setAuthenticate }) {
  const navigate = useNavigate();

  const menuList = [
    '여성',
    'Divide',
    '남성',
    '신생아/유아',
    '아동',
    'H&M',
    'HOME',
    'Sale',
    '지속가능성',
  ];

  const search = (e) => {
    if (e.key == 'Enter') {
      navigate(`?q=${e.target.value}`);
    }
  };

  return (
    <div className='header_wrap'>
      <div className='menu_wrap'>
        <a
          href='#'
          class='logo'
          onClick={() => {
            navigate('/');
          }}
        >
          <img src={logo} />
        </a>

        <ul class='main-nav'>
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href='#'>{menu}</a>
            </li>
          ))}
        </ul>
      </div>
      <div class='user-actions'>
        <div class='search-box'>
          <input type='text' class='search-input' placeholder='검색' onKeyDown={search} />
          <button type='submit' class='search-button'>
            <img src={iconSearch} alt='검색' />
          </button>
        </div>
        {authenticate ? (
          <div className='login-box' onClick={() => setAuthenticate(false)}>
            로그아웃
          </div>
        ) : (
          <div
            className='login-box'
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
