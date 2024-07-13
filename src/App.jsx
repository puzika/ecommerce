import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Header from './routes/header/header';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Header></Header>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='shop/*' element={<Shop></Shop>}></Route>
        <Route path='auth' element={<Authentication></Authentication>}></Route>
        <Route path='checkout' element={<Checkout></Checkout>}></Route>
      </Route>
    </Routes>
  )
}
