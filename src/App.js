import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Header from './component/Header';
import Visual from './component/Visual';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 2. 전체상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀으나 로그인이 안되어있을경우에는 로그인페이지가 먼저 나온다
// 5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6, 로그아웃 버튼을클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다다
// 8. 로그인을 하면 로그아웃이 보이고, 로그아웃을하면 로그인이 보인다.
// 9. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const location = useLocation();
  const showVisual = location.pathname !== '/login' && !location.pathname.startsWith('/product/');
  useEffect(() => {
    console.log('aaa', authenticate);
  }, [authenticate]);
  return (
    <div>
      <Header authenticate={authenticate} setAuthenticate={setAuthenticate} />
      {showVisual && <Visual />}
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
