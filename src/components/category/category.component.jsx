import { useNavigate, Link } from 'react-router-dom';
import { 
   CategoryStyles,
   CategoryDescription,
   CategoryHeading
} from './category.styles';

export default function Category({category}) {
   const navigate = useNavigate();

   function handleClick() {
      navigate(`/shop/${category.name}`);
   }

   return (
      <CategoryStyles onClick={handleClick} style={{backgroundImage: `url(${category.imageUrl})`}}>
         <CategoryDescription>
            <CategoryHeading>{category.name}</CategoryHeading>
            <Link href={`/shop/${category.name}`}>Shop now</Link>
         </CategoryDescription>
      </CategoryStyles>
   )
}