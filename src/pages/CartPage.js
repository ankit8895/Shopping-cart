import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../component/Message';
import { addToCart } from '../redux/reducers/cartReducer';
import { cartActions } from '../redux/reducers/cartReducer';

const CartPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  useEffect(() => {
    if (id) {
      dispatch(addToCart({ id, qty }));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message variant={'danger'}>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ) : cartItems.reduce((acc, item) => acc + item.qty, 0) > 8 ? (
            <Message variant={'danger'}>
              Total quantities of Chocolates should not exceed 8 items
            </Message>
          ) : null}

          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>&#8377;{item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart({
                            id: item.product,
                            qty: Number(e.target.value),
                          })
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler()}
                    >
                      <i className='fa-solid fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                &#8377;
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item className='mx-auto'>
                <Button
                  type='button'
                  size='lg'
                  className={
                    cartItems.length === 0 ||
                    cartItems.reduce((acc, item) => acc + item.qty, 0) > 8
                      ? 'btn btn-dark disabled'
                      : 'btn btn-primary'
                  }
                  disabled={
                    cartItems.length === 0 ||
                    cartItems.reduce((acc, item) => acc + item.qty, 0) > 8
                  }
                >
                  Proceed To Checkouts
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartPage;
