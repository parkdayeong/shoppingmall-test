import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/parkdayeong/shoppingmall-test/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className='main-content-product'>
      <div className='product-display-container'>
        <div className='product-image-area'>
          <img src={product?.img} alt='상품 이미지' />
        </div>
        <div className='product-info-area'>
          <div className='product-category'>{product?.choice == true ? 'Consious Choice' : ''}</div>
          <h2 className='product-title'>{product?.title}</h2>
          <div className='product-style-code'>스타일 #1081665001</div>

          <div className='product-price'>
            <span className='original-price'>99,000원</span>
            <span className='discounted-price'>{product?.price}원</span>
            <span className='discount-percentage'>{product?.discount}%</span>
          </div>

          <div className='size-selection'>
            <label for='size'>사이즈</label>
            <select id='size' name='size'>
              <option value=''>사이즈 선택</option>
              {product?.size.map((size, index) => (
                <option key={index}>{size}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
