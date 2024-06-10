import { useState } from "react";

function Size({ sizes, onSizeSelect }) {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (index) => {
    setSelectedSize(index);
    onSizeSelect(sizes[index]);
  };

  return (
    <div className="sizes">
      {sizes.map((size, index) => (
        <button
          key={index}
          onClick={() => handleSizeSelect(index)}
          className={selectedSize === index ? "btn-size active" : "btn-size"}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default Size;
