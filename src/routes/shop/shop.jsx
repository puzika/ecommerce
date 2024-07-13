import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import './shop.scss';

export default function Shop() {
   return (
      <Routes>
         <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
         <Route path=':category' element={<Category></Category>}></Route>
      </Routes>
   )
}