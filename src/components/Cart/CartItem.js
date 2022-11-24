import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItem = (props) => {

  const dispatch= useDispatch();


  const { title, quantity, total, price, id } = props;

  const removeItemHandler=()=>{
    dispatch(cartActions.removeItemsFromCart(id))
  };


  const addItemHandler=()=>{
    dispatch(cartActions.addItemsToCart({
      id,
      title,
      price,
      total,
    }));
  };



  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        {/* <h4> {price}</h4> */}
        <div className={classes.price}>
          <span className={classes.itemprice}> {price}</span>
        </div>
        <div>
          <span>
            {total}
          </span>
        </div>
        {/* <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>({price.toFixed(2)}/item)</span>
        </div> */}
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div>
          <Button onClick={removeItemHandler} variant="danger">-</Button>
          <Button onClick={addItemHandler} variant="success">+</Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
