import ProductItem from './ProductItem';
import classes from './Products.module.css';


const dummy_products= [
  { id: 'f1', price: 120, title: 'Dahi', 
  image: 'https://hindi.cdn.zeenews.com/hindi/sites/default/files/2022/02/18/1051738-untitled.jpg', },
  { id: 'f2', price: 150, title: 'Curry',
  image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe-750x750.jpg', },
  { id: 'f3', price: 100, title: 'Paneer',
  image: 'https://thumbs.dreamstime.com/b/indian-food-saag-paneer-curry-dish-shot-selective-focus-43242207.jpg',}
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul style={{display: 'flex', width: '30%', height: '30%'}}> {dummy_products.map((product) => (
        <ProductItem
         key= {product.id}
         id= {product.id}
         title={product.title}
         price={product.price}
         image={product.image}
        // description='This is a first product - amazing!'
      />
      ))}
        {/* <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        /> */}
      </ul>
    </section>
  );
};

export default Products;
