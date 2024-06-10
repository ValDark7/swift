import "./seasons-style.scss"

function Seasons(props) {
  return (
    <div className="season">
      <input type="checkbox" />
      <label htmlFor="">{props.name}</label>
    </div>
  );
}

export default Seasons;
