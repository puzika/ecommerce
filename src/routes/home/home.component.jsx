import Categories from "../../components/categories/categories.component";


function Home() {
   const categories = [
      {
         id: 1,
         name: 'hats',
         imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      },
      {
         id: 2,
         name: 'jackets',
         imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      },
      {
         id: 3,
         name: 'sneakers',
         imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      },
      {
         id: 4,
         name: 'womens',
         imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      },
      {
         id: 5,
         name: 'mens',
         imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      },
   ];

   return (
      <Categories categories={categories}></Categories>
   );
}

export default Home;