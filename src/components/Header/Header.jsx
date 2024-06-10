import StickyBox from "react-sticky-box";
import { NavLink } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/actions/cart";

import "./header-styles.scss";

const Header = (props) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearCart());
  };

  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <StickyBox>
      <header className={props.bgColor}>
        <NavLink to="/">
          <img src={props.logo} alt="" />
        </NavLink>
        <div className="info">
          <NavLink to="/">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={props.icons}
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
              Главная
            </p>
          </NavLink>
          <NavLink to="/store">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={props.icons}
              >
                <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
              </svg>
              Магазин
            </p>
          </NavLink>
          <NavLink to="/cart">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={props.icons}
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>
              Корзина
              {cartItems.length > 0 ? (
                <div className="cart-count">
                  <span className="">{cartItems.length}</span>
                </div>
              ) : (
                ""
              )}
            </p>
          </NavLink>
        </div>
        <div className="profile">
          {token && (
            <NavLink to="/Profile">
              <button>Профиль</button>
            </NavLink>
          )}
          <NavLink to={token ? "/" : "/login"}>
            {token ? (
              <button className="logout" onClick={handleLogout}>
                Выйти
              </button>
            ) : (
              <button>
                Войти
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="-100 -960 960 960"
                  width="24"
                  fill={props.login}
                >
                  <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
                </svg>
              </button>
            )}
          </NavLink>
        </div>
      </header>
    </StickyBox>
  );
};

Header.defaultProps = {
  logo: "/img/logo-white.svg",
  icons: "rgb(236, 236, 236)",
  bgColor: "",
  btnLogin: "",
};

export default Header;
