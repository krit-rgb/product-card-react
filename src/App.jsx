import ProductCard from "./components/productcard";
import headphones from "./assets/hp.jpg";
import sw from "./assets/w.jpg";
import "./App.css";

function App() {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      inStock: true,
      image: headphones
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 4999,
      inStock: false,
      image: sw
    }
  ];

  return (
    <div className="container">
      <h1 className="title">Product Showcase</h1>

      <div className="card-wrapper">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
