import "./productcard.css";

function ProductCard({ name, price, inStock, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="product-image" />

      <h2 className="product-name">{name}</h2>
      <p className="price">₹ {price}</p>

      <span className={inStock ? "status in" : "status out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>

      <button disabled={!inStock}>
        {inStock ? "Add to Cart" : "Unavailable"}
      </button>
    </div>
  );
}

export default ProductCard;
