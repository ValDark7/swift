import "./style-hits.css";

function Hits({ title, subTitle, src, price }) {
  return (
    <div className="product-hits">
      <img src={src} alt={title} />
      <p>
        {title}
        <br />
        {subTitle}
      </p>
    </div>
  );
}

export default Hits;
