import './categories.scss';
import Category from '../category/category';

export default function Categories({categories}) {
   return (
      <ul className="categories">
         {
            categories.map(c => (
               <Category key={c.id} category={c}></Category>
            ))
         }
      </ul>
   )
}