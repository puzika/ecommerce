import { useNavigate } from 'react-router-dom';
import './category.scss';

export default function Category({category}) {
   const navigate = useNavigate();

   function handleClick() {
      navigate(`/shop/${category.name}`);
   }

   return (
      <li onClick={handleClick} className="category" style={{backgroundImage: `url(${category.imageUrl})`}}>
         <div className="category__description">
            <h3 className='category__heading'>{category.name}</h3>
            <a className='category__link' href={`/shop/${category.name}`}>Shop now</a>
         </div>
      </li>
   )
}