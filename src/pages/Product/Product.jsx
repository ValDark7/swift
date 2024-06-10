import { useState } from "react";
import { Header, Size, ProductPhoto } from "../../components/";
import { Helmet } from "react-helmet";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cart";
import Modal from "react-modal";
import Path from "../../components/path/path";

import "./style-product.css";

Modal.setAppElement("#root");

function Product() {
  const items = useSelector(({ sneakers }) => sneakers.items);

  const { id } = useParams();
  const product = items[id];

  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImages, setSelectedImages] = useState(
    product.productPhotos[product.colors[0]]
  );
  const [selectedImage, setSelectedImage] = useState(
    product.productPhotos[product.colors[0]][0]
  );
  const [selectInfo, setSelectInfo] = useState(false);

  const [modalMessege, setModalMessege] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      setModalMessege("Пожалуйста, выберите цвет и размер товара");
      setModalOpen(true);
      return;
    }
    // else if (!token) {
    //   setModalMessege("Пожалуйста, авторизуйтесь или пройдите регистрацию");
    //   setModalOpen(true);
    //   return;
    // }
    dispatch(
      addToCart({
        ...product,
        size: selectedSize,
        color: selectedColor,
        qty: quantity,
        image: selectedImage,
      })
    );
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeColor = (color) => {
    setSelectedColor(color);
    const newImages = product.productPhotos[color];
    setSelectedImages(newImages);
    setSelectedImage(newImages[0]);
  };

  const handleSelectInfo = () => {
    setSelectInfo(!selectInfo);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <Helmet>
        <title>{items.name}</title>
        <body className="product-page"></body>
      </Helmet>
      <Header />
      <NavLink to={"/store"}>
        <button className="btn-back">
          <svg
            id="Layer_2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f2f2f2"
          >
            <path d="m21 11h-15.586l5.293-5.293a1 1 0 1 0 -1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414l-5.293-5.293h15.586a1 1 0 0 0 0-2z"></path>
          </svg>
        </button>
      </NavLink>
      <div className="main-photo">
        <img src={selectedImage} alt="largeImage" />
      </div>
      <div className="photo">
        {selectedImages.map((src, index) => (
          <ProductPhoto key={index} onClick={handleImageClick} src={src} />
        ))}
      </div>
      <div className="info-product">
        <p className="head">{product.name}</p>
        <p className="under-info">Кроссовки</p>
        <p className="info-sizes">Доступные размеры</p>
        <Size
          sizes={[38, 39, 40, 41, 42, 43, 44, 45]}
          onSizeSelect={handleSizeSelect}
        />
        <hr className="line-size" />
        <p className="info-sizes">Доступные цвета</p>
        <div className="product-color">
          {product.colors.map((color, index) => (
            <div className="border-color" key={color}>
              <div
                style={{ backgroundColor: color }}
                onClick={() => changeColor(color)}
                className={selectedColor === color ? `${color} active` : ""}
              ></div>
            </div>
          ))}
        </div>
        <hr className="line-size" />
        <p className="price">{product.price} ₽</p>
        <button className="in-cart" onClick={handleAddToCart}>
          Добавить в корзину <br /> {selectedSize && `Размер: ${selectedSize}`}{" "}
          <br />{" "}
        </button>
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Warning"
          className="modalWindow"
          overlayClassName="overlayModal"
        >
          <Path />
          <p>{modalMessege}</p>
          <button onClick={closeModal}>Закрыть</button>
        </Modal>
      </div>
      <div className="information-product">
        <div className="wrapper-info">
          <li onClick={handleSelectInfo} className={selectInfo ? "active" : ""}>
            О товаре
          </li>
          <li onClick={handleSelectInfo} className={selectInfo ? "active" : ""}>
            О бренде
          </li>
        </div>
        <div className="main-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          est error! Amet, velit est fugit, similique, corrupti excepturi
          voluptate quidem reprehenderit voluptas voluptates rerum! Adipisci
          consequuntur odit impedit voluptate nulla.
        </div>
      </div>
    </>
  );
}

export default Product;
