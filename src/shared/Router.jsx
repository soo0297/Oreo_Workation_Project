import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MyPage from '../pages/MyPage';
import Layout from './Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
