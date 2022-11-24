import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';




const Cart = (props) => {
  const cartItems= useSelector((state) => state.cart.items);
  // console.log(cartItems)
  const dispatch= useDispatch();
  const clearCartHandler=()=>{
    dispatch(cartActions.clearItemsFromCart())
  };
  const orderNowHandler =()=>{
    dispatch(cartActions.orderItemsFromCart())
  };
  

  const items = cartItems.map((item) =>
          
          <li>
            <CartItem
          title={item.name}
          id={item.id}
          price={item.price}
          quantity={item.quantity}
          total={item.totalPrice}
        />
          </li>
        ) 
  return (<>
  <br/>
  <Link to ='/' style={{textDecoration: 'none'}}><span style={{fontSize: "20px"}}>Continue Shopping</span></Link>
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items}
      </ul>
    </Card>
    <div style={{display: 'flex', textAlign: 'center', marginLeft: "40%" }}><Button variant="danger" onClick={clearCartHandler}>Clear Cart</Button>
    
    <Button variant="primary"  onClick={orderNowHandler} style={{marginLeft: '5%'}}> Order Now</Button></div>
    {/* <Button variant="danger" style={{marginLeft: "45%"}} onClick={clearCartHandler}>Clear Cart</Button>
    
    <Button variant="primary" style={{marginLeft: "45%"}} onClick={orderNowHandler}> Order Now</Button> */}
    <br/><br/>
    {/* <Link to ='/'><button style={{marginLeft: "45%"}}> Continue Shopping</button></Link> */}
    
    </>
  );
};

export default Cart;
