import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { setCategories } from '../../store/shop/shop.action';
// import { getCategoriesAndDocuments } from '../../utils/firebase';
import { fetchCategoriesAsync } from '../../store/shop/shop.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

export default function Shop() {
   const dispatch = useDispatch();

   useEffect(() => {
      // async function getCategories() {
      //    const categories = await getCategoriesAndDocuments();
      //    dispatch(setCategories(categories));
      // }

      // getCategories();
      dispatch(fetchCategoriesAsync());
   }, []);

   return (
      <Routes>
         <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
         <Route path=':category' element={<Category></Category>}></Route>
      </Routes>
   )
}