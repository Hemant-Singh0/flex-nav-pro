import "./Products.css";

const Products = () => {
  return (
    <div className="product-container">
      <div className="product-card">
        <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe" alt="Product" />
        <h3>Coffee mug</h3>
        <p>A stylish ceramic cup ideal for coffee, tea, or everyday use.</p>
      </div>

      <div className="product-card">
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8" alt="Product" />
        <h3>Modern working desk with laptop</h3>
        <p>A sleek and powerful laptop suitable for work, study, and multitasking.</p>
      </div>

      <div className="product-card">
        <img src="https://images.unsplash.com/photo-1519741497674-611481863552" alt="Product" />
        <h3>Photo</h3>
        <p>A romantic couple photo with flowers and a happy moment captured.</p>
      </div>

    </div>
  );
};

export default Products;
