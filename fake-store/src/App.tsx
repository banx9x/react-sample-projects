import { Layout, Terminal } from 'components';
import { Cart, Category, Checkout, Detail, Home, Profile } from 'pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='category/:categoryId' element={<Category />} />
        <Route path='product/:productId' element={<Detail />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='profile' element={<Profile />} />
        <Route
          path='*'
          element={<Terminal code={404} text='Page Not Found' />}
        />
      </Route>
    </Routes>
  );
}

export default App;
