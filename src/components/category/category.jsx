import './category.scss';

export default function Category({category}) {
   return (
      <li className="category" style={{backgroundImage: `url(${category.imageUrl})`}}>
         <div className="category__description">
            <h3 className='category__heading'>{category.name}</h3>
            <a className='category__link' href="#">Shop now</a>
         </div>
      </li>
   )
}