import React from 'react';
import mainImg from '../images/main.png';

const Visual = () => {
  return (
    <div class='visual-container'>
      <div class='visual-slide'>
        <img src={mainImg} alt='메인 비주얼 1' />
        <div class='slide-content'>
          <h2>진짜 살만한 혜택, 오직 하루만!</h2>
          <p>10% 추가 할인 혜택과 함께 다양한 상품을 만나보세요.</p>
        </div>
      </div>
      <button class='slide-prev'>&lt;</button>
      <button class='slide-next'>&gt;</button>
      <div class='slide-indicators'>
        <button class='active'></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Visual;
