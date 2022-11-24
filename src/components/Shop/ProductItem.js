import card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Container ,Card, Col, Button, Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Card, Button } from "react-bootstrap";





const ProductItem = (props) => {
  const { title, price, id, image } = props;
  const dispatch = useDispatch();

  const addToCartHandler = ()=> {
    dispatch(cartActions.addItemsToCart({
      id,
      title,
      price,
    }));
  };


  return (
    <div>
    {/* <li > */}

    {/* <Container fluid className="App py-2 overflow-hidden">
      
      <Row className="card-example d-flex flex-row flex-nowrap overflow-auto" style={{ display: "flex", flexWrap: "wrap" }}>
        <Card style={{ width: '100%' }}>
          <Card.Body style={{paddingLeft: '30%'}}>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image} style={{width: '40%', height:'50%'}}/>
            <Card.Text>
               INR {price}
            </Card.Text>
            <footer>
             <Button variant="primary" onClick={addToCartHandler}>Add to Cart</Button>
            </footer>
          </Card.Body>
        </Card>
      </Row>
    </Container> */}





    {/* <Card style={{ width: '30rem' }}>
  <Row className='no-gutters'>
  <Col md={5} lg={5}  >
  <Card.Img variant="top" src={image} />
  </Col>
  <Col>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {price}
    </Card.Text>
    <Button variant="primary" onClick={addToCartHandler}>Add to Cart</Button>
  </Card.Body>
  </Col>
  </Row>
</Card> */}
      {/* className={classes.item} */}
      <Card className='e-card-horizontal' style={{ width: '29rem', height: '20rem'}}>
      <Card.Body style={{textAlign: 'center',}}>
        <header>
          
        <Card.Title>{title}</Card.Title>
        <br/>
        <Card.Img variant="top" src={image} style={{width: '10rem', height: '10rem'}}/>
        <br/>
        <br/>

          
          <div>INR {price.toFixed(2)}</div>
        </header>
        
        <br/>
        <div>
          <Button variant="success" onClick={addToCartHandler} >Add to Cart</Button>
        </div>
        </Card.Body>
      </Card>  

    {/* </li> */}
    </div>
  );
};

export default ProductItem;

// className={classes.actions}