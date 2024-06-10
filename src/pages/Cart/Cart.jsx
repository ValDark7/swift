import { Helmet } from "react-helmet";
import React from "react";
import { Header, CartProduct } from "../../components/";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./cart-style.css";
import { clearCart } from "../../redux/actions/cart";

function Cart() {
  const cartLeft = React.useRef(null);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);

  const removeAllElements = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <Helmet>
        <title>Корзина</title>
        <body className="cart-page"></body>
      </Helmet>
      <Header
        logo="/img/logo-black.svg"
        bgColor="white"
        icons="black"
        login="white"
      />
      <div className="cart-container">
        <div className="cart">
          <div className="cart-title">
            <h2>Корзина</h2>
            <p>{cartItems.length} товара</p>
          </div>
          <div className="controllers-cart">
            <div onClick={removeAllElements} className="clear-cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
              <p>Удалить все</p>
              <span>{cartItems.length}</span>
            </div>
          </div>
          <hr className="line-cart" />
          <div className="cart-and-des">
            <div ref={cartLeft} id="cart-left" className="cart-left">
              {cartItems.length === 0 ? (
                <h2>
                  Ваша корзина пуста <br />
                  <NavLink to="/store">
                    <span>В магазин</span>
                  </NavLink>
                </h2>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <CartProduct item={item} />
                  ))}
                </div>
              )}
            </div>
            <div className="cart-discription">
              <div className="cart-discription-info">
                <h3>Сумма заказа</h3>
                <div className="quantity-product">
                  <p>
                    <span>{cartItems.length}</span> товара на сумму
                  </p>
                  {cartItems && <p>{totalPrice}₽</p>}
                </div>
                <div className="total-price">
                  <h4>Итого</h4>
                  <h4>{totalPrice}₽</h4>
                </div>
                <p className="delivery">Без учета возможной доставки</p>
                <div className="place-order">
                  <button
                    className="place-order-btn"
                    onClick={() => {
                      alert("Ваш заказ в обработке...");
                    }}
                  >
                    Перейти к оформлению
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
