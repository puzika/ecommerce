import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './routes/home/home';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
  )
}
