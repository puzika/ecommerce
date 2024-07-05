import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Header from './routes/header/header';
import Authentication from './routes/authentication/authentication';

function Shop() {
  return (
    <h1>I am the shop page</h1>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Header></Header>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='sign-in' element={<Authentication></Authentication>}></Route>
      </Route>
    </Routes>
  )
}
