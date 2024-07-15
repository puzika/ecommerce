import { CategoriesStyles } from './categories.styles';
import Category from '../category/category.component';

export default function Categories({categories}) {
   return (
      <CategoriesStyles>
         {
            categories.map(c => (
               <Category key={c.id} category={c}></Category>
            ))
         }
      </CategoriesStyles>
   )
}