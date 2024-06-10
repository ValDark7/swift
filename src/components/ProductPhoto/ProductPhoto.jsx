function ProductPhoto({ onClick, src }) {
  return <img onClick={() => onClick(src)} src={src} alt="" />;
}

export default ProductPhoto;
