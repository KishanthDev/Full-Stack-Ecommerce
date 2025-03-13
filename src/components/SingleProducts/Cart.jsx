import React, { useState } from "react";
import "./Cart.css"
import img from "../../assets/black_headphones.png"
const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="cart-page">
      <div className="container">
        <div className="row align-items-center p-4">
          {/* Left Side - Product Image */}
          <div className="col-md-5 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded cart-image"
            />
          </div>

          {/* Right Side - Product Details */}
          <div className="col-md-7">
            <h2 className="fw-bold my-3">{product.name}</h2>
            <h4 className="text-danger my-2">${product.price}</h4>
            <p className="text-muted">{product.description}</p>

            {/* Quantity Counter */}
            <div className="d-flex align-items-center my-4">
              <button className="btn btn-outline-primary qty-btn" onClick={decreaseQuantity}>
                <i className="fa fa-minus"></i>
              </button>
              <span className="mx-3 fs-5">{quantity}</span>
              <button className="btn btn-outline-primary qty-btn" onClick={increaseQuantity}>
                <i className="fa fa-plus"></i>
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="btn add-to-cart w-100">
              <i className="fa fa-shopping-cart me-2"></i> Add to Cart
            </button>

            <hr />
            {/* Category & Brand */}
            <div className="mt-4">
              <h5 className="my-2"><strong>Category:</strong> {product.category}</h5>
              <strong>Brand:</strong> {product.brand}
            </div>

            {/* Social Share Icons */}
            <div className="mt-3">
              <strong>Share:</strong>
              <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-tiktok"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example Product Data
const sampleProduct = {
  image: img, // Replace with actual image URL
  name: "Awesome Product",
  price: "49.99",
  description: "This is an amazing product that you will love!",
  category: "Electronics",
  brand: "TechBrand",
};

const Cart = () => {
  return <CartItem product={sampleProduct} />;
};

export default Cart;
