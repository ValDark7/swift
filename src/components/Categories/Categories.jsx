import "./categories-style.scss";

function Сategories(props) {
  return (
    <div className="category">
      <input type="checkbox" />
      <label htmlFor="">{props.name}</label>
    </div>
  );
}

export default Сategories;
