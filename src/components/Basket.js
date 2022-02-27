import React, { useState } from 'react'
import {Offcanvas,Button, Badge, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { stateBasket } from '../store/action/basket.action';
import { AddToCart, ClearFromCart, DiscountQuantity, RemoveFromCart } from '../store/action/cart.action'

function Basket({ name, ...props }) {

    const basketState = useSelector((store) => store.basketState.status);
    const cartItems = useSelector((store) => store.cartState.cartItems);
    const totalPrice = useSelector((store) => store.cartState.total);
    
    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch(RemoveFromCart(id, cartItems));
    };
    const handleClose = () => {
		dispatch(stateBasket(false));
	};
    const clearCart = () => {
		dispatch(ClearFromCart());
	};

    const addQuantity = (item) => {
        const cartItem={
            id:item.id,
            name:item.Name,
            price:item.Price,
            quantity:1
        };
        dispatch(AddToCart(cartItem));
    }

    const discount = (item) => {
        if(item.quantity>1){
            dispatch(DiscountQuantity(item.id));
        }
        
    }
    

    return (
        <>
            <Offcanvas show={basketState} {...props}>
                <Offcanvas.Header>
                    <Offcanvas.Title>Sepetim</Offcanvas.Title>
                    <a
						onClick={() => {
							handleClose();
						}}
					>
						<i class="bi bi-x-circle"></i>
					</a>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup >
                        {cartItems && cartItems.map((item) => {
                            return (
                                <ListGroup.Item> 
                                    <Row >
                                        <Col>
                                            <div>
                                                <b>{item.name}</b>
                                            </div>
                                            <div>{(item.quantity*item.price).toFixed(2)}₺</div>
                                        </Col>
                                        <Col className='mb-2 mx-10'>
                                            <a onClick={()=> discount(item)}>
                                                <i class='bi bi-dash-square'></i>
                                            </a>
                                            <Badge bg='dark' pill>
                                                {item.quantity}
                                            </Badge>
                                            <a onClick={()=>addQuantity(item)}>
                                                <i class="bi bi-plus-square"></i>
                                            </a>
                                            <a onClick={() => removeItem(item.id)}
                                            >
                                                <i class="bi bi-x-square"></i>
                                            </a>
                                        </Col>

                                    </Row>
                                </ListGroup.Item>
                            );
                        })}
            
                        <ListGroup.Item as="li">Toplam Tutar = {totalPrice.toFixed(2)}</ListGroup.Item>
                        <ListGroup.Item>
                            <Button onClick={()=>{
                                clearCart()
                            }}
                            className='btn-btn-danger'
                            >
                                Sepet Temizle
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Example() {
	return (
		<>
			{['end'].map((placement, idx) => (
				<Basket key={idx} placement={placement} name={placement} />
			))}
		</>
	);
}

export default Example;