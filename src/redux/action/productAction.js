function getProduct(keyword) {
  return async (dispatch, getState) => {
    const url = `https://my-json-server.typicode.com/parkdayeong/shoppingmall-test/products?q=${keyword}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
  };
}

export const productAction = { getProduct };
