const Card = ({ name, description, code, price, handleAddCart }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <hr />
          <p className="card-text">{description}</p>
          <hr />
          <h6 className="card-text">Code: {code}</h6>
          <h6 className="card-text">Price: ${price}</h6>
          <button
            className="btn btn-primary"
            onClick={() => handleAddCart(code)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
