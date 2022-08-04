const Cart = ({
  cart,
  handleAddCart,
  handleRemoveCart,
  deliveryCharges,
  total,
}) => {
  return (
    <div className="col-md-8 offset-2">
      <h3 className="text text-info text-center">Cart</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.code}</td>
              <td>{product.quantity}</td>
              <td>{product.totalPrice?.toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddCart(product.code)}
                >
                  Add
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveCart(product.code)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="text text-info text-right">
        Delivery charges: ${deliveryCharges}
      </h4>
      <h3 className="text text-info text-right">
        Grand Total: ${(total + deliveryCharges).toFixed(2)}{" "}
      </h3>
    </div>
  );
};

export default Cart;
