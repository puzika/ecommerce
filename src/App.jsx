import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Header from './routes/header/header.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { useEffect } from "react"; 
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './store/user/user.action';
import { createUserWithDocFromAuth, onAuthStateChangedEvent } from "./utils/firebase";

export default function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedEvent(user => {
      if (user) createUserWithDocFromAuth(user);

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

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
