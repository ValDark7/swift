import "./brands-style.scss";

function Brands(props) {
  return (
    <div className="brand">
      <input type="checkbox" />
      <label htmlFor="">{props.name}</label>
    </div>
  );
}

export default Brands;
