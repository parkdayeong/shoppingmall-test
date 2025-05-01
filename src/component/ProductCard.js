import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  // console.log(item);
  const formatPrice = (price) => {
    return price?.toLocaleString(); // toLocaleString() 메서드 사용
  };
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className='product-card' onClick={showDetail}>
      <div class='product-image-placeholder'>
        <img className='product-image' src={item?.img} />
      </div>
      <div class='product-info'>
        <p class='conscious-choice'>{item?.choice == true ? 'Conscious Choice' : ''}</p>
        <p class='product-name'>{item?.title}</p>
        <div class='price-info'>
          <span class='discount-rate'>{item?.discount}%</span>
          <span class='discount-price'>{formatPrice(item?.price)} 원</span>
          <span class='original-price'>100,000 원</span>
        </div>
        <p class='free-shipping'>{item?.new == true ? '#신제품' : ''}</p>
      </div>
    </div>
  );
};

export default ProductCard;
