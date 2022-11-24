import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart = useSelector(state => state.ui.cartTog);

  return (
    <BrowserRouter>
    <Layout>
    
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
        
      </Routes>
      
      {/* <Products /> */}
     </Layout>
    </BrowserRouter>
    // <Layout>
    //   { showCart && <Cart />}
    //   <Products />
    // </Layout>
  );
}

export default App;
