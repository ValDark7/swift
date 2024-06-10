import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItem } from "../../redux/actions/cart";

export default function CartProduct({ item }) {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(
      updateCartItem({
        ...item,
        qty: item.qty + 1,
      })
    );
  };

  const decrement = () => {
    if (item.qty > 1) {
      dispatch(
        updateCartItem({
          ...item,
          qty: item.qty - 1,
        })
      );
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id, item.size, item.color));
  };

  return (
    <div className="product-cart">
      <div>
        <img src={item.image} alt="" />
      </div>
      <div className="product-cart-info">
        <div>
          <h3>{item.name}</h3>
          <h3>Размер: {item.size}</h3>
          <h3 className="color-circle">
            Цвет:
            <div
              style={{
                marginLeft: `10px`,
                width: `20px`,
                height: `20px`,
                borderRadius: `50%`,
                backgroundColor: `${item.color}`,
              }}
            ></div>
          </h3>
          <div className="counter">
            <button
              onClick={decrement}
              className={item.qty ? "decrement" : "decrement non-active"}
            >
              -
            </button>
            <input type="number" max={100} min={1} value={item.qty} />
            <button onClick={increment} className="increment">
              +
            </button>
          </div>
        </div>
        <div className="cart-price">
          <h3>Цена: {item.price}</h3>
          <div onClick={handleRemove}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>{" "}
            <p>Удалить</p>
          </div>
        </div>
      </div>
    </div>
  );
}
