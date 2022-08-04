import React, { useState } from "react";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import products from "./products.json";
const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddCart = (code) => {
    const newCart = [...cart];
    const cartIndex = cart.findIndex((item) => item.code === code);
    if (cartIndex > -1) {
      newCart[cartIndex].quantity++;
      // checking offer
      if (newCart[cartIndex].code == "R01") {
        if (
          newCart[cartIndex].quantity > 1 &&
          newCart[cartIndex].quantity < 3
        ) {
          newCart[cartIndex].totalPrice =
            newCart[cartIndex].price / 2 + newCart[cartIndex].totalPrice;
        } else {
          newCart[cartIndex].totalPrice =
            newCart[cartIndex].totalPrice + newCart[cartIndex].price;
        }
      } else {
        newCart[cartIndex].totalPrice =
          newCart[cartIndex].quantity * newCart[cartIndex].price;
      }
      setCart(newCart);
    } else {
      const newProduct = products.find((item) => item.code === code);
      newProduct.quantity = 1;
      newProduct.totalPrice = newProduct.price;
      newCart.push(newProduct);
      setCart(newCart);
    }
    // calculate total
    setTotal(newCart.reduce((acc, item) => item.totalPrice + acc, 0));
  };

  const handleRemoveCart = (code) => {
    const newCart = [...cart];
    const cartIndex = cart.findIndex((item) => item.code === code);
    if (newCart[cartIndex].quantity > 1) {
      newCart[cartIndex].quantity--;
      newCart[cartIndex].totalPrice =
        newCart[cartIndex].quantity * newCart[cartIndex].price;
    } else {
      newCart.splice(cartIndex, 1);
    }
    setCart(newCart);
    // calculate total
    setTotal(newCart.reduce((acc, item) => item.totalPrice + acc, 0));
  };

  // delivery fee
  const deliveryCharges = total > 90 ? 0 : total > 50 ? 2.95 : 4.95;

  return (
    <div className="container">
      <h1 className="text text-info">Plates Co.</h1>
      <p className="text text-primary text-center">
        Orders under $50, delivery costs $4.95. For orders under $90, delivery
        costs $2.95. Orders of $90 or more have free delivery.
      </p>
      <div className="row">
        {products.map((product) => (
          <Card key={product.id} {...product} handleAddCart={handleAddCart} />
        ))}
      </div>
      <hr />
      <div className="row">
        {cart.length > 0 ? (
          <Cart
            cart={cart}
            handleAddCart={handleAddCart}
            handleRemoveCart={handleRemoveCart}
            total={total}
            deliveryCharges={deliveryCharges}
          />
        ) : (
          <div className="col-md-8 offset-2">
            <h3 className="text text-info text-center">Cart</h3>
            <h4 className="text text-center">Your cart is empty.</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
