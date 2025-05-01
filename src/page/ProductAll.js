import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/action/productAction';

const ProductAll = () => {
  const [query, SetQuery] = useSearchParams();

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);

  const getProduct = async () => {
    let keyword = query.get('q') || '';
    dispatch(productAction.getProduct(keyword));
  };

  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <div className='promotion-grid'>
      {productList?.map((menu) => (
        <ProductCard item={menu} />
      ))}
    </div>
  );
};

export default ProductAll;
