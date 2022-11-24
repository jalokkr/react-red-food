import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>FoodOrderApp</h1>
      <nav>
        <ul>
          <li>
          <Link to='/cart'> <CartButton /></Link>
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
