import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, SetQuery] = useSearchParams();

  const getProduct = async () => {
    let keyword = query.get('q') || '';
    const url = `https://my-json-server.typicode.com/parkdayeong/shoppingmall-test/products?q=${keyword}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <div className='promotion-grid'>
      {productList.map((menu) => (
        <ProductCard item={menu} />
      ))}
    </div>
  );
};

export default ProductAll;
